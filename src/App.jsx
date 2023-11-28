import { useState } from 'react'
import { v4 as uuid } from "uuid"
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

  const[education, setEducation] = useState([])
  const[edu, setEdu] = useState({
    Degree: "Wololo Priest",
    School: "Red University",
    City: "WololoLand",
    From: "1111-11-11",
    End: "3343-11-11",
    id: uuid()
  })

  const[experience, setExperience] = useState([])
  const[exp, setExp] = useState({
    Job: "Asistant Wololo Priest",
      Company: "Red",
      Description: "Wololo Wololo Wololo",
      From: "1222-22-22",
      End: "3433-01-01",
      id: uuid()
  })


  function handleClickEdu(event){
    event.preventDefault();
    setEducation([...education, edu])
    setEdu({
      Degree: "Wololo Priest",
      School: "Red University",
      City: "WololoLand",
      From: "1111-11-11",
      End: "3343-11-11",
      id: uuid()
  })}

  function handleClickExp(event){
    event.preventDefault();
    setExperience([...experience, exp])
    setExp({
      Job: "Asistant Wololo Priest",
      Company: "Red",
      Description: "Wololo Wololo Wololo",
      From: "1222-22-22",
      End: "3433-01-01",
      id: uuid()
  })}

  function deleteEduItem(id) {
    const newEducation = education.filter((edu) => edu.id != id)
    setEducation(newEducation)
  }
  
  function deleteExpItem(id) {
    const newExperience = experience.filter((exp) => exp.id != id)
    setExperience(newExperience)
  }


  
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

          <div className='myGrid'>
            <h2 className='twoColumns'>Education</h2>
            <label>Degree </label>
            <input type='text' value={edu.Degree}
              onChange={(e)=>setEdu({...edu, Degree: e.target.value})}>
             </input>
            <label>School: </label>
            <input type='text' value={edu.School}
              onChange={(e)=>setEdu({...edu, School: e.target.value})}>
            </input>
            <label>City: </label>
            <input type='text' value={edu.City}
              onChange={(e)=>setEdu({...edu, City: e.target.value})}>
              </input>
            <label>Start date: </label>
            <input type='date' value={edu.From} 
              onChange={(e)=>setEdu({...edu, From: e.target.value})}>
              </input>
            <label>End date: </label>
            <input type='date' value={edu.End}
              onChange={(e)=>setEdu({...edu, End: e.target.value})}>
              </input>
            <div></div>
            <button onClick={handleClickEdu}>Add</button>
          </div>
          <div className='EducationList'>
            <ul>
              {education.map((edu)=>(
                <li key={edu.id}>
                  <div className='formPreview'>
                    <div>
                      <p><b>{edu.Degree}</b></p>
                      <p>{edu.School} {edu.City}</p>
                      <p>From: {edu.From}, To: {edu.End}</p>
                    </div>
                    <button 
                    className='deleteButton'
                    onClick={()=>deleteEduItem(edu.id)}>
                    Delete</button>
                  </div>
                  
                </li>
              ))}
            </ul>
          </div>

          <div className='myGrid'>
            <h2 className='twoColumns'>Experience</h2>
            <label>Job: </label>
            <input type='text' value={exp.Job}
              onChange={(e)=>setExperience({...exp, Job: e.target.value})}>
             </input>
             <label>Company: </label>
            <input type='text' value={exp.Company}
              onChange={(e)=>setExperience({...exp, Company: e.target.value})}>
             </input>
             <label>Description: </label>
            <input type='text' value={exp.Description}
              onChange={(e)=>setExperience({...exp, Description: e.target.value})}>
             </input>
             <label>Start date: </label>
            <input type='date' value={exp.From} 
              onChange={(e)=>setExperience({...exp, From: e.target.value})}>
              </input>
            <label>End date: </label>
            <input type='date' value={exp.End}
              onChange={(e)=>setExperience({...exp, End: e.target.value})}>
              </input>
            <div></div>
            <button onClick={handleClickExp}>Add</button>
          </div>
          <div className='EducationList'>
            <ul>
              {experience.map((exp)=>(
                <li key={exp.id}>
                  <div className='formPreview'>
                    <div>
                      <p><b>{exp.Job}</b></p>
                      <p>{exp.Company}: {exp.Description}</p>
                      <p>From: {exp.From}, To: {exp.End}</p>
                    </div>
                    <button 
                    className='deleteButton'
                    onClick={()=>deleteExpItem(exp.id)}>
                    Delete</button>
                  </div>
                  
                </li>
              ))}
            </ul>
          </div>
        </div>
        


        <div className='cv'>
          <Cv personalData={personalData} />
          <div className="resume">
            <h2>Education</h2>
            <ul>
              {education.map((edu)=>(
                <li key={edu.id}>
                  <p><b>{edu.Degree}</b></p>
                  <p>{edu.School} {edu.City}</p>
                  <p>From: {edu.From}, To: {edu.End}</p>
                </li>
              ))}
            </ul>
            <h2>Experience</h2>
            <ul>
              {experience.map((exp)=>(
                <li key={exp.id}>
                  <p><b>{exp.Job}</b></p>
                  <p>{exp.Company} {exp.Description}</p>
                  <p>From: {exp.From}, To: {exp.End}</p>
                </li>
              ))}
            </ul>
            </div>
        </div>
      </div>
    </>
  )
}


export default App