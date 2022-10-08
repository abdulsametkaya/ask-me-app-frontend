import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import UserTemplate from "../templates/user-template";
import NotFoundPage from "../pages/common/not-found-page";
import HomePage from "../pages/home-page";

const CustomRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route
            index
            element={
              <UserTemplate>
                <HomePage />
              </UserTemplate>
            }
          />

          <Route
            path="*"
            element={
              <UserTemplate>
                <NotFoundPage />
              </UserTemplate>
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default CustomRoutes;
