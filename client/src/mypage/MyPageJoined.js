import Nav from "../layout/Nav";
import Footer from "../layout/Footer";
import UserSideBar from "./UserSideBar";

function MyPageJoined() {
  return (
    <div>
      <Nav/>
      <main className="flex-element">
        <UserSideBar />
        <div className="main-container">
          <div className="container-top">
            <h2>공모전</h2>
          </div>
          <div className="container-top">
            <h2>프로젝트</h2>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
export default MyPageJoined;
