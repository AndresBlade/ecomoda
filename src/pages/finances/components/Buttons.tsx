import React from 'react'
import { ButtonHTMLAttributes, FC } from 'react'

interface ButtonsProps{
    type: 'button' | 'submit' | 'reset';
    children: React.ReactNode;
    title: 'solicitar' | 'limpiar' | 'consultar' | 'editar' | 'eliminar' | 'crear';
    className: string;
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
}
export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{}

const Buttons: FC<ButtonsProps> = ({type = 'button',children,title, onClick}) => {

        return(
        <button onClick={onClick} type={type} className='button-finances' title={title}>{children}
        </button>
        ) 
        
}
export default Buttons
