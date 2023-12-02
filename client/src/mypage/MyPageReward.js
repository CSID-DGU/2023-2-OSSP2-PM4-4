import Nav from "../layout/Nav";
import Footer from "../layout/Footer";
import UserSideBar from "./UserSideBar";
import { Cash } from "../Cash";
import "./MyPageReward.css";

function MyPageReward() {
  return (
    <div>
      <Nav/>
      <main className="flex-element">
        <UserSideBar />
        <div className="main-container">
          <div className="reward">
            <div className="container-top">
              <h2>리워드</h2>
            </div>
            <Cash width={165} height={165}/>
            <div className="myReward">보유 리워드 : 999p</div>
          </div>
          <div className="rewardLog">
            <div className="container-top">
              <h2>적립 / 사용 내역</h2>
            </div>
            <div className="myLog"></div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
export default MyPageReward;
