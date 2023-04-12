import { useEffect, useState } from "react";
import LoginPage from "./pages/LoginPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { checkAuth } from "./features/auth/AuthSlice";
import PrivateRoute from "./utils/PrivateRoute";
import Dashboard from "./pages/Dashboard";

function App() {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    dispatch(checkAuth());
    setLoading(false);
  }, [dispatch]);

  if (loading) return <div>Loading...</div>;

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route element={<PrivateRoute />}>
          <Route element={<Dashboard />} path="/" />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
