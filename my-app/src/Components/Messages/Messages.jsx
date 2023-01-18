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
  return (
    <span>
      {props.text}
    </span>

  );
}

const Messages = (props) => {

  let newMessage = React.createRef();

  let sendMessage = () => {
    let text = newMessage.current.value;
    alert(text);
  }

  let UsersElements = props.UsersData.map(el => <MessagesItem avatar={el.avatar} nickname={el.nickname} action={el.action} id={el.id} />);

  return (
    <div className={`container`}>
      <div className="col pt-5">
        <div className={`${cl.messages_full_box} ${cl.bg_eee} d-flex`}>
          <div className={`${cl.messages_left_side} ${cl.bg_eee} border-end `}>
            {UsersElements}
          </div>
          <div className={`${cl.messages_right_side} ${cl.bg_eee}`}>
            <div className={cl.messages_zone}>
              <ChatMessages text="some text" />
            </div>
            <div className={cl.send_message_zone}>
              <div className={cl.send_message}>
                <div className={cl.send_message__emoji}><i className={`${cl.emoji_icon} bi bi-emoji-wink`}></i></div>
                <div className={cl.send_message__text_area_block}>
                  <input ref={newMessage} placeholder='Write your message...' className={cl.send_message__text_area}></input>
                </div>
                <div className={cl.send_message__photo}><i className={`${cl.photo_icon} bi bi-image`}></i></div>
                <div className={cl.send_message__heart}><i onClick={sendMessage} className={`${cl.heart_icon} bi bi-arrow-up-circle-fill`}></i></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Messages;