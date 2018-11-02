import React from "react";
import Grid from "@material-ui/core/Grid";

const SelectButton = () => {
  return (
    <Grid className="buttons">
      <h2>Are you a:</h2>
      <div>
        <button className="driver">Driver</button>
      </div>
      <div>
        <button className="passenger">Passenger</button>
      </div>
    </Grid>
  );
};
