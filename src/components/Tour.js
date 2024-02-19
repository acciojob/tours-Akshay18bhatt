import React ,{useState} from "react";



const Tour= ({place,tobeDeleted})=>{

    const [showMore, setShowMore] = useState(false);

    let placeInfo = !showMore?  place.info.slice(0,101): place.info;


    function showMoreBtn(){
        setShowMore(!showMore)
    }
    return(
        <div className="tour-div">
            
            <h1>{place.name}</h1>
            <div>
                <img src={place.image} alt={place.name} />
            </div>
            <p>
                {placeInfo}
                <button className="more-info" onClick={showMoreBtn} >{!showMore ? "Show more ..." : "Show Less" }</button>
            </p>
            <button className="del" onClick={()=>tobeDeleted(place.id)}>X</button>

        </div>
    )
}

export default Tour