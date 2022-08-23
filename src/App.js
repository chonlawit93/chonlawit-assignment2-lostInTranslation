
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './views/Login';
import Translation from './views/Translation';
import Profile from './views/Profile';
import Navbar from './components/navbar/Navbar';
import { createGlobalStyle } from 'styled-components';
const GlobalStyle = createGlobalStyle`
  body{
    margin: 0;
    font-family: 'Sanchez', serif;
  }
 
`


function App() {
  return (
    <BrowserRouter>
    
        <div className="App">
        <GlobalStyle/>
          <Navbar />
          <Routes>
            <Route path="/" element={ <Login /> } />
            <Route path="/translation" element={ <Translation /> } />
            <Route path="/profile" element={ <Profile /> } />
          </Routes>
        </div>
     
    </BrowserRouter>
  );
}

export default App;
