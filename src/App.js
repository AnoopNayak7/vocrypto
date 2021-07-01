import './App.css';
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import Body from './components/Body/Body'
import {BrowserRouter as Router} from 'react-router-dom'
import {Switch} from 'react-router'

function App() {
  return (
    <Router>
        <Switch>
            <div>
                <Navbar />
                <Body />
                <Footer />
            </div>
        </Switch>
    </Router>
  );
}

export default App;
