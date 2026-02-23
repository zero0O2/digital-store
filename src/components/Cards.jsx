
const Cards = ({index,title,text}) => {
    return(
        <>
            <div class={`w-[200px] max-[1310px]:w-[150px] items-center  max-[1110px]:w-[130px] bg-[var(--light-gray-3)] gap-y-[10px] text-[var(--dark-gray)] p-[10px] rounded-[4px] flex flex-col justify-start 
                ${index === 3 ? "max-[980px]:hidden" : ""}
                ${index === 2 ? "max-[840px]:hidden" : ""}
                ${index === 1 ? "max-[650px]:hidden" : ""}
                ${index === 0 ? "max-[470px]:hidden" : ""}`}>

                <h1 class="text-[20px] font-bold">{title}</h1>
                <p class="text-[12px] text-[var(--dark-gray-2)] text-center max-[1040px]:line-clamp-3 line-clamp-6">{text}</p>
            </div>
        </>
    )
}

export default Cards