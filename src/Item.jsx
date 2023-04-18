import React from 'react'
import DeleteIcon from '@mui/icons-material/Delete';
import Button from '@mui/material/Button';

const Item = ({title,description , deleteHandler , index}) => {
  return (
    <div className="item-box">
    <div>
    <h4>{title}</h4>
    <p>{description}</p>
    </div>
      <Button variant="contained" color="error" onClick={()=>deleteHandler(index)}>
      < DeleteIcon />
      </Button>
  </div>
  
  )
}

export default Item