import React from 'react'

export const ProductList = ({ products, handlePrice, active, handleInputChange }) => {
    return (
        <div className="col-sm-6 col-md-6">
            <label className="form-label"><h1>Shopping cart</h1></label>

            <hr />
            <div className="card mb-3" style={{ maxWidth: 480 }}>

                {products.map((prd) => (
                    <form className="d-flex" key={prd.id}>
                        <div className="col-2" >
                            <img src={prd.img} className="container img-fluid " alt="..." style={{ textAlign: 'center', alignContent: 'center' }} />

                        </div>
                        <div className="card-body mt-4 me-5">
                            <h5 className="card-title ">{prd.name}</h5>
                            <p className="card-text">{prd.description}</p>
                            <p className="card-text" name='price'><small className="text-muted"><b>$ {prd.price}</b></small></p>
                        </div>

                        <input type='number' name="size" className='continer form-control me-5 mt-5' min='0' disabled={active} onChange={handleInputChange} onClick={handlePrice(prd.price)} placeholder='1 pcs.' style={{ height: 30, width: 90 }} />

                    </form>
                ))}
            </div>


        </div>
    )
}
