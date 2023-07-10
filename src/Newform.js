import { useState } from "react";




function NewForm({addBox})
 {    
    const initialState = {
    id: "",
    color: "",
    width: "",
    height: "" //se inicializan vacios todos los datos del form
  };
  
  
  const [formData, setFormData] = useState(initialState);
    const handleSubmit = (obj) => {
        //console.log("obj  : ", obj.value );
        obj.preventDefault();
        //addBox ({ ...formData, id: 5 });
        addBox(formData);
       // console.log("boxesList", boxesList);
        setFormData(initialState);
    };
    
    const handleChange = (e) => {
    
            const {name,value} = e.target;// get the values from e.target
            //console.log("name", name + " : " + value );
            setFormData(formData => ({
              ...formData,
              [name]: value
            }));
            //console.log("formData  : ",formData);
        
          };
     
      
    return (
      <form onSubmit={handleSubmit}>
        <label htmlFor="color"> Color  : </label>
        <input
        id="color"
          type="text"
          placeholder="back Ground Color"
          name="color" //going to be used as key in the object, has to mach with the key in the objet
          value={formData.color} //dato traido desde el statefunction
          onChange={handleChange} //function who change the state
        />
        <label> width  : </label>
        <input
          type="text"
          placeholder="width"
          name="width" //going to be used as key in the object, has to mach with the key in the objet
          value={formData.width} //dato traido desde el statefunction
          onChange={handleChange} //function who change the state
        />
        <label> height  : </label>
        <input
          onChange={handleChange}
          type="text"
          placeholder="height"
          name="height" //going to be used as key in the object, has to mach with the key in the objet
          value={formData.height} //dato traido desde el statefunction
           //function who change the state
        />
        <button>add Box</button>
      </form>
    );
  };
  export default NewForm;