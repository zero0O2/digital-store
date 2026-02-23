

const Section = ({children,title,titleAling = "left"}) => {

    return(
        <>
            <div class=" w-[100%] p-[60px_50px] max-[925px]:p-[50px_20px] flex flex-col gap-y-[10px]">
                <div class={`flex  w-[100%] p-[10px_20px]`}>
                    <h1 class={` text-[var(--dark-gray-2)] w-[100%] text-${titleAling} text-[24px]`}>{title}</h1>
                </div>

                {children}
            
            </div>
        </>
    )
}

export default Section