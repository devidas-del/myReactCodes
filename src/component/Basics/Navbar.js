import React from 'react'

const Navbar = ({filterItem,menuList}) => {
    return (
        <div>
            <nav className='navbar'>
        <div className='  .btn-group'>
            {
                menuList.map((curEle)=>{
                    return(<button className=' .btn-group__item' style={{ marginRight: '.9rem' }} onClick={()=>filterItem(curEle)} >{curEle}</button>)
                    
                })
            }
           
            {/* <button className=' .btn-group__item' onClick={()=>filterItem("lunch")}>Lunch</button>
            <button className=' .btn-group__item' style={{ marginLeft: '.9rem' }} onClick={()=>filterItem("evening")}>Evening</button>
            <button className=' .btn-group__item' style={{ marginLeft: '.9rem' }} onClick={()=>filterItem("dinner")}>Dinner</button>
            <button className=' .btn-group__item' style={{ marginLeft: '.9rem' }} onClick={()=>filterItem("All")}>All</button> */}
        </div>
       </nav>
        </div>
    )
}

export default Navbar
