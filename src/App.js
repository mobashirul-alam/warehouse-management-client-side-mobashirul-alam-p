import './App.css';
import Home from './Pages/Home/Home/Home'
import Header from './Pages/Shared/Header/Header';
import Footer from './Pages/Shared/Footer/Footer'
import { Route, Routes } from 'react-router-dom';
import Login from './Pages/Login/Login/Login';
import Register from './Pages/Login/Register/Register';
import NotFound from './Pages/Shared/NotFound/NotFound';
import Blogs from './Pages/Blogs/Blogs';
import RequireAuth from './Pages/Login/RequireAuth/RequireAuth';
import ManageItems from './Pages/ProductManagement/ManageItems/ManageItems';
import AddItem from './Pages/ProductManagement/AddItem/AddItem';
import MyItems from './Pages/ProductManagement/MyItems/MyItems';
import { ToastContainer } from 'react-toastify';
import SingleProductDetail from './Pages/ProductManagement/SingleProductDetail/SingleProductDetail';


function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
        <Route path='/inventory/:id' element={
          <RequireAuth>
            <SingleProductDetail></SingleProductDetail>
          </RequireAuth>
        }></Route>
        <Route path='/manageItems' element={
          <RequireAuth>
            <ManageItems></ManageItems>
          </RequireAuth>
        }></Route>
        <Route path='/addItem' element={
          <RequireAuth>
            <AddItem></AddItem>
          </RequireAuth>
        }></Route>
        <Route path='/myItems' element={
          <RequireAuth>
            <MyItems></MyItems>
          </RequireAuth>
        }></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
      <ToastContainer></ToastContainer>
    </div>
  );
}

export default App;
