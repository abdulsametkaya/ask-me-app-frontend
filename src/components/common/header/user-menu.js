import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

import "./user-menu.scss";

const UserMenu = () => {
  return (
    <div>
      <Button variant="white" as={Link} to="/auth?type=login">
        Signin
      </Button>
      <Button variant="primary" as={Link} to="/auth?type=register">
        Register
      </Button>
    </div>
  );
};

export default UserMenu;
