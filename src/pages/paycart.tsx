import Link from 'next/link'
import React from 'react'

type Props = {}

const paycart = (props: Props) => {
    return (
        <div className="container">
            <nav className="bg-white">
                <div className="d-flex align-items-center">
                    <div className="logo"> <a href="#" className="text-uppercase">shop</a> </div>
                    <div className="ml-auto"> <a href="#" className="text-uppercase">Back to shopping</a> </div>
                </div>
            </nav>
            <div className="wrapper">
                <div className="h5 large">Billing Address</div>
                <div className="row">
                    <div className="col-lg-6 col-md-8 col-sm-10 offset-lg-0 offset-md-2 offset-sm-1">
                        <div className="mobile h5">Billing Address</div>
                        <div id="details" className="bg-white rounded pb-5">
                            <form>
                                <div className="form-group"> <label className="text-muted">Name</label> <input type="text" value="David Smith" className="form-control" /> </div>
                                <div className="form-group"> <label className="text-muted">Email</label>
                                    <div className="d-flex jusify-content-start align-items-center rounded p-2"> <input type="email" value="david.343@gmail.com" /> <span className="fas fa-check text-success pr-sm-2 pr-0"></span> </div>
                                </div>
                                <div className="row">
                                    <div className="col-lg-6">
                                        <div className="form-group"> <label>City</label>
                                            <div className="d-flex jusify-content-start align-items-center rounded p-2"> <input type="text" value="Houston" /> <span className="fas fa-check text-success pr-2"></span> </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="form-group"> <label>Zip code</label>
                                            <div className="d-flex jusify-content-start align-items-center rounded p-2"> <input type="text" value="77001" /> <span className="fas fa-check text-success pr-2"></span> </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-lg-6">
                                        <div className="form-group"> <label>Address</label>
                                            <div className="d-flex jusify-content-start align-items-center rounded p-2"> <input type="text" value="542 W.14th Street" /> <span className="fas fa-check text-success pr-2"></span> </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="form-group"> <label>State</label>
                                            <div className="d-flex jusify-content-start align-items-center rounded p-2"> <input type="text" value="NY" /> <span className="fas fa-check text-success pr-2"></span> </div>
                                        </div>
                                    </div>
                                </div> <label>Country</label> <select name="country" id="country">
                                    <option value="usa">USA</option>
                                    <option value="ind">INDIA</option>
                                </select>
                            </form>
                        </div> <input type="checkbox" checked /> <label>Shipping address is same as billing</label>

                    </div>
                    <div className="col-lg-6 col-md-8 col-sm-10 offset-lg-0 offset-md-2 offset-sm-1 pt-lg-0 pt-3">
                        <div id="cart" className="bg-white rounded">
                            <div className="d-flex justify-content-between align-items-center">
                                <div className="h6">Cart Summary</div>
                                <div className="h6"> <a href="#">Edit</a> </div>
                            </div>
                            <div className="d-flex jusitfy-content-between align-items-center pt-3 pb-2 border-bottom">
                                <div className="item pr-2"> <img src="https://images.unsplash.com/photo-1569488859134-24b2d490f23f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" alt="" width="80" height="80" />
                                    <div className="number">2</div>
                                </div>
                                <div className="d-flex flex-column px-3"> <b className="h5">BattleCreek Coffee</b> <a href="#" className="h5 text-primary">C-770</a> </div>
                                <div className="ml-auto"> <b className="h5">$80.9</b> </div>
                            </div>
                            <div className="my-3"> <input type="text" className="w-100 form-control text-center" placeholder="Gift Card or Promo Card" /> </div>
                        </div>

                        <div className="h4 pt-3"> <span className="fas fa-shield-alt text-primary pr-2"></span> Security of your shopping</div>
                        <div id="summary" className="bg-white rounded py-2 my-4">
                            <div className="table-responsive">
                                <table className="table table-borderless w-75">
                                    <tbody>
                                        <tr className="text-muted">
                                            <td>Battlecreek Coffee</td>
                                            <td>:</td>
                                            <td>$80.9</td>
                                        </tr>
                                        <tr className="text-muted">
                                            <td>Code-770</td>
                                            <td>:</td>
                                            <td>770</td>
                                        </tr>
                                        <tr className="text-muted">
                                            <td>Quantity</td>
                                            <td>:</td>
                                            <td>
                                                <div className="d-flex align-items-center"> <span className="fas fa-minus btn text-muted"></span> <span>2</span> <span className="fas fa-plus btn text-muted"></span> </div>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div className="border-top py-2 d-flex align-items-center ml-2 font-weight-bold">
                                <div>Total</div>
                                <div className="ml-auto text-primary">USD</div>
                                <div className="px-2">$92.98</div>
                            </div>
                        </div>
                        <div className="row pt-lg-3 pt-2 buttons mb-sm-0 mb-2">
                            <Link href={'/products'}>

                                <div className="col-md-6">
                                    <div className="btn text-uppercase">back to shopping</div>
                                </div>
                            </Link>
                            <Link href={'/'}>
                                <div className="col-md-6 pt-md-0 pt-3">
                                    <div className="btn text-white ml-auto"> <span className="fas fa-lock"></span> Continue to Shopping </div>
                                </div>

                            </Link>
                        </div>
                        <div className="text-muted pt-3" id="mobile"> <span className="fas fa-lock"></span> Your information is save </div>
                    </div>
                </div>
                <div className="text-muted"> <span className="fas fa-lock"></span> Your information is save </div>
            </div>
        </div>
    )
}

export default paycart