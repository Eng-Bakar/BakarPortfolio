function ContactMe (){
    return <div className="w-full flex justify-center gap-10 pt-10 bg-simpleCoffee/10 pb-[20px] mt-20">
        <div className="">
            <h1 className="font-semibold text-[20px] mb-6"> Leave Me Your Info </h1>
            <div className="w-[450px] pb-[20px] rounded-xl p-[20px] bg-white">
                <div>
                    <label className="text-gray-500"> Your Full Name ( Required )</label>
                    <input className="w-full h-[42px] mt-1 px-2 bg-simpleCoffee/7 outline-none" type="text" />
                </div>
                <div className="mt-4">
                    <label className="text-gray-500"> Your Email ( Required )</label>
                    <input className="w-full h-[42px] mt-1 px-2 bg-simpleCoffee/7 outline-none" type="email" />
                </div>
                <div className="mt-4">
                    <label className="text-gray-500"> Subject</label>
                    <input className="w-full h-[42px] mt-1 px-2 bg-simpleCoffee/7 outline-none" type="text" />
                </div>
                <div className="mt-4">
                    <label className="text-gray-500"> Your Message </label>
                    <textarea className="w-full h-[110px] mt-1 px-2 bg-simpleCoffee/7 outline-none"></textarea>
                </div>
                <button className="px-8 py-2 bg-orange hover:bg-orange/80  rounded-md text-white mt-2"> Send Message </button>

            </div>

        </div>
        <div className="">
            <h1 className="font-semibold text-[20px] mb-6"> Contact Information </h1>
            <div className="w-[300px] h-[500px] flex space-y-5 flex-col  ">
                <div className="w-full h-[150px] rounded-xl bg-white"></div>
                <div className="w-full h-[150px] rounded-xl bg-white"></div>
                <div className="w-full h-[150px] rounded-xl bg-white"></div>

            </div>

        </div>

    </div>
}
export default ContactMe