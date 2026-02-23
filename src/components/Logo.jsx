import logoh from "../assets/logo-header.svg"
import logof from "../assets/logo-footer.svg"
import logoIco from "../assets/icoLogo.png"

const Logo = ({isLogo}) => {
    return(
        <>
            <img class={`w-[253px] h-[44px] `} src={isLogo === "header" ? logoh : isLogo === "ico" ? logoIco : logof }
                style={isLogo === "ico" ? {width:"40px" , height:"40px"} : {}} alt="" />
        </>
    )
}

export default Logo