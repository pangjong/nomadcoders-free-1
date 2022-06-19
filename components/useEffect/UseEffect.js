import React, { useEffect, useState } from 'react';

// useEffect의 기초
function UseEffect() {
  const [item, setItem] = useState(0);
  const [menu, setMenu] = useState(0);

  const sayHello = () => console.log('hello');

  //function useEffect(effect: EffectCallback, deps?: DependencyList):
  useEffect(() => {
    sayHello();
  }, [item]);

  const increaseItem = () => {
    setItem(item + 1);
  }

  const increaseMenu = () => {
    setMenu(menu + 1);
  }

  return (
    <>
      <button onClick={increaseItem}>{item}</button>
      <button onClick={increaseMenu}>{menu}</button>
    </>
  );
}

export default UseEffect;