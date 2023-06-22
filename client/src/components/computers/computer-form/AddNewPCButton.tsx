import React, { useState } from 'react'
import './style.computer-form.css';
import ModalComputerForm from './Modal.computer-form';

function AddNewPCButton() {

  const [showModal, setShowModal] = useState(false);
  const handleShowModal = () => {
    setShowModal(!showModal);
  }

  return (
    <div id='add-new-pc'>
      <div className="btn-group btn-group-sm" role="group">
        <button onClick={handleShowModal} type="button" className="btn btn-success react-bs-table-csv-btn  hidden-print">
          <span>
            <i className="fa fa-plus"></i>
            &nbsp; Ajouter Nouveau PC
          </span>
        </button>
      </div>
      <ModalComputerForm show={showModal} onClose={handleShowModal} />
    </div>
  )
}

export default AddNewPCButton