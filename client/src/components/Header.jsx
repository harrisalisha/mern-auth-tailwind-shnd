import {Link} from 'react-router-dom'

const Header = () => {
  return (
    <div className='bg-slate-200'>
        <div className='flex justify-between p-3 mx-auto max-w-x6l'>
        <Link to='/'><h1 className='font-bold'>Auth App</h1></Link>
        <ul className='flex gap-4'>
            <Link to='/about'><li>About</li></Link>
            <Link to='/signin'><li>signin</li></Link>
            <Link to='/signup'><li>Signup</li></Link>
        </ul>
        </div>
    </div>
)}

export default Header