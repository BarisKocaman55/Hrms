import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navi from '../src/layouts/Navi.jsx';
import Footer from '../src/layouts/Footer.jsx';
import MainPage from '../src/layouts/MainPage.jsx';
import LoginPage from '../src/layouts/LoginPage.jsx';
import RegisterPage from '../src/layouts/RegisterPage.jsx';
import EmployerPage from '../src/pages/Employer/EmployerPage.jsx';
import EmployerJobPosting from '../src/pages/Employer/EmployerJobPosting.jsx';

function App() {
  return (
    <Router>
      <div className="App">
        <Navi />
        <Route path="/mainpage" component={MainPage} />
        <Route exact path="/employerlogin" component={LoginPage} />
        <Route exact path="/employerRegister" component={RegisterPage} />
        <Route exact path="/employerPage" component={EmployerPage} />
        <Route exact path="/employerJobPostsing" component={EmployerJobPosting} />
      </div>
    </Router >
  );
}


export default App;
