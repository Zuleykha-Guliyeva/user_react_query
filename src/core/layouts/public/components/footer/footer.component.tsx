// import { useFooterStyles } from "./footer.style";

const FooterComponent = () => {
  //   const classes = useFooterStyles();
  const date = new Date().getFullYear();
  return (
    <div className={"classes.footer"}>
      <div className="row m-0">
        <div className="col-8">{"copyright ©" + { date } + "rights"}.</div>
        <div className="col-4 text-right">organisation</div>
      </div>
    </div>
  );
};

export default FooterComponent;
