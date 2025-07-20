// frontend
import HTML5 from "../Images/TechStacks-icons/HTML5.png"
import CSS3 from "../Images/TechStacks-icons/CSS3.png"
import Tailwind from "../Images/TechStacks-icons/TailwindCSS.png"
import JavaScript from "../Images/TechStacks-icons/JS (2).png"
import ReactJS from "../Images/TechStacks-icons/ReactJS.png"
import Figma from "../Images/TechStacks-icons/Figma.png"
// Backend
import NodeJS from "../Images/TechStacks-icons/NodeJS.png"
import ExpressJS from "../Images/TechStacks-icons/ExpressJS.png"
import MongoDB from "../Images/TechStacks-icons/MongoDB.png"
// Other tools & platforms 
import Git from "../Images/TechStacks-icons/Git.png"
import GitHub from "../Images/TechStacks-icons/GitHub.png"
import VSCode from "../Images/TechStacks-icons/VS Code.png"
import Netlify from "../Images/TechStacks-icons/Netlify.png"
import Varcel from "../Images/TechStacks-icons/Varcel.png"
import Render from "../Images/TechStacks-icons/Render.png"
import { useState } from "react"

function TechSkills (){
  const [OpenTab, setOpenTab] = useState("frontend")

  return <div>
    <h1 className="text-[30px] text-center mt-20 font-semibold "> Tech Stack I Use</h1>
    <p className="text-center ">These are the tools, technologies, and frameworks I use to build fast, <br /> responsive, and modern web applications. </p>
    <div className="w-full flex justify-center space-x-4 mt-10 items-center">
      <button onClick={() => setOpenTab("frontend")} className={`px-7 py-2 ${OpenTab === "frontend" ? " bg-simpleCoffee " : "bg-orange"}  rounded-xl hover:bg-simpleCoffee/90 font-medium  text-white`}> Frontend </button>
      <button onClick={() => setOpenTab("backend")} className={`px-7 py-2 ${OpenTab === "backend" ? " bg-simpleCoffee " : "bg-orange"}  rounded-xl hover:bg-simpleCoffee/90 font-medium  text-white`}> Backend </button>
      <button onClick={() => setOpenTab("toolsNPlatforms")} className={`px-7 py-2 ${OpenTab === "toolsNPlatforms" ? " bg-simpleCoffee " : "bg-orange"}  rounded-xl hover:bg-simpleCoffee/90 font-medium  text-white`}> Tools & Platforms </button>

    </div>
    {/* Frontend Softwares */}
    {
      OpenTab === "frontend" && (
        <div className="grid grid-cols-[120px_120px_120px_120px_120px_] items-center justify-center gap-x-10 gap-y-10 mt-10">
          <div className="w-[120px] h-[120px] flex items-center justify-center rounded-xl bg-simpleCoffee/10">
            <img className="w-[70px]" src={HTML5} alt="" />
          </div>
          <div className="w-[120px] h-[120px] flex items-center justify-center rounded-xl bg-simpleCoffee/10">
            <img className="w-[53px]" src={CSS3} alt="" />
          </div>
          <div className="w-[120px] h-[120px] flex items-center justify-center rounded-xl bg-simpleCoffee/10">
            <img className="w-[70px]" src={Tailwind} alt="" />
          </div>
          <div className="w-[120px] h-[120px] flex items-center justify-center rounded-xl bg-simpleCoffee/10">
            <img className="w-[70px]" src={JavaScript} alt="" />
          </div>
          <div className="w-[120px] h-[120px] flex items-center justify-center rounded-xl bg-simpleCoffee/10">
            <img className="w-[70px]" src={ReactJS} alt="" />
          </div>
          
        </div>
       )
    }

    {/* Backend Softwares */}
    {
      OpenTab === "backend" && (
        <div className="grid grid-cols-[120px_120px_120px] items-center justify-center gap-x-10 gap-y-10 mt-10">
          <div className="w-[120px] h-[120px] flex items-center justify-center rounded-xl bg-simpleCoffee/10">
            <img className="w-[70px]" src={NodeJS} alt="" />
          </div>
          <div className="w-[120px] h-[120px] flex items-center justify-center rounded-xl bg-simpleCoffee/10">
            <img className="w-[53px]" src={ExpressJS} alt="" />
          </div>
          <div className="w-[120px] h-[120px] flex items-center justify-center rounded-xl bg-simpleCoffee/10">
            <img className="w-[70px]" src={MongoDB} alt="" />
          </div>
        </div>
      )
    }

    {/* Other Tools & Platforms */}
    {
      OpenTab === "toolsNPlatforms" && (
        <div className="grid grid-cols-[120px_120px_120px_120px_120px_120px_120px] items-center justify-center gap-x-10 gap-y-10 mt-10">
          <div className="w-[120px] h-[120px] flex items-center justify-center rounded-xl bg-simpleCoffee/10">
            <img className="w-[80px]" src={Git} alt="" />
          </div>
          <div className="w-[120px] h-[120px] flex items-center justify-center rounded-xl bg-simpleCoffee/10">
            <img className="w-[90px]" src={GitHub} alt="" />
          </div>
          <div className="w-[120px] h-[120px] flex items-center justify-center rounded-xl bg-simpleCoffee/10">
            <img className="w-[55px]" src={VSCode} alt="" />
          </div>
          <div className="w-[120px] h-[120px] flex items-center justify-center rounded-xl bg-simpleCoffee/10">
            <img className="w-[110px]" src={Netlify} alt="" />
          </div>
          <div className="w-[120px] h-[120px] flex items-center justify-center rounded-xl bg-simpleCoffee/10">
            <img className="w-[90px]" src={Varcel} alt="" />
          </div>
          <div className="w-[120px] h-[120px] flex items-center justify-center rounded-xl bg-simpleCoffee/10">
            <img className="w-[90px]" src={Render} alt="" />
          </div>
          <div className="w-[120px] h-[120px] flex items-center justify-center rounded-xl bg-simpleCoffee/10">
            <img className="w-[70px]" src={Figma} alt="" />
          </div>
        </div>
      )
    }
  </div>
}
export default TechSkills