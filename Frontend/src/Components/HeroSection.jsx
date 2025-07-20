import Header from "../Components/Header"
import { GoDownload } from "react-icons/go";
import Me from "../Images/Me.jpeg"

function HeroSection (){
    return <div className="w-full h-[600px] bg-gradient-to-b from-orange to-white justify-between">
            <Header />
        <div className="flex justify-around mt-18  px-[30px]">
            <div className="w-[350px]">
                <h1 className="text-[70px] leading-[70px] font-Mono"> I'm <br />  Eng <span className="text-white"> Bakar </span> </h1>
                <p className="mt-3 text-[18px] text-white "> Helping Companies Grow Faster, Serve Smarter, And Reach Wider. </p>
                <button className="bg-white w-[130px] h-[45px]  mt-4 flex justify-center items-center gap-2 text-sampleCoffee rounded-xl"> Resume <GoDownload className="text-[20px]" /></button>
            </div>
            <div className="w-[340px] rounded-b-[25px] rounded-tl-[25px] overflow-hidden border-[#e07b33] border-4 h-[410px]">
                <img className="w-full h-full  object-cover" src={Me} alt="" />
            </div>
        </div>
    </div>
}
export default HeroSection;