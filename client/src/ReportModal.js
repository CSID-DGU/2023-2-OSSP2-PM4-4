import { useState, useEffect } from "react";
import { Siren } from "./Siren";
import "./Modal.css";

function ReportModal({ showModal, onClose }) {
  const [checkboxes, setCheckboxes] = useState({
    checkbox1: false, // 부적절한 언어
    checkbox2: false, // 허위 정보 의심
    checkbox3: false, // 동일 내용 반복
    checkbox4: false, // 기타
  });
  const resetCheckboxes = () => {
    setCheckboxes({
      checkbox1: false,
      checkbox2: false,
      checkbox3: false,
      checkbox4: false,
    });
  };
  const handleCheckboxChange = (event) => {
    const { name, checked } = event.target;
    setCheckboxes({
      ...checkboxes,
      [name]: checked,
    });
  };
  useEffect(() => {
    if (!showModal) {
      resetCheckboxes(); // 모달이 닫힐 때 체크박스 초기화
    }
  }, [showModal]);
  
  if (!showModal) {
    return null;
  }
  return (
    <div className="modal-overlay">
      <div className="modal">
        <div className="modal-content">
          <div className="modal-header">
            <Siren width={30} height={30} />
            <p className="modalTitle">신고하기</p>
            <span className="close" onClick={onClose}>
              &times;
            </span>
          </div>
          <div id="reportModalBody" className="modal-body">
            <p>신고 대상 : </p>
            <p>신고 항목 : </p>
            <p>신고 사유 : </p>
            <div id="reportReasons">
              <label>
                <input
                  type="checkbox"
                  name="checkbox1"
                  checked={checkboxes.checkbox1}
                  onChange={handleCheckboxChange}
                />
                부적절한 언행
              </label>
              <label>
                <input
                  type="checkbox"
                  name="checkbox2"
                  checked={checkboxes.checkbox2}
                  onChange={handleCheckboxChange}
                />
                허위 정보 의심
              </label>
              <label>
                <input
                  type="checkbox"
                  name="checkbox3"
                  checked={checkboxes.checkbox3}
                  onChange={handleCheckboxChange}
                />
                동일 내용 반복
              </label>
              <label>
                <input
                  type="checkbox"
                  name="checkbox4"
                  checked={checkboxes.checkbox4}
                  onChange={handleCheckboxChange}
                />
                기타
              </label>
            </div>
            <textarea className="reportDetails" rows={10}></textarea>
          </div>
          <button className="complete">확인</button>
        </div>
      </div>
    </div>
  );
}
export default ReportModal;
