var $ =document.querySelector.bind(document);
var $$ =document.querySelectorAll.bind(document);
const audio =$('#audio')
var player = $('.player');
const btnplay = $('.btn-toggle-play');

const app ={
    curentindex:0,
    isPlaying:false,
    songs:[
        {
            id:1,
            name:"Có hẹn với thanh xuân",
            singer:"Monstar",
            path:"./assets/path/cohenvoithanhxuan.mp3",
            time:"3:38"
        },
        {
            id:2,
            name:"Bước qua nhau",
            singer:"Vũ",
            path:"./assets/path/buocquanhau.mp3",
            time:"4:18"
        },
        {
            id:3,
            name:"Vợ tuyệt với nhất",
            singer:"Vũ Duy Khánh",
            path:"./assets/path/votuyetvoinhat.mp3",
            time:"5:34"
        },
        {
            id:4,
            name:"Những gì anh nói",
            singer:"Boizz",
            path:"./assets/path/nhunggianhnoi.mp3",
            time:"6:25"
        },
        {
            id:5,
            name:"Đông kiếm em",
            singer:"Vũ",
            path:"./assets/path/dongkiemem.mp3",
            time:"4:06"
        },
        {
            id:6,
            name:"1 Phút",
            singer:"Adiez",
            path:"./assets/path/1phut.mp3",
            time:"6:16"
            
        },
        {
            id:7,
            name:"Hẹn Một Mai",
            singer:"Bùi Anh Tuấn",
            path:"./assets/path/henmotmai.mp3",
            time:"4:43"
        },
        {
            id:8,
            name:"Ánh Nắng Của Anh",
            singer:"Đức Phúc",
            path:"./assets/path/anhnangcuaanh.mp3",
            time:"4:43"
        },
        {
            id:9,
            name:"Chúng ta của hiện tại",
            singer:"Sơn Tùng MTP",
            path:"./assets/path/chungtacuahientai.mp3",
            time:"5:02"
            
        },
        {
            id:10,
            name:"In Another Life",
            singer:"Killa Qualn",
            path:"./assets/path/inanotherlife.mp3",
            time:"4:02"
            
        },
        {
            id:11,
            name:"Hẹn Một Mai",
            singer:"Bùi Anh Tuấn",
            path:"./assets/path/henmotmai.mp3",
            time:"4:43"
        },
        {
            id:12,
            name:"Ánh Nắng Của Anh",
            singer:"Đức Phúc",
            path:"./assets/path/anhnangcuaanh.mp3",
            time:"4:43"
        }
    ],
  
    render:function(){
        var _this = this;
        var htmls = app.songs.map(function(song,index){
            return `
            <div class="song ${index === _this.curentindex ? 'active':''}" data-index="${index}">
                    <div class="idsong title" >#${song.id}
                    </div>
                    <div class="body-song">
                      <p class="title">${song.name}</p>
                      <p class="singer">${song.singer}</p>
                      <span class="times">${song.time}</span>
                      <p class="albums">HoneyWorks</p>
                    </div>
                    </div>
            </div>
            `
        })
        document.querySelector('.playlist').innerHTML =htmls.join('');
    },
   
    HandleEvent: function(){
        const _this = this;
        //Xử lí click play/pause
        btnplay.onclick = function(){
            if(_this.isPlaying){
                audio.pause();
            }
            else{
                audio.play();
            }    
        }
        // Khi song play
        audio.onplay = function(){
            _this.isPlaying = true;
            player.classList.add('playing')
        }
        //khi song pause
        audio.onpause = function(){
            _this.isPlaying = false;
            player.classList.remove('playing')
        }
    },
   
    // Định nghĩa thuộc tính 
    defineProperties: function(){
        Object.defineProperty(this, 'curentSong',{
           get: function(){
               return this.songs[this.curentindex]
           }
        })
    },
   
    // Hiện thị thông tin bài hát
    loadCurrentSong: function(){
        const _this = this;
        audio.src =this.curentSong.path;
        timesecond =(Math.floor( audio.currentTime)%60);
        timepresent.textContent = Math.floor(( audio.currentTime)/60)+':'+ (timesecond>9 ? timesecond :'0' + timesecond);
    },
   
    start:function(){
        //Render danh sách bài hát
        this.render();
         //Định nghĩa thuốcj tính object
         this.defineProperties();
        //Xử lí sự kiện
        this.HandleEvent()
        //Tải lên bài hát
        this.loadCurrentSong()
    }
}
app.start();
