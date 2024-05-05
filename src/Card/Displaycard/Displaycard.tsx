import React from "react"
import "./displaycard.css"; 
const Displaycard=({value})=>{
    console.log(value)
    return(
        <>
         <div className="card-container-box">
            <div className="card-company-name">
                <div className="logo">
                    <img src={value.logoUrl}/>
                </div>
                <div className="company-name">
                {value?.companyName}
                </div>

            </div>
            <div className="card-job-title">




              {value?.jobRole}
            </div>
            <div className="card-job-description">
              {value?.jobDetailsFromCompany}
            </div>
            <div className="card-job-experience-required">
             {value?.minExp}-{value?.maxExp}
            </div>
            <div className="card-apply-button">
                <button className="apply">
                  Easy Apply
                </button>
            </div>
         </div>
        </>

    )
}
export default Displaycard