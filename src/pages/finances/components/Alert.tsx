import React from "react";
import { HTMLAttributes } from "react";

interface AlertProps{
    children : React.ReactNode;
    imgSrc:string;
    altImg:string;
  
}

export interface Alertprops extends React.HTMLAttributes<HTMLDivElement>{}



const Alert:React.FC<AlertProps> = ({imgSrc, altImg,children}) => {
  return (
    <div className="alert">
        <div className="alert alert-container">
          <div className="alert-container__image">
            <img src={imgSrc} alt={altImg} />
          </div>
            <p className="aler-container alert-container__p">{children}</p>
        </div>
    </div>
  )
}

export default Alert
