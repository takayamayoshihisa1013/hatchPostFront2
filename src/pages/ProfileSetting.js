import React from "react";
import "./../css/ProfileCheck.css";
import testImage from "./../images/test/mikakunintouhikousyoujo.jpg";

function ProfileCheck() {

    return (
        <section className="profileSetting">
            <form>
                <input type="file" id="changeProfileBackImage" ></input>
                <label for="changeProfileBackImage">
                    <img src={testImage} className="changeProfileBackImage"></img>
                </label>
                <img src={testImage} className="changeProfileIcon"></img>
                <p>ユーザーネーム</p>
                <input type="text" placeholder="ユーザーネームを入力してください" defaultValue={"るらりゆ"}></input>
                <p>プロフィール</p>
                <textarea placeholder="プロフィールを入力しよう"></textarea>
                <button>変更する</button>
            </form>
        </section>
    )
}

export default ProfileCheck;