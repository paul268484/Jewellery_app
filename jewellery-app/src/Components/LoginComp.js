import React from 'react'
import './LoginComp.css';

export const LoginComp = () => {
  return (
    <div>


<div className="loginContainer">

            <h2></h2>
            <form className="loginForm">
                <label className='form-label'>Enter user id:</label>
                <input type="text" name="uidRef"  className="form-control mb-2 mt-2" />

                <label className='form-label'>Enter user Password:</label>
                <input type="password" name="upassRef"  className="form-control mb-2 mt-2" />
                <button 
                    type="button" 
                    className="btn btn-dark"
                >
                    Login
                </button>
      
       </form>
        </div>
    </div>
  )
}
