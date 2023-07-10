import react from "react";

function Box({ id,
        backgroundColor,
        width =200,
        height =200, 
        handleRemove }) {
  const remove = () => handleRemove(id);

  return (
    <div className="Box">
      <div
        id={id}
        style={{
          height: `${width}px`,
          width: `${height}px`,
          backgroundColor: `${backgroundColor}`,
        }}
      >
        <button onClick={remove}>X</button>
      </div>
    </div>
  );
}

export default Box;
