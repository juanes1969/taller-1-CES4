import { FaShoppingBag } from 'react-icons/fa';

export const Navbar = ({products}) => {
    return (
        <nav className="navbar bg-light">
            <div className="container">


                <a className="navbar-brand" href="">
                    <img src='...' alt="Bootstrap" width="40" height="30" />
                    <label className='form-label mt-1'>Shopping shoes</label>
                </a>




                <button type="button" className="btn btn-primary">
                    <FaShoppingBag className='me-1' /> Products <span className="badge text-bg-secondary">{products.length}</span>
                </button>



            </div>
        </nav>
    )
}
