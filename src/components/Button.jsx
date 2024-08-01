import React from "react";

const Button = ({ setAngles, setRotet, angles, rotete }) => {
  return (
    <>
      <div>
        <button onClick={() => setAngles(angles + 0.05)}>Arm bottom +</button>
        <button onClick={() => setAngles(angles - 0.05)}>Arm bottom -</button>
      </div>
      <br />
      <div>
        <button onClick={() => setRotet(rotete + 0.01)}>Rotete +</button>
        <button onClick={() => setRotet(rotete - 0.01)}>rotete bottom -</button>
      </div>
    </>
  );
};

export default Button;
