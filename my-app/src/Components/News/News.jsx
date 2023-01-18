import cl from './News.module.css'
import React from 'react';


const News = () => {

  let newNewsElement = React.createRef();

  let addNews = () => {
    let text = newNewsElement.current.value;
    alert(text);
  }
  

  return (
    <div className={cl.news}>
      <div className='container'>
        <div className="row">
          <div className="col">
            <h2 className="text-center mb-5">News</h2>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <div className="form-floating mb-3">
              <textarea ref={newNewsElement} className="form-control" placeholder="Leave a comment here" id="floatingTextarea"></textarea>
              <label for="floatingTextarea">Write your thoughts</label>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <button onClick={addNews} type="button" className="btn btn-primary">Add news</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default News;