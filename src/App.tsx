import Card from './components/card';
import logo from './assets/icons/logo.svg';
import Modal from './components/modal';
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
        <Modal>
          <Card />
        </Modal>
      </div>
    </div>
  )
}

export default App
