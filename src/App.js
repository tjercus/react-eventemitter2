import React, { useEffect } from "react";
import "./App.css";

import EventEmitter from "eventemitter4";
import EchoComponent from "./EchoComponent";
import MenuComponent from "./MenuComponent";
import PanelComponent from "./PanelComponent";

const App = () => {
  const eventbus = new EventEmitter({ wildcard: true });

  useEffect(() => {
    console.log("App.useEffect() previously 'componentDidMount'");
    eventbus.emit("ECHO_CMD", "echoing works!");
  });

  return (
    <div>
      <header>
        <h1>React with EventManager example</h1>
      </header>
      <article id="container">
        <aside className="aside-nav">
          <MenuComponent eventbus={eventbus} />
        </aside>
        <main>
          <EchoComponent eventbus={eventbus} />
          <PanelComponent
            eventbus={eventbus}
            name="panel-one"
            from="menu-item-one"
          />
          <PanelComponent
            eventbus={eventbus}
            name="panel-two"
            from="menu-item-two"
          />
          <PanelComponent
            eventbus={eventbus}
            name="panel-three"
            from="menu-item-three"
          />
        </main>
      </article>
    </div>
  );
};

export default App;
