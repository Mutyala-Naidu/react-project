function Emp({empObj}){

    return(
        <>
            <h1>emp details</h1>
            <p>emp id: {empObj.id}</p>
            <p>emp name: {empObj.name}</p>
            <p>emp salry: {empObj.salary}</p>
        </>
    )
}
export default Emp;