
import Navbar from './component/Navbar';

import Footer from './component/Footer';
import Table from './component/Table';
import Edit from './component/Edit';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Router, Route, Link, Routes} from 'react-router-dom';


function App() {
  return(
    <>
    <Navbar title="TodoList App"/>
    
    <Routes>
    <Route path='/' element={<Table/>}/>
    <Route path="user/:ids/edit" element={<Edit/>}/>
    
    
    </Routes>
    <Footer title="Developer manoj nepali"/>
    </>
  )
}

export default App;
