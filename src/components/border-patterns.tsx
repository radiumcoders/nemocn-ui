import React from 'react'

function BorderPatterns() {
  return (
    <>
      <div
        className="fixed top-0 left-0 z-0 h-full w-10 bg-[image:repeating-linear-gradient(315deg,_var(--pattern-fg)_0,_var(--pattern-fg)_1px,_transparent_0,_transparent_50%)] bg-[size:10px_10px] bg-fixed"
        style={{ borderRight: "1px solid var(--pattern-fg)" }}
      ></div>

      {/* Right border pattern - absolutely positioned */}
      <div
        className="fixed top-0 right-0 z-0 h-full w-10 bg-[image:repeating-linear-gradient(315deg,_var(--pattern-fg)_0,_var(--pattern-fg)_1px,_transparent_0,_transparent_50%)] bg-[size:10px_10px] bg-fixed"
        style={{ borderLeft: "1px solid var(--pattern-fg)" }}
      ></div>
    </>
  );
}

export default BorderPatterns