import "./App.scss" 
import React,{ useEffect, useState} from 'react'
import TextField from '@mui/material/TextField';
import AddIcon from '@mui/icons-material/Add';
import Button from '@mui/material/Button';
import Item from "./Item";


function App() {

  const initialArr = localStorage.getItem("item") ? JSON.parse(localStorage.getItem("item"))
  : [];

 const [ item , setItem] = useState(initialArr);
 const [ title , setTitle] = useState("");
 const [description , setDescription] = useState("");



 const submitHandler = () => {
  
  if (title === "" || description === "") {
    alert("Set a Title Or Description  ")
  }
else{
  setItem([...item, { title,description }])
  setTitle("")
  setDescription("")
}
 };

 const deletehandler = (index) => {
  const newArr = item.filter((val, i) => {
      return i !== index
  })

  setItem(newArr)

 }

 useEffect(() => {
  localStorage.setItem("item" , JSON.stringify(item))
   }
 , [item])
 

  return (
    <div className="App">
      <h1 className="heading">My Daily Goals</h1>
  
     
        <TextField
        onChange={(e) => setTitle(e.target.value)  }
        value={title}
        className="input"
          id="outlined-textarea"
          label="Title"
          placeholder="Title"
          multiline
        />            
        <TextField
        onChange={(e) => setDescription(e.target.value)  }
        value={description}
        className="input"
          id="outlined-textarea"
          label="Description"
          placeholder="Description"
          multiline
        />
         <Button variant="contained" color="success" className="add-btn" onClick={submitHandler}>
         <AddIcon />
        </Button>
    
      {
        item.map((i , index) =>{
          return(
          <Item  key={index}
            title={i.title}
            description={i.description}
            deleteHandler={deletehandler}
            index={index}
            />
          )
        })
      }

      
   
    </div>
  );
}

export default App;
