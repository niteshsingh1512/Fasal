
import {Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home';
import PredictionForm from './Pages/Prediction';
import PredictionResults from './Pages/PredictionResult'
import Login from './Pages/LoginPage';
import Schemes from './Pages/Schemes';
import CropRecommendation from './Pages/CropPrediction';
import Footer from './Components/Footer'

function App() {
  return (
   <>
   <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/prediction' element={<PredictionForm/>} />
      <Route path='/results' element={<PredictionResults/>} />
      <Route path='/login' element={<Login/>} />
      <Route path='/schemes' element={<Schemes/>}/>
      <Route path='/crop-predict' element={<CropRecommendation/>} />
   </Routes>
   
   </>
  );
}

export default App;
