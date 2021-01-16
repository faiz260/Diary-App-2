import React, { FC, lazy, Suspense } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../rootReducer";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";

const Auth = lazy(() => import("../features/auth/Auth"));
const Home = lazy(() => import("../features/home/Home"));

const App: FC = () => {
  const isLoggedIn = useSelector(
    (state: RootState) => state.auth.isAuthenticated
  );

  return (
    <Router>
      <Switch>
        <Route path="/">
          <Suspense
            fallback={
              <Loader
                type="ThreeDots"
                color="#00BFFF"
                height={100}
                width={100}
                timeout={3000} //3 secs
                className="Loader"
              />
            }
          >
            {isLoggedIn ? <Home /> : <Auth />}
          </Suspense>
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
