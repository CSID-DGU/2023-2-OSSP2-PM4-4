import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainPage from "./main/MainPage";
import MyPage from "./mypage/MyPage";
import MyPageResume from "./mypage/MyPageResume";
import Project_ListPage    from "./forum/page/Project_ListPage";
import Contest_ListPage from "./forum/page/Contest_ListPage";
import Contest_Info_Post   from "./forum/page/Contest_Info_Post";
import Contest_Info_Write from "./forum/page/Contest_Info_Write";
import Contest_Team_ListTab from "./forum/page/Contest_Team_ListTab";
import Contest_Team_WriteView   from "./forum/page/Contest_Team_Write(View)";
import Contest_Team_WritePost   from "./forum/page/Contest_Team_Write(Post)"
import ChatListPage from "./chat/ChatListPage";
import SignUpPage from "./signup/SignUpPage";
import MyPageReview from "./mypage/MyPageReview";
import MyPageApply from "./mypage/MyPageApply";
import MyPageWritten from "./mypage/MyPageWritten";
import MyPageReward from "./mypage/MyPageReward";
import ReportList from "./adminpage/ReportList";
import PostRequest from "./adminpage/PostRequest";
import UserManagement from "./adminpage/UserManagement";
import DeleteLog from "./adminpage/DeleteLog";
import SignInPage from "./signin/SignInPage";
import MyPageJoined from "./mypage/MyPageJoined";
import ChatRoomSocket from "./chat/ChatRoomSocket";


function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<MainPage/>}></Route>
                {/*공모전 정보 게시글 목록 페이지 */}    <Route path="/contestInfoListPage"    element={<Contest_ListPage />}/>
                {/*공모전 정보 게시글 상세 페이지*/}     <Route path="/contestInfoPostPage"     element={<Contest_Info_Post />}/>
                {/*공모전 정보 게시글 작성 페이지*/}     <Route path={"/contestInfoWritePage"}   element={<Contest_Info_Write />}/>
                {/*공모전 정보 게시글 팀원모집 탭*/}     <Route path="/contestInfoPostTeamListPage"      element={<Contest_Team_ListTab />}/>
                {/*공모전 팀원모집 글(보기)*/}          <Route path="/contestTeamWriteView/:id"     element={<Contest_Team_WriteView/>}/>
                {/*공모전 팀원모집 글(쓰기)*/}          <Route path="/contestTeamWritePost"     element={<Contest_Team_WritePost/>}/>
                <Route path="/chat_socket" element={<ChatRoomSocket />}/>
                <Route path="/project_forum"    element={<Project_ListPage />}/>
                <Route path="/chat_list"        element={<ChatListPage />}/>
                <Route path="/sign_in" element={<SignInPage/>}></Route>
                <Route path="/sign_up" element={<SignUpPage/>}></Route>
                <Route path="/my_page" element={<MyPage/>}></Route>
                <Route path="/my_resume" element={<MyPageResume/>}></Route>
                <Route path="/my_review" element={<MyPageReview/>}></Route>
                <Route path="/my_apply" element={<MyPageApply/>}></Route>
                <Route path="/my_joined" element={<MyPageJoined/>}></Route>
                <Route path="/my_written" element={<MyPageWritten/>}></Route>
                <Route path="/my_reward" element={<MyPageReward/>}></Route>
                <Route path="/admin_post_request" element={<PostRequest/>}></Route>
                <Route path="/admin_report" element={<ReportList/>}></Route>
                <Route path="/admin_user_management" element={<UserManagement/>}></Route>
                <Route path="/admin_delete_log" element={<DeleteLog/>}></Route>
            </Routes>
        </Router>
    );
}

export default App;
