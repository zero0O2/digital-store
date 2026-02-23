import { Link } from "react-router-dom"
import miniCart from "../assets/mini-cart.svg"
import { CiSearch } from "react-icons/ci";
import Logo from "./Logo.jsx"
import NavBar from "./NavBar.jsx"

const Header = ({isPage}) => {
    return(
        <>
            <div class="h-[140px] max-[640px]:h-[110px] bg-[var(--second)] flex  flex-col justify-between z-10 py-[10px] px-[30px]" classeparamobile="">
                <div class="flex justify-center  items-center gap-x-[40px]">
                    <div class="max-[800px]:hidden">
                        <Logo isLogo="header"/>
                    </div>
                    <div class="min-w-[40px] overflow-hidden rounded-[4px] min-h-[40px] bg-amber-700 min-[800px]:hidden">
                        <Logo isLogo="ico"/>
                    </div>

                    <div class=" flex items-center bg-[var(--white)] gap-x-[10px] h-[44px] w-[500px] min-w-[200px] px-[10px] rounded-[4px] ">
                        <CiSearch class="text-[20px]"/>
                        <input type="text" class="bg-transparent h-[100%] w-[100%] text-[var(--dark-gray)] border-none outline-none" />
                    </div>
                    <div class="flex justify-center items-center gap-x-[20px]">
                        <Link class=" max-[900px]:hidden flex justify-center items-center font-[16px] text-[var(--dark-gray-2)] w-[100px] underline">Cadastre-se</Link>
                        <Link class="flex max-[640px]:w-[80px] justify-center items-center bg-[var(--primary)] w-[144px] h-[40px] rounded-[4px] font-[14px] text-[var(--white)] font-bold">Entrar</Link>
                    </div>
                    <img src={miniCart} class="max-[550px]:hidden" alt="" />
                </div>
                <div class="flex items-center">
                    <NavBar isPage={isPage}/>
                </div>
            </div>
        </>
    )
}

export default Header