import ModalWithForm from "../ModalwithForm/ModalwithForm";
import { useForm } from "../../hooks/useForm";

const RegisterModal = ({
  activeModal,
  closeAllModals,
  handleRegisterSubmit,
}) => {
  const defaultValues = { email: "", password: "", avatar: "", name: "" };
  const { values, handleChange, handleReset } = useForm(defaultValues);
  function handleSubmit(e) {
    e.preventDefault();
    handleRegisterSubmit(values, handleReset);
  }
  return (
    <ModalWithForm
      title="Signup"
      name="User Signup"
      onClose={closeAllModals}
      isOpen={activeModal === "signup"}
      onSubmit={handleSubmit}
    >
      <label className="modal__label">
        Name
        <input
          type="text"
          name="name"
          id="name-signup"
          className="modal__input modal__input_type_card-name"
          placeholder="Name Signup"
          required
          minLength="1"
          maxLength="100"
          onChange={handleChange}
          value={values.name}
        />
        <span className="modal__error" id="place-name-error" />
      </label>
      <label className="modal__label">
        Avatar
        <input
          type="url"
          name="avatar"
          id="avatar-signup"
          className="modal__input modal__input_type_card-name"
          placeholder="Avatar Signup"
          required
          minLength="1"
          maxLength="100"
          onChange={handleChange}
          value={values.avatar}
        />
        <span className="modal__error" id="place-name-error" />
      </label>
      <label className="modal__label">
        Email
        <input
          type="text"
          name="email"
          id="email-signup"
          className="modal__input modal__input_type_card-name"
          placeholder="Email Signup"
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

export default RegisterModal;
