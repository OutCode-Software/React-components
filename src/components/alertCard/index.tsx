import React from 'react'
import styles from "./alertcard.module.scss"
interface AlertCardProps{
    image?:string,
    description?:string,
    date?:string

}
const AlertCard = (props:AlertCardProps) => {
    const {image, description, date}= props
  return (
    <div className={styles.alertCardWrapper}> 
        <img src={image} alt='icon' />
        <div className={styles.alertDescription}>
            <p>
                {description}
            </p>
        </div>
        <p className={styles.dateMessage}>System Message | <span>{date}</span></p>
    </div>
  )
}

export default AlertCard