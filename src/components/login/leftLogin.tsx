import React from 'react'
import style from "./login.module.scss"

interface  leftLoginProps {
    loginImage?:string
}
const LeftLogin = (props:leftLoginProps) => {
    const {loginImage} = props
  return (
    <div className={style.leftWrapper}>
        <div className={style.leftBody}>
            <img src={loginImage} alt="img" />
        </div>
    </div>
  )
}

export default LeftLogin