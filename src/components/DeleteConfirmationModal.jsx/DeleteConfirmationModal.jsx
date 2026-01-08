import "../ModalWithForm/ModalWithForm.css";
import "./DeleteConfirmationModal.css";

export const DeleteConfirmationModal = ({ onCardDelete, onClose, isOpen }) => {
  return (
    <div
      className={`modal modal_type_delete-confirmation${isOpen ? ' modal_is-opened' : ''}`}
    >
      <div className="modalcontent modalcontent_content_confirmation">
        <button type="button" className="modalclose" onClick={onClose} />
        <h3 className="modalconfirmation-title">
          Are you sure you want to delete this item? This action is
          irreversible.
        </h3>
        <button
          className="modalconfirmation-button modalconfirmation-button_type_delete"
          onClick={onCardDelete}
        >
          Yes, delete item
        </button>
        <button
          className="modalconfirmation-button modalconfirmation-button_type_cancel"
          onClick={onClose}
        >
          Cancel
        </button>
      </div>
    </div>
  );
};