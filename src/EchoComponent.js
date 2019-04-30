import React, { useState, useEffect } from "react";

const EchoComponent = ({ eventbus }) => {
  const [messages, setMessages] = useState( [] );

  useEffect(() => {
    const handleEvent = obj => {
      let messagesClone = messages.slice(0);
      messagesClone.push(obj);
      setMessages( messagesClone);
    };
    eventbus.onAny(handleEvent);
    return () => {
      console.log("EchoComponent.useEffect() unmounting...");
    };
  });

  return (
    <section className="panel">
      <div className="panel-body">
        <ul>
          {messages.map((obj, i) => {
            return <li key={i}>{obj}</li>;
          })}
        </ul>
      </div>
    </section>
  );
};

export default EchoComponent;
