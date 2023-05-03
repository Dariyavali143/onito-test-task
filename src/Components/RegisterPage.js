import React from 'react'
import { Link } from 'react-router-dom';
import { useState } from 'react'
import { useNavigate } from "react-router-dom";
//import '../CSS/RegisterPage.css';

const RegisterPage = () => {

    const navigate = useNavigate() // for redirect to other page

    //get user enter details  

    const [Name, setname] = useState()
    const [dob, setdob] = useState()
    const [Sex, setsex] = useState()
    const [Mobile, setmobile] = useState()
    const [Govt_id, setgovt_id] = useState()
    const [Gurdian_details, setguardiandetails] = useState()
    const [Email, setemail] = useState()
    const [Emeargency_ph_no, setenumber] = useState()
    const [Address, setaddress] = useState()
    const [State, setstate] = useState()
    const [City, setcity] = useState()
    const [County, setcontry] = useState()
    const [Pincode, setpincode] = useState()
    const [Occupation, setoccupation] = useState()
    const [Region, setreligion] = useState()
    const [Meterial_status, setmetiralstatus] = useState()
    const [Nationality, setnationality] = useState()
    const [Bload_group, setbloadgroup] = useState()
 //console.log(Name,dob,Sex,Mobile,Govt_id,Gurdian_details,Email,Emeargency_ph_no,Address,State,City,County,Pincode,Occupation,Region,Meterial_status,Nationality,Bload_group)

    //aadhar pan validation   
    const [pattren, setPattren] = useState("");
    const [disable, setdisable] = useState("disable");



    //  //aadhar pan validation   logic
    const handleChange = async (e) => {

        let x = e.target.value

        if (x == "PanCard") {
            
            // console.log("pan")

            setPattren("(?=.*[0-9])(?=.*[A-Z]).{10,}") 

            setdisable("")
        }
        if (x == "AadharCard") {
            setPattren("[0-9]{12}")
            setdisable("")
            // console.log("aadhar")
        }



    };

// Send user data to database
    const save_data = (e) => {
        e.preventDefault();
        
       let data = {Name,dob,Sex,Mobile,Govt_id,Gurdian_details,Email,Emeargency_ph_no,Address,State,City,County,Pincode,Occupation,Region,Meterial_status,Nationality,Bload_group }       // i taken customer entry details in object data variable 

        fetch("https://644e784e4e86e9a4d8f99ab9.mockapi.io/onitotask/details", {
            method: 'POST',

            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'

            },
            body: JSON.stringify(data)    // data variable name

        }) //.then((result) => {           // optional


        alert("Data Submited Sucess Fully")

        navigate("/Getdata"); 

    }






    return (
        <div>


            <div class="container">

                <form onSubmit={save_data}>
                    <h5 style={{ marginTop: '2%', textDecoration: "underline" }}>Personal Details</h5>
                    {/* first row */}
                    <div class="row">
                        <div class="col-sm-4">

                            <label for="validationDefault01" class="form-label">First name <span style={{ color: "red" }}>*</span></label>
                            <input type="text" class="form-control" id="validationDefault01" required onChange={(e) => setname(e.target.value)} />

                        </div>

                        <div class="col-sm-4">

                            <label for="validationDefault01" class="form-label">Date Of Birth/Age <span style={{ color: "red" }}>*</span></label>
                            <input type="text" class="form-control" id="validationDefault01" required onChange={(e) => setdob(e.target.value)} />


                        </div>


                        <div class="col-sm-4">
                            <label for="validationDefault01" class="form-label">Sex <span style={{ color: "red" }}>*</span></label>
                            <select class="form-select" aria-label="Default select example" required onChange={(e) => setsex(e.target.value)}>
                                <option value=""> Select</option>
                                <option value="Male">Male</option>
                                <option value="Female">Femal</option>

                            </select>

                        </div>


                    </div>



                    {/* secound first row */}

                    <div class="row">
                        <div class="col-sm-4">

                            <label for="validationDefault01" class="form-label">Mobile Number <span style={{ color: "red" }}>*</span></label>
                            <input type="text" pattern="[789][0-9]{9}" placeholder='Give valid indian number' class="form-control" id="validationDefault01" required onChange={(e) => setmobile(e.target.value)} />

                        </div>


                        <div class="col-sm-4">

                            <label for="selectIdType" class="form-label">Govt-Issued-Id <span style={{ color: "red" }}>*</span></label>
                            <select class="form-select" id="selectIdType" required onChange={handleChange}>
                                <option value=''> Select</option>
                                <option value="AadharCard">AadharCard</option>
                                <option value="PanCard">PanCard</option>
                            </select>

                        </div>




                        <div class="col-sm-4">

                            <label for="validationDefault01" class="form-label">Govt-Id-Number</label>

                            {/* logic for pan aadhar validation */}


                            <div className="">
                                <input type="text" pattern={pattren} disabled={disable} placeholder='Select Govt-Issued-Id ' class="form-control" id="validationDefault01" required onChange={(e) => setgovt_id(e.target.value)} />

                            </div>




                        </div>


                    </div>

                    {/* 3 row */}

                    <h5 style={{ marginTop: '2%', textDecoration: "underline" }}>Contact Details</h5>
                    <div class="row">
                        <div class="col-sm-4">

                            <label for="validationDefault01" class="form-label">Gurdian Details <span style={{ color: "red" }}>*</span></label>
                            <input type="text" class="form-control" id="validationDefault01" required onChange={(e) => setguardiandetails(e.target.value)} />

                        </div>

                        <div class="col-sm-4">

                            <label for="validationDefault01" class="form-label">Email</label>
                            <input type="email" class="form-control" id="validationDefault01" required onChange={(e) => setemail(e.target.value)} />


                        </div>


                        <div class="col-sm-4">

                            <label for="validationDefault01" class="form-label">Emergency Contact Number</label>
                            <input type="number" class="form-control" id="validationDefault01" required onChange={(e) => setenumber(e.target.value)} />


                        </div>


                    </div>

                    {/*  4 row*/}

                    <h5 style={{ marginTop: '2%', textDecoration: "underline" }}>Address Details</h5>
                    <div class="row">
                        <div class="col-sm-4">

                            <label for="validationDefault01" class="form-label">Address <span style={{ color: "red" }}>*</span></label>
                            <input type="text" class="form-control" id="validationDefault01" required onChange={(e) => setaddress(e.target.value)} />

                        </div>

                        <div class="col-sm-4">

                            <label for="validationDefault01" class="form-label">State</label>
                            <input type="text" class="form-control" id="validationDefault01" required onChange={(e) => setstate(e.target.value)} />


                        </div>


                        <div class="col-sm-4">

                            <label for="validationDefault01" class="form-label">City</label>
                            <input type="text" class="form-control" id="validationDefault01" required onChange={(e) => setcity(e.target.value)} />


                        </div>


                    </div>

                    {/*  5 row*/}
                    <div class="row">
                        <div class="col-sm-4">

                            <label for="validationDefault01" class="form-label">Country</label>
                            <input type="text" class="form-control" id="validationDefault01" required onChange={(e) => setcontry(e.target.value)} />

                        </div>

                        <div class="col-sm-4">

                            <label for="validationDefault01" class="form-label">Pincode</label>
                            <input type="text" class="form-control" id="validationDefault01" required onChange={(e) => setpincode(e.target.value)} />


                        </div>





                    </div>


                    {/* 6 row */}


                    <h5 style={{ marginTop: '2%', textDecoration: "underline" }}>Other Details</h5>
                    <div class="row">
                        <div class="col-sm-4">

                            <label for="validationDefault01" class="form-label">Occupation</label>
                            <input type="text" class="form-control" id="validationDefault01" required onChange={(e) => setoccupation(e.target.value)} />

                        </div>

                        <div class="col-sm-4">

                            <label for="validationDefault01" class="form-label">Reliagion</label>
                            <input type="text" class="form-control" id="validationDefault01" required onChange={(e) => setreligion(e.target.value)} />


                        </div>


                        <div class="col-sm-4">

                            <label for="validationDefault01" class="form-label">Meritial Status</label>
                            <input type="text" class="form-control" id="validationDefault01" required onChange={(e) => setmetiralstatus(e.target.value)} />


                        </div>


                    </div>



                    {/* 7 row */}



                    <div class="row">
                        <div class="col-sm-4">

                            <label for="validationDefault01" class="form-label">Natianality <span style={{ color: "red" }}>*</span></label>
                            <input type="text" class="form-control" id="validationDefault01" required onChange={(e) => setnationality(e.target.value)} />

                        </div>

                        <div class="col-sm-4">

                            <label for="validationDefault01" class="form-label">Blooad Group</label>
                            <select class="form-select" aria-label="Default select example" onChange={(e) => setbloadgroup(e.target.value)} required>
                                <option value=""> Select</option>
                                <option value="A">A</option>
                                <option value="B">B</option>
                                <option value="AB">AB</option>
                                <option value="O">O</option>


                            </select>
                        </div>


                    </div>






                    <div style={{ marginLeft: "", marginTop: "2%", }}>

                        <button type="button" class="btn btn-danger">Cancel</button> &nbsp; &nbsp; &nbsp;
                        <button type="submit" class="btn btn-success">Submit</button> &nbsp; &nbsp; &nbsp;
                        <Link to="/Getdata"> <button class="btn btn-success">See all users</button></Link>

                    </div>

                </form>
            </div>



            <br />
            <br />
            <br />



        </div>







    )
}

export default RegisterPage