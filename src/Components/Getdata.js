import React from 'react'
import { useEffect, useState } from 'react'
import { useNavigate } from "react-router-dom";
import { Link} from 'react-router-dom';


const Getdata = () => {

    const [data, setData] = useState([]) // store api data


    useEffect(() => {


        getapidata()

    }, [])




    // get data from api

    const getapidata = () => {


        try {

            fetch('https://644e784e4e86e9a4d8f99ab9.mockapi.io/onitotask/details/').then((resp) => {

                resp.json().then((result) => {

                    // console.log(result)

                    setData(result)
                }
                )

            })

        } catch (error) {
            console.log(`Some network issues ${error}`)

        }


    }



const deletedata=()=>{
alert("Delete button working")

}


const  Update_details=()=>{
    alert(" Edite button working")
}



  return (
    <div>
    
    
    
    
            {/*  display data in table*/}

            <Link to="/">  <button  type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop8" >User Register</button></Link>
            <div class="table-responsive style  ">
            
                {data.length > 0 ?


                    <table class="table table-success table-striped">
                        <thead>
                            <tr>
                                <th scope="col">S.No</th>
                                <th scope="col">Name</th>
                                <th scope="col">Age/dob</th>
                                <th scope="col">Sex</th>
                                <th scope="col">Mobile</th>
                                <th scope="col">Address</th>
                                <th scope="col">Pan/Aadhar</th>
                                <th scope="col">Guardian Details</th>
                                <th scope="col">Nationality</th>
                                <th scope="col">Action</th>

                            </tr>
                        </thead>
                        <tbody>
                            {
                                data.map((item, index) =>
                                    <tr>
                                        <th scope="row">{index + 1}</th>
                                        <td>{item.Name}</td>
                                        <td>{item.dob}</td>
                                        <td>{item.Sex}</td>
                                        <td>{item.Mobile}</td>
                                        <td>{item.Address}</td>
                                        <td>{item.Govt_id}</td>
                                        <td>{item.Gurdian_details}</td>
                                        <td>{item.Nationality}</td>
                                        <td>  <a onClick={() => deletedata(item._id)}><i style={{cursor:'pointer'}}  class="fa fa-trash" aria-hidden="true" ></i></a>  &nbsp;  <a onClick={() => Update_details(item._id)}  /* start model*/ data-bs-toggle="modal" data-bs-target="#staticBackdrop" /* end model*/ ><i class="fa fa-pencil" aria-hidden="true" style={{ cursor: 'pointer' }}></i></a></td>

                                    </tr>


                                )
                            }


                        </tbody>
                    </table>


                    : <h2 style={{ textAlign: 'center' }}>Data Loading ........... :)</h2>}




            </div>
            {/*  end display data in table*/}

    
    
    
    
    
    </div>
  )
}

export default Getdata