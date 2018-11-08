const styles = theme => ({
  buttons: {
    textAlign: "center",
    height: "100vh",
    width: "100vw",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-around",
    margin: "auto 0"
  },
  selectButtons: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    width: "50%"
  },
  title: {
    color: "#E3F2FD",
    textShadow: "0 5px 0 rgba(0,0,0,0.4)",
    fontSize: "100px",
    textTransform: "uppercase",
    fontWeight: 900
  },
  driver: {
    background: "#29eecb",
    width: 300,
    height: 50,
    cursor: "pointer",
    borderRadius: "10px 10px 10px 10px",
    boxShadow: "0px 0px 13px 1px rgba(0,0,0,0.73)",
    border: "none",
    textTransform: "uppercase",
    fontSize: "25px",
    marginTop: 300
  },
  passenger: {
    background: "#189ad3",
    width: 300,
    height: 50,
    cursor: "pointer",
    borderRadius: "10px 10px 10px 10px",
    boxShadow: "0px 0px 13px 1px rgba(0,0,0,0.73)",
    border: "none",
    textTransform: "uppercase",
    fontSize: "25px",
    marginTop: 300
  }
});

export default styles;
