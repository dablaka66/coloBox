//example to set a form with react
//Initial state 

const Userform = () =>{
    const initialState ={
        username:"",
        email:"",
        password:""  //se inicializan vacios todos los datos del form
    }
    const [forData,setformData] = useState(initialState)
}



const handleChange = e=>{
    const {name,value} = e.target; //the object has the key and the value in that field input
    setFormaData(data => {  //set form data is the function call from the onchange  event called form the element input
        ...data,  //copy the data that already coming in the  array 
        name:value   //data is the key, and has to be set as property in the element input
    })
}

const handlesubmit  = (e) => {
    e.preventdefault(); //evita que el evento haga las funciones por defecto

    setFormData(initialState)// to inicializar los datos despues de enviarlos
}
//example of the input Note: in react the state has to be changed every time the user modify a field in the form

<form onsubmit={handlesubmit}>
<label> htmlFor="email</label>"
<input 
    type="email"
    placeholder="email"
    name="email" //going to be used as key in the object, has to mach with the key in the objet
    id="email"
    value={formData.email} //dato traido desde el statefunction
    onChange={handleChange} //function who change the state
 />
 </form>


import React, { useState } from "react";
import Box from "./Box";
import NewBoxForm from "./NewBoxForm";

function BoxList() {
  const [boxes, setBoxes] = useState([]);
  const add = boxObj => {
    setBoxes(boxes => [...boxes, boxObj]);
  };
  const remove = id => {
    setBoxes(boxes => boxes.filter(box => box.id !== id));
  };

const boxComponents = boxes.map(box => (
    <Box
      key={box.id}
      id={box.id}
      width={box.width}
      height={box.height}
      handleRemove={remove}
      backgroundColor={box.backgroundColor}
    />
  ));

return (
    <div>
      <NewBoxForm createBox={add} />
      {boxComponents}
    </div>
  );
}

export default BoxList;


///////////////////////////////////////////

import React from "react";

function Box({
  id,
  handleRemove,
  width = 5,
  height = 5,
  backgroundColor = "blue"
}) {
  const remove = () => handleRemove(id);
  return (
    <div>
      <div
        style={{
          height: `${height}em`,
          width: `${width}em`,
          backgroundColor
        }}
      />
      <button onClick={remove}>Remove The Box!</button>
    </div>
  );
}

export default Box;
////////////////////////////
import React from "react";
import { render } from "@testing-library/react";
import App from "./App";

it("renders without crashing", function() {
  render(<App />);
});

it("matches snapshot", function() {
  const { asFragment } = render(<App />);
  expect(asFragment()).toMatchSnapshot();
});
