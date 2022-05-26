import React from "react";

const Hello = ({ user }) => {
  return user?.name ? <div>hello</div> : <button>login</button>;
};

export default Hello;
