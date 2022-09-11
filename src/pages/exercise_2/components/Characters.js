import React from "react";
const Characters=({allCharacters=[]})=>{
    return(
        <div className="row">
            {allCharacters.map((item,index)=>(
                    <div key={index} className="col">
                        <div className="card" style={{minwidth:"200px"}}>
                            <img src={item.image} alt="" />
                        </div>
                    </div>
                ))}
        </div>
    )
}

export default Characters