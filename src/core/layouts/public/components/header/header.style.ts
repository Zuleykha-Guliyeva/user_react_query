import { createUseStyles } from "react-jss";

const styles = {
  header: {
    position: "fixed",
    width: "100%",
    // height: "5%",
    display:"flex",
    alignItems:"center",
    backgroundColor: "#edeef1",
    top: 0,
    zIndex: 100,
    left: 0,
  },
};

export const useHeaderStyles = createUseStyles(styles);
