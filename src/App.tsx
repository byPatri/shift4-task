import Card from './components/card';
import logo from './assets/logo.svg';

import './App.scss'

function App() {

  return (
    <div className='app'>
      <header>
        <img 
          src={logo}
          className="header_logo"
          alt="logo"
        />
      </header>
      <div className='content'>
        <Card />
      </div>
    </div>
  )
}

export default App
