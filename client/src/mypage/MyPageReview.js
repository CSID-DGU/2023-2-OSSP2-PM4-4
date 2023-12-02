import { useState } from "react";
import Nav from "../layout/Nav";
import Footer from "../layout/Footer";
import UserSideBar from "./UserSideBar";
import ReportModal from "../ReportModal";
import "./MyPageReview.css";
import "../Modal.css";

function MyPageReview() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <Nav/>
      <main className="flex-element">
        <UserSideBar />
        <div className="main-container">
          <div className="container-top">
            <h2>리뷰</h2>
          </div>
          <div className="review-container">
            <div id="review1" className="reviews">
              <div className="review-header">
                <div className="star-ratings">
                  <div className="star-ratings-fill">
                    <span>★</span>
                    <span>★</span>
                    <span>★</span>
                  </div>
                  <div className="star-ratings-base">
                    <span>★</span>
                    <span>★</span>
                    <span>★</span>
                    <span>★</span>
                    <span>★</span>
                  </div>
                </div>
                <div className="report">
                  <button onClick={openModal}>신고</button>
                  <ReportModal showModal={isModalOpen} onClose={closeModal} />
                </div>
                <div className="reviewedUser">유저 닉네임 1</div>
                <div className="reviewedDate">2023-11-10</div>
              </div>

              <div className="review-body">리뷰 내용 1</div>
            </div>
            <div id="review2" className="reviews">
              <div className="review-header">
                <div className="star-ratings">
                  <div className="star-ratings-fill">
                    <span>★</span>
                    <span>★</span>
                    <span>★</span>
                    <span>★</span>
                  </div>
                  <div className="star-ratings-base">
                    <span>★</span>
                    <span>★</span>
                    <span>★</span>
                    <span>★</span>
                    <span>★</span>
                  </div>
                </div>
                <div className="report">
                  <button onClick={openModal}>신고</button>
                  <ReportModal showModal={isModalOpen} onClose={closeModal} />
                </div>
                <div className="reviewedUser">유저 닉네임 2</div>
                <div className="reviewedDate">2023-10-30</div>
              </div>
              <div className="review-body">리뷰 내용 2</div>
            </div>
            <div id="review3" className="reviews">
              <div className="review-header">
                <div className="star-ratings">
                  <div className="star-ratings-fill">
                    <span>★</span>
                    <span>★</span>
                    <span>★</span>
                  </div>
                  <div className="star-ratings-base">
                    <span>★</span>
                    <span>★</span>
                    <span>★</span>
                    <span>★</span>
                    <span>★</span>
                  </div>
                </div>
                <div className="report">
                  <button onClick={openModal}>신고</button>
                  <ReportModal showModal={isModalOpen} onClose={closeModal} />
                </div>
                <div className="reviewedUser">유저 닉네임 3</div>
                <div className="reviewedDate">2023-10-23</div>
              </div>
              <div className="review-body">리뷰 내용 3</div>
            </div>
            <div id="review4" className="reviews">
              <div className="review-header">
                <div className="star-ratings">
                  <div className="star-ratings-fill">
                    <span>★</span>
                    <span>★</span>
                    <span>★</span>
                    <span>★</span>
                    <span>★</span>
                  </div>
                  <div className="star-ratings-base">
                    <span>★</span>
                    <span>★</span>
                    <span>★</span>
                    <span>★</span>
                    <span>★</span>
                  </div>
                </div>
                <div className="report">
                  <button onClick={openModal}>신고</button>
                  <ReportModal showModal={isModalOpen} onClose={closeModal} />
                </div>
                <div className="reviewedUser">유저 닉네임 4</div>
                <div className="reviewedDate">2023-10-21</div>
              </div>
              <div className="review-body">리뷰 내용 4</div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
export default MyPageReview;
