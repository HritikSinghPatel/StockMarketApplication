import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css';
import Login from './components/Login';
import Register from './components/Register';
import Home from './components/Home';
import Dashboard from "./components/Dashboard";
import { AuthProvider } from "./contxt/AuthContext";
import Auth from "./components/Auth";

function App() {
  // const chartData = {
  //   labels: ['Category 1', 'Category 2', 'Category 3', 'Category 4'],
  //   values: [10, 25, 15, 30],
  // };

  return (
    // <div >
    //   <Home></Home>
    //   {/* <StockHeader></StockHeader> */}
    //   {/* <Login></Login> */}
    // </div>
    <AuthProvider>
    <Router>
      <Routes>
        <Route path="/" element={<Home />}/>
        {/* <Route index element={} /> */}
        {/* <Route path="blogs" element={<Blogs />} /> */}
        {/* <Route path="contact" element={<Contact />} /> */}
        <Route path="/login" element={<Login/>} />
        <Route path="/register" element={<Register/>} />
        <Route element={<Auth/>}>
        <Route path="/dashboard" element={<Dashboard/>} />
        </Route>
      </Routes>
    </Router>
    </AuthProvider>
  );
}

export default App;



