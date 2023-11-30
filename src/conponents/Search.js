import React,{useContext} from 'react';
import {useState} from 'react';
import { UsersContext } from './context/usersContext';
import { AlertContext } from './context/alertContext';


const Search = () => {
  const [keyword, setKeyWord]=useState("");
  const {searchUsers, users, clearResult}=useContext(UsersContext);
  const {disPlayAlert}=useContext(AlertContext);

  const onChange=(event)=>{
    setKeyWord(event.target.value)
  }
  const onSubmit=(e)=>{
    e.preventDefault();
    if(keyword===   ""){
      console.log("bir şey giriniz")
    }else{
      searchUsers(keyword);
      setKeyWord("");
    }
  }

  return (
    <div className='container my-3'>
      <form onSubmit={onSubmit}>
        <div className='input-group'>
          <input type='text' value={keyword} onChange={onChange} className='form-control' placeholder='Enter a username'/> 
          <button type='submit' className='btn btn-primary'>Search</button>
        </div>
      </form>
    </div>
  )
}

export default Search