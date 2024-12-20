import { Navigate, Route, Routes } from "react-router-dom";
import { ToastContainer, Slide } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Home from "./pages/Home";
import NavBar from "./components/navbar/NavBar";
import "./styles/styles.scss";
import LoveTokens from "./pages/LoveArchive";
import SingleLoveToken from "./pages/SingleLoveToken";
import Register from "./pages/Register";
import Profile from "./pages/Profile";
import Auth from "./pages/Auth";
import Logout from "./pages/Logout";
import Login from "./pages/Login";
import AppreciationAtelier from "./pages/AppreciationAtelier";
import { useLoggedInState } from "./utils/useLoggedInState";
import MyAffectionList from "./pages/MyAffectionList";
import { useTheme } from "./contexts/ThemeContext";
import { GoogleOAuthProvider } from "@react-oauth/google";
import DeleteAccount from "./pages/DeleteAccount";
import Footer from "./components/shared/Footer";
import TopBar from "./components/topbar/TopBar";

function App() {
  const loggedUser = useLoggedInState();
  const { theme } = useTheme();
  const googleClientId = process.env.REACT_APP_GOOGLE_CLIENT_ID;

  return <div className={`App theme${theme === 'light' ? '--light' : '--dark'}`}>
    <ToastContainer autoClose={4000} position="top-center" transition={Slide} />
    <TopBar />
    <NavBar loggedUser={loggedUser} />
    <main>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/archive" element={<LoveTokens loggedUser={loggedUser} />} />
        <Route path="/archive/:tokenNumber" element={<SingleLoveToken loggedUser={loggedUser} />} />
        <Route path="/register" element={loggedUser ? <Navigate to="/profile" /> : <Register />} />
        <Route path="/login" element={loggedUser ? <Navigate to="/profile" /> : <GoogleOAuthProvider clientId={googleClientId!}><Login /></GoogleOAuthProvider>} />
        <Route path="/logout" element={loggedUser ? <Logout /> : <Navigate to="/profile" />} />
        <Route path="/authenticate" element={<Auth />} />
        <Route path="/profile" element={loggedUser ? <Profile /> : <Navigate to="/login" />} />
        <Route path="/atelier" element={loggedUser ? <AppreciationAtelier /> : <Navigate to="/login" />} />
        <Route path="/my-affection-list" element={loggedUser ? <MyAffectionList /> : <Navigate to="/login" />} />
        <Route path="/delete" element={loggedUser ? <DeleteAccount /> : <Navigate to="/login" />} />
      </Routes>
    </main>
    <Footer />
  </div>;
}

export default App;