

const ProductCard = ({img, name, price, priceDiscount}) => {

    return(
        <>
            <div class="flex flex-col max-[1200px]:w-[180px] max-[680px]:w-[130px] max-[1200px]:h-[280px] max-[680px]:h-[220px] justify-between items-center w-[293px] h-[400px]">
                <div class="w-[100%]">
                    <img class="w-[100%] h-[100%]" src={img} alt="" />
                </div>
                <div class="flex flex-col justify-center items-start h-[100%] w-[100%]">
                    <h1 class="text-[18px] text-[var(--dark-gray)] max-[1200px]:text-[15px] max-[680px]:text-[14px] line-clamp-1">{name}</h1>
                    <div class="flex gap-x-[10px] text-[24px] max-[1200px]:text-[18px] max-[680px]:text-[15px] text-[var(--dark-gray)]">

                        <p class={`${!priceDiscount ? "" : "text-[var(--light-gray)] line-through" }`}>R${price}</p>

                        {
                            !priceDiscount ? <></> : <p>R${priceDiscount}</p>
                        }
                        
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProductCard