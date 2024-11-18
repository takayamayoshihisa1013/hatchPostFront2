import React from "react";
import "./../css/ChatList.css";
import testImage from "./../images/test/mikakunintouhikousyoujo.jpg";
import Chat from "./Chat.js";

function ChatList() {

    

    return (
        <article>
            
            <div className="chatContent">
                <section className="chatList">
                    <h3 className="title">トーク</h3>
                    <ul>
                        <li>
                            <img className="chatListUserIcon" src={testImage}></img>
                            <div className="chatUser">
                                <p className="chatListUserName"><span className="chatName">じゅんと</span><span className="lastChatTime">11:11</span></p>
                                <p className="lastChat">おやおや、おやおやおやおやおや</p>
                            </div>
                        </li>
                        <li>
                            <img className="chatListUserIcon" src={testImage}></img>
                            <div className="chatUser">
                                <p className="chatListUserName"><span className="chatName">さし</span><span className="lastChatTime">11:11</span></p>
                                <p className="lastChat">おやおや、おやおやおやおやおや</p>
                            </div>
                        </li>
                        <li>
                            <img className="chatListUserIcon" src={testImage}></img>
                            <div className="chatUser">
                                <p className="chatListUserName"><span className="chatName">かわべ</span><span className="lastChatTime">11:11</span></p>
                                <p className="lastChat">おやおや、おやおやおやおやおや</p>
                            </div>
                        </li>
                        <li>
                            <img className="chatListUserIcon" src={testImage}></img>
                            <div className="chatUser">
                                <p className="chatListUserName"><span className="chatName">さくま</span><span className="lastChatTime">11:11</span></p>
                                <p className="lastChat">おやおや、おやおやおやおやおや</p>
                            </div>
                        </li>
                        <li>
                            <img className="chatListUserIcon" src={testImage}></img>
                            <div className="chatUser">
                                <p className="chatListUserName"><span className="chatName">ふっくい</span><span className="lastChatTime">11:11</span></p>
                                <p className="lastChat">おやおや、おやおやおやおやおや</p>
                            </div>
                        </li>
                    </ul>
                </section>
                <Chat />
            </div>
        </article>
    )
}

export default ChatList;