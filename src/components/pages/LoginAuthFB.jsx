import { Button, Input } from "antd";
import React from "react";
import "./LoginAuthFB.css";
import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "../firebase/firebaseConfig";
import { useNavigate } from "react-router-dom";

function LoginAuthFB() {
  const navigate = useNavigate();
  // Đăng nhập với API

  // Đăng nhập với Firebase
  const signInWithGoogle = () => {
    signInWithPopup(auth, provider)
      .then((res) => {
        console.log(res);
        const userLocal = {
          email: res.user.email,
          userName: res.user.displayName,
          image: res.user.photoURL,
          userId: res.user.uid,
        };

        // Lưu thông tin lên local
        localStorage.setItem("userLogin", JSON.stringify(userLocal));

        // Chuyển hướng sang home
        navigate("/homepage");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className='login-form'>
      <form>
        <h3>Login Form</h3>
        <div>
          <label>Email</label>
          <Input />
        </div>
        <div>
          <label>Password</label>
          <Input />
        </div>
        <Button onClick={signInWithGoogle}>Đăng nhập with Google</Button>
      </form>
    </div>
  );
}

export default LoginAuthFB;
