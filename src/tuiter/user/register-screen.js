import React, { useState } from "react";
import { register } from "../services/auth-service";

function RegisterScreen() {
    const [user, setUser] = useState(
        {
            username: "",
            password: ""
        });
    
    const handleRegister = async (e) => {
        try{
            const newUser = await register(user);
            console.log(newUser); 
            setUser(newUser);
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