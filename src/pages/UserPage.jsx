import { useDispatch, useSelector } from "react-redux";
import { logOut } from "../redux/slice/UserSlice";
import { useState } from "react";

export default function UserPage() {
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState("tab-1");
  const toggleTabs = (tab) => {
    setIsOpen(tab);
  }

  const user = useSelector((state) => state.userSlice.user.data.user)
  return (
    <main className="main pages">
      <div className="page-header breadcrumb-wrap">
        <div className="container">
          <div className="breadcrumb">
            <a href="index.html" rel="nofollow">
              <i className="fi-rs-home mr-5" />
              Home
            </a>
            <span /> Pages <span /> My Account
          </div>
        </div>
      </div>
      <div className="page-content pt-150 pb-150">
        <div className="container">
          <div className="row">
            <div className="col-lg-10 m-auto">
              <div className="row">
                <div className="col-md-3">
                  <div className="dashboard-menu">
                    <ul className="nav flex-column" role="tablist">
                      <li className="nav-item">
                        <a
                          className={`nav-link ${isOpen === "tab-1" && 'active'}`} onClick={() => toggleTabs("tab-1")}
                        >
                          <i className="fi-rs-settings-sliders mr-10" />
                          Dashboard
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          className={`nav-link ${isOpen === "tab-2" && 'active'}`} onClick={() => toggleTabs("tab-2")}
                        >
                          <i className="fi-rs-shopping-bag mr-10" />
                          Orders
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          className={`nav-link ${isOpen === "tab-3" && 'active'}`} onClick={() => toggleTabs("tab-3")}
                        >
                          <i className="fi-rs-shopping-cart-check mr-10" />
                          Track Your Order
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          className={`nav-link ${isOpen === "tab-4" && 'active'}`} onClick={() => toggleTabs("tab-4")}
                        >
                          <i className="fi-rs-marker mr-10" />
                          My Address
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          className={`nav-link ${isOpen === "tab-5" && 'active'}`} onClick={() => toggleTabs("tab-5")}
                        >
                          <i className="fi-rs-user mr-10" />
                          Account details
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" onClick={() => dispatch(logOut())}>
                          <i className="fi-rs-sign-out mr-10" />
                          Logout
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-md-9">
                  <div className="tab-content account dashboard-content pl-50">
                    {isOpen === "tab-1" && <div
                      className="tab-pane fade active show">
                      <div className="card dashboard-card">
                        <div className="card-body text-center">
                          <img width="100" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZ3AH9WTlcacKErfpKhk-lJ7serN0eQje6Qg&s" alt="Avatar" className="avatar" />
                          <h5 className="mt-3">Hey {user?.firstname !== null ? user.firstname : 'User'}!</h5>
                          <p className="text-muted mb-4">User Information</p>
                          <div className="row justify-content-center">
                            <div className="col-md-12">
                              <table className="table table-borderless user-info">
                                <tbody>
                                  <tr>
                                    <td><strong>First Name:</strong></td>
                                    <td>{user?.firstname !== null ? user.firstname : 'Need to update'}</td>
                                  </tr>
                                  <tr>
                                    <td><strong>Last Name:</strong></td>
                                    <td>{user?.lastname !== null ? user.lastname : 'Need to update'}</td>
                                  </tr>
                                  <tr>
                                    <td><strong>Email:</strong></td>
                                    <td>{user?.email}</td>
                                  </tr>
                                  <tr>
                                    <td><strong>Phone:</strong></td>
                                    <td>{user?.mobile !== null ? user.mobile : 'Need to update'}</td>
                                  </tr>
                                </tbody>
                              </table>
                            </div>
                          </div>
                          <p>
                            From your account dashboard, you can easily check &amp; view your
                            <a href="#" className="link-custom">recent orders</a>,<br />
                            manage your <a href="#" className="link-custom">shipping and billing addresses</a> and
                            <a href="#" className="link-custom">edit your password and account details</a>.
                          </p>
                        </div>
                      </div>

                    </div>}
                    {isOpen === "tab-2" && <div
                      className="tab-pane fade active show"
                    >
                      <div className="card">
                        <div className="card-header">
                          <h3 className="mb-0">Your Orders</h3>
                        </div>
                        <div className="card-body">
                          <div className="table-responsive">
                            <table className="table">
                              <thead>
                                <tr>
                                  <th>Order</th>
                                  <th>Date</th>
                                  <th>Status</th>
                                  <th>Total</th>
                                  <th>Actions</th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr>
                                  <td>#1357</td>
                                  <td>March 45, 2020</td>
                                  <td>Processing</td>
                                  <td>$125.00 for 2 item</td>
                                  <td>
                                    <a href="#" className="btn-small d-block">
                                      View
                                    </a>
                                  </td>
                                </tr>
                                <tr>
                                  <td>#2468</td>
                                  <td>June 29, 2020</td>
                                  <td>Completed</td>
                                  <td>$364.00 for 5 item</td>
                                  <td>
                                    <a href="#" className="btn-small d-block">
                                      View
                                    </a>
                                  </td>
                                </tr>
                                <tr>
                                  <td>#2366</td>
                                  <td>August 02, 2020</td>
                                  <td>Completed</td>
                                  <td>$280.00 for 3 item</td>
                                  <td>
                                    <a href="#" className="btn-small d-block">
                                      View
                                    </a>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </div>
                      </div>
                    </div>}

                    {isOpen === "tab-3" && <div
                      className="tab-pane fade active show"
                    >
                      <div className="card">
                        <div className="card-header">
                          <h3 className="mb-0">Orders tracking</h3>
                        </div>
                        <div className="card-body contact-from-area">
                          <p>
                            To track your order please enter your OrderID in the
                            box below and press "Track" button. This was given
                            to you on your receipt and in the confirmation email
                            you should have received.
                          </p>
                          <div className="row">
                            <div className="col-lg-8">
                              <form
                                className="contact-form-style mt-30 mb-50"
                                action="#"
                                method="post"
                              >
                                <div className="input-style mb-20">
                                  <label>Order ID</label>
                                  <input
                                    name="order-id"
                                    placeholder="Found in your order confirmation email"
                                    type="text"
                                  />
                                </div>
                                <div className="input-style mb-20">
                                  <label>Billing email</label>
                                  <input
                                    name="billing-email"
                                    placeholder="Email you used during checkout"
                                    type="email"
                                  />
                                </div>
                                <button
                                  className="submit submit-auto-width"
                                  type="submit"
                                >
                                  Track
                                </button>
                              </form>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>}

                    {isOpen === "tab-4" && <div
                      className="tab-pane fade active show"

                    >
                      <div className="row">
                        <div className="col-lg-6">
                          <div className="card mb-3 mb-lg-0">
                            <div className="card-header">
                              <h3 className="mb-0">Billing Address</h3>
                            </div>
                            <div className="card-body">
                              <address>
                                3522 Interstate
                                <br />
                                75 Business Spur,
                                <br />
                                Sault Ste. <br />
                                Marie, MI 49783
                              </address>
                              <p>New York</p>
                              <a href="#" className="btn-small">
                                Edit
                              </a>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-6">
                          <div className="card">
                            <div className="card-header">
                              <h5 className="mb-0">Shipping Address</h5>
                            </div>
                            <div className="card-body">
                              <address>
                                4299 Express Lane
                                <br />
                                Sarasota, <br />
                                FL 34249 USA <br />
                                Phone: 1.941.227.4444
                              </address>
                              <p>Sarasota</p>
                              <a href="#" className="btn-small">
                                Edit
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>}

                    {isOpen === "tab-5" && <div
                      className="tab-pane fade active show"

                    >
                      <div className="card">
                        <div className="card-header">
                          <h5>Account Details</h5>
                        </div>
                        <div className="card-body">
                          <p>
                            Already have an account?{" "}
                            <a href="page-login.html">Log in instead!</a>
                          </p>
                          <form method="post" name="enq">
                            <div className="row">
                              <div className="form-group col-md-6">
                                <label>
                                  First Name <span className="required">*</span>
                                </label>
                                <input
                                  required
                                  className="form-control"
                                  name="name"
                                  type="text"
                                />
                              </div>
                              <div className="form-group col-md-6">
                                <label>
                                  Last Name <span className="required">*</span>
                                </label>
                                <input
                                  required
                                  className="form-control"
                                  name="phone"
                                />
                              </div>
                              <div className="form-group col-md-12">
                                <label>
                                  Display Name{" "}
                                  <span className="required">*</span>
                                </label>
                                <input
                                  required
                                  className="form-control"
                                  name="dname"
                                  type="text"
                                />
                              </div>
                              <div className="form-group col-md-12">
                                <label>
                                  Email Address{" "}
                                  <span className="required">*</span>
                                </label>
                                <input
                                  required
                                  className="form-control"
                                  name="email"
                                  type="email"
                                />
                              </div>
                              <div className="form-group col-md-12">
                                <label>
                                  Current Password{" "}
                                  <span className="required">*</span>
                                </label>
                                <input
                                  required
                                  className="form-control"
                                  name="password"
                                  type="password"
                                />
                              </div>
                              <div className="form-group col-md-12">
                                <label>
                                  New Password{" "}
                                  <span className="required">*</span>
                                </label>
                                <input
                                  required
                                  className="form-control"
                                  name="npassword"
                                  type="password"
                                />
                              </div>
                              <div className="form-group col-md-12">
                                <label>
                                  Confirm Password{" "}
                                  <span className="required">*</span>
                                </label>
                                <input
                                  required
                                  className="form-control"
                                  name="cpassword"
                                  type="password"
                                />
                              </div>
                              <div className="col-md-12">
                                <button
                                  type="submit"
                                  className="btn btn-fill-out submit font-weight-bold"
                                  name="submit"
                                  value="Submit"
                                >
                                  Save Change
                                </button>
                              </div>
                            </div>
                          </form>
                        </div>
                      </div>
                    </div>}

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
