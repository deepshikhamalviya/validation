// import React from 'react'
import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.css';

const RagistrationForm = () => {


    const [user, setUser] = useState({
        name: "",
        email: "",
        number: "",
        password: ""
    })

    const onchangeHandle = (event) => {
        //  const name = event.target.name
        //   console.log(name)
        setUser({ ...user, [event.target.name]: event.target.value })
        //   [event.target.name] it means yha ham dynemic data add kar rha hai esse hamko name ki propar values mil jaygi ki eska means ye hai ki name ki jovi value hai bo hamko yha mil jyagi
        console.log("user:is", user)
    }


    const submitForm = (event) => {
        if (user.name.length <= 0) {
            window.alert("error")
        }
        else {
            setUser({
                ...user,
                ...event.target.value
            })
        }
    }


    return (
        <>
            <section className="vh-100" style={{ marginRight: "5px" }}>
                <div className="container h-100">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col-lg-12 col-xl-11">
                            <div className="card text-black" style={{ borderRadius: "25px" }}>
                                <div className="card-body p-md-5">
                                    <div className="row justify-content-center">
                                        <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">

                                            <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Sign up</p>

                                            <form className="mx-1 mx-md-4">

                                                <div className="d-flex flex-row align-items-center mb-4">
                                                    <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                                                    <div className="form-outline flex-fill mb-0">

                                                        <input type="text" id="name" autoComplete="off" name="name" value={user?.name} onChange={onchangeHandle} className="form-control" />

                                                        <label className="form-label" htmlFor="form3Example1c">Your Name</label>
                                                    </div>
                                                </div>

                                                <div className="d-flex flex-row align-items-center mb-4">
                                                    <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                                                    <div className="form-outline flex-fill mb-0">

                                                        <input type="email" id="email" autoComplete="off" name="email" value={user?.email} onChange={onchangeHandle} className="form-control" />

                                                        <label className="form-label" htmlFor="form3Example3c">Your Email</label>
                                                    </div>
                                                </div>

                                                <div className="d-flex flex-row align-items-center mb-4">
                                                    <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
                                                    <div className="form-outline flex-fill mb-0">

                                                        <input type="number" id="number" autoComplete="off" name="number" value={user?.number} onChange={onchangeHandle} class="form-control" />

                                                        <label className="form-label" htmlFor="form3Example4c">Number</label>
                                                    </div>
                                                </div>

                                                <div className="d-flex flex-row align-items-center mb-4">
                                                    <i className="fas fa-key fa-lg me-3 fa-fw"></i>
                                                    <div className="form-outline flex-fill mb-0">

                                                        <input type="text" id="password" autoComplete="off" name="password" value={user?.password} onChange={onchangeHandle} className="form-control" />

                                                        <label className="form-label" htmlFor="form3Example4cd">Enter your password</label>
                                                    </div>
                                                </div>

                                                <div className="form-check d-flex justify-content-center mb-5">


                                                </div>

                                                <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4" >

                                                    <button type="button" className="btn btn-primary btn-lg" onClick={submitForm}>Register</button>
                                                </div>

                                            </form>

                                        </div>
                                        <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">

                                            <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
                                                className="img-fluid" alt="Sample image" />

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default RagistrationForm
