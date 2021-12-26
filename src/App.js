import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import CustomerDetails from './Components/CustomerDetails/CustomerDetails';
import DashBoard from './Components/DashBoard/DashBoard';
import DashBoardHome from './Components/DashBoardHome/DashBoardHome';
import Login from './Components/Login/Login';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import SignUP from './Components/SignUP/SignUP';
import AuthProvider from './Context/AuthProvider';




function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login></Login>}/>
          <Route path="/signup" element={<SignUP></SignUP>}/>
          <Route path="/dashboard" element={<PrivateRoute><DashBoard></DashBoard></PrivateRoute> }/>
          <Route path="/" element={<PrivateRoute><DashBoard></DashBoard></PrivateRoute>}>
            <Route path="/home" element={<DashBoardHome/>}/>
            <Route path="/details" element={<CustomerDetails/>}/>
          </Route>
        </Routes>
        </BrowserRouter>
      </AuthProvider>
      
    </div>
  );
}

export default App;
