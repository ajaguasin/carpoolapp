const styles = theme => ({
  profileCard: {
    backgroundColor: "#4ccbb0",
    position: "fixed",
    bottom: "0px",
    left: "0px",
    width: "25vw",
    margin: "0 auto"
  },
  text: {
    fontSize: "25px",
    marginTop: "30px",
    marginLeft: "15px"
  },
  pending: {
    border: "2px solid gray",
    borderRadius: "8px",
    height: "30px",
    margin: "20px auto",
    fontSize: "18px",
    backgroundColor: "#31455A",
    color: "white"
  },
  pendingText: {
    display: "flex",
    justifyContent: "center"
  },
  confirmationButton: {
    height: "50px",
    display: "flex",
    fontSize: "30px",
    justifyContent: "space-around",
    margin: "20px auto"
  }
});

export default styles;
