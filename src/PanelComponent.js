import React from "react";

export default class EchoComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isVisible: false };
    this.props.eventbus.on("MENU_CLICK_EVT", menuItemName => {
      if (menuItemName === this.props.from) {
        this.setState({ isVisible: true });
      } else {
        this.setState({ isVisible: false });
      }
    });
  }

  render() {
    let panelClassName = this.state.isVisible ? "panel visible" : "panel hidden";
    return (
      <section className={panelClassName}>
        <header className="panel-header">
          {this.props.name}
        </header>
        <div className="panel-body">
          {"This panel listens to menu item: " + this.props.from}
        </div>
      </section>
    );
  }
}
