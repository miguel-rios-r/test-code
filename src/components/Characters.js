import React from "react";

const Characters=({allCharacters=[]})=>{
    return(
        <div className="row">
            {allCharacters.map((item,index)=>(
                    <div key={index} className="col">
                        <div className="card">
                            <img src={item.image} alt="" />
                        </div>
                    </div>
                ))}
        </div>
    )
}