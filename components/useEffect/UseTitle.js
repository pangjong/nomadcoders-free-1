import { useEffect, useState } from "react";
import React from 'react';

const useTitle = (initialTitle = "") => {
  const [title, setTitle] = useState(initialTitle);
  const updateTitle = () => {
    const htmlTitle = document.querySelector("title")
    htmlTitle.innerText = title;
  }

  // title이 변경된다면 렌더링이 필요하다고 리액트에게 알림(useEffect)
  useEffect(updateTitle, [title]);
  return {title, setTitle};
}

function UseTitle() {
  const titleUpdater = useTitle("now Updating Title...");

  setTimeout(() => {
    titleUpdater.setTitle("changed Title");
  }, 5000);
  return (
    <>
      <div>Title is {titleUpdater.title} </div>
    </>
  );
}

export default UseTitle;