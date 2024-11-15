import React, { useState, useEffect } from "react";
import "./../css/Profile.css";
// import RightNav from "./RightNav";
import egg from "./../images/hatch/egg.png";
import clackEgg from "./../images/hatch/clackEgg.png";
import hatch from "./../images/hatch/hatch.png";
import testImage from "./../images/test/mikakunintouhikousyoujo.jpg";
// import ProfileSetting from "./ProfileSetting";
import "./../css/ProfileSetting.css";



function ProfileCheck({ toggleForm }) {

    const [changeUsername, setChangeUsername] = useState("");
    const [changeProfileText, setProfileText] = useState("");

    const SubmitForm = async (e) => {
        e.preventDefault();
        const data = {
            changeUsername: changeUsername,
            changeProfileText: changeProfileText
        }
        const response = await fetch("http://localhost:5000/changeProfile", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            credentials: "include",
            body: JSON.stringify(data),
        });
        // const resChangeProfile = await response.json();
        if (response.ok) {
            toggleForm()
        } else {
            alert("変更中にエラーが発生しました")
        }
    }

    return (
        <section className="profileSetting">
            <form onSubmit={SubmitForm}>
                <button className="formDelete" type="button" onClick={toggleForm}><i class="fa-solid fa-xmark"></i></button>
                <input type="file" id="changeProfileBackImage" className="changeProfileBackImageInput"></input>
                <label for="changeProfileBackImage">
                    <img src={testImage} className="changeProfileBackImage"></img>
                </label>
                <input type="file" id="changeProfileIcon" className="changeProfileIconInput"></input>
                <label for="changeProfileIcon">
                    <img src={testImage} className="changeProfileIcon"></img>
                </label>
                <p>ユーザーネーム</p>
                <input type="text" placeholder="ユーザーネームを入力してください"  onChange={(e) => setChangeUsername(e.target.value)}></input>
                <p>プロフィール</p>
                <textarea placeholder="プロフィールを入力しよう" onChange={(e) => setProfileText(e.target.value)}></textarea>
                <button>変更する</button>
            </form>
        </section>
    )
}


function Profile() {
    const [profileData, setProfileData] = useState([]);
    const [postList, setPostList] = useState([]);
    const [profileSettingForm, setProfileSettingForm] = useState(false);
    const [myself, setMyself] = useState(false);

    // 表示非表示
    const toggleForm = () => {
        setProfileSettingForm(!profileSettingForm);
        // alert(profileSettingForm)
    }

    // プロフィールの人のポストを取ってくる
    useEffect(() => {
        // URLからidパラメータを取得する
        const idParams = new URLSearchParams(window.location.search);
        const profileUserId = idParams.get("id");
        const data = {
            // アクセスされたアカウントのIDをFlaskに送る
            profileUserId: profileUserId
        }
        const PostData = async () => {
            try {
                const response = await fetch("http://localhost:5000/profile", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    credentials: "include",
                    body: JSON.stringify(data),
                });
                const resData = await response.json();
                if (response.ok) {
                    setProfileData(resData.profileData);
                    setPostList(resData.postData);
                    setMyself(resData["myself"])
                } else {
                    alert("ポストを読み込ませんでした。")
                }
            } catch {
                alert("エラーが発生しました。")
            }
        };
        PostData()
    }, [])



    return (
        <article>
            <div className="content">
                {
                    profileSettingForm && (
                        <ProfileCheck toggleForm={toggleForm} />
                    )
                }
                <section className="profile">
                    <img src={testImage} className="profileBackground"></img>
                    <div className="iconAndButton">
                        <img src={testImage} className="profileIcon"></img>
                        <p><span className="bold">follow:</span><span className="normal">100</span></p>
                        <p><span className="bold">follower:</span><span className="normal">1000</span></p>
                        <button className="followButton" >フォローする</button>
                        <button className="profileChat"><i class="fa-solid fa-comments"></i></button>
                        {
                            myself &&
                            <button className="settingButton" onClick={toggleForm}><i class="fa-solid fa-user-gear"></i></button>

                        }
                    </div>
                    <p className="profileName">{profileData[1]}</p>
                    <p className="profileText">{profileData[4]}</p>
                </section>
                <section className="profilePostSection">
                    <ul className="postList">
                        {
                            postList.map((post, index) => (
                                <li className="post">
                                    <img src={testImage} className="postUserIcon"></img>
                                    <div className="postDetail">
                                        <p className="postHeader"><span className="postUsername">{post[1]}</span><span className="postUserId">@{post[0]}</span></p>
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
                </section>
            </div>

        </article>
    )
}

export default Profile;