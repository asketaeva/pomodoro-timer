import logo from './logo.svg';
import './App.css';

function App() {
    return (
        <div className='App'>
            <header className='App-header'>
                <img src={logo} alt='logo' />
                <div>
                    <button className='button'>Start</button>
                </div>
                <a
                    className='App-link'
                    href='https://reactjs.org'
                    target='_blank'
                    rel='noopener noreferrer'
                >
                    <svg
                        width='85'
                        height='56'
                        viewBox='0 0 85 56'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'
                    >
                        <path
                            d='M21.25 28L42.5 42L63.75 28'
                            stroke='#FFFEFE'
                            stroke-width='2'
                        />
                        <path
                            d='M21.25 14L42.5 28L63.75 14'
                            stroke='#FFFEFE'
                            stroke-width='2'
                        />
                    </svg>
                </a>
            </header>
            <div className='card-background'>
                <div className='cards'>f</div>
                <div className='cards'>f</div>
                <div className='cards'>f</div>
                <div className='cards'>ff</div>
            </div>
        </div>
    );
}

export default App;
