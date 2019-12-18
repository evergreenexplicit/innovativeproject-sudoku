import "./Menu.scss";
import React from "react";
import { Button } from "@material-ui/core";
import { useHistory } from "react-router";

const Menu = () => {
  const history = useHistory();

  const redirect = path => {
    history.push(path);
  };

  return (
    <div className="Menu">
      <div className="card">
        <img src="logo.png" alt="logo_image" />
        <Button
          size="large"
          variant="outlined"
          onClick={() => redirect("/game")}
        >
          Play
        </Button>
        <Button
          disabled
          size="large"
          variant="outlined"
          onClick={() => redirect("/settings")}
        >
          Stats
        </Button>
        <Button
          disabled
          size="large"
          variant="outlined"
          onClick={() => redirect("/settings")}
        >
          Settings
        </Button>
      </div>
    </div>
  );
};

export default Menu;
