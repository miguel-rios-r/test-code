import React from "react";
const Characters=({allCharacters=[]})=>{
    return(
        <div className="row">
            {allCharacters.map((item,index)=>(
                    <div key={index} className="col mb-4">
                        <div className="card" style={{minwidth:"200px"}}>
                            <img src={item.image} alt="" />
                            <div>
                            <h5 className="card-title">{item.id}. {item.name}</h5>
                            <p>Species:{item.species}</p>
                            <p>Location:{item.location.name}</p>
                            <button>See more..</button>
                            </div>    
                        </div>
                    </div>
                ))}
        </div>
    )
}

export default Characters