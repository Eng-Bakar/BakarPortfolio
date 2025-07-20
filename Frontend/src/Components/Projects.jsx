import NovaCare from "../Images/NovaCare.png"
import Gaariye from "../Images/Gaariye.png"
import iRisehub from "../Images/Irisehub.png"
function Projects () {
    return <div className="mt-25 px-[30px]  w-full">
        <h1 className="text-[25px] font-semibold"> Latest Projects </h1>
        <div className="w-full mt-8 flex justify-around  ">
            <div className="w-[300px]  ">
                <div className="w-[300px] h-[300px] overflow-hidden bg-orange/40  rounded-xl">
                    <img className="w-full h-full object-cover" src={NovaCare} alt="" />
                </div>
                <div className="w-[90px] flex items-center justify-center text-center h-[90px] z-10 absolute bg-simpleCoffee rounded-xl ml-60 -mt-12 ">
                    <h1 className="text-[50px] text-white">01</h1>
                </div>
                <h1 className="mt-4 text-[18px]"> ICT Solution Co.</h1>
            </div>
            <div className="w-[300px] mt-16 ">
                 <div className="w-[300px] h-[300px] overflow-hidden bg-orange/40  rounded-xl">
                    <img className="w-full h-full object-cover" src={Gaariye} alt="" />
                </div>
                <div className="w-[90px] flex items-center justify-center text-center h-[90px] z-10 absolute bg-simpleCoffee rounded-xl ml-60 -mt-12 ">
                    <h1 className="text-[50px] text-white">02</h1>
                </div>
                <h1 className="mt-4 text-[18px]"> Real Houses</h1>
            </div>
            <div className="w-[300px] mt-32 ">
                <div className="w-[300px] h-[300px] overflow-hidden bg-orange/40  rounded-xl">
                    <img className="w-full h-full object-cover" src={iRisehub} alt="" />
                </div>
                <div className="w-[90px] flex items-center justify-center text-center h-[90px] z-10 absolute bg-simpleCoffee rounded-xl ml-60 -mt-12 ">
                    <h1 className="text-[50px] text-white">03</h1>
                </div>
                <h1 className="mt-4 text-[18px]"> iRiseHup </h1>
            </div>
            
        </div>

    </div>
}
export default Projects;