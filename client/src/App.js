import './App.css';

const App = () => {
  return <div className='app'>
    <div>
      <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" fill="currentColor" className="bi bi-person" viewBox="0 0 16 16">
        <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4Zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10Z" />
      </svg>
      <p className='text-center'>Matches: <strong>0</strong></p>
    </div>
    <div>
      <p className='h1 text-center font-weight-bold mb-3'>Matches Left: 25</p>
      <div>
        <div className='btn btn-round btn-info px-5 mx-2'><strong className='h3'>1</strong></div>
        <div className='btn btn-round btn-danger px-5 mx-2'><strong className='h3'>2</strong></div>
        <div className='btn btn-round btn-warning px-5 mx-2'><strong className='h3'>3</strong></div>
      </div>
    </div>
    <div>
      <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" fill="currentColor" className="bi bi-laptop" viewBox="0 0 16 16">
        <path d="M13.5 3a.5.5 0 0 1 .5.5V11H2V3.5a.5.5 0 0 1 .5-.5h11zm-11-1A1.5 1.5 0 0 0 1 3.5V12h14V3.5A1.5 1.5 0 0 0 13.5 2h-11zM0 12.5h16a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 12.5z" />
      </svg>
      <p className='text-center'>Matches: <strong>0</strong></p>
    </div>
  </div>
}

export default App;
