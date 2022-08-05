import React from 'react';
import propTypes from 'prop-types';

const GroupList = ({items,valueProperty,contentProperty,onItemSelect,selectedItem,clearFilter}) => {
    console.log(onItemSelect);
    return ( <>
        <ul className="list-group">
            {Object.keys(items).map((item)=>{
               return (
                    <li key={items[item][valueProperty]} 
                    className={
                        "list-group-item" + 
                        (items[item] === selectedItem ? " active": "")}
                    onClick={()=>onItemSelect(items[item])}
                    role='button'
                    >
                    {items[item][contentProperty]}
                </li>
                )
            })}
            
        </ul>
        <button className = "btn btn-secondary mt-2" onClick={clearFilter}>Очистить</button>
        </>
     );
}
GroupList.defaultProps={
    valueProperty:"_id",
    contentProperty:"name"
}
GroupList.propTypes = {
    items:propTypes.oneOfType([propTypes.object,propTypes.array]),
    valueProperty:propTypes.string.isRequired,
    contentProperty:propTypes.string.isRequired,
    onItemSelect:propTypes.func,
    selectedItem:propTypes.object 
}
 
export default GroupList;