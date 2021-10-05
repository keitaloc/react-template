import { BrowserRouter, Route, Switch } from "react-router-dom";
import { HomePage } from "pages/HomePage";
import { PATH } from "helpers/constant";
import { AboutUsPage } from "pages/AboutUsPage";

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={PATH.home} component={HomePage} />
        <Route exact path={PATH.aboutUs} component={AboutUsPage} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
