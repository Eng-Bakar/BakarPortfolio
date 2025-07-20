import BakarLogo from "../Images/BakarLogoTrans.png"
function Header (){
    return <div className="flex justify-between pt-5 items-center px-[30px]">
            <img className="w-[100px]  " src={BakarLogo} alt="" />
            <ul className="flex gap-4 text-[18px] text-white  ">
                <li className="hover:text-simpleCoffee hover:underline"> Home </li>
                <li className="hover:text-simpleCoffee hover:underline"> About Me </li>
                <li className="hover:text-simpleCoffee hover:underline"> Projects </li>
                <li className="hover:text-simpleCoffee hover:underline"> Tech Stacks </li>
                <li className="hover:text-simpleCoffee hover:underline"> Contact</li>
            </ul>
            <button className="w-[130px] h-[45px] rounded-md bg-white pt-[3px] hover:bg-transparent hover:border-2 hover:border-white hover:text-white font-medium text-simpleCoffee"> Contact Me </button>

    </div>
}
export default Header