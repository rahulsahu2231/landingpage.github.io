import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
const LandingPageExploreList = React.lazy(
  () => import("pages/LandingPageExploreList"),
);
const LandingPageJoinIn = React.lazy(() => import("pages/LandingPageJoinIn"));
const LandingPageSignInOne = React.lazy(
  () => import("pages/LandingPageSignInOne"),
);
const LandingPageSignIn = React.lazy(() => import("pages/LandingPageSignIn"));
const AddnewOne = React.lazy(() => import("pages/AddnewOne"));
const Addnew = React.lazy(() => import("pages/Addnew"));
const ProjectRoutes = () => {
  return (
    <React.Suspense fallback={<>Loading...</>}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/addnew" element={<Addnew />} />
          <Route path="/addnewone" element={<AddnewOne />} />
          <Route path="/landingpagesignin" element={<LandingPageSignIn />} />
          <Route
            path="/landingpagesigninone"
            element={<LandingPageSignInOne />}
          />
          <Route path="/landingpagejoinin" element={<LandingPageJoinIn />} />
          <Route
            path="/landingpageexplorelist"
            element={<LandingPageExploreList />}
          />
        </Routes>
      </Router>
    </React.Suspense>
  );
};
export default ProjectRoutes;
