import React from 'react'
import ReactDOM from 'react-dom'
import {} from 'react-transition-group'

import './SideDrawers.css'

const SideDrawers = props => {
  const content = <aside className="side-drawer">{props.children}</aside>;

  return ReactDOM.createPortal(content, document.getElementById('drawer-hook'));
}


export default SideDrawers