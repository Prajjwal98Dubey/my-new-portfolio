import Navbar from "../components/Navbar"

const Carrer = () => {
    return (
        <div className="font-madam">
            <Navbar />
            <div className="flex justify-center p-2 text-white">
                <div>
                    <div className=" text-green-400 font-semibold text-center text-2xl">
                        Cognizant Technology Solutions
                        <span className="text-sm text-white pl-1">31/8/2022 - present</span>
                    </div>
                    <div className="text-center">Programmer Analyst</div>
                    <div className="text-center">Bengaluru,Karnataka</div>
                    <div className="w-[450px] flex justify-center">
                        <div className="">
                            <div>•Currently working on a finance-related project that involves the use of the Peoplesoft application.</div>
                            <div>•Resolved queries by utilizing the PeopleCode programming language.</div>
                            <div>•Developed components related to user details using the application engine.</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex justify-center p-2 text-white">
                <div>
                    <div className=" text-green-400 font-semibold text-center text-2xl">
                        Infosys
                        <span className="text-sm text-white pl-1">31/01/2022 - 20/04/2022</span>
                    </div>
                    <div className="text-center">Intern</div>
                    <div className="text-center">Bengaluru,Karnataka</div>
                    <div className=" w-[450px] flex justify-center">
                        <div>
                            <div>•Build news junction, a daily news reading web application with the help of
                                NEWSAPI.</div>
                            <div>•Received training in React.js and Node.js.</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Carrer