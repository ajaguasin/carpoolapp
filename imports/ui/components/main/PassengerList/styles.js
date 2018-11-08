import { faAlignCenter } from "@fortawesome/free-solid-svg-icons";

const styles = theme => ({
  list: {
    overflow: "scroll",
    width: "90%",
    height: "35%",
    margin: "0 auto",
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center"
  },
  button: {
    width: "40%",
    height: "20%",
    background: "#29eecb"
  },
  animation: {
    fontSize: "50px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 100
  },
  quote: {
    fontSize: "25px",
    color: "white"
  }
});
export default styles;
