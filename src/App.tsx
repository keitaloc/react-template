import { BrowserRouter, Route, Routes } from "react-router-dom";

import { PATH } from "helpers/constant";

import { AboutUsPage } from "pages/AboutUsPage";
import { HomePage } from "pages/HomePage";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
         path={PATH.home} 
         element={<HomePage />} />
        <Route path={PATH.aboutUs} element={<AboutUsPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
