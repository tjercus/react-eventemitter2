import React from "react";

export default class EchoComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: [],
    };
  }

  componentDidMount() {
    this.props.eventbus.onAny(obj => {
      let messagesClone = this.state.messages.slice(0);
      messagesClone.push(obj);
      this.setState({ messages: messagesClone });
    });
  }

  render() {
    return (
      <section className="panel">
        <div className="panel-body">
          <ul>
            {this.state.messages.map(function(obj, i) {
              return <li key={i}>{obj}</li>;
            })}
          </ul>
        </div>
      </section>
    );
  }
}
