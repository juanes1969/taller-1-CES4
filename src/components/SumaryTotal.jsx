import React, { useState } from 'react'

export const SumaryTotal = ({ subtotal }) => {

    const [coupon, setCoupon] = useState(0);
    const [total, setTotal] = useState(0);

    const handleInputChange = (e) => {
        setCoupon(e.target.value);
    }

    const handleBlur = (e) => {
        setTotal(subtotal - coupon);
    }

    return (
        <div className="container text-center">
            <div className="row">
                <div className="col">
                    <label className="form-label"><h1>Summary </h1></label>
                    <hr />
                    <form className="d-flex">
                        <label className='form-label mt-1' ><b>ENTER CUPON CODE:</b> </label>
                        <input className="form-control ml-2" type="text" min='0' onChange={handleInputChange} onBlur={handleBlur} style={{ width: 100, marginLeft: 70 }} />

                    </form>
                    <hr />

                    <div className="container text-center">
                        <div className="row">
                            <div className="col-6 col-sm-3"><label className='form-label mt-1' >SUBTOTAL </label></div>
                            <div className="col-6 col-sm-3"> <input className="form-control ml-2" type="text" min='0' value={subtotal} disabled style={{ width: 70, marginLeft: 80 }} /></div>
                        </div>
                        <div className='row mt-3' >
                            <div className="col-6 col-sm-3"><label className='form-label mt-1' >SHIPPING </label></div>
                            <div className="col-6 col-sm-3"> <input className="form-control ml-2" type="text" min='0' value='FREE' disabled style={{ width: 70, marginLeft: 80 }} /></div>
                        </div>
                        <div className='row mt-3' >
                            <div className="col-6 col-sm-3"><label className='form-label mt-1' >COUPON </label></div>
                            <div className="col-6 col-sm-3"> <input className="form-control ml-2" type="text" min='0' value={coupon} disabled style={{ width: 70, marginLeft: 80 }} /></div>
                        </div>
                    </div>
                    <hr />
                    <div className="container text-center">
                        <div className="row">
                            <div className="col-6 col-sm-3"><label className='form-label mt-1' >TOTAL </label></div>
                            <div className="col-6 col-sm-3"> <input className="form-control ml-2" type="text" min='0' value={total} disabled style={{ width: 70, marginLeft: 80 }} /></div>
                        </div>
                    </div>
                    <hr />
                </div>
            </div>
        </div>
    )
}
