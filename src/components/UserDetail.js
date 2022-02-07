import axios from 'axios';
import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';

const UserDetail = () => {
 const{id} =useParams()
  useEffect(()=>{
axios.git("http://jsonplaceholer.typicode.com/users /${id}")
.then(res=>console.log(res.data))
.catch(err=>console.log)
  },[id])
  return (
  <div>
    
  </div>);
};

export default UserDetail;
