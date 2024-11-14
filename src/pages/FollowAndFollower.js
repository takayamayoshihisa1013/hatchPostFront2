import React from "react";
import "./../css/FollowAndFollower.css";
import RightNav from "./RightNav";
import testImage from "./../images/test/mikakunintouhikousyoujo.jpg";

function FollowAndFollower() {
    return (
        <article>
            <div className="FollowAndFollowerContent">

                <section className="selectButton">
                    <p>Follow</p>
                    <p>Follower</p>
                </section>
                <section className="followList">
                    <ul>
                        <li>
                            <img src={testImage}></img>
                            <div className="followDetail">
                                <p className="followProfileName"><span className="postUserName">高山慶久</span><span className="postUserId">@aaaa</span></p>
                                <p className="followProfileText">テストテストテストテストテストテストテストテストテストテストテストああああああああああああああああああああ</p>
                            </div>
                        </li>
                    </ul>
                </section>
                <section className="followerList">
                    <ul>
                        <li>
                            <img src={testImage}></img>
                            <div className="followerDetail">
                                <p className="followerProfileName"><span className="postUserName">高山慶久</span><span className="postUserId">@aaaa</span></p>
                                <p className="followerProfileText">テストテストテストテストテストテストテストテストテストテストテストああああああああああああああああああああ</p>
                            </div>
                        </li>
                    </ul>
                </section>

            </div>

        </article>
    )
}

export default FollowAndFollower;