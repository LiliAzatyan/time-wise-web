import { createUseStyles } from "react-jss";

const useStyles = createUseStyles(
  {
    container: {
      fontFamily: "interactive",
      backgroundColor: "#dee3e9",
      height: "100vh",
      display: "flex",
      justifyContent: "space-between",
    },
    buttonGoogleLogin: {
      marginBottom: "15px",
      width: "100%",
    },
    loginButton: {
      width: "100%",
    },

    left: {
      overflowY: "scroll",
      width: "70%",
      textAlign: "start",
      justifyContent: "space-between",
    },
    heading: {
      color: "black",
      marginTop: "100px",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      textAlign: "center",
      flexDirection: "column",
      gap: "40px",
    },
    colorOrange: {
      color: "#FF5937",
    },
    colorWhite: {
      color: "black",
    },
    text: {
      color: "black",
      marginLeft: "60%",
      fontSize: "25px",
    },
    right: {
      backgroundColor: "white",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "column",
      width: "30%",
    },
    contentContainer: {
      flexDirection: "column",
      display: "flex",
      alignItems: "center",
      width: "80%",
    },
    center: {
      display: "flex",
      justifyContent: "center",
      flexDirection: "column",
      textAlign: "center",
    },
    loginContainer: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      padding: "24px",
      borderRadius: "8px",
      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
      textAlign: "center",
      width: "40%",
    },
    title: {
      fontSize: "24px",
      marginBottom: "16px",
    },
    btnGroup: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      gap: "10px",
    },
    topPictureGroup: {
      marginTop: "45px",
      width: "100%",
      display: "grid",
      gridTemplateColumns: "repeat(6, 140px)",
      gridTemplateRows: "repeat(4, 1fr)",
      justifyContent: "center",
    },
    img1: {
      gridColumn: "1 / span 4",
      gridRow: "1 / span 2",
    },
    img2: {
      gridColumn: "4 / span 6",
      gridRow: "1 / span 2",
    },
    img3: {
      gridRow: "3 / span 5",
      gridColumn: "1 / span 3",
    },
    img4: {
      gridRow: "3 / span 4",
      gridColumn: "4 / span 5",
    },
    img5: {
      gridRow: "4 / span 5",
      gridColumn: "4 / span 5",
    },
    img6: {
      gridRow: "3 / span 5",
      gridColumn: "5 / span 7",
    },
    img7: {
      marginRight: "500px",
      marginTop: "-300px",
    },
    img8: {
      marginLeft: "600px",
      marginTop: "-350px",
    },
    lastDiv: {
      display: "flex",
    },
    text2: {
      color: "black",
      marginRight: "60%",
      fontSize: "25px",
      fontFamily: "Helvetica Neue",
    },
    one: {
      margin: "30px",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "column",
    },
  },
  { name: "login" }
);

export default useStyles;
