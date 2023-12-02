import "./Modal.css";

function RestrictModal({ showModal, onClose }) {
  if (!showModal) {
    return null;
  }

  return (
    <div className="modal-overlay">
      <div className="modal">
        <div className="modal-content">
          <div className="modal-header">
            <p className="modalTitle">회원 제재</p>
            <span className="close" onClick={onClose}>
              &times;
            </span>
          </div>
          <div id="restrictModalBody" className="modal-body">
            <p>제재 대상 : </p>
            <p>제재 내용 : </p>
            <p>제재 기간 : </p>
            <input type="text"rows={10} cols={150}></input>
          </div>
          <button className="complete">확인</button>
        </div>
      </div>
    </div>
  );
}
export default RestrictModal;
