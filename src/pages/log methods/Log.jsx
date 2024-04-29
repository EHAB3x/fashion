/* eslint-disable react/no-unescaped-entities */
import "./log.css"
import { IoClose } from "react-icons/io5";
import loginSVG from "../../assets/login.svg";
import eyeSVG from "../../assets/eye.svg";
import searchSVG from "../../assets/search.svg";
import appleSVG from "../../assets/apple.svg";
import facebookSVG from "../../assets/facebook.svg";
import githubSVG from "../../assets/github.svg";
import hideSvg from "../../assets/hide.svg";
import register from "../../assets/trial.svg";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import toast, { Toaster } from 'react-hot-toast';
import axios from "axios";
import baseUrl from "../../variables/variables";
import { useAuth } from "../../context/AuthContext";
const Log = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [userName, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rePassword, setRePassword] = useState('');
  const[loginEmail, setLoginEmail] = useState('');
  const[loginPassword, setLoginPassword] = useState('');
  const navigate = useNavigate();

  const {login, user} = useAuth();



useEffect(()=>{
  const formWrapper = document.querySelector(".form-wrapper");
  const inputs = document.querySelectorAll(".form-box input[type = 'password']");
  const icons = [...document.querySelectorAll(".form-icon")];
  const spans = [...document.querySelectorAll(".form-box .top span")];
  const userForm = document.querySelector(".user-form");
  
  spans.map((span) => {
    span.addEventListener("click", (e) => {
      const color = e.target.dataset.id;
      formWrapper.classList.toggle("active");
      userForm.classList.toggle("active");
      document.querySelector(":root").style.setProperty("--custom", color);
    });
  });
  
  Array.from(inputs).map((input) => {
    icons.map((icon) => {
      icon.innerHTML = `<img src=${eyeSVG} alt="eye" />`;
  
      icon.addEventListener("click", () => {
        const type = input.getAttribute("type");
        if (type === "password") {
          input.setAttribute("type", "text");
          icon.innerHTML = `<img src=${hideSvg} alt="hide" />`;
        } else if (type === "text") {
          input.setAttribute("type", "password");
          icon.innerHTML = `<img src=${eyeSVG} alt="" />`;
        }
      });
    });
  });
},[]);


const handleRegister = (e)=>{
  e.preventDefault();

  if(firstName === '' || lastName === '' || email === '' || userName === '' || password === '' || rePassword === ''){
    toast('Please Fill All Inputs', {
      duration: 4000,
      position: 'top-center',
      style: {
        backgroundColor:'#ff5e3a',
        color:"white"
      },
      ariaProps: {
        role: 'status',
        'aria-live': 'polite',
      },
    });
  }else if(password !== rePassword){
    toast("Password isn't matched", {
      duration: 4000,
      position: 'top-center',
      style: {
        backgroundColor:'#ff5e3a',
        color:"white"
      },
      ariaProps: {
        role: 'status',
        'aria-live': 'polite',
      },
    });
  }else{
    axios.post(`${baseUrl}Auth/register`,{
      firstName,
      lastName,
      userName,
      email,
      password
    }).then(res => {
      login(res.data)
      setFirstName('')
      setLastName('')
      setUsername('')
      setEmail('')
      setPassword('')
      setRePassword('')
      toast(`Welcome ${res.data.userName}, ✅ Your account created Successfully`, {
        duration: 4000,
        position: 'top-center',
        style: {
          backgroundColor:'#ff5e3a',
          color:"white"
        },
        ariaProps: {
          role: 'status',
          'aria-live': 'polite',
        },
      });
      navigate("/");
    })
    .catch(err =>{
      toast(err.response.data, {
        duration: 4000,
        position: 'top-center',
        style: {
          backgroundColor:'#ff5e3a',
          color:"white"
        },
        ariaProps: {
          role: 'status',
          'aria-live': 'polite',
        },
      });
    })
  }
}

