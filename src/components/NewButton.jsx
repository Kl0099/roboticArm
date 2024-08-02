import React, { useRef, useEffect } from "react";

const NewButton = ({ onClick, title }) => {
  return (
    <div>
      <button onClick={onClick}>{title}</button>
    </div>
  );
};

export default NewButton;
