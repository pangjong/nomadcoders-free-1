import React, { useEffect, useState } from 'react';

// useEffect의 기초
// useEffect는 Class형 컴포넌트의 cDU 등을 일부 대체 한다고 생각하면됨
// lifeCycle도 알고있어야하고 .. etc
// - useEffect는 기본적으로 componentDidMount, componentDidUpdate, componentWillUnmount, getDerivedStateFromProps의 역할을 모두 합니다.
// https://killu.tistory.com/44

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