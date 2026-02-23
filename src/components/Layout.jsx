import Header from "./Header.jsx"
import Footer from "./Footer.jsx"

const Layout = ({children,page}) => {
    return(
        <div class="">
            <Header isPage={page}/>

                {children}

            <Footer/>
        </div>
    )
}

export default Layout