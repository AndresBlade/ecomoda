import Input from './Input'
import imagen5 from '../../../assets/icons_finances/usuario.png'
import imagen6 from '../../../assets/icons_finances/departamento.png'
import { useState } from 'react';

const ApplicantData = () => {

  const [isOpenRegister, setIsOpenRegister] = useState(false);

    const handleToggleRegister = () => {
        setIsOpenRegister(!isOpenRegister);
    };

  return (
    <div className="applicant-data">
      <div className={`applicant-data__tittle ${isOpenRegister ? "open-accordion__tittle" : "closed-accordion__tittle"}`} onClick={handleToggleRegister}>
          <h2>Datos Solicitante</h2>
      </div>
      <div className={`applicant-data__content ${isOpenRegister ? "open-accordion__content" : "closed-accordion__content"}`}>
        <Input imgSrc={imagen5} altImg='id' classImg='loan-creation__image--width applicant-data__width' type='text' className='loan__creation--input' placeholder='Su Id: 121242' title='idDepartamento'  children='Id Departamento' />

        <Input imgSrc={imagen6} altImg='Departamento' classImg='loan-creation__image--width applicant-data__width' children='Departamento' type='text' className='loan__creation--input' placeholder='Finazas' title='departamento'/>
      </div>
      
    </div>
  )
}

export default ApplicantData
