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

  logo: {
    width: '230px',
    height: '50px'

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
    height: "30px",
    border: "none",
    margin: "5px",
    width: "300px"
  },

  select: {
    height: "30px",
    border: "none",
    margin: "5px",
    width: "255px",
    outline: "1px inset #fff",
    outlineOffset: "-1px"

  },

  locationButton: {
    fontSize: "30px",
    color: "white",
    cursor: "pointer",
    paddingTop: "7px",
    paddingLeft: "5px"
  
  }
});

export default styles;
