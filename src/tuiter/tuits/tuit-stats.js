import { updateTuitThunk } from "../services/tuits-thunks";
import { useDispatch } from "react-redux";


const dispatch = useDispatch();


<FaHeart
  className="text-danger"
  onClick={() =>
    dispatch(updateTuitThunk({ ...tuit, likes: tuit.likes + 1 }))
  }
/>
<span className="ms-2">{tuit.likes}</span>