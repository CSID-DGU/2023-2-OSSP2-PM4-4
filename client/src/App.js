import logo from "./logo.svg";
import "./App.css";
import MainPage from "./MainPage";
import MyPage from "./MyPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { MyPageIcon } from "./MyPageIcon";
import ProjectForumPage from "./ProjectForumPage";
import ContestForumPage from "./ContestForumPage";
import ChatListPage from "./ChatListPage";
import LogInPage from "./LogInPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />}></Route>
        <Route path="/contest_forum" element={<ContestForumPage />}></Route>
        <Route path="/project_forum" element={<ProjectForumPage />}></Route>
        <Route path="/chat_list" element={<ChatListPage />}></Route>
        <Route path="/login" element={<LogInPage />}></Route>
        <Route path="/my_page" element={<MyPage />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
