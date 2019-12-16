import "./Results.scss";
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@material-ui/core";

const Results = () => {
  return (
    <div className="Results">
      <div className="card">
        <h1>Results</h1>
        <Link to="/menu">
          <h2>#1</h2>
          <h2>Time:</h2>
          <Button className="mt-5" size="large" variant="outlined">
            Back
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Results;
