import { Route, RouterProvider, createBrowserRouter, createRoutesFromChildren } from 'react-router-dom';
import './App.css';
import "./Pages/css/settings.css";
import Login from './Pages/Login';
import Layout from './Layout/Layout';
import Dashboard from './Pages/Dashboard';
import Student from './Pages/Student';
import Parent from './Pages/Parent';
import Teacher from './Pages/Teacher';
import Account from './Pages/Account';
import Subject from './Pages/Subject';
import Setting from './Pages/Setting';

const router = createBrowserRouter(createRoutesFromChildren(
  <>
    <Route path='/login' index element={<Login />} />
    <Route element={<Layout/>}>
      <Route path='/' index element={<Dashboard/>}/>
      <Route path='/student' element={<Student/>}/>
      <Route path='/parent' element={<Parent/>}/>
      <Route path='/teachers' element={<Teacher/>}/>
      <Route path='/account' element={<Account/>}/>
      <Route path='/subjects' element={<Subject/>}/>
      <Route path='/setting' element={<Setting/>}/>
    </Route>
  </>
))

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
