import React from "react";
import ReactDOM from "react-dom";
import { CSSTransition } from "react-transition-group";

import "./SideDrawers.css";

const SideDrawers = (props) => {
  const asideContent = (
    <aside className="side-drawer" onClick={props.onClick}>
      {props.children}
    </aside>
  );
  const content = (
    <CSSTransition
      in={props.show}
      timeout={200}
      classNames="slide-in-left"
      mountOnEnter
      unmountOnExit
      children={asideContent}
    ></CSSTransition>
  );

  return ReactDOM.createPortal(content, document.getElementById("drawer-hook"));
};

export default SideDrawers;
