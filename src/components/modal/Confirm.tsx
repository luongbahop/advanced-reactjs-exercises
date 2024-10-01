import React from "react";
import "./style.css";

interface ConfirmProps {
  title: string;
  content: React.ReactNode;
  onOk: () => void;
  onCancel: () => void;
  open: boolean;
  width?: string;
  style?: React.CSSProperties;
  cancelText?: string;
  okText?: string;
}

const Confirm: React.FC<ConfirmProps> = ({
  title,
  content,
  onOk,
  onCancel,
  open,
  width = "300px",
  style = {},
  cancelText = "Cancel",
  okText = "OK",
}) => {
  if (!open) return null;

  return (
    <div className="modal-overlay" onClick={onCancel}>
      <div
        className="modal-content"
        onClick={(e) => e.stopPropagation()}
        style={{ width, ...style }}
      >
        <div className="modal-header">
          <h2>{title}</h2>
        </div>
        <div className="modal-body">{content}</div>
        <div className="modal-footer">
          <div className="modal-buttons">
            <button className="cancel-btn" onClick={onCancel}>
              {cancelText}
            </button>
            <button className="ok-btn" onClick={onOk}>
              {okText}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Confirm;
