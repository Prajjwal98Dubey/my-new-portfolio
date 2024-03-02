import Navbar from "../components/Navbar"
import { GITHUB_ICON_IMG, LINKEDIN_ICON_IMG } from "../images"


const Home = () => {
  return (
    <div className="font-madam">
        <Navbar/>
        <div className="p-10">

        
        <div className="text-center pl-10 pt-10 pr-10 text-7xl font-semibold text-white">
                Hi...
        </div>
        <div className="pl-5 pt-5 pr-5 text-white font-semibold text-center text-4xl">myself <span className="text-[#2ACB69]">Prajjwal Dubey</span></div>
        <div className="pl-5 pt-5 pr-5 text-white text-3xl text-center">
            I am Software Engineer working at Cognizant.
        </div>
        <div className=" text-white text-xl text-center">
            {`and i know how to center <div></div> tag.`}
        </div>
        <div className="flex justify-center pl-4 pt-4 pr-4">
            <a href="https://github.com/Prajjwal98Dubey" target="_blank"><div className="w-[50px] h-[50px] border border-gray-400 flex justify-center items-center rounded-full m-1 cursor-pointer hover:border-white "><img src={GITHUB_ICON_IMG} alt="loading"  /></div></a>
            <a href="https://www.linkedin.com/in/prajjwal-dubey-8a1938182/" target="_blank"><div className="w-[50px] h-[50px] border border-gray-400 flex justify-center items-center rounded-full m-1 cursor-pointer hover:border-white"><img src={LINKEDIN_ICON_IMG} alt="loading"  /></div></a>
        </div>
    </div>
    <div className="flex justify-center">
        <a href="https://purple-terra-60.tiiny.site" target="_blank" className="text-white text-xl font-semibold hover:text-green-400">
            Check my resume
        </a>
    </div>
    </div>
  )
}

export default Home