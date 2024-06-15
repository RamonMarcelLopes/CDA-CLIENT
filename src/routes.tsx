import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/Home';
import Login from './pages/Login';
import RequireAuth from './RequireAuth';

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route
          path="/home"
          element={
            <RequireAuth>
              <HomePage />
            </RequireAuth>
          }
        ></Route>
        <Route path="/" element={<Login />}></Route>
        <Route path="*" element={<Login />}></Route>
      </Routes>
    </Router>
  );
};

export default AppRoutes;
