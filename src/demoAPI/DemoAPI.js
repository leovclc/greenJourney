import * as React from 'react';
import './DemoAPI.css';
import MediaCard from './MediaCard';
import BasicTable from './BasicTable';
import BasicButtons from '../Button/Button';
import Button from '@mui/material/Button';
import { Input } from '@mui/material';
import { useEffect, useState } from 'react';
import Weather from './Weather';



function DemoAPI(){
    const[imageURL,setImageURL] = useState("");
    const handleClick =() =>{
        const data = {query: "beef"};
    
        fetch("https://trackapi.nutritionix.com/v2/natural/nutrients", {
          method: "POST", // or 'PUT'
          headers: {
            "Content-Type": "application/json",
            'x-app-id':'53dc004f',
            'x-app-Key':'1df5f8dcada2ca044100b607758e163c'
          },
          body: JSON.stringify(data),
        })
          .then((response) => response.json())
          .then((data) => {
            console.log("Success:", data);
            setImageURL(data.foods[0].photo.highres);
          })
    
          .catch((error) => {
            console.error("Error:", error);
          });
        
    }


    return(
        <div>
            <input 
             type="text"
             id="message"
             name="message">
             </input>

        <Button onClick = {handleClick} variant="contained">Submit</Button>
        <MediaCard imageURL ={imageURL}></MediaCard>
        <BasicTable></BasicTable>
        <Weather></Weather>
        </div>

    )
}


export default DemoAPI;

