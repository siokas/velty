import { ModalProps } from "../types/app";

export default function Modal(props: ModalProps) {
  return (
    <>
      <label htmlFor="my-modal" className="modal-button btn">
        {props.buttonName}
      </label>

      <input type="checkbox" id="my-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box">
          <h3 className="text-lg font-bold">{props.title}</h3>
          {props.children}
          <div className="modal-action">
            <label htmlFor="my-modal" className="btn">
              {props.modalActionName}
            </label>
          </div>
        </div>
      </div>
    </>
  );
}
