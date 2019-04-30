import React from "react";

const MenuComponent = ({ eventbus }) => {
  const onButtonClick = evt =>
    eventbus.emit("MENU_CLICK_EVT", evt.target.value);

  return (
    <ul className="aside-menu">
      <li className="aside-submenu">
        <button onClick={onButtonClick} value="menu-item-one">
          {"menu item 1"}
        </button>
      </li>
      <li className="aside-submenu">
        <button onClick={onButtonClick} value="menu-item-two">
          {"menu item 2"}
        </button>
      </li>
      <li className="aside-submenu">
        <button onClick={onButtonClick} value="menu-item-three">
          {"menu item 3"}
        </button>
      </li>
    </ul>
  );
};

export default MenuComponent;
