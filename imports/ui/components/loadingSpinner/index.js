import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import CircularProgress from "@material-ui/core/CircularProgress";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

import styles from "./styles";

function CircularIndeterminate(props) {
  const { classes } = props;
  return (
    <Grid justify="center" className={classes.loadingContainer}>
      <Grid item xs={6} className={classes.progress}>
        <CircularProgress color="secondary" size={50} />
        <Typography className={classes.loadingText}>
          Please wait a moment...
        </Typography>
      </Grid>
    </Grid>
  );
}

CircularIndeterminate.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(CircularIndeterminate);
