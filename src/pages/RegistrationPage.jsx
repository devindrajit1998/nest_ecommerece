import { useFormik } from "formik";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { signUpSchema } from "../schemas";
import ReCAPTCHA from "react-google-recaptcha";

export default function RegistrationPage() {
  const [captchaCode, setCaptchaCode] = useState("");
  console.log("captchaCode", captchaCode);

  const initialValues = {
    username: '',
    password: '',
    confirm_password: '',
    email: '',
    checkbox: ''
  }
  const { values, errors,touched, handleBlur, handleChange, handleSubmit } = useFormik({
    initialValues,
    validationSchema: signUpSchema,
    onSubmit: (values) => {
      console.log(values);
    }
  })

  const handleCaptcha = (token) => {
    setCaptchaCode(token);
  };

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
                <div className="col-lg-6 col-md-8">
                  <div className="login_wrap widget-taber-content background-white">
                    <div className="padding_eight_all bg-white">
                      <div className="heading_s1">
                        <h1 className="mb-5">Create an Account</h1>
                        <p className="mb-30">
                          Already have an account?
                          <Link to='/login'>Login</Link>
                        </p>
                      </div>
                      <form onSubmit={handleSubmit}>
                      <div className="form-group">
                          <input
                            type="text"
                            name="username"
                            placeholder="Username"
                            value={values.username}
                            onChange={handleChange}
                            onBlur={handleBlur}
                          />
                          {touched.username && errors.username && (
                            <span className="font-sm text-danger">{errors.username}</span>
                          )}
                        </div>
                        <div className="form-group">
                          <input
                            type="text"
                            name="email"
                            placeholder="Email"
                            value={values.email}
                            onChange={handleChange}
                            onBlur={handleBlur}
                          />
                          {touched.email && errors.email && (
                            <span className="font-sm text-danger">{errors.email}</span>
                          )}
                        </div>
                        <div className="form-group">
                          <input
                            type="password"
                            name="password"
                            placeholder="Password"
                            value={values.password}
                            onChange={handleChange}
                            onBlur={handleBlur}
                          />
                          {touched.password && errors.password && (
                            <span className="font-sm text-danger">{errors.password}</span>
                          )}
                        </div>
                        <div className="form-group">
                          <input
                            type="password"
                            name="confirm_password"
                            placeholder="Confirm password"
                            value={values.confirm_password}
                            onChange={handleChange}
                            onBlur={handleBlur}
                          />
                          {touched.confirm_password && errors.confirm_password && (
                            <span className="font-sm text-danger">{errors.confirm_password}</span>
                          )}
                        </div>
                       
                        <div className="login_footer form-group mb-0">
                          <div className="chek-form">
                            <div className="custome-checkbox">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                name="checkbox"
                                id="exampleCheckbox12"
                                value={values.checkbox}
                                onChange={handleChange}
                                onBlur={handleBlur}
                              />
                              <label
                                className="form-check-label"
                                htmlFor="exampleCheckbox12"
                              >
                                <span>I agree to terms &amp; Policy.</span>
                              </label>
                            </div>
                          </div>
                        </div>
                        {touched.checkbox && errors.checkbox && (
                          <span className="font-sm text-danger">{errors.checkbox}</span>
                        )}


                        <div className="form-group mb-30 mt-50">
                          <ReCAPTCHA
                            sitekey="6LfDM6kqAAAAANn5pEP2SbUugd8zzlnMyALO86XY"
                            onChange={handleCaptcha}
                          />
                          <button
                            type={captchaCode ? "/submit" : "button"}
                            // type="submit"
                            className="btn btn-fill-out btn-block hover-up font-weight-bold mt-20"
                          >
                            Submit &amp; Register
                          </button>
                        </div>
                        <p className="font-xs text-muted">
                          <strong>Note:</strong>Your personal data will be used
                          to support your experience throughout this website, to
                          manage access to your account, and for other purposes
                          described in our privacy policy
                        </p>
                      </form>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 pr-30 d-none d-lg-block">
                  <img className="border-radius-15" src="https://img.freepik.com/free-vector/sign-up-concept-illustration_114360-7865.jpg" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
