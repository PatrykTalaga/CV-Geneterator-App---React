import { useState } from 'react'
import './App.css'
import InputForm from './InputForm'
import Cv from './Cv'


function App() {
  const [personalData, setPersonalData] = useState({
    name: "John Smith",
    address: "Wololo st. 255",
    addressLineTwo: "00-000 Wolololand",
    eMail: "JohnSmith2223@wololo.com",
    tel: "000-000-000",
    status: false
  })

  return (
    <>
      <div className='app'>
        <div className='form'>
          <InputForm
            personalData={personalData}
            onClick={()=>setPersonalData({...personalData, status:!personalData.status})}
            nameChange={(e)=>setPersonalData({...personalData, name:e.target.value})}
            addressChange={(e)=>setPersonalData({...personalData, address:e.target.value})}
            addressLineTwoChange={(e)=>setPersonalData({...personalData, addressLineTwo:e.target.value})}
            eMailChange={(e)=>setPersonalData({...personalData, eMail:e.target.value})}
            telChange={(e)=>setPersonalData({...personalData, tel:e.target.value})}
          />
        </div>
        <div className='cv'>
          <Cv personalData={personalData} />
        </div>
      </div>
    </>
  )
}


export default App