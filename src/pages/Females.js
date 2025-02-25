import React from 'react'
import { MenuList } from '../helpers/MenuList'
import MenuItem from '../components/MenuItem';
function Females() {
  return (
    <div className="Selection">
        <h1 className="menuTitle">Females</h1>
        <div className="menuList"> 
        {MenuList.map((menuItem, key) => {
            return <MenuItem 
            key ={key}
            image={menuItem.image} name={menuItem.name} />
            
        })} </div>
      
    </div>
  )
}

export default Females
