const styles = theme => ({
  list: {
    overflow: "scroll",
    width: "100%",
    height: "35%",
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center"
  },
  button: {
    width: "20%",
    height: "10%",
    background: "#29eecb"
  },
  reloadButton: {
    cursor: "pointer",
    borderRadius: "50px 50px",
    boxShadow: "0px 0px 13px 1px rgba(0,0,0,0.73)",
    border: "none",
    textTransform: "uppercase",
    fontSize: "12px",
    width: 100,
    background: "#29eecb",
    height: 50
  },
  animation: {
    fontSize: "50px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 50
  },
  quote: {
    fontSize: "25px",
    color: "white",
    textAlign: "center"
  },
  button: {
    background: "#29eecb",
    width: 75,
    height: 50,
    cursor: "pointer",
    borderRadius: "50px 50px",
    boxShadow: "0px 0px 13px 1px rgba(0,0,0,0.73)",
    border: "none",
    textTransform: "uppercase",
    fontSize: "12px"
  },
  loading: {
    height: 100
  },
  tripComplete: {
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "center",
    height: "30%"
  }
});
export default styles;
