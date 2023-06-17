import React from "react";
import style from "../../scss/SignIn.module.scss";
import { Link } from "react-router-dom";
const SignIn = () => {
  return (
    <div className={style.registerBlock}>
      <div className={style.registerContent}>
        <h3>Sign In</h3>
        <div className={style.inputBlock}>
          <form>
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <button>Вход</button>
            <Link to="/sign-up">
              <p>У меня ещё нет аккаунта</p>
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
