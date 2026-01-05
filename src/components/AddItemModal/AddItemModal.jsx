// onAddItem refers to the submit handler declared in App.jsx
const AddItemModal = ({ isOpen, onAddItem, onCloseModal }) => {
  // ...

  return (
    // Don't forget to pass appropriate props to ModalWithForm
    <ModalWithForm>
      {/* The contents of the form will go in here */}
    </ModalWithForm>
  );
};

export default AddItemModal;
