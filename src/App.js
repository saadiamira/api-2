import logo from './logo.svg';
import './App.css';
import UserList from './components/UserList';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import UserDetail from './components/UserDetail';
function App() {
  return (
    <div className="App">
   <Router>
    <Routes>
      <Route path="/"element={<UserList/>}/>
      <Route path="/id"element={<UserDetail/>}/>
    </Routes>
   </Router>
    </div>
  );
}

export default App;
