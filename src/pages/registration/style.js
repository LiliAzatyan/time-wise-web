import { createUseStyles } from "react-jss";

const useStyles = createUseStyles(
  {
    container: {
      backgroundColor: "#2F2726",
      height: "100vh",
      display: "flex",
      justifyContent: "space-between",
    },
    left: {
      overflowY: "scroll",
      width: "70%",
      textAlign: "center",
      justifyContent: "space-between",
    },
    heading: {
      color: "white",
      marginTop: "100px",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      textAlign: "center",
      flexDirection: "column",
      gap: "40px",
    },
    colorOrange: {
      color: "orange",
    },
    colorWhite: {
      color: "white",
    },
    text: {
      color: "white",
      marginLeft: "60%",
      fontSize: "25px",
    },
    right: {
      backgroundColor: "#F0E9F3 ",
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
    loginContainer: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      background: "red",
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
      color: "white",
      marginRight: "60%",
      fontSize: "25px",
      fontFamily:  "Helvetica Neue",
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