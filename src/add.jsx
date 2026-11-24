import { useState } from 'react'
import './add.css'
import { useNavigate } from "react-router-dom";

function Add({ onSave }){
    const [data,setData]=useState({
        company:"",
        job:"",
        location:"",
        stat:"Saved",
        date:""
    })

    const navigate=useNavigate();

    const handleSave=()=>{

        if(data.company==="" || data.job==="" || data.location==="" || data.stat==="" || data.date===""){
            alert("Please fill all the field");
            return;
        }
        else{
            alert("Successfully saved")
        }

        onSave({...data , id:Date.now()})
        // setData({
        //     company:"",
        //     job:"",
        //     location:"",
        //     stat:"Saved",
        //     date:""
        // })

        navigate("/");
    }

    return(
        <div className="add-container">
            <div>
                <h1>Add job</h1>
                <label>Company</label>
                <input type="text" placeholder="e.g.Tridin Software" value={data.company}  onChange={(e)=> setData({...data,company:e.target.value})}/>

                <label>Job Title</label>
                <input type="text" placeholder="e.g.MERN Stack Developer" value={data.job} onChange={(e)=> setData({...data,job:e.target.value})}/>

                <label>Location</label>
                <input type="text" placeholder="e.g.Chennai" value={data.location} onChange={(e)=> setData({...data,location:e.target.value})}/>

                <label>Status</label>
                <select value={data.stat} onChange={(e)=> setData({...data,stat:e.target.value})}>
                    <option>Saved</option>
                    <option>Applied</option>
                    <option>Interview</option>
                    <option>Offer</option>
                    <option>Rejected</option>
                </select>

                <label>Applied on</label>
                <input type="date" value={data.date} onChange={(e)=>setData({...data,date:e.target.value})}/>
 
                <section>
                    <button onClick={()=>navigate("/")}>Cancel</button>
                    <button onClick={handleSave}>Save job</button>
                </section>
            </div>
        
        </div>
    )
}

export default Add