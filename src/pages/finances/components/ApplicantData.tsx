import Input from './Input'
import imagen5 from '../../../assets/icons_finances/usuario.png'
import imagen6 from '../../../assets/icons_finances/departamento.png'

const ApplicantData = () => {
  return (
    <div className="applicant-data">
      <div className="applicant-data__tittle">
          <h2>Datos Solicitante</h2>
      </div>
      <Input imgSrc={imagen5} altImg='id' classImg='loan-creation__image--width applicant-data__width' type='text' className='loan__creation--input' placeholder='Su Id: 121242' title='idDepartamento'  children='Id Departamento' />

      <Input imgSrc={imagen6} altImg='Departamento' classImg='loan-creation__image--width applicant-data__width' children='Departamento' type='text' className='loan__creation--input' placeholder='Finazas' title='departamento'/>
    </div>
  )
}

export default ApplicantData
