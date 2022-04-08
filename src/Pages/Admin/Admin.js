import { useState } from "react";
import './admin.css'
function Admin(){
    const accAvailable = [
        {
            user: "admin",
            password: "123456",
            username: "Admin",
        },
        {
            user: "phanxuanthanh",
            password: "123456",
            username: "Phan Xuân Thành"
        },
        {
            user: "vumaiphuong",
            password: "123456",
            username: "Vũ Mai Phương"
        },
        {
            user: "nguyenthanhson",
            password: "123456",
            username: "Nguyễn Thanh Sơn"
        },
    ];
    const storeUser = JSON.parse(localStorage.getItem('user'));
    const [users,setUsers] = useState(storeUser ?? accAvailable);
    const [user,setUser] = useState('');
    const [password,setPassword] = useState('');
    const [username,setUsername] = useState('');

    const handleSubmit = ()=>{
        let userObj = {}
        userObj["user"] = user;
        userObj["password"] = password;
        userObj["username"] = username;

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
            <div className="pass admin-user-name">
                <p>Tên người dùng</p>
                <input
                    value={username}
                    onChange={(e)=>setUsername(e.target.value)}
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
                    <span>{user.username}</span>
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