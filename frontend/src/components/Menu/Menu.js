import "./Menu.scss";
import { useHistory } from "react-router-dom";
import { Button } from "@material-ui/core";
import React from "react";

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
