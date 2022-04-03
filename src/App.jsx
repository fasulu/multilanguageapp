import {Suspense} from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/nav/Header";
import PageNotFound from './pages/PageNotFound'
import Home from './pages/Home';
import Profile from "./pages/Profile";

const App = () => {
  return (
    // <Suspense fallback={(<div>Loading...</div>)}>
    <Suspense fallback={null}>

      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="home" element={<Home />} />
          <Route path="profile" element={<Profile />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>

    </Suspense>
  );
}

export default App;
