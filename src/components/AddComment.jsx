import React, { useState } from "react";

function AddComment() {
  const [comment, setComment] = useState({
    comment: "",
  });

  const changeInputHandler = (event) => {
    const { value, name } = event.target;
    setComment((pre) => ({ ...pre, [name]: value }));
  };

  return (
    <div>
      <div>
        <input type={} ></input>
      </div>
    </div>
  );
}

export default AddComment;
