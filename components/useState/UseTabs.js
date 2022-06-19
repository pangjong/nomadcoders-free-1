import React, { Component, useState } from 'react';


const content = [
  {
    tab: "Section 1 ",
    content: "I'm the content of Section 1",
  },
  {
    tab: "Section 2 ",
    content: "I'm the content of Section 2",
  },
];

const useTabs = (initialTab, allTabs) => {
  if(!allTabs || !Array.isArray(allTabs)) return;
  const [currentIndex, setCurrentIndex] = useState(initialTab);

  // changeItem = setCurrentIndex() 함수를 통해 state를 변경시킴으로서
  // 리액트가 re-render 된다는 기본개념으로 tab을 1, 2 를 전환시킬 수 있다를 배우자
  return {
    currentItem: allTabs[currentIndex],
    changeItem: setCurrentIndex,
  };
};

function UseTabs() {
  const {currentItem, changeItem} = useTabs(0, content);

  return (
    <>
      {content.map((section, idx) => (
        <button onClick={() => changeItem(idx)} >{section.tab}</button>
      ))}
      <div>{currentItem.content}</div>

      {/* <button>
        {content[0].tab}
      </button> */}
    </>
  );
}

export default UseTabs;