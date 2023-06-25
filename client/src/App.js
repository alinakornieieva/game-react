import { useEffect, useState, useRef } from 'react';
import ModeModal from './components/ModeModal';
import WinnerModal from './components/WinnerModal';
import axios from 'axios';
import './App.css';

const App = () => {
  const [current, setCurrent] = useState()
  const [modeModal, setModeModal] = useState(true)
  const [firstAi, setFirstAi] = useState(false)
  const [userScore, setUserScore] = useState(0)
  const [aiScore, setAiScore] = useState(0)
  const [score, setScore] = useState(25)
  const didMount = useRef(false);
  const aiMove = () => {
    const prompt = `The user has ${aiScore} matches. Should the user take 1, 2 or 3 matches from the pile so that the user has an even amount of matches? Give me only the number.`
    axios.post("http://localhost:5000/request", { prompt })
      .then(({ data }) => {
        const points = +(data.length > 1 ? [...data.match(/[0-9]+/)] : data)
        setAiScore((prev) => prev + points)
        setScore((prev) => prev - points)
        setCurrent('user')
      })
      .catch((err) => {
        console.error(err);
      })
  }
  useEffect(() => {
    if (didMount.current) {
      aiMove()
    } else {
      didMount.current = true;
    }
  }, [firstAi === true]);
  const recieveMode = (mode) => {
    setCurrent(mode)
    setModeModal(false)
    if (mode === 'ai') {
      setFirstAi(true)
    }
  }
  const closeWinnerModal = () => {
    setScore(25)
    setUserScore(0)
    setAiScore(0)
    setModeModal(true)
  }
  const changeMatchesAmount = (e) => {
    setUserScore((prev) => prev + +e.target.id)
    setScore((prev) => prev - +e.target.id)
    setCurrent('ai')
    aiMove()
  }
  if (modeModal) {
    return <ModeModal recieveMode={recieveMode} />
  }
  if (score === 0) {
    if (aiScore % 2 === 0) return <WinnerModal winner='AI' closeWinnerModal={closeWinnerModal} />
    if (userScore % 2 === 0) return <WinnerModal winner='YOU' closeWinnerModal={closeWinnerModal} />
  }
  return <div className='app'>
    <div>
      <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" fill={current === 'user' ? '#ffcc00' : 'currentColor'} className="bi bi-person" viewBox="0 0 16 16">
        <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4Zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10Z" />
      </svg>
      <p className='text-center'>Matches: <strong>{userScore}</strong></p>
    </div>
    <div>
      <p className='h1 text-center font-weight-bold mb-3'>Matches Left: {score}</p>
      <div>
        <button onClick={changeMatchesAmount} id='1' className='btn btn-round btn-info px-5 mx-2'><strong className='h3' id='1'>1</strong></button>
        <button disabled={score === 1} onClick={changeMatchesAmount} id='2' className='btn btn-round btn-danger px-5 mx-2'><strong className='h3' id='2'>2</strong></button>
        <button disabled={score === 1 || score === 2} onClick={changeMatchesAmount} id='3' className='btn btn-round btn-warning px-5 mx-2'><strong className='h3' id='3'>3</strong></button>
      </div>
    </div>
    <div>
      <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" fill={current === 'ai' ? '#ffcc00' : 'currentColor'} className="bi bi-laptop" viewBox="0 0 16 16">
        <path d="M13.5 3a.5.5 0 0 1 .5.5V11H2V3.5a.5.5 0 0 1 .5-.5h11zm-11-1A1.5 1.5 0 0 0 1 3.5V12h14V3.5A1.5 1.5 0 0 0 13.5 2h-11zM0 12.5h16a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 12.5z" />
      </svg>
      <p className='text-center'>Matches: <strong>{aiScore}</strong></p>
    </div>
  </div>
}

export default App;
