import ModalWithForm from "../ModalwithForm/ModalwithForm";
const AddItemModal = ({ activeModal, closeAllModals }) => {
  return (
    <ModalWithForm
      title="New garment"
      name="new-card"
      onClose={closeAllModals}
      isOpen={activeModal === "create"}
    >
      <label className="modal__label">
        Name
        <input
          type="text"
          name="name"
          id="clothing-name"
          className="modal__input modal__input_type_card-name"
          placeholder="Name"
          required
          minLength="1"
          maxLength="30"
        />
        <span className="modal__error" id="place-name-error" />
      </label>
      <label className="modal__label">
        Image
        <input
          type="url"
          name="link"
          id="clothing-link"
          className="modal__input modal__input_type_url"
          placeholder="Image URL"
          required
        />
        <span className="modal__error" id="place-link-error" />
      </label>
      <fieldset className="modal__fieldset modal__fieldset_type_radio">
        <legend className="modal__legend">Select the weather type:</legend>
        <div>
          <input
            className="modal__radio-button"
            type="radio"
            id="choiceHot"
            name="weatherType"
            value="hot"
          />
          <label className="modal__label_type_radio" htmlFor="choiceHot">
            Hot
          </label>
        </div>
        <div>
          <input
            className="modal__radio-button"
            type="radio"
            id="choiceWarm"
            name="weatherType"
            value="warm"
          />
          <label className="modal__label_type_radio" htmlFor="choiceWarm">
            Warm
          </label>
        </div>
        <div>
          <input
            className="modal__radio-button"
            type="radio"
            id="choiceCold"
            name="weatherType"
            value="cold"
          />
          <label className="modal__label_type_radio" htmlFor="choiceCold">
            Cold
          </label>
        </div>
      </fieldset>
    </ModalWithForm>
  );
};

export default AddItemModal;
