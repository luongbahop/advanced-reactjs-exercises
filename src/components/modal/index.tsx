import React from "react";
import Confirm from "./Confirm";
import "./style.css";

type ModalType = "modal" | "dialog" | "confirm";

interface ModalProps {
  open: boolean;
  title?: string;
  onOk: () => void;
  onCancel: () => void;
  header?: React.ReactNode | null;
  footer?:
    | null
    | ((
        defaultFooter: React.ReactNode,
        buttons: { OkBtn: React.FC; CancelBtn: React.FC }
      ) => React.ReactNode);
  customButtons?: { label: string; className: string; onClick: () => void }[];
  children: React.ReactNode;
  type?: ModalType;
  width?: string; // custom width for the modal
  style?: React.CSSProperties;
  cancelText?: string;
  okText?: string;
}

const Modal: React.FC<ModalProps> & { Confirm: typeof Confirm } = ({
  open,
  title,
  onOk,
  onCancel,
  header,
  footer,
  customButtons = [],
  children,
  type = "modal",
  width = "500px", // Default width
  style = {}, // Default to empty object for custom styles
  cancelText = "Cancel",
  okText = "OK",
}) => {
  if (!open) return null;
  const isModal = type === "modal";
  const isDialog = type === "dialog";

  const OkBtn = () => (
    <button className="ok-btn" onClick={onOk}>
      {okText}
    </button>
  );
  const CancelBtn = () => (
    <button className="cancel-btn" onClick={onCancel}>
      {cancelText}
    </button>
  );

  return (
    <div
      className={isModal ? "modal-overlay" : "modal-dialog"}
      onClick={!isDialog ? onCancel : undefined}
    >
      <div
        className="modal-content"
        onClick={(e) => e.stopPropagation()}
        style={{ width, ...style }}
      >
        <div className="modal-header">{header ? header : <h2>{title}</h2>}</div>
        <div className="modal-body">{children}</div>
        <div className="modal-footer">
          {footer ? (
            footer(
              <div className="modal-buttons">
                <CancelBtn />
                <OkBtn />
              </div>,
              { OkBtn, CancelBtn }
            )
          ) : (
            <div className="modal-buttons">
              {customButtons.map((btn, index) => (
                <button
                  key={index}
                  className={btn.className}
                  onClick={btn.onClick}
                >
                  {btn.label}
                </button>
              ))}
              <CancelBtn />
              <OkBtn />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

Modal.Confirm = Confirm;

export default Modal;
