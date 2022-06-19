import React, { useEffect, useRef } from 'react';

const useClick = onClick => {
  const element = useRef();

  // and 주의사항 React 16.8v 부터는 Hook 을 조건문, 반복문, 중첩함수 내에서 호출할 수 없습니다.
  // https://ko.reactjs.org/docs/hooks-rules.html
  

  // componentDidMount...etc  
  useEffect(() => {
    if(typeof onClick !== "function") return;
    
    if(element.current) {
      console.log('addEventListener');
      element.current.addEventListener('click', onClick);
    }

    // componentWillUnmount 
    return () => { 
      if(element.current) {
        console.log('removeEventListener');
        element.current.removeEventListener('click', onClick);
      }
    }
  }, [onClick]);
  return element;
}

function UseClick() {
  const inputTest = useRef();

  //Cannot read properties of undefined (reading 'focus')
  //왜 current가 undefined가 되는거지? mount가 너무 빨리되서 라는군..
  // setTimeout(() => {
  //   inputTest.current.focus();
  // }, 10000);

  // is working... 질문에 대한 답이 필요하다 찾으면 작성하자
  const onClick = () => {
    inputTest.current.focus();
  };

  const sayHello = () => console.log('sayHello');
  const title = useClick(sayHello);

  return (
    <>
      <hr />
      <div ref={title}>useClick's Title</div>
      <input ref={inputTest} placeholder="gg" />
      <button onClick={onClick} >clickMeToFocusInput</button>
      <hr />
    </>
  );
}

export default UseClick;