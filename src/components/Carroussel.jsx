import { useEffect, useState } from "react";
import { FaChevronLeft, FaAngleRight } from "react-icons/fa6";

const Carroussel = ({imgs,className,width,height,radius,showthumbs,showthumbsImg}) => {
    const [current,setCurrent] = useState(0)

    const nextSlide = () => {
        setCurrent((prev)=>((prev + 1) % imgs.length))
    }
    
    const prevSlide = () => {
        setCurrent((prev)=> (prev == 0 ? imgs.length - 1 : prev - 1))
    }
    useEffect(()=>{
        
        const id = setInterval(()=>{
            nextSlide()
    
        },8000)
        return () => clearInterval(id)
        
    },[nextSlide,prevSlide])

    console.log(showthumbsImg)
    return(
        <>
            <div class={`relative flex items-center overflow-hidden mx-[30px]`}
                style={{className,maxWidth:width,maxHeight:height, borderRadius:radius}}>
                <div class="flex  transition-transform duration-500"
                    style={{transform:`translateX(-${current*100}%)`}}>
                    {
                        imgs.map((e,index)=>(
                            <div key={index} class="min-w-full ">
                                <img class="w-[100%] "  src={e} alt="" />
                            </div>
                        ))
                    }
                </div>
                <div class="absolute flex justify-center  items-center w-[100%] h-[100%] bg-gradient-to-r from-black/20 to-black/20">
                    <button class="absolute max-[900px]:scale-60 max-[900px]:left-[0px] w-[80px] h-[80px] rounded-[100%] left-[20px] flex justify-center items-center text-[var(--white)] text-[30px] cursor-pointer border-white border-[4px]"
                            onClick={prevSlide} >
                        <FaChevronLeft />
                    </button>
                    <button class="absolute max-[900px]:scale-60 max-[900px]:right-[0px] w-[80px] h-[80px] rounded-[100%] right-[20px] flex justify-center items-center text-[var(--white)] text-[30px] cursor-pointer border-white border-[4px]"
                            onClick={nextSlide} >
                        <FaAngleRight />
                    </button>
                </div>
                <div class=" absolute justify-center max-[760px]:scale-50 max-[900px]:bottom-[-10px] gap-x-[10px] items-center flex bottom-0 w-[100%] h-[60px]">
                    {
                        imgs.map((e,index) => (
                            <div key={index} class={`w-[20px] h-[20px] border-[2px] border-[var(--white)] duration-400 rounded-full ${index == current ? "bg-[var(--white)]" : ""}`} ></div>

                        ))
                    }
                </div>
            </div>

            {
                !showthumbs ? <></> : (
                    <div class=" w-[100%] flex flex-nowrap justify-center p-[20px] gap-[20px] items-center">
                            {
                                
                                showthumbsImg.map((e,index)=>(
                                    <div key={index} class={` w-[100%] max-w-[240px] h-[240px] max-[1100px]:h-[140px] max-[640px]:h-[90px] bg-cover bg-center `}
                                        style={{borderRadius:radius, backgroundImage:`url(${e})`,boxShadow:"0 0 20px #00000047"}}>

                                    </div>
                                ))
                            }

                    </div>
                )
            }

            
            
        </>
    )
}

export default Carroussel