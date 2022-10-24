import React, { useState } from 'react'
import { ProductList } from './ProductList';
import { SumaryTotal } from './SumaryTotal';

export const PrincipalComponent = ({ products }) => {


    const [quantity, setQuantity] = useState(0);
    const [subtotal, setSubtotal] = useState(0);
    const [active, setActive] = useState(false)

    const handleInputChange = ({ target }) => {

        setQuantity(target.value);

    }


    const handlePrice = (price) => {


        //let subtotal = 0;
        //products.map((item) => {
            // if (quantity != item.amount) {
            //     subtotal += item.price * quantity;
            //     setSubtotal(subtotal);
            // } else {
            //     setActive(true);
            // }
            //subtotal += 
            setSubtotal(price * quantity)
        //})

        //setSubtotal(subtotal)


    }

    console.log(quantity)
    //console.log(price)

    console.log(subtotal)



    return (
        <div className='container'>


            <div className="row g-0 text-center">
                <ProductList
                    products={products}
                    handlePrice={handlePrice}
                    active={active}
                    handleInputChange={handleInputChange}
                />

                <br />
                <div className="col-6 col-md-6">

                    <SumaryTotal subtotal={subtotal}/>
                </div>


            </div>
        </div>

    )
}
