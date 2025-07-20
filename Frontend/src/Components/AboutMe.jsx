import { CiMobile3 } from "react-icons/ci";
import { CgWebsite } from "react-icons/cg";
import { MdOutlineDisplaySettings } from "react-icons/md";



function AboutMe (){
    const ServiceInfo = [
        {
            Icon: CiMobile3, title: "Responsive Design", Description: "Websites that look great and work smoothly on any device like phone, tablet, or desktop" 
        },
        {
            Icon: CgWebsite, title: "Web Application Development", Description: "Powerful web apps like dashboards, booking systems, and admin panels built to streamline your business"
        },
        {
            Icon: MdOutlineDisplaySettings, title: "Maintenance & Optimization", Description: "Keeping your site fast, secure, and up-to-date so it always performs at its best"
        },

        
       
    ]
    return <div className="w-full pb-12 px-[50px] bg-[#f2f2f2] mt-10">
        
        <div className="flex flex-col justify-center items-center">
            <h1 className="text-center font-semibold text-[30px] pt-10 "> About Me</h1>
            <hr className="border-orange w-[100px] border-2" />
        </div>
        <p className="text-center mt-10">Hi, I’m <span className=""> Abukar Ibrahim Mohamed </span>. I build websites and web systems that actually help your business grow. I don’t just write code — I create tools that solve your problems and make things easier.
        You don’t just need any developer, you need someone who understands your goals and turns ideas into real solutions that save time and bring in customers. That’s what I do.
        Whether you want a custom website, a portfolio, or a dashboard, I’ll deliver it on time with a mix of creativity and smart thinking.
        Let’s create something that works — and looks great too.</p>
        <div className="flex justify-center gap-10 mt-12">
            {ServiceInfo.map((service,index) => {
                const Icon = service.Icon;
                return <div className="w-[250px] h-[250px] flex flex-col text-center items-center justify-center px-3  bg-white rounded-md">
                            <div className="w-[40px] h-[40px] flex items-center justify-center rounded-xl bg-[#f8ddce] ">
                                <Icon className="text-[22px] text-orange" />
                            </div>
                            <h1 className="mt-3 text-[15px] font-semibold"> {service.title} </h1>
                            <p className="text-[14px] mt-1"> {service.Description} </p>
                        </div>
            })}    
        </div>

    </div>
}
export default AboutMe;