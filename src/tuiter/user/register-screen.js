import React, { useState } from "react";
import { register } from "../services/auth-service";
import { useNavigate } from "react-router";


function RegisterScreen() {
    const navigate = useNavigate();
    const [user, setUser] = useState(
        {
            username: "",
            password: ""
        });
    
    const handleRegister = async (e) => {
        try{
            const newUser = await register(user);
            console.log("new"); 
            setUser(newUser);
            await navigate("/tuiter/profile");
        } catch(e){
            alert(e)
        }
        
    };

    return(
        <div>
            <h1>Register Screen</h1>
            <div className="mt-2">
                <label>Username</label>
                <input 
                    className="form-control" 
                    type="text" 
                    name="username" 
                    placeholder="Username" 
                    value={user.username}
                    onChange={(e) => setUser({...user, username: e.target.value})}
                    />
            </div>
            <div className="mt-2">
                <label>Password</label>
                <input 
                    className="form-control" 
                    type="text" 
                    name="password" 
                    placeholder="Password" 
                    value={user.password}
                    onChange={(e) => setUser({...user, password: e.target.value})}
                    />
            </div>
            
            <input onClick={handleRegister} className="btn btn-primary" value="Register" />
            
        </div>
        
    )
    
}
export default RegisterScreen;