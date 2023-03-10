import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ButtonOS } from "../button";
import InputField from "../input/inputField";
import style from "./login.module.scss";
import logo from "../../resources/images/outcode.png"

const LoginForm = () => {
  const route = useNavigate();

  return (
    <>
      <InputField name="username" label="Username" type="text" />
      <InputField name="password" label="Password" type="password" />
      <ButtonOS hasFullWidth onClick={() => route("/")}>
        {" "}
        Login{" "}
      </ButtonOS>
    </>
  );
};
const RegisterForm = (props:any) => {
  const route = useNavigate();

  return (
    <>
      <InputField name="username" label="Username" type="text" />
      <InputField name="password" label="Password" type="password" />
      <InputField
        name="confirmPassword"
        label="Confirm Password"
        type="password"
      />

      <ButtonOS hasFullWidth onClick={() => props.setRegister(false)}>
        {" "}
        Register{" "}
      </ButtonOS>
    </>
  );
};
const RightLogin = () => {
  const [isRegister, setRegister] = useState(false);
  return (
    <div className={style.rightWrapper}>
      <div className={style.rightContent}>
        <div className={style.logo}>
          <img src={logo} alt="img" />

        </div>
        {isRegister ? <RegisterForm setRegister={setRegister} /> : <LoginForm />}

        {!isRegister ? (
          <p className="text-center mt-4">
            Don't have accont?{" "}
            <span
              className="font-bold cursor-pointer"
              onClick={() => setRegister(true)}
            >
              Sign Up Now
            </span>
          </p>
        ) : (
          <p className="text-center mt-4">
            Already have accont?{" "}
            <span className="font-bold cursor-pointer" onClick={() => setRegister(false)}>Sign In Now</span>
          </p>
        )}
      </div>
    </div>
  );
};

export default RightLogin;
