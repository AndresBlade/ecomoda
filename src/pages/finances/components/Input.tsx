import { InputHTMLAttributes, FC, ChangeEvent } from 'react'

interface InputProps{
    type: 'email'| 'text' | 'number' | 'date';
    className: string;
    placeholder: string
    title: string;
    imgSrc:string;
    altImg:string;
    classImg:string;
    children:string;
    onChange?: (event:ChangeEvent<HTMLInputElement>)=>void;
} 

export interface InputsProps extends InputHTMLAttributes<HTMLInputElement>{}

const Input: FC<InputProps> = ({imgSrc, altImg, classImg,children, ...props}) => {
    return (
        <div>
            <div className='applicant-data__flex'>
                <img src={imgSrc} alt={altImg} className={classImg} />
                <p className='applicant-data__flex applicant-data__margin'>{children}</p>
            </div>
            <input {...props}/>
        </div>
    )
}

export default Input
