import React, { forwardRef, useImperativeHandle, useState } from "react";

const Sidebar = forwardRef((props, ref) => {
  const [display, setDisplay] = useState(false);

  useImperativeHandle(ref, () => {
    return { setDisplay };
  });
  return display ? (
    <div className="sidebar">
      <span className="material-icons close-btn" onClick={() => setDisplay(false)}>
        close
      </span>
      sidebar
    </div>
  ) : null;
});

export default Sidebar;
