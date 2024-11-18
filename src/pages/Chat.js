import React, { useEffect, useState } from "react";
import testImage from "./../images/test/mikakunintouhikousyoujo.jpg";

function Chat() {

    // チャットのデータ
    const [chat, setChat] = useState([]);

    useEffect(() => {
        const friendParm = new URLSearchParams(window.location.search);
        const friendId = friendParm.get("friendId");
        const data = {
            friendId: friendId
        }
        try {
            const chatData = async () => {
                const response = await fetch("http://localhost:5000/chat", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    credentials: "include",
                    body: JSON.stringify(data)
                })
                const resData = await response.json();
                if (response.ok) {
                    setChat(resData.chatData)
                }
                else {
                    alert("error")
                }
            }
        } catch {

        }


    }, [])

    return (
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
            <form className="newContentForm">
                <input type="text"></input>
                <button type="submit"><i class="fa-solid fa-paper-plane"></i></button>
            </form>

        </section>
    )
}

export default Chat;