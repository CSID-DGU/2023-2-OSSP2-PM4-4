import Nav from "../layout/Nav";
import Footer from "../layout/Footer";
import AdminSideBar from "./AdminSideBar";
import axios from "axios";
import {useEffect, useState} from "react";
import List_PageNumber from "../layout/List_PageNumber";
import "./ReportList.css";
import RestrictModal from "../RestrictModal";

function ReviewReportList() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [reviewReportList, setReviewReportList] = useState([]);
    const [reviewReportPageInfo, setReviewReportPageInfo] = useState({
        pageNumber: 1, //페이지 번호
        pageSize: 2, //한 페이지 당 게시글 수
        pageLength: 10, //페이지 시작번호(1 + n*pageSize)
        pageCount: 10, //총 페이지 개수
    });
    const getReviewReport = async () => {
        try{
            const response = await axios.get(`/reviewReport?page=${reviewReportPageInfo.pageNumber-1}&size=${reviewReportPageInfo.pageSize}`);
            setReviewReportList(response.data.responseDto.reportTitles);
            setReviewReportPageInfo({
                pageNumber: response.data.responseDto.pageInfo.currentPage,
                pageSize: reviewReportPageInfo.pageSize,
                pageLength: reviewReportPageInfo.pageLength,
                pageCount: response.data.responseDto.pageInfo.totalPages,
            });
            console.log(response.data.responseDto);
        }catch(error){
            console.error("Error fetching review report list data: ", error);
        }
    }
    const deleteReviewReport = async(reportId) => {
        const confirmed = window.confirm("삭제하시겠습니까?");
        if(confirmed){
            try{
                const response = await axios.put(`/reviewReport/delete/${reportId}`);
                if(response.status === 200){
                    window.alert('리뷰 신고 내역 삭제 완료');
                    window.location.reload();
                }
            }catch(error){
                console.error('error deleting review report data : ', error);
            }
        }
    }
    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };
    useEffect(() => {
        getReviewReport();
    }, [reviewReportPageInfo.pageNumber]);

    function moveToReviewPage(index) {
        const screenWidth = window.screen.width;
        const screenHeight = window.screen.height;

        // 새 창의 크기를 화면 크기의 50%로 설정하고, 가운데 정렬
        const newWindowWidth = screenWidth * 0.5;
        const newWindowHeight = screenHeight * 0.5;
        const leftPos = (screenWidth - newWindowWidth) / 2;
        const topPos = (screenHeight - newWindowHeight) / 2;
        window.open(`http://15.164.3.171:3000/reviewPage/${index}`, "ReviewPage", `width=${newWindowWidth},height=${newWindowHeight},left=${leftPos},top=${topPos}`);
    }

    return (
        <div>
            <Nav />
            <main className="flex-element">
                <AdminSideBar />
                <div className="main-container">
                    <div className="container-top">
                        <h2>리뷰 신고 내역</h2>
                    </div>
                    <div className="container-body">
                        <div className="report-info">
                            <div className="w-[150px] text-center">신고 대상</div>
                            <div className="w-[150px] text-center">신고자</div>
                            <div className="w-[100px] text-center">신고 사유</div>
                            <div className="w-[150px] text-center mr-[300px]">신고 일자</div>
                        </div>
                        <div>
                            {reviewReportList.length ? (
                                reviewReportList.map((item, index) => (
                                    <div className="report-container">
                                        <div key={index} className="report-content">
                                            <div className="defendant">{item.defendantNickName}</div>
                                            <div className="reporter">{item.reporterNickName}</div>
                                            <div className="reportReason">{item.reportReason}</div>
                                            <div className="reportDate">{item.createAt}</div>
                                            <div className="moveTo" onClick={()=>moveToReviewPage(item.contentId)}>이동</div>
                                            <div className="restrict">
                                                <button onClick={openModal}>제재</button>
                                                <RestrictModal
                                                showModal={isModalOpen}
                                                category="review"
                                                item={item}
                                                onClose={closeModal}
                                            /></div>
                                            <div className="deleteReport" onClick={()=>deleteReviewReport(item.reportId)}>삭제</div>
                                        </div>
                                    </div>
                                ))
                            ) : (
                                <div className="post-none">신고된 리뷰가 없습니다.</div>
                            )}
                            {reviewReportList.length ? (
                                <div className="space"><List_PageNumber
                                    pageInfo={reviewReportPageInfo}
                                    setPageInfo={setReviewReportPageInfo}
                                /></div>
                            ):(<></>)}
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}
export default ReviewReportList;
