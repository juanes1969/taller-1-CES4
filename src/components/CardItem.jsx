import { useState } from 'react'
import { arrayProducts } from '../data/ArrayDataProducts'
import { ButtonAdd } from './ButtonAdd'
import { Img } from './Img'
import { Navbar } from './Navbar'
import { PrincipalComponent } from './PrincipalComponent'

export const CardItem = () => {

    const [products, setProducts] = useState([]);


    return (
        <>
            <Navbar products={products} />

            <div className="container text-center mt-5">
                <div className="row">
                    {arrayProducts.map((product) => (
                        <div className="col" key={product.id}>
                            <div className="card mb-3 mt-3" style={{ maxWidth: 430 }}>
                                <div className="row g-0">
                                    <div className="col-md-4">
                                        <Img src={product.img} />
                                    </div>
                                    <div className="col-md-8">
                                        <div className="card-body">
                                            <h5 className="card-title">{product.name}</h5>
                                            <p className="card-text">$ {product.price}</p>
                                            <p className="card-text"> <small className="text-muted"><ButtonAdd products={products} product={product} setProducts={setProducts} /></small></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <hr />

            <PrincipalComponent products={products}/>
        </>
    )
}
