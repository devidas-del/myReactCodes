import React, { useEffect, useState } from 'react'
import "./style.css"

const UseEffect = (props) => {
    const initialData=0 //no need to declare this value we can directly pass value in the usestate
    const [myNum,setMyNum]=useState(initialData)
    useEffect (()=>{
        document.title=`Chats(${myNum})`;
    },[]);
    return (
        <>
        <div className='center_div'>
        <p>{myNum}</p>
        <div class="button2" onClick={()=>setMyNum(myNum+1)}>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            INCR
        </div>
        </div>
        </>
    )
}

export default UseEffect
