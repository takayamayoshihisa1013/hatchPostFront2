import React, { useEffect, useState } from "react";
import "./../css/Home.css";
import egg from "./../images/hatch/egg.png";
import clackEgg from "./../images/hatch/clackEgg.png";
import hatch from "./../images/hatch/hatch.png";
import testImage from "./../images/test/mikakunintouhikousyoujo.jpg";
import Search from "./Search.js";
import RightNav from "./RightNav.js";
import NewPost from "./NewPost.js";

function Home() {

    const [postList, setPostList] = useState([])
    useEffect(() => {

        const postData = async () => {
            try {
                const response = await fetch("http://localhost:5000/postData", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    credentials: "include",
                });
                if (response.ok) {
                    // Flaskから受け取ったjsonデータを受け取る
                    const resPostList = await response.json()
                    setPostList(resPostList.postData);
                    console.log(postList);
                } else {
                    alert("no")
                }
            } catch {

            }
        }
        postData();
    }, [])

    return (
        <article>
            <section className="postSection">
                <ul className="postList">
                    <Search />
                    {
                        postList.map((post, index) => (
                            <li className="post">
                                <img src={testImage} className="postUserIcon"></img>
                                <div className="postDetail">
                                    <p className="postHeader"><span className="postUserName">{post[1]}</span><span className="postUserId">@{post[0]}</span></p>
                                    <p className="postBody">
                                        {post[2]}
                                    </p>
                                    <div className="hatchTime">
                                        <img src={hatch}></img>
                                        <img src={clackEgg}></img>
                                        <img src={egg}></img>
                                    </div>
                                </div>
                            </li>
                        ))
                    }
                </ul>
                <NewPost />
            </section>
        </article>
    )
}

export default Home;