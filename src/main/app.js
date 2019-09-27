import React from "react";

import Sidebar from "../common/Sidebar";
import Panel from "../common/Panel";
import Messages from "../msg/Messages";

import "../common/dependencies";

export default props => (

      <div className="wrapper">
        <Sidebar></Sidebar>
        <Panel></Panel>
        <Messages></Messages>
      </div>
);
