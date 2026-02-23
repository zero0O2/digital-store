

const ProductListing = ({children}) => {
    return(
        <>
            <div class="flex w-[100%]  flex-wrap justify-center items-center max-[1200px]:gap-[30px] gap-[30px_50px]">
                {children}
            </div>
        </>
    )
}

export default ProductListing