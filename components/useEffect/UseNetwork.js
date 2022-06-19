import React, { useEffect, useState } from 'react';

// js 는 신이다  그러니까 페이스북같은거나 자낳대 경매같은걸 만들었겠지
const useNetwork = (onChange) => {
  const [status, setStatus] = useState(navigator.onLine);
  const handleChange = () => {
    if(typeof onChange === "function") {
      onChange(navigator.onLine);
    }

    setStatus(navigator.onLine);
  }

  useEffect(() => {
      window.addEventListener("online", handleChange);
      window.addEventListener("offline", handleChange);

      return () => {
        window.removeEventListener("online", handleChange);
        window.removeEventListener("offline", handleChange);
      };
  }, [onChange]);

  return status;
}

function UseNetwork() {
  const handleNetworkChange = (online) => {
    console.log(online ? "We Online" : "We OffLine");
  }
  
  const onLine = useNetwork(handleNetworkChange);

  return (
    <>
      <hr />
        <div>{onLine ? "online" : "offline"}</div>
      <hr />
    </>
  );
}

export default UseNetwork;