import logo from './logo.svg';
import './App.css';
import {
  Link,
  Route,
  BrowserRouter as Router,
  Switch
} from 'react-router-dom'
import Home from './pages/Home.tsx'

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Home}>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
