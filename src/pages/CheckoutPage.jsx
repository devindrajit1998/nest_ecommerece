import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { claculateSubtotal } from "../redux/slice/CartSlice";
import { placeOrder } from "../redux/slice/UserSlice";
import { updateProductQuantity } from "../redux/slice/ProductSlice";

export default function CheckoutPage() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(claculateSubtotal());
  }, [])
  const allCart = useSelector((state) => state.cartSlice.cartData);
  const subTotal = useSelector((state) => state.cartSlice.subTotal);
  // const data =[{"stock":10},{stock:15}];
  const createOrder = async () => {
    await dispatch(updateProductQuantity({
      product: [
        { documentId: "lqujw20m8n91rlv6ra6qi5va", stocks: 10 },
        { documentId: "dl5usvfkkjben4oort1m0n4p", stocks: 15 },
      ]
    }))
    await dispatch(placeOrder({
      orderData: {
        "order": {
          "item": "Laptop",
          "quantity": 1,
          "price": 1500,
          "status": "Processing"
        }
      }
      , userId: 32
    }));
  }
  return (
    <main className="main">
      <div className="page-header breadcrumb-wrap">
        <div className="container">
          <div className="breadcrumb">
            <a href="index.html" rel="nofollow">
              <i className="fi-rs-home mr-5" />
              Home
            </a>
            <span /> Shop
            <span /> Checkout
          </div>
        </div>
      </div>
      <div className="container mb-80 mt-50">
        <div className="row">
          <div className="col-lg-8 mb-40">
            <h1 className="heading-2 mb-10">Checkout</h1>
            <div className="d-flex justify-content-between">
              <h6 className="text-body">
                There are <span className="text-brand">{allCart?.length || 0}</span> products in your
                cart
              </h6>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-7">
            <div className="row mb-50">
              <div className="col-lg-6 mb-sm-15 mb-lg-0 mb-md-3">
                <div className="toggle_info">
                  <span>
                    <i className="fi-rs-user mr-10" />
                    <span className="text-muted font-lg">
                      Already have an account?
                    </span>
                    <a
                      href="#loginform"
                      data-bs-toggle="collapse"
                      className="collapsed font-lg"
                      aria-expanded="false"
                    >
                      Click here to login
                    </a>
                  </span>
                </div>
                <div
                  className="panel-collapse collapse login_form"
                  id="loginform"
                >
                  <div className="panel-body">
                    <p className="mb-30 font-sm">
                      If you have shopped with us before, please enter your
                      details below. If you are a new customer, please proceed
                      to the Billing &amp; Shipping section.
                    </p>
                    <form method="post">
                      <div className="form-group">
                        <input
                          type="text"
                          name="email"
                          placeholder="Username Or Email"
                        />
                      </div>
                      <div className="form-group">
                        <input
                          type="password"
                          name="password"
                          placeholder="Password"
                        />
                      </div>
                      <div className="login_footer form-group">
                        <div className="chek-form">
                          <div className="custome-checkbox">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              name="checkbox"
                              id="remember"
                              defaultValue
                            />
                            <label
                              className="form-check-label"
                              htmlFor="remember"
                            >
                              <span>Remember me</span>
                            </label>
                          </div>
                        </div>
                        <a href="#">Forgot password?</a>
                      </div>
                      <div className="form-group">
                        <button className="btn btn-md" name="login">
                          Log in
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <form method="post" className="apply-coupon">
                  <input type="text" placeholder="Enter Coupon Code..." />
                  <button className="btn  btn-md" name="login">
                    Apply Coupon
                  </button>
                </form>
              </div>
            </div>
            <div className="row">
              <h4 className="mb-30">Billing Details</h4>
              <form method="post">
                <div className="row">
                  <div className="form-group col-lg-6">
                    <input
                      type="text"
                      required
                      name="fname"
                      placeholder="First name *"
                    />
                  </div>
                  <div className="form-group col-lg-6">
                    <input
                      type="text"
                      required
                      name="lname"
                      placeholder="Last name *"
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="form-group col-lg-6">
                    <input
                      type="text"
                      name="billing_address"
                      required
                      placeholder="Address *"
                    />
                  </div>
                  <div className="form-group col-lg-6">
                    <input
                      type="text"
                      name="billing_address2"
                      required
                      placeholder="Address line2"
                    />
                  </div>
                </div>
                <div className="row shipping_calculator">
                  <div className="form-group col-lg-6">
                    <div className="custom_select">
                      <select className="form-control select-active">
                        <option value>Select an option...</option>
                        <option value="AX">Aland Islands</option>
                        <option value="AF">Afghanistan</option>
                      </select>
                    </div>
                  </div>
                  <div className="form-group col-lg-6">
                    <input
                      required
                      type="text"
                      name="city"
                      placeholder="City / Town *"
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="form-group col-lg-6">
                    <input
                      required
                      type="text"
                      name="zipcode"
                      placeholder="Postcode / ZIP *"
                    />
                  </div>
                  <div className="form-group col-lg-6">
                    <input
                      required
                      type="text"
                      name="phone"
                      placeholder="Phone *"
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="form-group col-lg-6">
                    <input
                      required
                      type="text"
                      name="cname"
                      placeholder="Company Name"
                    />
                  </div>
                  <div className="form-group col-lg-6">
                    <input
                      required
                      type="text"
                      name="email"
                      placeholder="Email address *"
                    />
                  </div>
                </div>
                <div className="form-group mb-30">
                  <textarea
                    rows={5}
                    placeholder="Additional information"
                    defaultValue={""}
                  />
                </div>
                <div className="form-group">
                  <div className="checkbox">
                    <div className="custome-checkbox">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        name="checkbox"
                        id="createaccount"
                      />
                      <label
                        className="form-check-label label_info"
                        data-bs-toggle="collapse"
                        href="#collapsePassword"
                        data-target="#collapsePassword"
                        aria-controls="collapsePassword"
                        htmlFor="createaccount"
                      >
                        <span>Create an account?</span>
                      </label>
                    </div>
                  </div>
                </div>
                <div
                  id="collapsePassword"
                  className="form-group create-account collapse in"
                >
                  <div className="row">
                    <div className="col-lg-6">
                      <input
                        required
                        type="password"
                        placeholder="Password"
                        name="password"
                      />
                    </div>
                  </div>
                </div>
                <div className="ship_detail">
                  <div className="form-group">
                    <div className="chek-form">
                      <div className="custome-checkbox">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          name="checkbox"
                          id="differentaddress"
                        />
                        <label
                          className="form-check-label label_info"
                          data-bs-toggle="collapse"
                          data-target="#collapseAddress"
                          href="#collapseAddress"
                          aria-controls="collapseAddress"
                          htmlFor="differentaddress"
                        >
                          <span>Ship to a different address?</span>
                        </label>
                      </div>
                    </div>
                  </div>
                  <div
                    id="collapseAddress"
                    className="different_address collapse in"
                  >
                    <div className="row">
                      <div className="form-group col-lg-6">
                        <input
                          type="text"
                          required
                          name="fname"
                          placeholder="First name *"
                        />
                      </div>
                      <div className="form-group col-lg-6">
                        <input
                          type="text"
                          required
                          name="lname"
                          placeholder="Last name *"
                        />
                      </div>
                    </div>
                    <div className="row shipping_calculator">
                      <div className="form-group col-lg-6">
                        <input
                          required
                          type="text"
                          name="cname"
                          placeholder="Company Name"
                        />
                      </div>
                      <div className="form-group col-lg-6">
                        <div className="custom_select w-100">
                          <select className="form-control select-active">
                            <option value>Select an option...</option>
                            <option value="AX">Aland Islands</option>
                            <option value="AF">Afghanistan</option>
                            <option value="AL">Albania</option>
                          </select>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="form-group col-lg-6">
                        <input
                          type="text"
                          name="billing_address"
                          required
                          placeholder="Address *"
                        />
                      </div>
                      <div className="form-group col-lg-6">
                        <input
                          type="text"
                          name="billing_address2"
                          required
                          placeholder="Address line2"
                        />
                      </div>
                    </div>
                    <div className="row">
                      <div className="form-group col-lg-6">
                        <input
                          required
                          type="text"
                          name="state"
                          placeholder="State / County *"
                        />
                      </div>
                      <div className="form-group col-lg-6">
                        <input
                          required
                          type="text"
                          name="city"
                          placeholder="City / Town *"
                        />
                      </div>
                    </div>
                    <div className="row">
                      <div className="form-group col-lg-6">
                        <input
                          required
                          type="text"
                          name="zipcode"
                          placeholder="Postcode / ZIP *"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div className="col-lg-5">
            <div className="border p-40 cart-totals ml-30 mb-50">
              <div className="d-flex align-items-end justify-content-between mb-30">
                <h4>Your Order</h4>
                <h6 className="text-muted">Subtotal</h6>
              </div>
              <div className="divider-2 mb-30" />
              <div className="table-responsive order_table checkout">
                <table className="table no-border">
                  <tbody>

                    {allCart?.map((items) => {
                      return (
                        <tr key={items?.id}>
                          <td className="image product-thumbnail">
                            <img src={items?.image[0].url} alt="#" />
                          </td>
                          <td>
                            <h6 className="w-160 mb-5">
                              <a
                                href="shop-product-full.html"
                                className="text-heading"
                              >
                                {items?.title}
                              </a>
                            </h6>
                          </td>
                          <td>
                            <h6 className="text-muted pl-20 pr-20">x {items?.inCart}</h6>
                          </td>
                          <td>
                            <h4 className="text-brand">₹{items?.price - items?.price * items?.offer * 0.01}</h4>
                          </td>
                        </tr>
                      )
                    })}


                    <tr>
                      <td colSpan={3}><h6>Total amount to be paid:</h6></td>
                      <td><h4 className="text-brand">₹{subTotal}</h4></td></tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div className="payment ml-30">
              <h4 className="mb-30">Payment</h4>
              <div className="payment_option">
                <div className="custome-radio">
                  <input
                    className="form-check-input"
                    required
                    type="radio"
                    name="payment_option"
                    id="exampleRadios4"
                    defaultChecked
                  />
                  <label
                    className="form-check-label"
                    htmlFor="exampleRadios4"
                    data-bs-toggle="collapse"
                    data-target="#checkPayment"
                    aria-controls="checkPayment"
                  >
                    Cash on delivery
                  </label>
                </div>
                <div className="custome-radio">
                  <input
                    className="form-check-input"
                    required
                    type="radio"
                    name="payment_option"
                    id="exampleRadios5"
                    disabled
                  />
                  <label
                    className="form-check-label"
                    htmlFor="exampleRadios5"
                    data-bs-toggle="collapse"
                    data-target="#paypal"
                    aria-controls="paypal"
                  >
                    Online Getway
                  </label>
                </div>
              </div>
              <div className="payment-logo d-flex">
                <img
                  className="mr-15"
                  src="/imgs/theme/icons/payment-paypal.svg"
                  alt=''
                />
              </div>
              <a className="btn btn-fill-out btn-block mt-30" onClick={createOrder}>
                Place an Order
                <i className="fi-rs-sign-out ml-15" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
