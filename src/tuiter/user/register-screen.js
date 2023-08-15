// import React, { useState } from "react";
// import { register } from "../services/auth-service";
// import { useNavigate } from "react-router";
// import { registerThunk } from "../services/auth-thunks";


// function RegisterScreen() {
//     const navigate = useNavigate();
//     const [user, setUser] = useState(
//         {
//             username: "",
//             password: ""
//         });
    
//     const handleRegister = async (e) => {
//         try{
//             const newUser = await register(user);
//             console.log("new"); 
//             setUser(newUser);
//             navigate("/tuiter/profile");
//         } catch(e){
//             alert(e)
//         }
        
//     };

//     return(
//         <div>
//             <h1>Register Screen</h1>
//             <div className="mt-2">
//                 <label>Username</label>
//                 <input 
//                     className="form-control" 
//                     type="text" 
//                     name="username" 
//                     placeholder="Username" 
//                     value={user.username}
//                     onChange={(e) => setUser({...user, username: e.target.value})}
//                     />
//             </div>
//             <div className="mt-2">
//                 <label>Password</label>
//                 <input 
//                     className="form-control" 
//                     type="text" 
//                     name="password" 
//                     placeholder="Password" 
//                     value={user.password}
//                     onChange={(e) => setUser({...user, password: e.target.value})}
//                     />
//             </div>
            
//             <input onClick={handleRegister} className="btn btn-primary" value="Register" />
            
//         </div>
        
//     )
    
// }
// export default RegisterScreen;

// [1:07 PM] Atul Kumar

import React, { useState } from "react";

import { useNavigate } from "react-router";

import { useDispatch } from "react-redux";

import { registerThunk } from "../services/auth-thunks";

function RegisterScreen() {

  const [username, setUsername] = useState("");

  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const dispatch = useDispatch();

  const handleRegister = async () => {

    try {

      dispatch(registerThunk({ username, password }))

        .then((resp) => {

          if (resp.payload != null) return navigate("/tuiter/profile");

        })

        .catch(() => console.log("Unable to register"));

    } catch (e) {

      alert(e);

    }

  };

  return (

    <div>

      <h1>Register Screen</h1>

      <div className="mt-2">

        <label>Username</label>

        <input

          className="form-control"

          type="text"

          value={username}

          onChange={(event) => setUsername(event.target.value)}

        />

      </div>

      <div className="mt-2">

        <label>Password</label>

        <input

          className="form-control"

          type="password"

          value={password}

          onChange={(event) => setPassword(event.target.value)}

        />

      </div>

      <button className="btn btn-primary mt-2" onClick={handleRegister}>

        Register

      </button>

    </div>

  );

}

export default RegisterScreen;