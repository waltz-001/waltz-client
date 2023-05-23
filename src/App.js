import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import HomePage from "./pages/HomePage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignIn from "./components/SignIn/SignIn";
import Register from "./components/Register/Register";
import Success from "./components/Success/Success";
import Merchandise from "./components/Merchandise/Merchandise";
import DetailedEvents from "./components/DetailedEvents/DetailedEvents";
import ViewEvent from "./components/ViewEvent/ViewEvent";
import { useState, useEffect } from "react";
import Loading from "./components/Loading/Loading";
import PasswordChange from "./components/SignIn/PasswordChange";
import UserContext from "./utils/UserContext";
import Alumni from "./components/Alumni/Alumni";
import GalleryPage from "./pages/GalleryPage";
import Team from "./components/Team/Team";

import Terms from "./pages/TermsNServices"

function App() {
  const [showLoading, setShowLoading] = useState(false);

  useEffect(() => {
    setShowLoading(true);
    setTimeout(() => {
      setShowLoading(false);
    }, 5000);
  }, []);

  const [user, setUser] = useState({
    token: "",
    isAlumni: false,
    events: [],
  });

  return (
    <div className="App">
      {showLoading ? (
        <Loading />
      ) : (
        <UserContext.Provider value={{ user: user, setUser: setUser }}>
          <BrowserRouter>
            <Navbar />
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/signin" element={<SignIn />} />
              <Route path="/register" element={<Register />} />
              <Route path="/detailedEvents" element={<DetailedEvents />} />
              <Route
                path="/register/:id/verify/:tokenId"
                element={<Success />}
              />
              <Route
                path="/reset-password/:id/update/:tokenId"
                element={<PasswordChange />}
              />
              <Route path="/merchandise" element={<Merchandise />} />
              <Route path="/alumni" element={<Alumni />} />
              <Route path="/detailedEvents" element={<DetailedEvents />} />
                <Route path="/detailedEvents/viewEvent/:title" element = {<ViewEvent />}/>
              <Route path="/gallery" element={<GalleryPage />} />
              <Route path="/team" element={<Team />} />
            </Routes>
            <Footer />
          </BrowserRouter>
        </UserContext.Provider>
      )}
    </div>
  );
}

export default App;
