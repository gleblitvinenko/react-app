import { useState } from 'react';
import cl from './Post.module.css';


const Post = (props) => {
    
    const [active, setActive] = useState(false);

    const handleClick = () => { setActive(!active);};

    return (
        <div className='d-flex flex-column gap-2'>
                <div className={`d-flex align-items-center ${cl.post__top}`}>
                <a href="#"><img src={props.avatar} alt="avatar" className={cl.post__top__img} /></a>
                <a href="#" ><span className={cl.post__top__nickname}>{props.nickname}</span></a>
                </div>
                <div className="post__main">
                <a href="#"><img src={props.post_img} alt="main img" className={cl.post__main__img} /></a>
                </div>
                <div className={`d-flex align-items-center ${cl.post__footer}`}>
                    <i onClick={handleClick} style={{ color : active ? "red" : "black"}} className={`bi bi-heart-fill ${cl.post__footer__icon}`}></i>
                    <span className={cl.post__footer__likes}>{props.likesNumber}</span>
                </div>
         </div>
        
    );
}

export default Post;
