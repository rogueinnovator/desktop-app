const Modal = ({ selectedUser, handleCancelDelete, handleConfirmDelete }) => {
  return (
    <div>
      <dialog id="my_modal_1" className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Delete Alert!</h3>
          <p className="py-4">
            Do you want to delete{" "}
            <strong>{selectedUser?.name.toUpperCase()}</strong> with id ={" "}
            <strong>{selectedUser?.id}</strong>
          </p>
          <div className="modal-action">
            <form method="dialog" className="flex justify-between w-full">
              <button
                onClick={handleCancelDelete}
                className="btn btn-info rounded-full"
              >
                CANCEL
              </button>
              <button
                onClick={handleConfirmDelete}
                className="btn btn-warning rounded-full"
              >
                Delete
              </button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
};
export default Modal;
