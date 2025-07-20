function EducationalBg (){
    const ExperienceBg = [
        {
            Institution : "Jamhuriya University",
            Role : "Student",
            Duration : "Jan 2023 - Now",
            Program : "Bachelor of Computer Applications (BCA)",
            Description : "Currently pursuing my BCA degree, where I’m building a strong foundation in computer science, programming principles, and web development. My studies focus on how to design, develop, and optimize digital systems that solve real-world problems."
        },
        {
            Institution : "Rise Academy",
            Role : "Student",
            Duration : "June 2024 – Sep 2024",
            Program : "Web Development Bootcamp",
            Description : ( <>Completed an intensive online bootcamp focused on full-stack web development. I gained hands-on experience in building responsive websites and applications using HTML, CSS, JavaScript, React, Node.js, Tailwind CSS, and Git. Earned a <strong>Certificate of Web Development </strong>. </>)
        },
        {
            Institution : "CodeAlpha",
            Role : "Remote Web Dev Intern",
            Duration : "July 2025 – Sep 2025",
            Description : (<>Participated in a remote internship program at CodeAlpha, where I worked on real-world web development tasks. This experience helped me apply my coding skills to practical projects, improve problem-solving, and collaborate in a remote team environment.</>)
        },
    ]
    return <div className=" pt-20 W-full pb-20 bg-[#F2F2F2] flex items-center flex-col justify-center ">
        <h1 className="text-center text-[30px] font-semibold"> Education </h1>
        <p className="text-center w-[450px] mt-3"> From theory to real code — my education gave me the tools, mindset, and confidence to start building meaningful, user-focused websites that solve real problems </p>
        <div className="w-[1050px] bg-white mt-10 px-[50px] pb-10">
            {
                ExperienceBg.map((info,index) => {
                    // give the border bottom all except the bottom one 
                    return <div key={index} className={`flex justify-between mt-10 ${index < 2 ? "border-b-[1.5px]  border-gray-200 pb-4" : ""}  `}>
                    <div>
                        <h1 className="font-semibold"> {info.Institution} </h1>
                        <div className="flex gap-2 mt-3">
                            <p> {info.Role}</p>
                            <p className="bg-orange  text-white px-2 py-1 text-[12px]"> {info.Duration} </p>
                        </div>
                    </div>
                    <div className="w-[550px]">
                        <h1 className="font-semibold"> {info.Program}</h1>
                        <p className=" mt-3"> {info.Description} </p>
                    </div>
                    </div>
                })
            }
        </div>

    </div>
}
export default EducationalBg;

// Great! Here's your updated **Educational Background section** including the **BCA**, the **Web Development Bootcamp**, and your **online internship at CodeAlpha**:

// ---

// ### 🎓 **Educational Background**

// #### 🏫 **Bachelor of Computer Applications (BCA)**

// **2023 – Present**
// Currently pursuing my BCA degree, where I’m building a strong foundation in computer science, programming principles, and web development. My studies focus on how to design, develop, and optimize digital systems that solve real-world problems.

// ---

// #### 💻 **Web Development Bootcamp**

// **June 2024 – September 2024**
// Completed an intensive online bootcamp focused on full-stack web development. I gained hands-on experience in building responsive websites and applications using HTML, CSS, JavaScript, React, Node.js, Tailwind CSS, and Git. Earned a <b>Certificate of Web Development</b>.

// ---

// #### 🌐 **Online Internship – CodeAlpha**

// **July 2025 – September 2025**
// Participated in a remote internship program at CodeAlpha, where I worked on real-world web development tasks. This experience helped me apply my coding skills to practical projects, improve problem-solving, and collaborate in a remote team environment.

// ---

// Let me know if you want this styled for your website (React/Tailwind), or want a shorter version for a CV!
