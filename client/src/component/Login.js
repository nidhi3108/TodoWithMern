import { Formik} from "formik";
import { resetForm,useNavigate  } from "react-router-dom";
import React from "react";
import Swal from "sweetalert2";


const Login = () => {
    const navigate = useNavigate();
    const loginSubmit= async (formdata,{resetForm})=>{
            console.log(formdata);
            const response = await fetch('http://localhost:5000/user/login',{
                method: "Post",
                body: JSON.stringify(formdata),
                headers:{
                    'Content-Type': 'application/json'
                }
            })
            const userData = await response.json();
        if(response.status === 200){
            console.log('Login Successful');
            sessionStorage.setItem('currentUser',JSON.stringify(userData));
            Swal.fire({
                title:"Success",
                icon: "success",
                text:"Log In Successful",
                timer: 2000,
                confirmButtonText: 'OK',
                confirmButtonColor: 'green'
            })
            navigate('/todo');
            resetForm();
        }else if(response.status=== 401){
            console.log('Login Failed');
            Swal.fire({
                title: "Login Failed...",
                icon: 'error',
                timer: 3000,
                text: 'Someone anonymous...',
                footer: `<a href='../userregister'>Want to register?</a>`
            })
        }
        }

    return (
        <>
            <section className="vh-100">
                <div className="container py-5 h-100">
                    <div className="row d-flex align-items-center justify-content-center h-100">
                        <div className="col-md-8 col-lg-7 col-xl-6">
                            <img
                                src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
                                className="img-fluid"
                            // alt="Phone image"
                            />
                        </div>
                        <div className="col-md-7 col-lg-5 col-xl-5 offset-xl-1">
                        <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">
                                                Login Here
                                            </p>
                            <Formik initialValues={{email:'',password:''}} onSubmit={loginSubmit}>
                              {
                                ({values,handleChange,handleSubmit})=>(
                                    <form onSubmit={handleSubmit}>
                                    <div >
                                        <label className="form-label" htmlFor="form1Example13">
                                            Email address
                                        </label>
                                        <input
                                            type="email"
                                            value={values.email}
                                            onChange={handleChange}
                                            id="email"
                                            className="form-control form-control-lg"
                                        />
    
                                    </div>
                                    <div>
                                        <label className="form-label" htmlFor="form1Example23">
                                            Password
                                        </label>
                                        <input
                                            type="password"
                                            value={values.password}
                                            onChange={handleChange}
                                            id="password"
                                            className="form-control form-control-lg"
                                        />
                                        <br />
                                    </div>
                                    <button type="submit" className="btn btn-primary btn-lg btn-block">
                                        Sign in
                                    </button>
                                </form>
                                )
                                   
                                
                              }

                            </Formik>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}

export default Login