
import './ImageCard.css'


const ImageCard = () =>{

    return (
    <div className="card">
        <img className ='img' src = {require('./assets/img_avatar.png')} alt="img_avatar" />
        <div class="container">
          <h4><b>picture</b></h4> 
          <p>picture</p> 
        </div>
    </div>
    )  
      
    };
    
    export default ImageCard;