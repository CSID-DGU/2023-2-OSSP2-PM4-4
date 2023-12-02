import Nav from "../layout/Nav";
import Footer from "../layout/Footer";
import UserSideBar from "./UserSideBar";
import "./MyPageApply.css";

function MyPageApply() {
  return (
      <div>
        <Nav />
        <main className="flex-element">
          <UserSideBar />
          <div className="main-container">
            <div id="awardApply-container" className="apply-container">
              <div className="container-top">
                <h2>공모전</h2>
              </div>
                <div className="apply-content">
                  <div className="apply-title">title</div>
                  <div className="apply-body">
                    <div className="apply-part">
                      part1
                      {/*<div className="apply-state">승인 대기중</div>*/}
                    </div>
                    <div className="apply-part">
                      part2
                      {/*<div className="apply-state">거절됨</div>*/}
                    </div>
                  </div>

                {/* <div className="cancel">
                <button>취소</button>
              </div> */}
              </div>
            </div>
            <div id="projectApply-container" className="apply-container">
              <div className="container-top">
                <h2>프로젝트</h2>
              </div>

                <div className="apply-content">
                  <div className="apply-title">title</div>
                  <div className="apply-body">
                    <div className="apply-part">
                      part3
                      {/*<div className="apply-state">승인됨</div>*/}
                    </div>
                  </div>

                {/* <div className="cancle">
                <button>취소</button>
              </div> */}
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </div>
  );
}
export default MyPageApply;
