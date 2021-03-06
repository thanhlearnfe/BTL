import{Routes,Route,Link} from 'react-router-dom'
import React, {useState,useRef} from 'react'
import './App.css';
import './responsive.css';
import Home from './Pages/Home/Home'
import Story from './Pages/Story/Story'
import Admin from './Pages/Admin/Admin'
import Comment from './Pages/Comment/Comment'
function App() {
  const [accInfo,setaccInfo] = useState(false);
  var checkUser = false;
  const [indexTab,setIndexTab] = useState(1);
  

  const FormModal = useRef(null)
  const userNameValue = useRef(null)
  const passwordValue = useRef(null)
  const navbar = useRef(null)
  const buttonOpennavbar = useRef(null)

  const storeUser = JSON.parse(localStorage.getItem('user'));
  const userlocal = localStorage.getItem('account')
  const useractive = localStorage.getItem('useractive') ?? 'false'

const OpenModal = ()=>{
  FormModal.current.style.display = "block"
}
const CloseModal = ()=>{
  FormModal.current.style.display = "none"
}
// Xử lí tab active
const toggleTab = (index)=>{
  setIndexTab(index)
}

const Login = (e)=>{
  for(var i=0; i < storeUser.length; i++){
    if(userNameValue.current.value === storeUser[i].user && passwordValue.current.value === storeUser[i].password){
      CloseModal()
      checkUser = true;
      localStorage.setItem('account',storeUser[i].username)
      localStorage.setItem('useractive',checkUser)
      window.location.reload();
      break;
    }
    
    
  }
  e.preventDefault()
}
const ToggleAcc =()=>{
  if(accInfo === false){
    setaccInfo(true)
  }
  else{
    setaccInfo(false)
  }
}
const Logout =()=>{
  setaccInfo(false)
  checkUser = false;
  localStorage.setItem('useractive',checkUser)
}
const OpenNav =(e)=>{
  navbar.current.style.display ='flex';
  buttonOpennavbar.current.style.display ='none';
}
const CloseNav =()=>{
  navbar.current.style.display ='none';
  buttonOpennavbar.current.style.display ='block';

}
  return (
    <div id="main">
   {/* Thanh điều hướng */}
    <div className="navbar" ref={navbar}>
        <div className="navbar-container">
            <div className="navbar-header">
                <div className="dots">
                    <div className="dot" ></div>
                    <div className="dot"></div>
                    <div className="dot"></div>
                </div>
                <i className="bi bi-sliders2-vertical one"></i>
                <i className="bi bi-sliders2-vertical two" onClick={CloseNav}></i>
            </div>
            <div className="logo">
                <i className="bi bi-brightness-alt-high"></i>
                <span>Bee</span>
                <span>Music</span>
            </div>
            <div className="nav-items" >
                {/* Trang chủ */}
                    <Link to="/">
                       <div className={`nav-item tab-item ${indexTab===1 ? 'active' : ''} `}  onClick={()=>{toggleTab(1)}}>
                          <i className ="bi bi-house-door-fill"></i>
                          <p>Home</p>
                      </div>
                    </Link>
                {/* Trang Comment */}

                  <Link to ="/comment">
                  <div className={`nav-item tab-item ${indexTab===2 ? 'active' : ''} `}  onClick={()=>{toggleTab(2)}}>
                      <i className="bi bi-chat-left-dots-fill"></i>
                      <p>Comment</p>
                  </div>
                  </Link>
               
                  {/* Trang story */}
                  <Link to="/story">
                <div className={`nav-item tab-item ${indexTab===4 ? 'active' : ''} `}  onClick={()=>{toggleTab(4)}}>
                <i className="bi bi-stack"></i>
                  <p>Story</p>
                  </div>
                  </Link>

                   {/* Trang quản trị */}

                <Link to="/admin">
                <div className={`nav-item admin-tab tab-item ${indexTab===3 ? 'active' : ''} ${(userlocal==='Admin' && useractive==='true') ? 'active2' : ''} `}  onClick={()=>{toggleTab(3)}}>
                <i className="bi bi-person-bounding-box"></i>
                  <p>Admin</p>
                  </div>
                  </Link>
                  
               
            </div>
            <p className="text-discover" >Discover</p>
            <div className="nav-items">
                <div className="nav-item">
                <i className="bi bi-boxes"></i>
                    <p>New and Notable</p>
                </div>
                <div className="nav-item">
                    <i className="bi bi-calendar-event"></i>
                    <p>Calendar</p>
                </div>
                <div className="nav-item">
                <i className="bi bi-suit-club-fill"></i>
                    <p>Even</p>
                </div>
               
            </div>  
            <p className="text-discover">Your Collections</p>
            <div className="nav-items">
                <div className="nav-item">
                    <i className="bi bi-suit-heart-fill"></i>
                    <p>Favorites Song</p> 
                </div>
                <div className="nav-item">
                <i className="bi bi-people"></i>
                    <p>Artist</p>
                </div>
                {/* <div className="nav-item">
                <i className="bi bi-stars"></i>
                    <p>Albums</p>
                </div> */}
               
            </div>  
            <div className={`footer-navbar ${useractive==='true' ? 'active' : ''} `} onClick={ToggleAcc}>
                <p >{userlocal}</p>
                <i className="fa-solid fa-chevron-right" ></i>
            </div>
            <div className={`login ${useractive==='false' ? 'active' : ''} `}>
              <span  className="btn-login" onClick={OpenModal}>LOGIN</span>
            </div>
            <div className={`account-info ${accInfo === true ? 'active' : ''}`}>
                <span>Thông Tin</span>
                <span  onClick={Logout}>Đăng xuất</span>
            </div>
        </div>
    </div>
    <div className="navbar-responsive" onClick={OpenNav} ref={buttonOpennavbar}>
     <i className="bi bi-sliders2-vertical "></i>
    </div>

   <Routes>
     <Route path="/" element={<Home/>} />
     <Route path="/comment" element={<Comment userlocal={userlocal}/>} />
     <Route path="/admin" element={<Admin/>} />
     <Route path="/story" element={<Story/>} />


    </Routes>
    {/* Form Login */}
    <div id='login-form'className='login-page' ref={FormModal}>
            <div className="form-box">
              <div className="close-modal" onClick={CloseModal}>X</div>
                <div className='button-box'>
                    <div id='btn'></div>
                    <button type='button'className='toggle-btn'>Log In</button>
                </div>
                <form id='login' className='input-group-login'>
                    <input type='text'className='input-field'placeholder='Email Id' ref={userNameValue} />
                    <input type='password'className='input-field'placeholder='Enter Password' ref={passwordValue} />
                    <input type='checkbox'className='check-box'/><span>Remember Password</span>
                    <button className='submit-btn' onClick={Login}>Log in</button>
	            	 </form>
		 
            </div>
        </div>

    </div>

  );
}

export default App;