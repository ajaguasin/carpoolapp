const styles = theme => ({
  headerInputCntr: {
    display: "flex",
    width: "300px",
    flexDirection: "column",
    margin: "10px auto"
  },

  currentLocation: {
    display: "flex"
  },

  icon: {
    margin: theme.spacing.unit * 2,
  },

  logo: {
    width: '230px',
    height: '50px',
    margin: '30px auto'

  },

  headerWrapper: {
    backgroundColor: "#31455A",
    position: "absolute",
    top: "0",
    width: "25vw",
    height: "100vh",
    display: "flex",
    flexDirection: 'column',
    position: 'absolute',
    left: '0'
  },

  input: {
    height: "30px",
    border: "none",
    margin: "5px",
    width: "300px",
    cursor: "pointer"
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
    fontSize: "20px",
    color: "white",
    cursor: "pointer",
    margin: '10px'
  
  },

  menuDiv: {
    position: 'absolute',
    bottom: '20px',
    margin: '30px'
  }
});

export default styles;
