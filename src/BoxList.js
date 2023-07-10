import { useState } from "react";
import Box from "./Box.js";
import NewForm from "./Newform.js";

function BoxList() {

  const [boxesList, setBoxList] = useState([]);
  function idx () {
    return boxesList.length + 1 };
  function addBox(obj) {
    obj.id = idx();
    //const { id, color, width, height } = obj;
    setBoxList((boxesList) => [...boxesList, obj]);
  }
    
  
  const remove = id => {
    console.log('id: ', id);
    
    console.log('boxesList: ', boxesList);
    setBoxList(boxesList => boxesList.filter(box => box.id !== id));
    
  };
  
  let cont = 0 ;
  const boxes =
  boxesList.map((box,idx) => {
      cont ++ ;
    return <Box
        key={idx}
        id={box.id}
        backgroundColor={box.color}
        width={box.width}
        height={box.height}
        handleRemove={remove}
      />
    });
  //console.log("boxes",boxes);
  return (
    <div className="container">
      <NewForm addBox={addBox} />
         <div className="boxList">{boxes}</div>
    </div>
  );
}

export default BoxList;
