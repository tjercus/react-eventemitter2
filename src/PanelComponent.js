import React, { useEffect, useState } from "react";

const PanelComponent = ({ eventbus, from, name }) => {
  const [visible, setVisible] = useState({ visible: false });

  useEffect(() => {
    const handleEvent = menuItemName => {
      if (menuItemName === from) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };
    eventbus.on("MENU_CLICK_EVT", handleEvent);
    return () => {
      eventbus.removeListener("MENU_CLICK_EVT", handleEvent);
    };
  });

  let panelClassName = visible ? "panel visible" : "panel hidden";
  return (
    <section className={panelClassName}>
      <header className="panel-header">{name}</header>
      <div className="panel-body">
        {"This panel listens to menu item: " + from}
      </div>
    </section>
  );
};

export default PanelComponent;
