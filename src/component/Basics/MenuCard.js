import React from 'react'

const MenuCard = ({myData}) => {
    //console.log(myData)
    return (
        
        
     <>
     <section className='main-card--cointainer'>
     {
                myData.map((curEle)=>{
                    const{id,name,image,category,description}=curEle //assign all values to curElement cause we dont need to write like this: curEle.key,name ....
                    
                    return(
<div className='card-container' key={id}>
         <div className='card'>
             <div className='card-body'>
                 <span className='.card-title '>{name}</span>
                 <span className='card-author card-squre subtle' style={{color:"Green"}}>{category}</span>
                 <span className='.card-description subtle'>
  {description}
</span>
<div className='card-read'>Read</div>
             </div>
             <img src={image} alt="images" className='card-media' />
             <span className='card-tag subtle'></span>
         
         </div>
        </div>
                    )
                })
            }
        </section>
     </>
            
   
        
        
    )
}

export default MenuCard
