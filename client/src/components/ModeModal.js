import './Modal.css'

const ModeModal = ({ recieveMode }) => {
    return <div className="modeModal">
        <div className='modeBorder'>
            <p className='h3'>Choose who will be the first...</p>
            <div className='text-center'>
                <button onClick={() => recieveMode('user')}
                    className='btn btn-round btn-info px-5 m-3'>ME</button>
                <button onClick={() => recieveMode('ai')}
                    className='btn btn-round btn-info px-5'>AI</button>
            </div>
        </div>
    </div>
}

export default ModeModal