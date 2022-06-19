import React, { Component, useState } from 'react';

const useInput = (initValue = "", validator) => {
  const [value, setValue] = useState(initValue);

  const onChange = (e) => {
    const {
      target: { value }
    } = e;

    const willUpdate = typeof validator === "function" ? validator(value) : true;

    if(willUpdate) {
      setValue(value);
    }
  }
  return {value, onChange};
};

function UseInput() {
  const maxLen = (value) => value.length < 10;
  const name = useInput("Mr. ", maxLen);

  return (
    <div>
      <div>useInput is {name.value}</div>
      {/* <input onChange={name.onChange} placeholder='Name' value={name.value} /> */}
      {/* 스프레드 연산자를 사용하여 .. 아래로 바꿀 수 있다. 틀만 만들어놓으면 찍어다 쓰면 되네 */}
      <input placeholder='Name' {...name} />
    </div>
  );
}

export default UseInput;