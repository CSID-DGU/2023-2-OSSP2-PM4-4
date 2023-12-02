import Nav from "../layout/Nav";
import Footer from "../layout/Footer";
import UserSideBar from "./UserSideBar";
import axios from "axios";
import {useEffect, useState} from "react";
import './MyPageWritten.css';

function MyPageWritten() {
    const [contestPosts, setContestPosts] = useState([]);
    const [buildingPosts, setBuildingPosts] = useState([]);
    useEffect(() => {
        axios
            .get(`/mypost/contest/${localStorage.getItem('userId')}`)
            .then((response) => {
                setContestPosts(response.data.responseDto.contestPosts);
            })
            .catch((error) => {
                console.log("Error fetching contest post data: ", error);
            });
    }, []);
    useEffect(() => {
        axios
            .get(`/mypost/building/${localStorage.getItem('userId')}`)
            .then((response) => {
                setBuildingPosts(response.data.responseDto.buildingPosts);
            })
            .catch((error) => {
                console.log("Error fetching building post data: ", error);
            });
    }, []);
  return (
    <div>
      <Nav/>
      <main className="flex-element">
        <UserSideBar />
        <div className="main-container">
            <div id="contestPost-container" className="post-container">
                <div className="container-top">
                    <h2>공모전 등록 신청</h2>
                </div>
                <div>
                    {contestPosts.length > 0 ? (contestPosts.map((item,index)=>(
                        <div key={index}>
                            {item.title}
                        </div>
                    ))) : (<div className="post-none">작성한 공모전 게시글이 없습니다.</div>)}
                </div>
            </div>
          <div id="buildingPost-container" className="post-container">
              <div className="container-top">
                  <h2>팀원 모집</h2>
              </div>
              <div>
                  {buildingPosts.length > 0 ? (buildingPosts.map((item,index)=>(
                      <div key={index}>
                          {item.title}
                      </div>
                  ))) : (<div className="post-none">작성한 팀원 모집글이 없습니다.</div>)}
              </div>
          </div>

        </div>
      </main>
      <Footer />
    </div>
  );
}
export default MyPageWritten;
