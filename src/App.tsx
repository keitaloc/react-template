import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HomePage } from "pages/HomePage";
import { PATH } from "helpers/constant";
import { AboutUsPage } from "pages/AboutUsPage";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={PATH.home} element={<HomePage/>} />
        <Route path={PATH.aboutUs} element={<AboutUsPage/>} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
