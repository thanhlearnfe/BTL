import './App.css';
import Home from './Pages/Home/Home'
function App() {
  return (
    <div id="main">
   {/* Thanh điều hướng */}
    <div className="navbar">
        <div className="navbar-container">
            <div className="navbar-header">
                <div className="dots">
                    <div className="dot" ></div>
                    <div className="dot"></div>
                    <div className="dot"></div>
                </div>
                <i className="bi bi-sliders2-vertical "></i>
            </div>
            <div className="logo">
                <i className="bi bi-brightness-alt-high"></i>
                <span>Bee</span>
                <span>Music</span>
            </div>
            <div className="nav-items">
                <div className="nav-item tab-item active">
                <i className ="bi bi-house-door-fill"></i>
                    <p>Home</p>
                </div>
                <div className="nav-item tab-item">
                <i className="bi bi-stack"></i>
                    <p>Trends</p>
                </div>
                <div className="nav-item tab-item">
                <i className="bi bi-chat-left-dots-fill"></i>
                    <p>Feed</p>
                </div>
               
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
                <div className="nav-item">
                <i className="bi bi-stars"></i>
                    <p>Albums</p>
                </div>
               
            </div>  
            <div className="footer-navbar">
                <img src="https://thanhlearnfe.github.io/sever/assets/img/avatar.jpg" className="avatar" alt=""/>
                <p >Phan Xuân Thành</p>
                <i className="fa-solid fa-chevron-right" ></i>
            </div>
        </div>
    </div>
    <Home />
    </div>
  );
}

export default App;
