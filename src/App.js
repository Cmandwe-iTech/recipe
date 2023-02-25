
import { Routes, Route } from 'react-router-dom';
import './App.css';
import LogIn from './components/login';
import Signup from './components/signup';
import Home from './components/home';
import RecipeContextProvider from './components/contextApi/recipeContextProvider';
import Create from './components/create';
function App() {
  return (
    <RecipeContextProvider>
<Routes>
  <Route path="/" element={<LogIn/>}/>
  <Route path='/signup' element={<Signup/>}/>
  <Route path='/home' element={<Home/>}/>
  <Route path='/create' element={<Create/>}/>
</Routes>
    </RecipeContextProvider>
    
  
  )}

export default App;
