import { useState } from 'react';
import { Link, useNavigate} from 'react-router-dom'
import axios from 'axios'

const Signup = () => {
  const [formData, setFormData] = useState({});
  const [error, setError]= useState(false);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleChange =(e)=> {
    setFormData({...formData, [e.target.id]: e.target.value});
  }

  function submitHandler(e){
    e.preventDefault();
    //submit data to backend used axios
    
     /*const response = await fetch('/api/auth/signup',{
        method: "POST", 
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
     const data = await response.json();
     console.log("success", data);*/
     setLoading(true);
     setError(false);

     axios.post('/api/auth/signup', formData)
     .then(function (response) {
      console.log(response);
       
      setLoading(false);
      setError(false);

      navigate('/signin');

    })
    .catch(function (error) {
      //console.log(error);
      setLoading(false);
      setError(true);

    });
  };

  return (
    <div className='p-3 max-w-lg mx-auto'>
      <h1 className='text-3xl  text-center font-bold my-7'>Sign Up</h1>
      <form className='flex flex-col m-5 gap-4' onSubmit={submitHandler}>
        <input  type='text' placeholder='Name'  id='name' className='bg-slate-200 p-3 rounded-md'
          onChange={handleChange}/>
        <input  type='email' placeholder='Email'  id='email' className='bg-slate-200 p-3 rounded-md'
          onChange={handleChange}/>
        <input  type='password' placeholder='Password'  id='password' className='bg-slate-200 p-3 rounded-md'
          onChange={handleChange}/>
        <button className='bg-blue-400 text-white rounded-md p-3 hover:opacity-80'>{loading ? 'loading...' : 'SIGN ME UP'}</button>
      </form>
      
      <div>
        <p>Have an account ? </p>
           <Link to='/signin'><button className='bg-blue-400 text-white rounded-md p-3 hover:opacity-80'>Sign in</button></Link>
      </div>
     {/*} <p className='text-red-500 m-5'>{error && 'Some thing went wrong...'}</p> */}
    </div>
  )
}

export default Signup