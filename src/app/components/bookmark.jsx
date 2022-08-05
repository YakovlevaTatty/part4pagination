
const HandleBookMark = ({userId}) => {    
    const table = document.querySelector("tbody");
    table.addEventListener('click',(event)=>{ 
        const searchBtn = document.querySelectorAll(".bi");
            searchBtn.forEach((e)=>{
                if(e===event.target){
                    if(e.classList.contains("bi-bookmark")){
                        e.classList.remove("bi-bookmark");
                        e.classList.add("bi-bookmark-heart-fill");
                    }else {
                        e.classList.remove("bi-bookmark-heart-fill");
                        e.classList.add("bi-bookmark");   
                    }
                }
            })
    })
    // userBook((prevState)=>prevState.filter(elem=>elem === userId ? 
    //  elem.bookmark = !elem.bookmark && elem : elem))
}


export default HandleBookMark;