import { Route, Routes } from 'react-router-dom';
import About from './Pages/About/About';
import Blogs from './Pages/Blogs/Blogs';
import Checkout from './Pages/Checkout/Checkout';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import Notfound from './Pages/Notfound/Notfound';
import Singup from './Pages/Singup/Singup';
import RequireAuth from './RequireAuth/RequireAuth';
import Footer from './SheredPage/Footer/Footer';
import Nav from './SheredPage/Navigation/Nav';

function App() {
  return (
    <div>
      <Nav/>
      <Routes>
        <Route path="/" element = {<Home/>}/>
        <Route path="/home" element = {<Home/>}/>
         <Route path="/checkout" element = {
         <RequireAuth>
            <Checkout/>
         </RequireAuth>
        }/>
        <Route path="/registration" element = {<Singup/>}/>
        <Route path="/login" element = {<Login/>}/>
        <Route path="/blog" element = {<Blogs/>}/>
        <Route path="/about" element = {<About/>}/>
        <Route path="*" element = {<Notfound/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
