import ModalWithForm from "../ModalwithForm/ModalwithForm";
import { useForm } from "../../hooks/useForm";

const LoginModal = ({ activeModal, closeAllModals, handleLoginSubmit }) => {
  const defaultValues = { email: "", password: "" };
  const { values, handleChange, handleReset } = useForm(defaultValues);
  function handleSubmit(e) {
    e.preventDefault();
    handleLoginSubmit(values, handleReset);
  }
  return (
    <ModalWithForm
      title="Login"
      name="User Login"
      onClose={closeAllModals}
      isOpen={activeModal === "login"}
      onSubmit={handleSubmit}
    >
      <label className="modal__label">
        Email
        <input
          type="text"
          name="email"
          id="email-login"
          className="modal__input modal__input_type_card-name"
          placeholder="Email Login"
          required
          minLength="1"
          maxLength="100"
          onChange={handleChange}
          value={values.email}
        />
        <span className="modal__error" id="place-name-error" />
      </label>
      <label className="modal__label">
        Password
        <input
          type="password"
          name="password"
          id="password-login"
          className="modal__input modal__input_type_url"
          placeholder="Password Login"
          required
          onChange={handleChange}
          value={values.password}
        />
        <span className="modal__error" id="place-link-error" />
      </label>
    </ModalWithForm>
  );
};

export default LoginModal;
