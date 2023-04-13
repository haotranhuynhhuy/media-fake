import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import "./App.scss";
import { checkAuth } from "./features/auth/AuthSlice";
import PrivateRoute from "./utils/PrivateRoute";
import Dashboard from "./pages/Home/Dashboard";
import Authentication from "./pages/Authentication";

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
        <Route path="/login" element={<Authentication />} />
        <Route element={<PrivateRoute />}>
          <Route element={<Dashboard />} path="/" />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
