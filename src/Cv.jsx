function Cv({personalData}){
    return(
        <>
            <div className="personalData">
                <h2>{personalData.name}</h2>
                <p>{personalData.address}</p>
                <p>{personalData.addressLineTwo}</p>
                <p>e-mail: {personalData.eMail}</p>
                <p>Phone number: {personalData.tel}</p>
            </div>
        </>
    )
}

export default Cv