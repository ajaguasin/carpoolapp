const styles = theme => ({
  headerInputCntr: {
    display: "flex",
    width: "300px",
    flexDirection: "column"
  },

  currentLocation: {
    display: "flex"
  },

  icon: {
    margin: theme.spacing.unit * 2,
  },

  headerWrapper: {
    backgroundColor: "#31455A",
    position: "absolute",
    top: "0",
    width: "100vw",
    height: "100px",
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center"
  },

  input: {
    height: "25px",
    border: "none",
    margin: "5px"
  }
});

export default styles;
