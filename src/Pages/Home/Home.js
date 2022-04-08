
import React, {useState} from 'react'
import './home.css';
import Control from "./Control";
import Loader from './loader'
function Home() {
    const songs=[
        {
            id:1,
            name:"Có hẹn với thanh xuân",
            singer:"Monstar",
            path:"https://thanhlearnfe.github.io/sever/path/cohenvoithanhxuan.mp3",
            time:"3:38"
        },
        {
            id:2,
            name:"Bước qua nhau",
            singer:"Vũ",
            path:"https://thanhlearnfe.github.io/sever/path/buocquanhau.mp3",
            time:"4:18"
        },
        {
            id:3,
            name:"Vợ tuyệt với nhất",
            singer:"Vũ Duy Khánh",
            path:"https://thanhlearnfe.github.io/sever/path/votuyetvoinhat.mp3",
            time:"5:34"
        },
        {
            id:4,
            name:"Những gì anh nói",
            singer:"Boizz",
            path:"https://thanhlearnfe.github.io/sever/path/nhunggianhnoi.mp3",
            time:"6:25"
        },
        {
            id:5,
            name:"Đông kiếm em",
            singer:"Vũ",
            path:"https://thanhlearnfe.github.io/sever/path/dongkiemem.mp3",
            time:"4:06"
        },
        {
            id:6,
            name:"1 Phút",
            singer:"Adiez",
            path:"https://thanhlearnfe.github.io/sever/path/1phut.mp3",
            time:"6:16"
            
        },
        {
            id:7,
            name:"Hẹn Một Mai",
            singer:"Bùi Anh Tuấn",
            path:"https://thanhlearnfe.github.io/sever/path/henmotmai.mp3",
            time:"4:43"
        },
        {
            id:8,
            name:"Ánh Nắng Của Anh",
            singer:"Đức Phúc",
            path:"https://thanhlearnfe.github.io/sever/path/anhnangcuaanh.mp3",
            time:"4:43"
        },
        {
            id:9,
            name:"Chúng ta của hiện tại",
            singer:"Sơn Tùng MTP",
            path:"https://thanhlearnfe.github.io/sever/path/chungtacuahientai.mp3",
            time:"5:02"
        },
        {
            id:10,
            name:"In Another Life",
            singer:"Killa Qualn",
            path:"https://thanhlearnfe.github.io/sever/path/inanotherlife.mp3",
            time:"4:02"
            
        },
        {
            id:11,
            name:"Hẹn Một Mai",
            singer:"Bùi Anh Tuấn",
            path:"https://thanhlearnfe.github.io/sever/path/henmotmai.mp3",
            time:"4:43"
        },
        {
            id:12,
            name:"Ánh Nắng Của Anh",
            singer:"Đức Phúc",
            path:"https://thanhlearnfe.github.io/sever/path/anhnangcuaanh.mp3",
            time:"4:43"
        }
    ]
    const [currentSongindex,setcurrentSongindex] =useState(0)
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
    localStorage.setItem('user',JSON.stringify(accAvailable))
    return (
        <div className="tab-content active">
        <div className="body-content">
            <div className="header__body-content">
                <div className="prev-next">
                    <i className="fa-solid fa-chevron-left"></i>
                    <i className="fa-solid fa-chevron-right"></i>
                </div>
                <div className="search">
                    <i className="bi bi-search"></i>
                    <input type="text" placeholder="Search for artist,song and..." readOnly/>
                </div>
            </div>
            <div className="banner__body-content">
                <div className="banner-heading">
                    <p >What's hot</p>
                    <img src="https://thanhlearnfe.github.io/sever/assets/img/fire.png" alt=""/>
                </div>
                <div className="banner-trending">
                    Trending
                </div>
                <div className="banner-img" >
                    <p >Artist</p>
                    <h2>On Top </h2>
                    <h2>Of The World</h2>
                    <div className="banner-button">
                        <span>Play</span>
                        <span>Follow</span>
                    </div>
                    <div className="banner-text-right">
                    <p >Monthly Listener</p>
                    <p >32.092</p>
                    </div>
                </div>
            </div>

            <div className="song-title">
                <div className="idsong-title" >#
                </div>
                <p className="title">Title</p>
                <p className="singer">Artist</p>
                <span className="times">Time</span>
                <p className="albums">Album</p>
            </div>
        <div className="scroll">

            <div className="playlist">
                <Loader
                songs={songs}
                currentSongindex={currentSongindex}/>
            </div>
        </div>
           <Control 
            songs={songs}
            currentSongindex={currentSongindex}
            setcurrentSongindex={setcurrentSongindex}
            />
        </div>

        {/*  Giới thiệu chung */} 
        <div className="introduce">
            <div className="shortcuts">
              
                <div className="shortcuts-heading">
                    Shortcuts
                </div>
                <div className="shortcuts-items">
                    <div className="shortcuts-item">
                        <img src="https://thanhlearnfe.github.io/sever/assets/img/snow.png" alt=""/>
                        <p>Chill Hits</p>
                    </div>
                    <div className="shortcuts-item">
                        <img src="https://thanhlearnfe.github.io/sever/assets/img/star.png" alt=""/>
                        <p>Hop</p>
                    </div>
                    <div className="shortcuts-item">
                        <img src="https://thanhlearnfe.github.io/sever/assets/img/ghitar.png" alt=""/>
                        <p>Accounstic</p>
                    </div>
                    <div className="shortcuts-item">
                        <img src="https://thanhlearnfe.github.io/sever/assets/img/musicnote.png" alt=""/>
                        <p>Indie Pop</p>
                    </div>
                    <div className="shortcuts-item">
                        <img src="https://thanhlearnfe.github.io/sever/assets/img/piano.png" alt=""/>
                        <p>Piano Blues</p>
                    </div>
                    <div className="shortcuts-item">
                        <img src="https://thanhlearnfe.github.io/sever/assets/img/jazz.png" alt=""/>
                        <p>Jazz</p>
                    </div>
                </div>
            </div>

            <div className="farArtist">
                <div className="farArtist-heading">Far Artist</div>
                <div className="farArtist-items">
                    <div className="farArtist-item">
                        <div className="info-singers">
                            <img src="https://thanhlearnfe.github.io/sever/assets/img/singer/taylor.jpg" alt="" className="img-singer"/>
                            <div className="info-singer">

                                <p className="info-singer-name">Taylor Swift</p>
                                <p className="info-singer-view">196 songs in library</p>
                            </div>
                        </div>
                        <i className="bi bi-three-dots"></i>
                    </div>
                    <div className="farArtist-item">
                        <div className="info-singers">
                            <img src="https://thanhlearnfe.github.io/sever/assets/img/singer/kanye.jpg" alt="" className="img-singer"/>
                            <div className="info-singer">

                                <p className="info-singer-name">Kanye West</p>
                                <p className="info-singer-view">124 songs in library</p>
                            </div>
                        </div>
                        <i className="bi bi-three-dots"></i>
                    </div>
                    <div className="farArtist-item">
                        <div className="info-singers">
                            <img src="https://thanhlearnfe.github.io/sever/assets/img/singer/drake.jpg" alt="" className="img-singer"/>
                            <div className="info-singer">

                                <p className="info-singer-name">Drake</p>
                                <p className="info-singer-view">50 songs in library</p>
                            </div>
                        </div>
                        <i className="bi bi-three-dots"></i>
                    </div>
                </div>
            </div>

            <div className="img-hightlight">
                <img src="https://thanhlearnfe.github.io/sever/assets/img/singer/torisetsu.png" alt=""/>
                <div className="torisetsu-name">
                    <p className="text-fill">Torutetsu トリセツ</p>
                    <p>Kana Nishino</p>
                </div>
            </div>
        </div>
    </div>
    )}
export default Home;
