const styles = theme => ({
  root: {
    width: "500px",
    height: "500px",
    display: "flex",
    flexDiretion: "column",
    alignItem: "center",
    justifyContent: "center",
    backgroundColor: "pink"
  },
  Form: {
    width: "500px",
    height: "500px",
    display: "flex",
    flexDiretion: "column",
    padding: "0",
    border: "none"
  },

  Username: {
    height: "130px",
    fontSize: "30px",
    backgroundColor: "yellow",
    display: "flex",
    justifyContent: "center",
    alignItem: "center"
  },

  Password: {
    height: "130px",
    fontSize: "30px",
    backgroundColor: "green",

    justifyContent: "center",
    alignItem: "center"
  },
  submitButton: {
    height: "130px",
    fontSize: "30px",
    backgroundColor: "red",

    justifyContent: "center",
    alignItem: "center"
  }
});

export default styles;
