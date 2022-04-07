import { useState } from "react";
import './admin.css'
function Admin(){
    const storeUser = JSON.parse(localStorage.getItem('user'));
    const [users,setUsers] = useState(storeUser ?? []);
    const [user,setUser] = useState('');
    const [password,setPassword] = useState('');
    
    const handleSubmit = ()=>{
        let userObj = {}
        userObj["user"] = user;
        userObj["password"] = password;
        setUsers(prev=>{
            const newUsers =[...prev,userObj];
            return newUsers
        })
        setUser('')
        setPassword('')
        
    }
    const handleDelete = (index)=>{
        setUsers(() => {
            const newUsers = [...users]
            newUsers.splice(index, 1);
          return  newUsers;
        });
    }
    localStorage.setItem('user',JSON.stringify(users))
    return (
        <div className="admin">
            
           <h1>User Account Management</h1>
           
           <div className="user">

            <p>Tài khoản</p>
            <input
                value={user}
                onChange={(e)=>setUser(e.target.value)}
            />
            </div>
            <div className="pass">
            <p>Mật khẩu</p>
            <input
                value={password}
                onChange={(e)=>setPassword(e.target.value)}
            />
            </div>
            <button onClick={handleSubmit}>Tạo tài khoản</button>
           
          
        <div className="policy-container">
        <div className="policy-table">
            <div className="headings">
                <span className="heading">No</span>
                <span className="heading">Account</span>
                <span className="heading">Password</span>
                <span className="heading">Name</span>
                <span className="heading">Delete</span>

            </div>

            {users.map((user,index) => (
                <div key={index}>
                <div  className="policy">
                <span>{index+1} </span>
                    <span>{user.user}</span>
                    <span>{user.password}</span>
                    <span>Name</span>
                    <span onClick={()=>{handleDelete(index)}}>X</span>                    
                </div>
                </div>
            ))}
        </div>
        </div>
        </div>

    )
}
export default Admin;

