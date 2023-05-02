import React, { useState, useEffect } from 'react';

function Home() {
  const [showComponent2, setShowComponent2] = useState(false);

  return (
    <>
      <Component1 setShowComponent2={setShowComponent2} />
      {showComponent2 && <Component2 />}
    </>
  );
}

function Component1({ setShowComponent2 }) {
  useEffect(() => {
    // code to run after initial render of Component1
    // ...
    setShowComponent2(true);
  }, []);

  return <div>Component1</div>;
}

function Component2() {
  return <div>Component2</div>;
}