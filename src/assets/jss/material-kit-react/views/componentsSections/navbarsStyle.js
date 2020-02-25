import { createStyles } from "@material-ui/core/styles";

const navbarsStyle = theme =>
  createStyles({
    toolbar: {
      background: "#121211"
    },

    menuButton: {
      marginRight: theme.spacing(2),
      [theme.breakpoints.up("lg")]: {
        display: "none"
      }
    },
    titleBox: {
      flexGrow: 3
    },

    ioledLogo: {
      [theme.breakpoints.up("xs")]: {
        width: "130px",
        height: "auto",
        marginLeft: "0.6em"
      },
      [theme.breakpoints.up("sm")]: {
        width: "140px",
        height: "auto",
        marginLeft: "1.4em"
      },
      [theme.breakpoints.up("md")]: {
        width: "150px",
        height: "auto",
        marginLeft: "2em"
      },
      [theme.breakpoints.up("lg")]: {
        width: "160px",
        height: "auto",
        marginLeft: "2.5em"
      }
    },

    menuBox: {
      flexGrow: 1,
      [theme.breakpoints.down("md")]: {
        display: "none"
      }
    },

    listContainer: {
      listStyleType: "none",
      display: "flex"
    },

    listElement: {
      margin: "0 1em"
    },

    listLink: {
      color: "#FFFFFF",
      cursor: "pointer",
      "&:hover": {
        color: "#FFFFFF"
      }
    },

    list: {
      width: 250
    },
    fullList: {
      width: "auto"
    },

    drawer: {
      height: "100%",
      color: "white",
      background: "#121211"
    }
  });

export default navbarsStyle;
