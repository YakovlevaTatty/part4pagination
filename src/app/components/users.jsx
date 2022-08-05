import React, { useState,useEffect } from "react";
import API from "../api";
import { paginate } from "../utils/paginate";
import Pagination from "./pagination";
import UserInfo from "./user";
import RenderPhrase from "./renderPhrase";
import GroupList from "./groupList";

const Users = () => {
    const [users, setUsers] = useState( API.users.fetchAll());
    const [ professions,setProfessions] = useState();
    console.log(users);
    const pageSize = 2;
    const [currentPage,setCurrentPage] = useState(1);
    const [selectedProf,setSelectedProf] = useState();

    useEffect(()=>{
        API.professions.fetchAll()
        .then((data)=>
            setProfessions(
                data
            )
        );
    },[]);
    // useEffect(()=>{
    //     API.users.fetchAll()
    //     .then((data)=>
    //         setUsers(
    //             data
    //         )
    //     );
    // },[]);

    useEffect(()=>{
        setCurrentPage(1)
    },[selectedProf])

    const handleProfessionSelect = (item)=>{
        setSelectedProf(item)
    }

    const handlePageChange = (pageIndex) => {
        setCurrentPage(pageIndex);
    }
    const filteredUsers = selectedProf ? users.filter((user)=>user.profession === selectedProf) : users;
    const count = filteredUsers.length;

    const userCrop = paginate(filteredUsers,currentPage,pageSize) 

    const clearFilter =()=>{
        setSelectedProf();
    }

    const handleDelete = (userId) => {
        setUsers((prevState)=>prevState.filter(elem=>elem !== userId))
    }
    
    // const handleBookMark = (userId) => {    
    //     const table = document.querySelector("tbody");
    //     table.addEventListener('click',(event)=>{ 
    //         const searchBtn = document.querySelectorAll(".bi");
    //         console.log("searchBtn",searchBtn);
    //             searchBtn.forEach((e)=>{
    //                 console.log(e===event.target);
    //                 if(e===event.target){
    //                     if(e.classList.contains("bi-bookmark")){
    //                         e.classList.remove("bi-bookmark");
    //                         e.classList.add("bi-bookmark-heart-fill");
    //                     }else {
    //                         e.classList.remove("bi-bookmark-heart-fill");
    //                         e.classList.add("bi-bookmark");   
    //                     }
    //                 }
    //             })
    //     })
    //     setUsers((prevState)=>prevState.filter(elem=>elem === userId && elem.bookmark === "false" ? 
    //      elem.bookmark = "true" : elem.bookmark = "false"))
    // }
    
    // const renderPhrase = (number) => {
    //     return number === 0 ? `Никто с тобой сегодня не тусанет`  :
    //     users.length>4||users.length<2?`Сегодня тусанет c тобой ${users.length} человек`:
    //     `Сегодня тусанут c тобой ${users.length} человека`
    // }
    // const userInfo = userCrop.map((element)=>(
    //     <tr key={element._id}>
    //         <td>{element.name}</td>
    //         <td>
    //         {element.qualities.map(quality => 
    //         <span key ={quality._id} className={`badge bg-${quality.color} m-2 p-2`}>{quality.name}</span>)}  
    //         </td>
    //         <td>{element.profession.name}</td>
    //         <td>{element.completedMeetings}</td>
    //         <td>{`${element.rate+"/5"}`}</td>
    //         <td><button type="button" className="bi bi-bookmark" onClick={()=>handleBookMark(element)}></button></td>
    //         <td><button type="button" className="btn btn-danger" onClick={()=>handleDelete(element)}>Delete</button></td>
    //     </tr>
    // )  
    // )

    // let classes = "badge w-50 p-5 h-auto d-inline-block ";
    // classes+=users.length===0?"bg-warning":"bg-primary";

    // if(users.length === 0){
    //     const table = document.querySelector('.table');
    //     table.style.display = 'none';
    // }
    return (
    <div className="d-flex">
    {/* <div className={classes}>
            {renderPhrase(users.length)}
    </div> */}
        
        
        <div className="d-flex flex-column flex-shrink-0 p3">
        {professions && <GroupList
        selectedItem = {selectedProf}
        items = {professions}
        onItemSelect = {handleProfessionSelect}
        clearFilter = {clearFilter}
        // valueProperty = '_id'
        // contentProperty="name"
        />
        }
        </div>
        {/* <button className = "btn btn-secondary mt-2" onClick={clearFilter}>Очистить</button> */}

        {/* <RenderPhrase
        number = {number}
        users = {users}
        classes = {classes}
        UserInfo= {UserInfo}
        /> */}
        <div className="d-flex flex-column">
        <RenderPhrase
        length = {count}
        />
        <table className="table">
            <thead>
                <tr>
                    <th>Имя</th>
                    <th>Качества</th>
                    <th>Профессия</th>
                    <th>Встретился раз</th>
                    <th>Оценка</th>
                    <th>Избранное</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {users && <UserInfo handleDelete = {handleDelete} userCrop = {userCrop}/>}
            </tbody>
        </table>   
        <div className="d-flex justify-content-center">
        {count && <Pagination 
            itemsCount = {count}
            pageSize = {pageSize} 
            onPageChange = {handlePageChange} 
            currentPage = {currentPage}
        />}
        </div>
        </div>  
        </div>
    )
    }

export default Users;