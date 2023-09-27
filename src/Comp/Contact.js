import React, { useState } from 'react'
import './Footer.css'
import Validation from './Validation'

function Contact() {
    const [values,setvalues]=useState({
        name:'',
        email:'',
        message:''
    })
    const[errors,seterror]=useState({})

    function handleInput(event){
        const newobj={...values,[event.target.name]:event.target.value}
        setvalues(newobj)
        seterror(Validation(newobj))
    }

    
    const handlesubmit=(e)=>{
        // console.log("erros name: ",errors);
        if(Object.keys(errors).length==0 && (values.name!="" && values.email!="" && values.message!="")){
            alert("Form has been successfully submitted")
        }
        else{
            alert("Please fill up the form")
        }
    }
    return (
        <div className='pagefooter'>
            <div className='blackbackground'>

                <div className='mainfooter'>
                    <div className='newsletter'>
                        <h2 className='newshead'>Newsletter</h2>
                        <p className='newspara'>Get News about articles and updates in your inbox</p>
                    </div>
                    <div className='contactform'>

                        <input type='text' placeholder='NAME' name='name' className='form-control' onChange={handleInput}/>
                        {errors.name && <p style={{color:'red'}}>{errors.name}</p> }
                        <input type='text' placeholder='EMAIL' name='email' className='form-control' onChange={handleInput}/>
                        {errors.email && <p style={{color:'red'}}>{errors.email}</p> }

                        <input type='text' placeholder='MESSAGE' name='message' className='form-control' onChange={handleInput}/>
                        {errors.message && <p style={{color:'red'}}>{errors.message}</p> }
                    </div>

                </div>
                <div className='getintouch'>
                <div className='contactfooter'>
                    <h1 className='contacth1'>GET</h1>
                    <h1 className='contacth1'>IN TOUCH</h1>
                </div>
                <div className='contactbutton'>
                    <button className='sendbutton' onClick={()=>handlesubmit()}>SEND</button>
                </div>
                </div>

            </div>

            <div className='copywrite'>
                <p className='copywritepara'>Copyright 2022 All Right Reserved By SG</p>
            </div>
        </div>

    )
}

export default Contact