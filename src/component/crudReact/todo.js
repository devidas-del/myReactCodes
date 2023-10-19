import React, { useEffect, useState } from 'react'
import "./style.css"
//import "./index.html"

//stored the Items data locally here
const getItemData=()=>{
    const list=localStorage.getItem("mytodoList");
    if(list){
        return JSON.parse(list)  //by using json.parse method we convert string to array
    }else{
        return [];
    }
}
const Todo = () => {
    const [inputData, setInputData]=useState("")
    const [items, setItems]=useState(getItemData())
    const [iseditedData, seteditedData]=useState()
    const [toggleBtn, setToggleBtn]= useState(false)
    console.log(items)
    //adding the addItems fun
    const addItems=()=>{
        if(!inputData){
            alert('plz add the items')
        } else if(inputData && toggleBtn){    //this is for editItem
            setItems(                          //through the setItems we changing the state of items
                items.map((curEle)=>{
                    if(curEle.id===iseditedData){
                        return{...curEle, name:inputData}
                    }
                    return curEle
                })
            )
            setInputData([])
            seteditedData(null)
            setToggleBtn(false)
        }
        else{
            //here we created object 
            const myInputData={
                id: new Date().getTime().toString(),
                name: inputData

            }
            setItems([...items, myInputData]) //we are using here spred oprator to store the items in arry
            setInputData("")
        }
    }
    //how to delete items
    const deleteItem=(itemId)=>{
     const updatedItems=items.filter((curEle)=>{
        return curEle.id!==itemId       //we are retuning the all items except which we want to delete
})
setItems(updatedItems)
    }
    //here we editing items
    const editItem=((editItems)=>{
        const item_edited=items.find((curEle)=>{
          return curEle.id ===editItems
})
setInputData(item_edited.name)
seteditedData(editItems)  //here we passing the itemId and setting the data
setToggleBtn(true)  //when we clicked on edit btn it will get true
    })
    const removeAll=(()=>{
       return setItems([])   //passing empty array here cause we need to delete all items
    })
//here we are using hooks effect to store the data locally

    useEffect(()=>{
        localStorage.setItem("mytodoList", JSON.stringify(items))  // mylist convert string to array 
    },
    [items])

    return (
        <>
          <div className='main-div'>
            <div className='child-div'>
                <figure>
                    <img src='images/todo.svg' alt='todologo'></img>
                    <figcaption>Add your List here</figcaption>
            
                </figure>
                <div className="addItems">
            <input
              type="text"
              placeholder="✍ Add Item"
              className="form-control"  value={inputData}
              onChange={(event) => setInputData(event.target.value)}
            />
            {toggleBtn?(
                <i className="far fa-edit add-btn" onClick={addItems}></i>  //here toggle btn is true then we want to change + icon to edit
            ):(
                <i className="fa fa-plus add-btn" onClick={addItems}></i>
            )
            }
                {/* <div className='addItems'>
                    <input type="text" placeholder='✍Add Items' className='form-control' value={inputData} onChange={(event)=>(event.target.value)}></input> */}
               
                </div>
                {/* showing our items */}
                <div className='showItems'>
                
                {
                    items.map((curEle,index)=>{
                        return(
                            <div className='eachItem' key={curEle.id}>
                            <h3>{curEle.name}</h3>
                            <div className='todo-btn'>
                            <i className="far fa-edit add-btn" onClick={()=>editItem(curEle.id)}></i>
                            <i className="far fa-trash-alt add-btn" onClick={()=>{deleteItem(curEle.id)}}></i>
                            </div>
                        </div>
                        );
                    
                })}
                

                   
                </div>
                <div className='showItems'>
                    <button className='btn effect04' data-sm-link-text='Remove All' onClick={removeAll}>
                    <span>check list</span>
                    </button>
                </div>
                </div></div>  
        </>
    )
}

export default Todo
