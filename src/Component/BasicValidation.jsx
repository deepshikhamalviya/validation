import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.css';

const BasicValidation = () => {

    const [user, setUser] = useState({
        //  field👇: values👇
        email: "",
        password: ""
    })
    // yha email or 👆password me user jo input karega bo store ho jayga


    const submitForm = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
        console.log("user is : ", user)

        // yaha per ham setUser me three dot se email or password ki value get kar rha hai and then [e.target.name] se ham field ka data show kara rha hai and : e.target.value se ham values ka data show kara rha hai 

    }

    const handleOnSubmit = (e) => {
        e.preventDefault();
        if (user?.email?.length > 5)
            if (user?.password?.length > 8)
                alert("successfully submit")
            else
                alert("password is too short")
    }
    // (...user) esme phila ka jovi data hai bovi store hai or newEntery me new data store hai,...inputStore es liya likha hai kuyki agr phila bale user ne email password dala or login kiya or fir logout kar diya tab to logout ke bad vi uska data hamko mile delete na ho
    return (
        <form className='m-10' onSubmit={handleOnSubmit}>
            <div className="form-group">
                <label htmlFor='email'>Email address</label>
                <input type="email" className="form-control" placeholder="Enter email" name="email" id="email" value={user?.email} onChange={submitForm} required />
                {/* hamra data object ke fom me a rha hai es liya ham value={user.email} dot karke likh rha hai */}
                <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>

            </div>
            <div className="form-group">
                <label htmlFor='password'>Password</label>
                <input type="text" className="form-control" placeholder="Password" name="password" id="password" autoComplete='off' value={user?.password} onChange={submitForm} required />
            </div>

            <div className="form-check">
                <input type="checkbox" className="form-check-input" />

                <label className="label">Check me out</label>
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
    )
}

export default BasicValidation


// ye hamne form complete kar liya hai ab ham es form ko submit karge to ye form auto refrece ho jyaga hamra data khi vi store nhi hoga

// lakin hamko chahiye ki hamra data store ho jaye or auto refrece na ho uske liya ham form tag me onSubmit ka use karge or usme event.preventDefault ka use karge

// ?. nullish operator 