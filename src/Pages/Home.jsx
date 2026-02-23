import Layout from "../components/Layout.jsx"
import Carroussel from "../components/Carroussel.jsx"
import Section from "../components/Section.jsx"
import ProductCard from "../components/ProductCard.jsx"
import ProductListing from "../components/ProductListing.jsx"
import { useState, useEffect} from "react"
const productsJson = "./json/products.json"

const homeSlide = [
    "./home-slide-1.jpeg",
    "./home-slide-2.jpeg",
    "./home-slide-3.jpeg",
    "./home-slide-4.jpeg",
    "./home-slide-5.jpeg",
    "./home-slide-6.jpeg",
    "./home-slide-7.jpeg",
    "./home-slide-8.jpeg",
] 
const thumbsImg = [
    "./produc-image-1.jpeg",
    "./produc-image-2.jpeg",
    "./produc-image-3.jpeg",
    "./produc-image-4.jpeg",
    "./produc-image-5.jpeg",

] 

const Home = () => {
    const [products , setProducts] = useState([])

    useEffect(()=>{
        fetch(productsJson)
        .then(response => response.json())
        .then(result => {
            setProducts(result)
        })
    },[])

    console.log(products)

    return(
        <>
            <Layout page="Home">
                <div class="h-[100%] py-[20px] flex flex-col justify-center items-center">
                    <Carroussel className=""
                                width="1440px"
                                height="681px"
                                radius="8px"
                                showthumbs
                                imgs={homeSlide}
                                showthumbsImg={thumbsImg}/>


                    <div class="flex flex-col justify-center items-center ">
                        <Section title="Produtos" titleAling="left">
                            <ProductListing>
                                {
                                    products.map((e,index) => (
                                        <ProductCard key={index} img={e.image} name={e.name} price={e.price} priceDiscount={e.priceDiscount}/>
                                    ))
                                }
                            </ProductListing>
                        </Section>
                    </div>
                </div>
            </Layout>
        </>
    )
}

export default Home