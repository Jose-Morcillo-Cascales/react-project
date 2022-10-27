import ShoppingCart from "../ShoppingCart/ShoppingCart"

const NavBar = () => {
    return(
        <nav className="navbar bg-light">
            <div className="container-fluid">
            <a className="navbar-brand" href="#">
                Aqui ira un logo
            </a>

            </div>
            <div className="dropdown">
                <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Dropdown button
                </button>
                    <ul className="dropdown-menu"> 
                        <ShoppingCart />
                    </ul> 

           </div>
        
      </nav>
    )
}
export default NavBar