const handleLogin = (e)=>{
  e.preventDefault();

  if(loginEmail === '' || loginPassword === ''){
    toast('Please Fill All Inputs', {
      duration: 4000,
      position: 'top-center',
      style: {
        backgroundColor:'#ff5e3a',
        color:"white"
      },
      ariaProps: {
        role: 'status',
        'aria-live': 'polite',
      },
    });
  }else{
    axios.post(`${baseUrl}Auth/token`,{
      email: loginEmail,
      password: loginPassword,
    }).then(res => {
      login(res.data)
      setLoginEmail('')
      setLoginPassword('')
      toast(`Welcome, ${res.data.userName}`, {
        duration: 4000,
        position: 'top-center',
        style: {
          backgroundColor:'#ff5e3a',
          color:"white"
        },
        ariaProps: {
          role: 'status',
          'aria-live': 'polite',
        },
      });
      navigate("/");
    })
    .catch(err =>{
      toast(err.response.data, {
        duration: 4000,
        position: 'top-center',
        style: {
          backgroundColor:'#ff5e3a',
          color:"white"
        },
        ariaProps: {
          role: 'status',
          'aria-live': 'polite',
        },
      });
    })
  }
}
  useEffect(()=>{
    if (user !== null) {
      navigate("/")
    }
  },[user,navigate])

  if (user !== null) {
    return null;
  }

  return (
    <div className="user-form">
      <div 
        className="close-form d-flex"
        onClick={()=> navigate("/")}
      >
        <IoClose />
      </div>
      <div className="form-wrapper container">
        <div className="user login">
          <div className="img-box">
            <img src={loginSVG} alt="login" />
          </div>
          <div className="form-box">
            <div className="top">
              <p>
                Not a member?
                <span data-id="#ff0066">Register now</span>
              </p>
            </div>
            <form action="">
              <div className="form-control">
                <h2>Hello Again!</h2>
                <p>Welcome back you've been missed.</p>
                <input 
                  type="text"
                  placeholder="Enter Username"
                  onChange={(e)=> setLoginEmail(e.target.value)}
                  value={loginEmail}
                />
                <div>
                  <input 
                    type="password" 
                    placeholder="Password" 
                    value={loginPassword}
                    onChange={(e)=> setLoginPassword(e.target.value)}
                  />
                  <div className="icon form-icon">
                     <img src={eyeSVG} alt="eye" /> 
                  </div>
                </div>
                <span>Recovery Password</span>
                <input type="submit" value="Login" onClick={(e)=> handleLogin(e)}/>
              </div>
              <div className="form-control">
                <p>Or continue with</p>
                <div className="icons">
                  <div className="icon">
                    <img src={searchSVG} alt="search" />
                  </div>
                  <div className="icon">
                    <img src={appleSVG} alt="apple" />
                  </div>
                  <div className="icon">
                    <img src={facebookSVG} alt="facebook" />
                  </div>
                  <div className="icon">
                    <img src={githubSVG} alt="github" />
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>

        <div className="user signup">
          <div className="form-box">
            <div className="top">
              <p>
                Already a member?
                <span data-id="#1a1aff">Login now</span>
              </p>
            </div>
            <form>
              <div className="form-control">
                <h2>Welcome!</h2>
                <p>It's good to have you.</p>
                <div style={{display:"flex", gap:"10px"}}>
                  <input 
                    type="text" 
                    placeholder="Enter First Name" 
                    value={firstName}
                    onChange={(e)=>setFirstName(e.target.value)}
                  />
                  <input
                   type="text" 
                   placeholder="Enter Last Name" 
                   onChange={(e)=>setLastName(e.target.value)}
                   value={lastName}
                  />
                </div>
                <input
                 type="text" 
                 placeholder="Enter Username" 
                 onChange={(e)=>setUsername(e.target.value)}
                 value={userName}
                />
                <input
                 type="email"
                 placeholder="Enter Email" 
                 onChange={(e)=>setEmail(e.target.value)}
                 value={email}
                />
                <div>
                  <input
                   type="password"
                   placeholder="Password" 
                   onChange={(e)=> setPassword(e.target.value)}
                   value={password}
                  />
                  <div className="icon form-icon">
                    <img src={eyeSVG} alt="eye" />
                  </div>
                </div>
                <div>
                  <input
                   type="password"
                   placeholder="Confirm Password" 
                   onChange={(e)=>setRePassword(e.target.value)}
                   value={rePassword}
                  />
                  <div className="icon form-icon">
                    <img src={eyeSVG} alt="eye" />
                  </div>
                </div>
                <input type="submit" value="Register" onClick={(e)=> handleRegister(e)}/>
              </div>
              <div className="form-control">
                <p>Or continue with</p>
                <div className="icons">
                  <div className="icon">
                    <img src={searchSVG} alt="search" />
                  </div>
                  <div className="icon">
                    <img src={appleSVG} alt="apple" />
                  </div>
                  <div className="icon">
                    <img src={facebookSVG} alt="facebook" />
                  </div>
                  <div className="icon">
                    <img src={githubSVG} alt="github" />
                  </div>
                </div>
              </div>
            </form>
          </div>
          <div className="img-box">
            <img src={register} alt="register" />
          </div>
        </div>
      </div>
      <Toaster />
    </div>
  )
}

export default Log