import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Register from './components/Register';
import List from './components/List';
import Attendance from './components/Attendance';


function App() {

  return (
    <Router>
        <Route>
            <Route path='/' element={<Register />} />
            <Route path='/list' element={<List />} />
            <Route path='/attendance' element={<Attendance />} />
        </Route>
        
    </Router>
  );
}

export default App;