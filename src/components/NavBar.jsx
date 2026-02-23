import { Link } from "react-router-dom"

const NavBar = ({isPage}) => {
    return(
        <>
            <div class="flex justify-center items-center">
                <ul class="flex gap-x-[20px] line-clamp-1 text-[var(--dark-gray-2)] max-[540px]:text-[15px] text-[18px]">
                    <li class={isPage === 'Home' ? "text-[var(--primary)] underline" : ""}>
                        <Link to="/">
                            Home
                        </Link>
                    </li>
                    <li class={isPage === 'Produtos' ? "text-[var(--primary)] underline" : ""}>
                        <Link to="/produtos">
                            Produtos
                        </Link>
                    </li>
                    <li class={isPage === 'Categorias' ? "text-[var(--primary)] underline" : ""}>
                        <Link to="/categorias">
                            Categorias
                        </Link>
                    </li>
                    <li class={isPage === 'MeusPedidos' ? "text-[var(--primary)] underline" : ""}>
                        <Link to="/meus-pedidos">
                            Meus Pedidos
                        </Link>
                    </li>
                </ul>
            </div>
        </>
    )
}

export default NavBar