import "./Results.scss";
import React from "react";
import { Button } from "@material-ui/core";
import { useHistory } from "react-router";

const Results = () => {
  const history = useHistory();

  return (
    <div className="Results">
      <div className="card">
        <h1>GAME OVER</h1>
        <Button
          onClick={() => history.push("/menu")}
          className="mt-1"
          size="large"
          variant="outlined"
        >
          Back
        </Button>
      </div>
    </div>
  );
};

export default Results;
