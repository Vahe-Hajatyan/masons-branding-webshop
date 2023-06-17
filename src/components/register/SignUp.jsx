import React from "react";
import style from "../../scss/SignIn.module.scss";
import { Link } from "react-router-dom";
const SignUp = () => {
  return (
    <div className={style.registerBlock}>
      <div className={`${style.registerContent} ${style.signUpContent}`}>
        <h3>Sign Up</h3>
        <div className={style.inputBlock}>
          <form>
            <input type="text" placeholder="Name" />
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <button>Вход</button>
            <Link to="/sign-in">
              <p>У меня есть аккаунта</p>
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
