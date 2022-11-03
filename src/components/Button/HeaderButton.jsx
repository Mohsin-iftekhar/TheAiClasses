import React from "react";

function HeaderButton(props) {
  return (
    <button
      type="button"
      className="bg-face-red text-white rounded-md px-7 py-3 uppercase"
    >
      {props.children}
    </button>
  );
}

export default HeaderButton;
