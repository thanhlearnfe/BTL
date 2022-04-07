import React, {useState, useRef} from 'react'

function Control(props){
    const songcurrent = props.songs[props.currentSongindex]
    const setcurrentSongindex = props.setcurrentSongindex
    const [isPlaying,setisPlaying] = useState(false);
    const [isRepeating,setisRepeating] = useState(false);
    const [isRandoming,setisRandoming] = useState(false);

    const audioEl = useRef(null)
    // Xử lí Play/Pause
    const TogglePlay = ()=>{
        if (isPlaying===false){
        audioEl.current.play();
        setisPlaying(true)
        }
        else{
            audioEl.current.pause();
        setisPlaying(false)
        }
    }
    // Next bài hát
    const NextSong = ()=>{
        if(isRandoming === false){

            if(props.currentSongindex >= props.songs.length-1){
                setcurrentSongindex(0)
            }
            else{
                setcurrentSongindex(props.currentSongindex+1)
            }
        }
        else{
            random()
        }
        setisPlaying(false)
    }
    
    // Lùi bài hát
    const PrevSong = ()=>{
        if(props.currentSongindex<=0){
            setcurrentSongindex( props.songs.length-1)
        }
        else{
            setcurrentSongindex(props.currentSongindex-1)
        }
    }
    //Repeat Bai Hat
    const RepeatSong = ()=>{
        if(isRepeating === false){

            setisRepeating(true)
        }
        else{
            setisRepeating(false)
        }

    }
    // Khi bài hát kết thúc
    const EndSong = ()=>{
        if(isRepeating === false){
            NextSong()
        }
        else{
            audioEl.current.play()
        }
    }
    const Songactive = ()=>{
        setTimeout(()=>{
            document.querySelector('.song.active').scrollIntoView({
                behavior: 'smooth',
                block:'nearest',
            })
        },200)
    }  
    Songactive()
    //Load bài hát
    const LoadMeta = ()=>{
        const timesecond =(Math.floor(audioEl.current.duration)%60);
        document.querySelector('.span-left').innerHTML = '0:00'
        document.querySelector('.span-right').innerHTML = Math.floor(audioEl.current.duration.toFixed()/60)+':'+ (timesecond>9 ? timesecond :'0' + timesecond);
        const progress = document.querySelector('.progress')
        var color = 'linear-gradient(90deg, rgb(0,0,0)' +0 + '% , rgb(214, 214, 214)' + 0+ '%)';
        progress.style.background =color;
        progress.value = 0;
    }
    //Khi tiến độ bài hát thay đổi
    const TimeUpdate = ()=>{
        const timesecond =(Math.floor(audioEl.current.duration)%60);
        const timesecondcurrent =(Math.floor(audioEl.current.currentTime)%60);
        document.querySelector('.span-left').innerHTML = Math.floor(audioEl.current.currentTime.toFixed()/60)+':'+ (timesecondcurrent>9 ? timesecondcurrent :'0' + timesecondcurrent);
        document.querySelector('.span-right').innerHTML = Math.floor(audioEl.current.duration.toFixed()/60)+':'+ (timesecond>9 ? timesecond :'0' + timesecond);
        // Màu tiến độ
        const progresspercent = Math.floor(audioEl.current.currentTime/ audioEl.current.duration *100)
        const progress = document.querySelector('.progress')
        progress.value = progresspercent;
        var color = 'linear-gradient(90deg, rgb(0,0,0)' + progress.value + '% , rgb(214, 214, 214)' + progress.value+ '%)';
        progress.style.background =color;
    }
    const ChangProgress = (e)=>{
        const seek = audioEl.current.duration / 100 * e.target.value;            
        audioEl.current.currentTime=seek;
         //Màu sac khi tua
        var color = 'linear-gradient(90deg, rgb(0,0,0)' + e.target.value + '% , rgb(214, 214, 214)' + e.target.value+ '%)';
        document.querySelector('.progress').style.background = color;
    }
    const ClRandomSong = ()=>{
        if(isRandoming === false){
            setisRandoming(true);
        }
        else{
            setisRandoming(false);
        }
       
    }
    const random = ()=>{
        let newindex;
        do{
            newindex = Math.floor(Math.random() * props.songs.length-1);
        } while  (newindex === props.currentSongindex)
        setcurrentSongindex(newindex)
        
    }
    return(
        <div className="player" >
        <div className="control">   
            <div className="control-love">
                <i className="bi bi-heart"></i>
                <i className="bi bi-music-note-beamed"></i>
                <i className="bi bi-arrows-angle-expand"></i>
            </div>
            <div className="control-center">
                <div className={`btn btn-repeat ${isRepeating ? 'active' : ''}`}  onClick={RepeatSong}>
                   <i className="bi bi-arrow-repeat"></i>
                </div>
                <div className="btn btn-prev" onClick={PrevSong}>
                     <i className="bi bi-caret-left-fill"></i>
                </div>
                <div className="btn btn-toggle-play" onClick={TogglePlay}>
                    <i className={`${isPlaying ? 'bi bi-pause' : 'bi bi-play'}`}></i>
                </div>
                <div className="btn btn-next" onClick={NextSong}>
                <i className="bi bi-caret-right-fill"></i>
                </div>
                <div className={`btn btn-random ${isRandoming ? 'active' : ''}`} onClick={ClRandomSong}>
                <i className="bi bi-arrow-left-right"></i>
                </div>
            </div>
        <div className="volume">
            <i className="bi bi-volume-up"></i>
            <i className="bi bi-volume-mute"></i>
        </div>
        </div>
    
        <span className="span-left"></span>
        <input 
            onInput={ChangProgress}
            id="progress" className="progress" type="range" value="0"  min="0" max="100" />
        <audio 
            ref={audioEl}
            onLoadedMetadata={LoadMeta}
            onEnded={EndSong}
            onTimeUpdate={TimeUpdate}
            id="audio" src={songcurrent.path} ></audio>
        <span className="span-right"></span>
    </div>
    )
}
export default Control