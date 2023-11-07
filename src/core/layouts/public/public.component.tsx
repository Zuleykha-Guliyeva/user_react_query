import { Outlet } from "react-router-dom";
import HeaderComponent from "./components/header/header.component";
import FooterComponent from "./components/footer/footer.component";
import { usePublicLayoutStyles } from "./public.style";
import classNames from "classnames";

const PublicComponent = () => {
  const classes = usePublicLayoutStyles();
  const publicClasses = classNames({
    [classes.content]: true,
  });

  return (
    <div className={classes.public}>
      <HeaderComponent />
      <div className={publicClasses}>
        <Outlet />
      </div>
      <FooterComponent />
    </div>
  );
};

export default PublicComponent;
