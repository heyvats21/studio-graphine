export default function Validation(values){
    const errors={}
    const emailPattern=/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/
    if(values.name===""){
        errors.name="Name is Required";
    }
    if(values.email===""){
        errors.email="Email Required";
    }
    else if(!emailPattern.test(values.email)){
        errors.email="Email is not correct";
    }
   
    if(values.message===""){
        errors.message="Please enter your message"
    }
    return errors;
}