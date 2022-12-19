import React, { useState } from 'react';

function Clicker() {
  const [count, setCount] = useState(0);

  return (
    <div className="clicker">
      <button onClick={() => setCount(count + 1)}>Click me</button>
      <div className="whole-note">
        <span className="count">{count}</span>
      </div>
    </div>
  );
}

export default Clicker;