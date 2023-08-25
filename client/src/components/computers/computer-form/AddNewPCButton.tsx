import React, { useState } from 'react'
import './style.computer-form.css';
import ModalForm from './AddEditFormModal';

function AddNewPCButton() {

  const [showModal, setShowModal] = useState(false);
  const handleShowModal = () => {
    setShowModal(!showModal);
  }

  return (
    <div id='add-new-pc'>
      <button onClick={handleShowModal} type="button" className="add-btn tab-btn">
        <span className=''>
        ✙Ajouter
        </span>

        {/* <span className='d-xxl-none'>
          <i className="fa fa-plus"></i>
        </span> */}
      </button>
      <ModalForm show={showModal} onClose={handleShowModal} />
    </div>
  )
}

export default AddNewPCButton