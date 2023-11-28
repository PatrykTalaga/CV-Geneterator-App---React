function InputForm({
    personalData,
    onClick,
    nameChange,
    addressChange,
    addressLineTwoChange,
    eMailChange,
    telChange,
}){


    if(personalData.status == false){
        return(
            <>
                <form className="myGrid width100">
                    <label>Name: </label>
                    <input 
                        type="text" name="name"
                        defaultValue={personalData.name}
                        onChange={nameChange}
                     />
                    <label className="twoRows">Address: </label>
                    <input 
                        type="text" name="address"
                        defaultValue={personalData.address}
                        onChange={addressChange}
                     />
                    <input 
                        type="text" name="addressLineTwo"
                        defaultValue={personalData.addressLineTwo}
                        onChange={addressLineTwoChange}
                     />
                    <label>E-mail: </label>
                    <input 
                        type="text" name="eMail"
                        defaultValue={personalData.eMail}
                        onChange={eMailChange}
                     />
                    <label>Phone: </label>
                    <input 
                        type="text" name="name"
                        defaultValue={personalData.tel}
                        onChange={telChange}
                     />
                    <div></div>
                    <button onClick={onClick} >Submit</button>
                </form>
                
                
                
            </>
        )
    }else{
        return(
            <div>
                <p><b>Name:</b> {personalData.name}</p>
                <p><b>Address:</b> {personalData.address}</p>
                <p><b>Address:</b> {personalData.addressLineTwo}</p>
                <p><b>e-mail:</b> {personalData.eMail}</p>
                <p><b>phone:</b> {personalData.tel}</p>
                <button onClick={onClick}>Edit</button>
            </div>
        )
    }
}


export default InputForm

