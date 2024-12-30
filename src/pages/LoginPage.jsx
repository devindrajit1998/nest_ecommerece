import { useFormik } from "formik";
import { useEffect, useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import { Link, useNavigate } from "react-router-dom";
import { loginSchema } from "../schemas";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../redux/slice/UserSlice";

export default function LoginPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userLoginStatus = useSelector((state) => state.userSlice.isSession);
  const [captchaCode, setCaptchaCode] = useState("");

  const handleCaptcha = (token) => {
    setCaptchaCode(token);
  };

  const user = useSelector((state) => state.userSlice.user);

  console.log(user);

  const initialValues = {
    identifier: '',
    password: '',
  }

  const { values, errors, touched, handleBlur, handleChange, handleSubmit } = useFormik({
    initialValues,
    validationSchema: loginSchema,
    onSubmit: async (values, action) => {
      await dispatch(loginUser(values));
      action.resetForm();
    }
  })


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
                      <form onSubmit={handleSubmit}>
                        <div className="form-group">
                          <input
                            type="text"
                            name="identifier"
                            placeholder="Username or Email *"
                            value={values.identifier}
                            onChange={handleChange}
                            onBlur={handleBlur}
                          />
                          {touched.identifier && errors.identifier && (
                            <span className="font-sm text-danger">{errors.identifier}</span>
                          )}
                        </div>
                        <div className="form-group">
                          <input
                            type="password"
                            name="password"
                            placeholder="Your password *"
                            value={values.password}
                            onChange={handleChange}
                            onBlur={handleBlur}
                          />
                          {touched.password && errors.password && (
                            <span className="font-sm text-danger">{errors.password}</span>
                          )}
                        </div>

                        <div className="login_footer form-group mb-10">
                          <a className="text-muted" href="#">
                            Forgot password?
                          </a>
                        </div>
                        {touched.checkbox && errors.checkbox && (
                          <span className="font-sm text-danger">{errors.checkbox}</span>
                        )}
                        <ReCAPTCHA
                          sitekey="6LfDM6kqAAAAANn5pEP2SbUugd8zzlnMyALO86XY"
                          onChange={handleCaptcha}
                        />
                        <div className="form-group">
                          <button
                            type={captchaCode ? "submit" : "button"}
                            // type="submit"
                            className="btn btn-heading btn-block hover-up mt-10"
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
