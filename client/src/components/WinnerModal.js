import './Modal.css'

const WinnerModal = ({ winner, closeWinnerModal }) => {
    return <div className="modeModal">
        <div className='modeBorder'>
            <p className='h2'>🎉Congratulations🎉</p>
            <div className='strip my-2' />
            <p className='h3 text-center my-3'>The winner is {winner}</p>
            <div className="text-center">
                <button onClick={closeWinnerModal} className='btn btn-default btn-round btn-info px-5'>Back to the game</button>
            </div>
        </div>
    </div>
}

export default WinnerModal