import "../DeleteConfirmationModal/DelConMod.css";

export const DeleteConfirmationModal = ({ onCardDelete, onClose, isOpen }) => {
  return (
    <div
      className={`modal modal_type_delete-confirmation${
        isOpen ? " modal_is-opened" : ""
      }`}
    >
      <div className="modal-content modal-content_content_confirmation">
        <button type="button" className="modal-close" onClick={onClose} />
        <h3 className="modal-confirmation-title">
          Are you sure you want to delete this item? This action is
          irreversible.
        </h3>
        <button
          className="modal-confirmation-button modal-confirmation-button_type_delete"
          onClick={onCardDelete}
        >
          Yes, delete item
        </button>
        <button
          className="modal-confirmation-button modal-confirmation-button_type_cancel"
          onClick={onClose}
        >
          Cancel
        </button>
      </div>
    </div>
  );
};
