import React from 'react';
import { NavLink } from 'react-router-dom';
import cl from "./Messages.module.css";

const MessagesItem = (props) => {
  let path = `/messages/${props.id}`;
  return (
    <NavLink to={path} className={`d-flex gap-3 mb-3 text-black ${cl.messageitem}`}>
      <img src={props.avatar} alt="avatar" className={cl.navlink__img} />
      <div className={`d-flex flex-column`}>
        <span>{props.nickname}</span>
        <span>{props.action}</span>
      </div>
    </NavLink>
  );
}

const ChatMessages = (props) => {
  return(
    <span>
      {props.text}
    </span>

  );
}

function Messages(props) {

  let UsersElements = props.UsersData.map(el => <MessagesItem avatar={el.avatar} nickname={el.nickname} action={el.action} id={el.id}/>);

  return (
    <div className={`container`}>
      <div className="col pt-5">
        <div className={`${cl.messages_full_box} ${cl.bg_eee} d-flex`}>
          <div className={`${cl.messages_left_side} ${cl.bg_eee} border-end `}>
           {UsersElements}
          </div>
          <div className={`${cl.messages_right_side} ${cl.bg_eee}`}>
            <ChatMessages text="some text"/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Messages;