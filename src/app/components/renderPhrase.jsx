import React from 'react';

const RenderPhrase = ({length}) => {
    let result =  length === 0 ? `Никто с тобой сегодня не тусанет`  :
    length>4||length<2?`Сегодня тусанет c тобой ${length} человек`:
        `Сегодня тусанут c тобой ${length} человека`;    

    let classes = "badge w-50 p-5 h-auto d-inline-block ";
    classes+=length===0?"bg-warning":"bg-primary";

    if(length ===0){
        const table = document.querySelector('.table');
        table.style.display = 'none';}
    
    return ( 
        <div className={classes}>
            {result}
        </div>
     );
}
 
export default RenderPhrase;