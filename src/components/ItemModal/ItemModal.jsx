import "../ItemModal/ItemModal.css";
const ItemModal = ({ card, onClose, activeModal }) => (
  <div
    className={`modal modal_type_image ${
      activeModal === "preview" ? "modal_is-opened" : ""
    }`}
  >
    <div className="modal__content modal__content_content_image">
      <button
        type="button"
        className="modal__close modal__close_content_image"
        onClick={onClose}
      />
      <img
        alt={card.name || ""}
        src={card.link || ""}
        className="modal__image"
      />
      <div className="modal__captions">
        <p className="modal__caption">{card.name || ""}</p>
        <p className="modal__caption">Weather: {card.weather || ""}</p>
      </div>
    </div>
  </div>
);

export default ItemModal;
