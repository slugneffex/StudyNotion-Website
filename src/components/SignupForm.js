import React, { useState } from 'react'
import { toast } from 'react-hot-toast'
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai"
import { useNavigate } from 'react-router-dom'


const SignupForm = ({setIsLoggedIn}) => {

    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: ""
    })


    function changeHandler(e) {
        setFormData((prevData) => (
            {
                ...prevData,
                [e.target.name]: e.target.value

            }
        ))
    }

    const [showPassword, setShowPassword] = useState(false)

    function submitHandler(e) {
        e.preventDefault();
        if(formData.password !== formData.confirmPassword) {
            toast.error("password match nhi ho rha");
            return;
        }
        setIsLoggedIn(true);
        toast.success("Account bn gya");
        const accountData = {
            ...formData,
        }
        console.log(accountData);

        navigate("/dashboard")
    }

    return (
        <div>
            <div>
                <button>Student</button>
                <button>Instructor</button>
            </div>

            <form onSubmit={submitHandler}>

                {/* contain first and Last name */}
                <div>
                    <label>
                        <p>first Name<sup>*</sup></p>
                        <input
                            required
                            type="text"
                            name="firstName"
                            onChange={changeHandler}
                            placeholder='Enter First Name'
                            value={formData.firstName} />
                    </label>

                    <label>
                        <p>Last Name<sup>*</sup></p>
                        <input
                            required
                            type="text"
                            name="lastName"
                            onChange={changeHandler}
                            placeholder='Enter Last Name'
                            value={formData.lastName} />
                    </label>
                </div>

                {/* Email Addre */}

                <label>
                    <p>Email<sup>*</sup></p>
                    <input
                        required
                        type="email"
                        name="email"
                        onChange={changeHandler}
                        placeholder='Enter email'
                        value={formData.email} />
                </label>

                {/* create Password and confirm Password */}
                <div>
                    <label>
                        <p>Create Password<sup>*</sup></p>
                        <input
                            required
                            type={showPassword ? ("text") : ("password")}
                            name="password"
                            onChange={changeHandler}
                            placeholder='Enter password'
                            value={formData.password} />
                        <span onClick={() => setShowPassword((prev) => !prev)}>
                            {showPassword ? (<AiOutlineEyeInvisible />) : (<AiOutlineEye />)}
                        </span>
                    </label>


                    <label>
                        <p>Confirm Password<sup>*</sup></p>
                        <input
                            required
                            type={showPassword ? ("text") : ("password")}
                            name="confirmPassword"
                            onChange={changeHandler}
                            placeholder='Confirm password'
                            value={formData.confirmPassword} />
                        <span onClick={() => setShowPassword((prev) => !prev)}>
                            {showPassword ? (<AiOutlineEyeInvisible />) : (<AiOutlineEye />)}
                        </span>
                    </label>
                </div>

                <button>Create Account</button>
            </form>
        </div>
    )
}

export default SignupForm
