import React from 'react'
import useForm from './useForm'

const FormSignup = () => {
    const {handleChange,values} = useForm();
    return (
      <div className="form-content-right">
          <form className="form">
              <h1>hello</h1>
              <div className="form-inputs">
                  <label htmlFor="username" className="form-label">
                    User Name
                  </label>
                  <input id="username" type="text"  name="username" className="form-input" placeholder="Enter Your UserName" value={values.username} onChange={handleChange}/>
                  
                  <label htmlFor="email" className="form-label">
                    EMail
                  </label>
                  <input id="email" type="email"  name="email" className="form-input" placeholder="Enter Your Email" value={values.email} onChange={handleChange}/>
                  <label htmlFor="password" className="form-label">
                    Password
                  </label>
                  <input id="password" type="password"  name="password" className="form-input" placeholder="Enter Your Password" value={values.password} onChange={handleChange}/>
                  <label htmlFor="password2" className="form-label">
                    Confirm Password
                  </label>
                  <input id="password2" type="password"  name="password2" className="form-input" placeholder="Confirm Password" value={values.password2} onChange={handleChange}/>
                  <button className="form-input-btn" type="submit">
                         Sign Up
                  </button>
                  <span className="form-input-login">
                      Already have an account?Login <a href="#"> here</a>
                  </span>
              </div>
          </form>
      </div>

    )
}

export default FormSignup
