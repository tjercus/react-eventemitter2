import React, { Component } from "react";
import "./App.css";

import EventEmitter from "eventemitter4";
import EchoComponent from "./EchoComponent";
import MenuComponent from "./MenuComponent";
import PanelComponent from "./PanelComponent";

class App extends Component {

  constructor(props) {
    console.log("1. constructor");
    super(props);
    this.eventbus = new EventEmitter({wildcard: true});
  }

  componentDidMount() {
    console.log("3. componentDidMount");
    this.eventbus.emit("ECHO_CMD", "echoing works!");
  }

  render() {
    console.log("2. render");
    return (
      <div>
        <header>
          <h1>React with EventManager example</h1>
        </header>
        <article id="container">
          <aside className="aside-nav">
            <MenuComponent eventbus={this.eventbus} />
          </aside>
          <main>
            <EchoComponent eventbus={this.eventbus} />
            <PanelComponent eventbus={this.eventbus} name="panel-one" from="menu-item-one" />
            <PanelComponent eventbus={this.eventbus} name="panel-two" from="menu-item-two" />
            <PanelComponent eventbus={this.eventbus} name="panel-three" from="menu-item-three" />
          </main>
        </article>
      </div>
    )
  }
};

export default App;
