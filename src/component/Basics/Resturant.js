import React, { useState } from 'react'
import "./style.css"
import Menu  from './MenuApi'
import MenuCard from './MenuCard'
import Navbar from './Navbar'
const uniqueList=[ ...new Set
(Menu.map((curEle)=>{
return curEle.category
})
),
"All"]

  console.log(uniqueList);
  
const Resturant = () => {
    const [MenuData,setMenuData]=useState(Menu)
    const [menuList,setmenuList]=useState(uniqueList) //this unique list we are passing to navbar
   //console.log(MenuData)
//    const filterItem=(category)=>{
//     const updatedList=Menu.filter=((curEle)=>{
//         return curEle.category=== category;
//     })
//     setMenuData(updatedList)
//     console.log(updatedList)
//    }
const filterItem = (category) => {
    if (category === "All") {
      setMenuData(Menu);
      return;
    }

    const updatedList = Menu.filter((curEle) => {
      return curEle.category === category;
    });

    setMenuData(updatedList);
  };

    return (
       
       <>
       <Navbar filterItem={filterItem} menuList={menuList}/> //here we are passing menulist to navbar
       <MenuCard myData={MenuData}/>
       </>
    )
}

export default Resturant
