import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import UserTemplate from "../templates/user-template";
import NotFoundPage from "../pages/common/not-found-page";
import HomePage from "../pages/home-page";
import UserPage from "../pages/user-page";

const CustomRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          exact
          path="/"
          element={
            <UserTemplate>
              <HomePage />
            </UserTemplate>
          }
        ></Route>
        <Route
          exact
          path="/users/:userId"
          element={
            <UserTemplate>
              <UserPage />
            </UserTemplate>
          }
        ></Route>
        <Route
          path="*"
          element={
            <UserTemplate>
              <NotFoundPage />
            </UserTemplate>
          }
        ></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default CustomRoutes;
