import React, { useReducer } from 'react'
import "./style.css"

const reducer=(state, action)=>{
if(state<9 && action.type==="INCR"){
    state=state+1
}
if(state>0 && action.type==="DECR"){
    state=state-1
}
return state
}
const UseReducer = () => {
   const initialData=0 //no need to declare this value we can directly pass value in the usestate
   // const [myNum,setMyNum]=useState(initialData)
   const [state, dispatch]=useReducer(reducer, initialData)
    return (
       <>
      <div className='center_div'>
        <p>{state}</p>
        <div class="button2" onClick={()=>dispatch({type:"INCR"})}>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            INCR
        </div>
        <div class="button2" onClick={()=>dispatch({type:"DECR"})} >
       <span></span>
       <span></span>
       <span></span>
       <span></span>
       DECR
        </div>
      </div>
       </>
    )
}

export default UseReducer
