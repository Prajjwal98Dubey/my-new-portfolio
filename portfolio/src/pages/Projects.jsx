import Navbar from "../components/Navbar"
import { LINK_ICON_IMG } from "../images"

const Projects = () => {
    return (
        <div className="font-madam">
            <Navbar />
            <div className="pl-5 pt-5 pr-5">
                <div className="p-2 text-white">
                    <div className="p-2">
                        <div className="flex justify-center text-3xl font-semibold text-[#2ACB69]">Travel Mate <a className="text-sm flex justify-center items-center pl-2" href="https://github.com/Prajjwal98Dubey/Travel-mate" target="_blank">
                            <span className=""><img src={LINK_ICON_IMG} alt="loading" className="w-[20px] h-[20px]" /></span></a></div>
                        <div className="flex justify-center text-sm ">Travel mate connects like-minded solo travellers to enhance their travel experience.</div>
                        <div className="flex justify-center">
                            <a href="https://github.com/Prajjwal98Dubey/Travel-mate?tab=readme-ov-file#tech-stack" target="_blank">
                                <div className="text-center hover:underline cursor-pointer w-fit text-[#2ACB69] ">Tech Stack
                                </div>
                            </a>
                        </div>
                        <div className="flex justify-center">
                            <a href="https://github.com/Prajjwal98Dubey/Travel-mate?tab=readme-ov-file#features" target="_blank">
                            <div className="text-center hover:underline cursor-pointer w-fit text-[#2ACB69]">Features</div>
                            </a>
                        </div>
                    </div>

                    <div className="p-2">
                        <div className="flex justify-center text-3xl font-semibold text-[#2ACB69]">Car Bid <a className="text-sm flex justify-center items-center pl-2" href="https://github.com/Prajjwal98Dubey/bid-my-car" target="_blank">
                            <span className=""><img src={LINK_ICON_IMG} alt="loading" className="w-[20px] h-[20px]" /></span></a></div>
                        <div className="flex justify-center text-sm ">web platform facilitating car auctions, enabling users to bid on vehicles, view detailed listings and track bids,</div>
                        <div className="flex justify-center">
                            <a href = "https://github.com/Prajjwal98Dubey/bid-my-car?tab=readme-ov-file#tech-stack" target="_blank">
                            <div className="text-center hover:underline cursor-pointer w-fit text-[#2ACB69] ">Tech Stack
                            </div>
                            </a>
                            
                        </div>
                        <div className="flex justify-center">
                            <a href="https://github.com/Prajjwal98Dubey/bid-my-car?tab=readme-ov-file#features" target="_blank">

                            <div className="text-center hover:underline cursor-pointer w-fit text-[#2ACB69]">Features</div>
                            </a>
                        </div>
                    </div>
                    <div className="p-2">
                        <div className="flex justify-center text-3xl font-semibold text-[#2ACB69]">Easy Shop<a className="text-sm flex justify-center items-center pl-2" href="https://github.com/Prajjwal98Dubey/E-Commercer" target="_blank">
                            <span className=""><img src={LINK_ICON_IMG} alt="loading" className="w-[20px] h-[20px]" /></span></a></div>
                        <div className="flex justify-center text-sm ">e-commerce web application.</div>
                        <div className="flex justify-center">
                            <a href= "https://github.com/Prajjwal98Dubey/E-MarketPlace?tab=readme-ov-file#tech-stack" target="_blank">
                            <div className="text-center hover:underline cursor-pointer w-fit text-[#2ACB69] ">Tech Stack
                            </div>
                            </a>
                        </div>
                        <div className="flex justify-center">
                            <a href= "https://github.com/Prajjwal98Dubey/E-MarketPlace?tab=readme-ov-file#features" target="_blank">
                            <div className="text-center hover:underline cursor-pointer w-fit text-[#2ACB69]">Features</div>
                            </a>
                        </div>
                    </div>


                </div>
                <div className="flex justify-center text-white p-4 text-xl">
                    <a href="https://github.com/Prajjwal98Dubey?tab=repositories" target="_blank">
                        <div className="w-fit hover:underline cursor-pointer hover:text-green-400 ">More Projects...</div>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Projects