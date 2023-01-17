import Post from '../Post/Post';
import cl from './MyPosts.module.css';

const MyPosts = (props) => {
    
    

    let PostsElements = props.PostsData.map(el => <div className="col-xl-4 col-md-6 col-sm-12 mb-5 d-flex justify-content-center"><Post avatar={el.avatar} post_img={el.post_img} nickname={el.nickname} likesNumber={el.likesNumber}/></div>);

    return (
        <section className={cl.MyPosts}>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <h2 className="text-center mb-5">My posts</h2>
                    </div>
                </div>
                <div className="row">
                    {PostsElements}
                    
                </div>
            </div>
        </section>
    );
}

export default MyPosts;