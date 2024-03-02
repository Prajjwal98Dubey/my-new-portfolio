import Navbar from "../components/Navbar"
import { EXPRESS_IMG, GIT_IMG, HTML_IMG, JS_IMG, MONGO_DB_IMG, MY_SQL_IMG, NODE_IMG, POSTMA_IMG, PY_IMG, REACT_IMG, REDUX_IMG, TAILWIND_IMG, TS_IMG } from "../images"

const Skills = () => {
    return (
        <div>
            <Navbar />
            <div className="flex justify-center text-white font-madam p-2">
                <div>
                    <div className=" w-[900px] flex justify-between">
                        <div className="text-3xl font-bold flex items-center ">Languages</div>
                        <div className="w-[500px]">
                            <div className="flex flex-wrap">
                                <img src={JS_IMG} alt="loading" className="w-[70px] h-[70px]  m-1" />
                                <img src={PY_IMG} alt="loading" className="w-[70px] h-[70px]  m-1" />
                                <img src={TS_IMG} alt="loading" className="w-[70px] h-[70px]  m-1" />
                            </div>
                        </div>
                    </div>
                    <div className="w-[900px] flex justify-between mt-4">
                        <div className="text-3xl font-bold flex items-center ">Frontend</div>
                        <div className="w-[500px]">
                            <div className="flex flex-wrap ">
                                <img src={JS_IMG} alt="loading" className="w-[70px] h-[70px]  m-1" />
                                <img src={TS_IMG} alt="loading" className="w-[70px] h-[70px]  m-1" />
                                <img src={REACT_IMG} alt="loading" className="w-[70px] h-[70px]  m-1" />
                                <img src={REDUX_IMG} alt="loading" className="w-[70px] h-[70px]  m-1" />
                                <img src={HTML_IMG} alt="loading" className="w-[70px] h-[70px]  m-1" />
                                <img src={TAILWIND_IMG} alt="loading" className="w-[70px] h-[70px]  m-1" />
                            </div>
                        </div>
                    </div>
                    <div className="w-[900px] flex justify-between mt-4">
                        <div className="text-3xl font-bold flex items-center ">Backend</div>
                        <div className="w-[500px]">
                            <div className="flex flex-wrap ">
                                <img src={JS_IMG} alt="loading" className="w-[70px] h-[70px]  m-1 " />
                                <img src={TS_IMG} alt="loading" className="w-[70px] h-[70px]  m-1" />
                                <img src={NODE_IMG} alt="loading" className="w-[70px] h-[70px]  m-1" />
                                <img src={EXPRESS_IMG} alt="loading" className="w-[70px] h-[70px]  m-1" />
                            </div>
                        </div>
                    </div>
                    <div className="w-[900px] flex justify-between mt-4">
                        <div className="text-3xl font-bold flex items-center ">Database</div>
                        <div className="w-[500px]">
                            <div className="flex flex-wrap ">
                                <img src={MONGO_DB_IMG} alt="loading" className="w-[70px] h-[70px] m-1" />
                                <img src={MY_SQL_IMG} alt="loading" className="w-[70px] h-[70px] m-1" />

                            </div>
                        </div>
                    </div>
                    <div className="w-[900px] flex justify-between mt-4">
                        <div className="text-3xl font-bold flex items-center ">Tools</div>
                        <div className="w-[500px]">
                            <div className="flex flex-wrap ">
                                <img src={GIT_IMG} alt="loading" className="w-[70px] h-[70px] m-1" />
                                <img src={POSTMA_IMG} alt="loading" className="w-[70px] h-[70px] m-1" />

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Skills