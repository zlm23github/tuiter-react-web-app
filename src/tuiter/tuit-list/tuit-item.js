import React, {useState} from "react";
import { faCloud } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons"
import {faHeart as anotherFaHeart} from "@fortawesome/free-regular-svg-icons"
import { faComment } from "@fortawesome/free-regular-svg-icons";
import { faRetweet } from "@fortawesome/free-solid-svg-icons";
import { faUpload } from "@fortawesome/free-solid-svg-icons";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import {useDispatch} from "react-redux";
import {deleteTuitThunk} from "../services/tuits-thunks";


const TuitItem = (
 {
   tuit = {
     topic: 'SpaceX',
     userName: '@spacex',
     time: '2h',
     title: 'Tesla CyberTruck lands on Mars and picks up the Curiosity rover on its 6 bed',
     image: 'tesla.png',
     liked: false,
     likes: 1555,
     replies: 432,
     retuits: 12313
   }
 }
) => {
 const [like, setLike] = useState(tuit.liked);
 const [likes, setLikes] = useState(tuit.likes + 1);
 const dispatch = useDispatch();
 const deleteTuitHandler = (id) => {
    dispatch(deleteTuitThunk(id));
}

 return(
    <div>
        <li className="list-group-item" >
            <div className="row">
                <div className="col-1">
                    <img width={40} className="rounded-3" src={`/images/${tuit.image}`}/>
                </div>
                <div className="col-11">
                    <div>
                        <FontAwesomeIcon className="bi bi-x-lg float-end" icon={faXmark} onClick={() => deleteTuitHandler(tuit._id)}/>
                        <span className="fw-bolder">{tuit.topic}</span>
                        <span style={{color: "lightblue"}}> <FontAwesomeIcon icon={faCloud} /> </span>
                        <span style={{color: "grey"}}>{tuit.handle} • {tuit.time}</span>
                    </div>
                    <div style={{color: "grey"}}>{tuit.tuit}</div>
                    <br/>
                    <div className="row">
                    <div className="col-3">
                        <FontAwesomeIcon icon={faComment} /> {tuit.replies}
                        
                    </div>
                    <div className="col-3">
                        <FontAwesomeIcon icon={faRetweet} /> {tuit.retuits}
                    
                    </div>  
                    <div className="col-3">
                        <button id="like" style={{backgroundColor: "white", color:"red", border: "none"}} onClick={() => setLike(!like)}>
                            {like ? <FontAwesomeIcon icon={faHeart}/> : <FontAwesomeIcon icon={anotherFaHeart}/>}
                        </button>
                        {like? tuit.likes+1 : tuit.likes}
                        
                    </div>
                    <div className="col-3">
                        <FontAwesomeIcon icon={faUpload} />
                    </div>
                </div>
                </div>
            </div>
        </li>
  </div>
 );

};



export default TuitItem;