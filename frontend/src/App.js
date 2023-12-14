import './App.css';
import HomePage from './components/HomePage/HomePage'
import SigninPage from './components/SigninPage/SigninPage';
import { BrowserRouter,Route, Routes } from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
    <div className="App">

     <Routes>
      <Route path='/' element={<HomePage/>}/>
      <Route path="/signin" element={<SigninPage/>}/>
     </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
