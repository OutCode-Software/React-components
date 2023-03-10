import React from 'react'
import LeftLogin from './leftLogin'
import RightLogin from './rightLogin'
import style from "./login.module.scss"
import login from "../../resources/images/login.png"
const LoginLayout = () => {
  return (
    <div className={style.loginWrapper}>

        <LeftLogin loginImage={login} />
        <RightLogin />
    </div>
  )
}

export default LoginLayout