
import Logo from "./Logo.jsx"
import Cards from "./Cards.jsx"
import twitter from "../assets/twitter.svg"
import facebook from "../assets/facebook.svg"
import instagram from "../assets/instagram.svg"
import { useEffect, useState } from "react"

const Footer = () => {
    const [cards,useCards] = useState([])
    useEffect(()=>{
        fetch("./json/cardsFooter.json")
        .then(response => response.json())
        .then(json => {
            useCards(json)
        })
    },[])
    console.log(cards)

    return(
        <>
            <div class="flex flex-col max-[470px]:justify-center max-[470px]:gap-y-[5px] max-[1310px]:h-[240px] max-[1030px]:h-[200px] items-center justify-between p-[20px] bg-[var(--dark-gray)] text-[var(--white)] h-[300px]">
                <div class=" flex justify-between max-[470px]:justify-center  w-[100%] h-[100%] gap-x-[50px] max-[650px]:gap-x-[20px] max-[840px]:px-[10px] px-[40px]">
                    <div class="flex  justify-center gap-y-[15px] max-[1030px]:min-w-[260px] flex-col w-[300px] min-w-[300px]">
                        <Logo isPage=""/>
                        <p class="text-[14px] max-[1030px]:text-[10px] ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti nobis deserunt repellat recusandae quia perspiciatis temporibus quibusdam porro.</p>
                        <div class="flex w-[100%] gap-x-[20px]">
                            <img src={twitter} alt="" />
                            <img src={instagram} alt="" />
                            <img src={facebook} alt="" />
                        </div>
                    </div>
                    <div class="flex max-[470px]:hidden justify-around gap-x-[20px] py-[10px] w-[100%]">
                        {
                            cards.map( (e , index) =>{
                                return <Cards index={index} title={e.title} text={e.text} />
                            })
                        }
                        
                    </div>
                </div>
                <hr />
                <p>© 2024 Digital Store</p>
            </div>
        </>
    )
}

export default Footer