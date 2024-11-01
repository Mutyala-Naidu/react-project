function Greeting({name}){
    Greeting.defaultProps = {name : "guest"}

    return(
        <>
            <h1>Greeting</h1>
            <p>Hi {name} welcome to ameerpet</p>
            
        </>
    )
}
export default Greeting;