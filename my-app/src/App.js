import logo from './logo.svg';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import Header from './Components/Header/Header';
import Messages from './Components/Messages/Messages';
import MyPosts from './Components/MyPosts/MyPosts';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap-icons/font/bootstrap-icons.css';
import Home from './Components/Home/Home';
import News from './Components/News/News';
import Settings from './Components/Settings/Settings';


const App = (props) => {

  return (
    <BrowserRouter>
      <div>
        <Header />        
      <Routes>
        <Route path="/myposts/*" element={<MyPosts PostsData={props.appState.PostsPage.PostsData}/>} />
        <Route path="/messages/*" element={<Messages UsersData={props.appState.MessagesPage.UsersData}/>} />
        <Route path="/home/*" element={<Home/>} />
        <Route path="/news/*" element={<News/>} />
        <Route path="/settings/*" element={<Settings/>} />
      </Routes>

      </div>
      </BrowserRouter>
  );

}

export default App;
