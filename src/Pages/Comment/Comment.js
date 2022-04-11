import './Comment.css';
import {useState} from 'react'

function Comment(props) {
    const localComments = JSON.parse(localStorage.getItem('comments'));
    const [list,setList] = useState('')
    const [comments,setComments] = useState(localComments ?? [])
    const date = new Date();
    function handleChange(e) {
        setList(e.target.value)
    }
    function handleSubmit(e){
        let userComments ={}
        userComments["commentContent"] = list;
        userComments["usercomment"] = props.userlocal;
        userComments["timehour"] = date.getHours();
        userComments["timemin"] = date.getMinutes();

        setComments((prev)=>{
                    return [userComments,...prev]
                })
        setList('')
    }
            
          
    const handleDelete = (index) => {
        setComments(() => {
            const newUsers = [...comments]
            newUsers.splice(index, 1);
          return  newUsers;
        });
      };
      console.log(comments)
    localStorage.setItem('comments',JSON.stringify(comments))  
    return(
        <div className="comment">
            <i className="bi bi-person-circle comment_avt"></i>
            <div className="comment-container">
                <input 
                    className="comment-input"
                    
                    value={list}
                    placeholder="Bình Luận..."
                    onChange={handleChange}
                ></input>
                <button className="comment-submit" onClick={handleSubmit}>BÌNH LUẬN</button>
                </div>
        <div className="comment-content">
            {localComments.map((localComment,index)=>(
                <div key={index}>
                <div  className="user-comment">
                    <i className="bi bi-person-circle comment_avt-child"></i>

                    <h3 className="user-comment-name">{localComment.usercomment}</h3>
                    <div>

                        <p >
                            {localComment.commentContent}
                        </p>
                    </div>
                    {props.userlocal === 'Admin' && <button className="deleteComment" onClick={() => handleDelete(index)}><i className="bi bi-backspace-fill"></i></button>}
                </div>
                <div className="comment-like">
                    <p>Thích</p>
                    <p>Trả lời </p>
                    <p>{localComment.timehour}h{localComment.timemin}p</p>

                </div>
                </div>
                
            ))}
        </div>
    </div>
    )
}
export default Comment;