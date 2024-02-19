import React, {useState} from "react";
import { placesData } from "./placesData";
import Tour from "./Tour";
import "./app.css"

const App = () => {

  const [tours, setTours] = useState(placesData);


  function tobeDeleted(deleteTour){
     let filteredTours= tours.filter(tour=>tour.id!==deleteTour)
    //  console.log(filteredTours);
     setTours(filteredTours);
  }
  function refreshPage(){
    setTours(placesData);
  }
    return(
      <main id="main">
        <button onClick={refreshPage} className="refresh">Refresh</button>

        <div id="content-div">
            {
              tours.map(place=>{
                return <Tour place={place} key={place.id} tobeDeleted={tobeDeleted} />
              })
            }
        </div>
        
      </main>
    )
}
export default App;
