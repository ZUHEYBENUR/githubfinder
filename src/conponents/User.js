import React from 'react'

const User = ({user}) => {
  return (
    <div className='card mb-3'>
      <div className='row g-0 '>
        <div className='col-md-3'>
        <img className='img-fluid' src={user.avatar_url}/>
        </div>
        <div className='col-md-9'>
          <div className='card-body'>
            <h3 className='card-title'>
             {user.login}
            </h3>
            <a href={user.html_url} target='_blank' className='btn btn-primary'>
              Github Profile
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default User