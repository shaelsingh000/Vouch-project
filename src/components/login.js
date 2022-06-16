import React, {useState} from 'react'


const Login = (props) => {
    const [credentials, setCredentials] = useState({email: "", password: ""}) 
    

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch("https://reqres.in/api/login", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({email: credentials.email, password: credentials.password})
        });
        const json = await response.json()
        console.log(json);
        if (json.token==="QpwL5tke4Pnpja7X4"){
            // Save the auth token and redirect
            localStorage.setItem('token', json.authtoken); 
            alert(json.token,"success")
        }
        else{
            alert("Missing Password","danger")
        }
    }

    const onChange = (e)=>{
        setCredentials({...credentials, [e.target.name]: e.target.value})
    }

    return (
        <>
        <div>
        <div className='image container'>
            <img src={require('./a.jpg')} alt="banner" />
        </div>
        <div className='login container bd-dark text-dark d-flex flex-column d-flex align-items-center justify-content-between '>
            <h1 className='Welcome'>Welcome Back</h1>
            <p>Sub-title text</p>
            <form  onSubmit={handleSubmit}>
                <div className="mb-3">
                    
                    <input type="email" className="form-control" placeholder="Email Address*" value={credentials.email} onChange={onChange} id="email" name="email" aria-describedby="emailHelp" />
                    
                </div>
                <div className="mb-3">
                   
                    <input type="password" className="form-control"  placeholder="Password*" onChange={onChange} name="password" id="password" value={credentials.password} />
                </div>
                <div className='mb-3'>
                <input type="submit" className=" btn btn-dark btn-lg btn-block" id= "submit" value="Login"/>
                </div>
                
                <div className='d-flex'>
                    <div className="mr-auto p-2">
                        <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                        <label className="form-check-label" >Remember me</label>
                    </div>
                    <a href="/" className='p-2'>Forgotten password?</a>
                
                </div>
                
            </form>
        </div>
        </div>
        </>
    )
}

export default Login