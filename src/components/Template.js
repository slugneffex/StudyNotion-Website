import React from 'react'
import frameImage from "../assets/frame.png"
import SignupForm from './SignupForm'
import Loginform from './Loginform'

const Template = ({ title, desc1, desc2, image, formtype, setIsLoggedIn }) => {
  return (
    <div>
      <div>
        <h1>{title}</h1>
        <p>
          <span>{desc1}</span>
          <span>{desc2}</span>
        </p>

        {formtype === "signup" ?
          (<SignupForm setIsLoggedIn={setIsLoggedIn} />):
          (<Loginform setIsLoggedIn={setIsLoggedIn} />)
        }

        <div>
          <div></div>
          <p>OR</p>
          <div></div>
        </div>

        <button>Sign Up with Google</button>
      </div>

      <div>
        <img src={frameImage} alt="patter" width={558} height={504} loading="lazy" />

        <img src={image} alt="students" width={504} height={490} loading='lazy' />
      </div>
    </div>
  )
}

export default Template
