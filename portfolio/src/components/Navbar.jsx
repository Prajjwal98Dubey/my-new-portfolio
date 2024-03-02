import { Link } from "react-router-dom"

const Navbar = () => {
  return (
      <div className="p-7">
     <div className='w-full h-[45px] rounded-lg font-madam flex justify-evenly text-md bg-blue-300 items-center'>
        <Link to="/">
        <div className="w-[100px] h-fit rounded-2xl hover:bg-blue-500/70 text-center cursor-pointer">Home</div>
         </Link>
         <Link to="/carrer">
        <div className="w-[100px] h-fit rounded-2xl hover:bg-blue-500/70 text-center cursor-pointer">Carrer</div>
         </Link>
         <Link to="/projects">
        <div className="w-[100px] h-fit rounded-2xl hover:bg-blue-500/70 text-center cursor-pointer">Projects</div>
         </Link>
         <Link to="/skills">
        <div className="w-[100px] h-fit rounded-2xl hover:bg-blue-500/70 text-center cursor-pointer">Skills</div>
         </Link>
     </div>
      </div>
  )
}

export default Navbar