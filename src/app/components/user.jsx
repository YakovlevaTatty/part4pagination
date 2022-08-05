import React from "react";
import HandleBookMark from "./bookmark";

const UserInfo = ({handleDelete,userCrop}) => {
    return (
        <>       
         {userCrop.map((element)=>(
            <tr key={element._id}>
                <td>{element.name}</td>
                <td>
                {element.qualities.map(quality => 
                <span key ={quality._id} className={`badge bg-${quality.color} m-2 p-2`}>{quality.name}</span>)}  
                </td>
                <td>{element.profession.name}</td>
                <td>{element.completedMeetings}</td>
                <td>{`${element.rate+"/5"}`}</td>
                <td><button type="button" className="bi bi-bookmark" onClick={()=>HandleBookMark(element)}></button></td>
                <td><button type="button" className="btn btn-danger" onClick={()=>handleDelete(element)}>Delete</button></td>
            </tr>
        )  
        )
        }
        </>
        )
        
}
 
export default UserInfo;