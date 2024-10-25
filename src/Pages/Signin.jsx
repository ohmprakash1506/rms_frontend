import React, { useEffect, useState } from 'react'
import "../Styles/signIn.css";
import { useDispatch } from 'react-redux';
import { signin } from '../Redux/Action/user';
import { useNavigate } from 'react-router-dom'
import rightImage from "../Assets/user_rightIcon.svg";
import logo from "../Assets/RSM.svg";
import pwd from "../Assets/pwdEye.svg";

function Signin() {

  const navigate = useNavigate();
  const dispatch = useDispatch();
  if (sessionStorage.getItem("userToken")) {
    navigate('/dashboard')
  }

  const [page, updatePage] = useState('signIn')


  return (
    <div className='signInBackground position-absolute d-md-flex flex-row-reverse'>

      <div className='rightImage'>
        <img src={logo} alt="" className='p-3 rounded d-block me-auto d-md-none' />
        <img src={rightImage} alt="" className='p-5 align-middle' />
      </div>

      <div className='signInPage d-flex justify-content-center align-self-middle'>

        {page === "signIn" ? <SignInUi dispatch={dispatch} navigate={navigate} updatePage={updatePage} /> :
          page === "confirmEmail" ? <ConfirmEmail /> :
            <ForgotPwd />}
      </div>

    </div>
  )
}

export default Signin



function SignInUi(props) {
  function signInLoader() {
    document.getElementsByTagName("button")[0].style.display = "none"
    document.getElementById("signInLoader").style.display = "block"
  }

  function handleSignIn(e) {
    e.preventDefault();
    const email = e.target[0].value;
    const password = e.target[1].value;

    let form = {
      email: email,
      password: password
    }

    props.dispatch(signin(form, props.navigate))
      .then(res => {
        return;
      })
      .catch(e => {
        alert("Login failed Check Credentials")
        document.getElementById('signInLoader').style.display = "none"
        console.log("error occured", e)
      })
  }

  function showPwd() {
    let a = document.getElementById('signPwd').toggleAttribute("type")
    if (a) {
      document.getElementById('signPwd').setAttribute("type", "password")
    }
  }

  return (
    <>
      <img src={logo} alt="" className='signInLogo position-absolute' />
      <form className="d-flex flex-column justify-content-center"
        onSubmit={(e) => handleSignIn(e)}
      >
        <h3>Hi, Welcome to <span style={{ color: "#5e47d3" }}>RSM</span></h3>
        <input type="email" placeholder='Email' className="mx-auto fs-2 py-3 px-4 my-4" required={true} />

        <div style={{ width: "100%" }} className="position-relative">
          <input type="password"
            placeholder='Password'
            className="mx-auto fs-2 py-3 px-4 my-4"
            required={true}
            id="signPwd"
          />
          <div className='showPwd position-absolute' onClick={() => showPwd()}>
            <img src={pwd} alt="" />
          </div>
        </div>

        <p className='ms-auto resetPwd' onClick={() => {
          props.updatePage("forgotPwd")
        }}>Reset Password?</p>
        <button
          className="mx-auto my-1 btn fw-bold px-3 py-4 fs-3"
          type="submit" onClick={() => {
            signInLoader()
          }}>Login</button>

        <div className="spinner-border fs-1 mx-auto"
          role="status"
          style={{ width: "30px", height: "30px", display: "none" }}
          id="signInLoader">
          <span className="visually-hidden">Loading...</span>
        </div>


      </form>
    </>
  )
}



function ForgotPwd() {
  function updatePwdLoader() {
    document.getElementById('signInLoader').style.display = "block";
    document.getElementsByTagName("button")[0].style.display = "none";
  }
  function showPwd() {
    let a = document.getElementById('newPwd').toggleAttribute("type")
    if (a) {
      document.getElementById('newPwd').setAttribute("type", "password")
    }
  }

  function confirmPwd() {
    let a = document.getElementById('confirmPwd').toggleAttribute("type")
    if (a) {
      document.getElementById('confirmPwd').setAttribute("type", "password")
    }
  }

  return (

    <form className="d-flex flex-column justify-content-center forgotPwd">
      <h3>Reset password</h3>

      <div style={{ width: "100%" }} className="position-relative">
        <input type="password"
          placeholder='New Password'
          className="mx-auto fs-2 py-3 px-4 my-4"
          required={true}
          id="newPwd"
        />
        <div className='showPwd position-absolute' onClick={() => showPwd()}>
          <img src={pwd} alt="" />
        </div>
      </div>

      <div style={{ width: "100%" }} className="position-relative">
        <input type="password"
          placeholder='Confirm Password'
          className="mx-auto fs-2 py-3 px-4 my-4"
          required={true}
          id="confirmPwd"
        />
        <div className='showPwd position-absolute' onClick={() => confirmPwd()}>
          <img src={pwd} alt="" />
        </div>
      </div>

      <button
        className="mx-auto my-5 btn fw-bold px-3 py-4 fs-3"
        type="submit" onClick={() => {
          updatePwdLoader()
        }}>Update</button>


      <div className="spinner-border fs-1 mx-auto"
        role="status"
        style={{ width: "30px", height: "30px", display: "none" }}
        id="signInLoader">
        <span className="visually-hidden">Loading...</span>
      </div>
    </form>
  )
}

function ConfirmEmail() {
  function updateEmailLoader() {
    document.getElementById('emailLoader').style.display = "block";
    document.getElementsByTagName("button")[0].style.display = "none";
  }
  return (
    <>
      <img src={logo} alt="" className='signInLogo position-absolute' />
      <form className="d-flex justify-content-center flex-column mt-5">
        <label className="fs-3">Enter Your Email</label>
        <input placeholder="Email" className="mx-auto fs-2 py-3 px-4 my-4" required />
        <p style={{ color: " #5E5E5E" }}>Please enter your email id we will send a link to the register mail ID</p>
        <button
          className="mx-auto my-5 btn fw-bold px-3 py-4 fs-3"
          type="submit" onClick={() => {
            updateEmailLoader()
          }}>Update</button>

        <div className="spinner-border fs-1 mx-auto"
          role="status"
          style={{ width: "30px", height: "30px", display: "none" }}
          id="emailLoader">
          <span className="visually-hidden">Loading...</span>
        </div>
      </form>
    </>
  )
}

