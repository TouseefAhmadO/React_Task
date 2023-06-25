import 'bootstrap/dist/css/bootstrap.min.css';
import style from './style.module.scss'
import Header from './components/header';
import { BrowserRouter as Router } from "react-router-dom";
import SideBar from './components/sidebar';
import Routes from './Routes/index';


const App = () => {

  return (
    <Router>
      <div className={style.mainContainer}>
        <Header />
        <div className='d-flex'>
          <SideBar />
          <div className={style.routeStyle}>
            <Routes />
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
