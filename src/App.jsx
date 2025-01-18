import {Routes, Route } from 'react-router-dom';
import HomeLayout from './Layouts/HomeLayout';
import Home from './Components/Home';
function App() {
  return (
    <>
    <Routes>
  <Route path='/' element={<HomeLayout/>} >
  <Route index element={<Home/>} />
  </Route>

 </Routes>
    </>
 
  );
}

export default App;
