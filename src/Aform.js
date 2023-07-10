import {useState} from 'react'

const Aform  = () => {
    const [userName, setUserName] = useState("valorinicial");
    const handleChange = (e) =>{
        setUserName(e.target.value);
    }
    const handleSubmit = (e) => {
      e.preventDefault();
      console.log(`createuser , ${userName}` ) 
      setUserName("")
      
    }
   return (
    <form onSubmit={handleSubmit} >
        <input type="text" id='name' placeolder="userName" value={userName} onChange={handleChange} />
        <button> ADD </button>
      </form>  
    )

   }
export default Aform ;