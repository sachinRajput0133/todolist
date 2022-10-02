import React, { useState } from 'react'
import './ToDoLists.css'
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';

 function ToDoLists(props) {


const [line,setLine]=useState(false)
// const [buttontext,setButtonText]=useState('delete')

// const changeDecoration=()=>{
//   if(line==='none'){
//     setLine('line-through')
//      setButtonText('add')
//   }else{
//     setLine('none')
//     setButtonText('delete')
//   }
 
// }
const changeDecoration=()=>{
  if(line===false){
    setLine(true) 
  }else{
    setLine(false) 
  }
   

 
}



  
  return (
    <div>
        
        
         <ol className='ol'>
                
                 
                  
                  <Button size="small" className="btn edit"   onClick={()=>{props.editList(props.id)}}  >
                
                  <i className=" bi bi-pencil-square"></i>
                   </Button>
                  <Button size="small" className="btn" onClick={changeDecoration} onDoubleClick={()=>{props.deleteList(props.id)}}    >
                  {/* <div className="btn" onClick={()=>{props.deleteList(props.id)}}    > */}
               <DeleteIcon/>
                   </Button>
                  
                  <li className='todo-List' style={{textDecoration:line?'line-through':'none'}}>{props.list}</li>
                
                 
                  
             </ol>
    </div>
  )
}
export default ToDoLists;