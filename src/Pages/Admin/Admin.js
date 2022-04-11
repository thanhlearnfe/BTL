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
    const [id, setId] = useState();
    const [edit, setEdit] = useState(false);
    const handleSubmit = ()=>{
        for(var i=0; i < storeUser.length; i++){
            if(user !== storeUser[i].user ){
                let userObj = {}
                userObj["user"] = user;
                userObj["password"] = password;
                userObj["username"] = username;
                if(user ==='' || password === '' || username === ''){
                    alert('Hãy nhập đủ thông tin')
                }
                else{
        
                    setUsers(prev=>{
                        const newUsers =[...prev,userObj];
                        return newUsers
                    })
                    setUser('')
                    setPassword('')
                    setUsername('')
                }
                break;
            }
            else{
                alert("Tài khoản này đã trùng");
                break;
            }
        }
        
    }
    const handleDelete = (index)=>{
        setUsers(() => {
            const newUsers = [...users]
            newUsers.splice(index, 1);
          return  newUsers;
        });
    }
   const handleEdit = (index)=>{
       setUser(users[index].user);
       setPassword(users[index].password);
       setUsername(users[index].username);
       setEdit(true);
       setId(index);

   }
   const handleChange = () => {
    setUsers((prev) => {
      prev[id].user = user;
      prev[id].password = password;
      prev[id].username = username;
      localStorage.setItem('user',JSON.stringify(prev))

      return prev;

    });
    setEdit(false);
    setUser('')
    setPassword('')
    setUsername('')
  };  
  //Cancle
  const cancle = () => {
    setEdit(false);
    setUser('')
    setPassword('')
    setUsername('')
  };
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
            {edit ? (
                <button onClick={handleChange}>Save</button>
            ) : (
                <button onClick={handleSubmit}>Add User</button>
            )}
      {edit && <button onClick={cancle}>Cancle</button>}
            
           
          
        <div className="policy-container">
        <div className="policy-table">
            <div className="headings">
                <span className="heading">No</span>
                <span className="heading">Account</span>
                <span className="heading">Password</span>
                <span className="heading">Name</span>
                <span className="heading">Delete</span>
                <span className="heading">Edit</span>

            </div>

            {users.map((user,index) => (
                <div key={index}>
                <div  className="policy">
                    <span>{index+1} </span>
                    <span>{user.user}</span>
                    <span>{user.password}</span>
                    <span>{user.username}</span>
                    <span onClick={()=>{handleDelete(index)}}><i className="bi bi-trash3-fill"></i></span>    
                    <span onClick={()=>{handleEdit(index)}}><i className="bi bi-pencil-square"></i></span>          
                </div>
                </div>
            ))}
        </div>
        </div>
        </div>

    )
}
export default Admin;