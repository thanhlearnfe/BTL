
function Loader(props){
   var songactive = props.currentSongindex
    return(
            props.songs.map((song,index) =>(
                <div className={`song ${index === songactive ? 'active':''} `} data-index={index} key={index}>
                    <div className="idsong title" >#{song.id}</div>
                    <div className="body-song">
                      <p className="title">{song.name}</p>
                      <p className="singer">{song.singer}</p>
                      <span className="times">{song.time}</span>
                      <p className="albums">HoneyWorks</p>
                    </div>
                    </div>
             ))
        
    )
}     
export default Loader
 
