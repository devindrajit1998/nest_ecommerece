import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function LoginPage() {
  const [captchaCode, setCaptchaCode] = useState("");

  // Function to generate a 4-digit random code
  const generateCaptcha = async () => {
    const randomCode = Math.floor(1000 + Math.random() * 9000).toString();
    const newCode = randomCode.split('');
    setCaptchaCode(newCode);
  };
  console.log("captchaCode", captchaCode);

  useEffect(() => {
    generateCaptcha();
  }, []);
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
            <div className="col-xl-8 col-lg-10 col-md-12 m-auto">
              <div className="row">
                <div className="col-lg-6 pr-30 d-none d-lg-block">
                  <img
                    className="border-radius-15"
                    src="https://img.freepik.com/free-vector/tablet-login-concept-illustration_114360-7863.jpg"
                    alt
                  />
                </div>
                <div className="col-lg-6 col-md-8">
                  <div className="login_wrap widget-taber-content background-white">
                    <div className="padding_eight_all bg-white">
                      <div className="heading_s1">
                        <h1 className="mb-5">Login</h1>
                        <p className="mb-30">
                          Don't have an account?
                          <Link to="/register">Create here</Link>
                        </p>
                      </div>
                      <form method="post">
                        <div className="form-group">
                          <input
                            type="text"
                            required
                            name="email"
                            placeholder="Username or Email *"
                          />
                        </div>
                        <div className="form-group">
                          <input
                            required
                            type="password"
                            name="password"
                            placeholder="Your password *"
                          />
                        </div>
                        <div className="login_footer form-group">
                          <div className="chek-form">
                            <input
                              type="text"
                              required
                              name="email"
                              placeholder="Security code *"
                            />
                          </div>
                          <span className="security-code">
                            <b className="text-new">{captchaCode[0]}</b>
                            <b className="text-hot">{captchaCode[1]}</b>
                            <b className="text-sale">{captchaCode[2]}</b>
                            <b className="text-best">{captchaCode[3]}</b>
                          </span>
                        </div>
                        <div className="login_footer form-group mb-50">
                          <div className="chek-form">
                            <div className="custome-checkbox">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                name="checkbox"
                                id="exampleCheckbox1"
                                defaultValue
                              />
                              <label
                                className="form-check-label"
                                htmlFor="exampleCheckbox1"
                              >
                                <span>Remember me</span>
                              </label>
                            </div>
                          </div>
                          <a className="text-muted" href="#">
                            Forgot password?
                          </a>
                        </div>
                        <div className="form-group">
                          <button
                            type="submit"
                            className="btn btn-heading btn-block hover-up"
                            name="login"
                          >
                            Log in
                          </button>
                        </div>
                      </form>
                    </div>
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
