import React from "react";
const WhoToFollowListItem = (
 {
   who = { userName: 'NASA', handle: 'NASA', avatarIcon: 'nasa.png'}
 }
) => {
 return(
   
    <li className="list-group-item">
        <div className="row">
            <div className="col-xl-2 col-lg-2">
                <img className="rounded-circle" src={`/images/${who.avatarIcon}`}  height={40} weight={40}/>
            </div>
            <div className="col-xl-8 col-lg-8">
                <div className="fw-bold">{who.userName}</div>
                <div>@{who.handle}</div>
            </div>
            <div className="col-xl-2 col-lg-2"> 
                <button type="button" className="btn btn-primary rounded-pill float-end">Follow</button>
            </div>
        </div>
    </li>
   
 );
};
export default WhoToFollowListItem;