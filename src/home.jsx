import { useState } from 'react';
import Nav from './nav.jsx'
import { useNavigate } from 'react-router-dom'

export default function Home({job}){
    const navigate=useNavigate();

    const [filter,setFilter]=useState("All");
    const [search,setSearch]=useState("")
    
    const total=job.length;
    const applied=job.filter((j)=>j.stat==="Applied").length;
    const interviews=job.filter((j)=>j.stat==="Interview").length;
    const offers=job.filter((j)=> j.stat==="Offer").length;

    const shown=job
                .filter( (j)=>filter==="All" ||  j.stat===filter)
                .filter((j)=>
                    j.company.toLowerCase().includes(search.toLowerCase()) || 
                    j.job.toLowerCase().includes(search.toLowerCase())
                )
            
    return(
        <>
            <Nav/>
            <div className='heading'>
            <section className='heading-sec'>
                <h1>My Applications</h1>
                <button onClick={()=> navigate("/add")}>+Add job</button>
            </section>
            
            <section className='cards'>
                <div>
                    <p>Total jobs</p>
                    <h2>{total}</h2>
                </div>
                <div>
                    <p>Applied</p>
                    <h2>{applied}</h2>
                </div>
                <div>
                    <p>Interviews</p>
                    <h2>{interviews}</h2>
                </div>
                <div>
                    <p>Offers</p>
                    <h2>{offers}</h2>
                </div>
            </section>

            <section className='search-box'>
                <h3>Search</h3>
                <div className='title'>
                    <input type='search' placeholder='Company or job title' value={search} onChange={(e)=>setSearch(e.target.value)}/>
                    <button className={filter === "All" ? "active" : ""} onClick={()=>setFilter("All")}>All</button>
                    <button className={filter === "Applied" ? "active" : ""} onClick={()=>setFilter("Applied")}>Applied</button>
                    <button className={filter === "Saved" ? "active" : ""} onClick={()=>setFilter("Saved")}>Saved</button>
                    <button className={filter === "Interview" ? "active" : ""} onClick={()=>setFilter("Interview")}>Interview</button>
                    <button className={filter === "Offer" ? "active" : ""} onClick={()=>setFilter("Offer")}>Offer</button>
                    <button className={filter === "Rejected" ? "active" : ""} onClick={()=>setFilter("Rejected")}>Rejected</button>
                </div>

                <section className='jobs'>
                <div className='head'>
                    <h3>Company</h3>
                    <h3>Job title</h3>
                    <h3>Location</h3>
                    <h3>Status</h3>
                    <h3>Applied On</h3>
                </div>

            {shown.map((j)=>(
                
                <div className='head-ans' key={j.id}>
                    <h2>{j.company}</h2>
                    <h3>{j.job}</h3>
                    <p>{j.location}</p>
                    <p>{j.stat}</p>
                    <p>{j.date}</p>
                    
                </div>
            ))
                
            } 
            {shown.length === 0 && <p className='not-found'>No jobs found</p>}      

                </section>
            </section>

            </div>
        </>
    )
}