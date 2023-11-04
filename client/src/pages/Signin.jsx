import {useState} from 'react'
import {Link, useNavigate} from 'react-router-dom'
import axios from 'axios'


const Signin = () => {

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
    
     /*const response = await fetch('/api/auth/signin',{
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

     axios.post('/api/auth/signin', formData)
     .then(function (response) {
      console.log(response);
       
      setLoading(false);
      setError(false);

      navigate('/');

    })
    .catch(function (error) {
      //console.log(error);
      setLoading(false);
      setError(true);

    });
  };


  return (
    <div className='p-3 max-w-lg mx-auto'>
      <h1 className='text-3xl  text-center font-bold my-7'>Sign In</h1>

      <form className='flex flex-col m-5 gap-4' onSubmit={submitHandler}>

        <input  type='email' placeholder='Email'  id='email' className='bg-slate-200 p-3 rounded-md'
           onChange={handleChange}/>
        <input  type='password' placeholder='Password'  id='password' className='bg-slate-200 p-3 rounded-md'
           onChange={handleChange}/>
        <button className='bg-blue-400 text-white rounded-md p-3 hover:opacity-80'>SIGN IN</button>
      </form>

      <div>
        <p>No account ? </p>
           <Link to='/signup'><button className='bg-blue-400 text-white rounded-md p-3 hover:opacity-80'>Sign Up</button></Link>
      </div>
    </div>
  )
}

export default Signin