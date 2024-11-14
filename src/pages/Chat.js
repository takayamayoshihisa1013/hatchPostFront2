import React, {useState} from "react";
import RightNav from "./RightNav";
import "./../css/Chat.css";
import testImage from "./../images/test/mikakunintouhikousyoujo.jpg";


function Chat() {

    

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
                <section className="chat">
                    <h3 className="title">じゅんと</h3>
                    <ul>
                        <li className="message friend">
                            <img src={testImage} className="chatUserIcon"></img>
                            <div>
                                <p className="chatUserName">じゅんと</p>
                                <p className="talk">あ</p>
                            </div>
                        </li>
                        <li className="message my">
                            <div>
                                <p className="chatUserName">じゅんと</p>
                                <p className="talk">あ</p>
                            </div>
                            <img src={testImage} className="chatUserIcon"></img>
                        </li>
                        <li className="message friend">
                            <img src={testImage} className="chatUserIcon"></img>
                            <div>
                                <p className="chatUserName">じゅんと</p>
                                <p className="talk">あ</p>
                            </div>
                        </li>
                        <li className="message friend">
                            <img src={testImage} className="chatUserIcon"></img>
                            <div>
                                <p className="chatUserName">じゅんと</p>
                                <p className="talk">あ</p>
                            </div>
                        </li>
                        <li className="message my">
                            
                            <div>
                                <p className="chatUserName">じゅんと</p>
                                <p className="talk">あ</p>
                            </div>
                            <img src={testImage} className="chatUserIcon"></img>
                        </li>
                    </ul>
                </section>
            </div>
        </article>
    )
}

export default Chat;