import React from "react";

const Timer = () => {
  const now = Date.now();
  const sec = new Date(now).getSeconds();
  return <div>현재 {sec}초 입니다.</div>;
};

export default Timer;
