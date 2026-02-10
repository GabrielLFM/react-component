function TextButton(params) {
    console.log(params)
    
    let obj = {
        name: "Gabriel",
        age: 16,
        address:"Rua Sinfonia Italiana",
        phoneNumber:"11995979671"
    }

    console.log(obj.name);
    console.log(obj.age);
    console.log(obj.address);
    console.log(obj.phoneNumber);
    
    let { name, age} = obj

    console.log(name);
    console.log(age);
    
    
    
    return(
        <button type="button">
            {params.label}
        </button>
    )
}
export default TextButton