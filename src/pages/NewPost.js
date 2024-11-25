import React, { useState, useEffect } from "react";
import "./../css/NewPost.css";
import Config from "../Config";

function NewPost() {

    const [postContent, setPostContent] = useState("")

    // フォームは最初から表示しない
    const [newPostForm, setNewPostForm] = useState(false);

    // フォーム表示非表示
    const toggleForm = () => {
        setNewPostForm(!newPostForm);
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = {
            postContent: postContent
        }
        try {
            const response = await fetch(`${Config.azureBackUrl}/newPost`, {
                method:"POST",
                headers: {
                    "Content-Type": "application/json",
                },
                credentials: "include",
                body: JSON.stringify(data),
            });
            if (response.ok) {
                // alert("ok")
                window.location.reload();
            } else {
                alert("failed")
            }
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <>
            <button className="newPostButton" onClick={toggleForm}>＋</button>
            {
                // trueの場合フォームを表示する
                newPostForm && (
                    <section className="newPostSection">
                        <form className="newPostForm" onSubmit={handleSubmit}>
                            <p>何気ない事でもポストをしよう！</p>
                            <textarea placeholder="何を書きますか？" onChange={(e) => setPostContent(e.target.value)}></textarea>
                            <div className="formButton">
                                <input id="formImageButton" type="file" className="formImageButton"></input>
                                <label for={"formImageButton"} className="formImageLabel">画像</label>
                                <button type="submit" className="postButton">ポストする</button>
                            </div>

                        </form>
                    </section>
                )
            }

        </>
    )
}

export default NewPost;