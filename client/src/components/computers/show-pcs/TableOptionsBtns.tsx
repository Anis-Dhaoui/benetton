import React from 'react'
import AddNewPCButton from '../computer-form/AddNewPCButton'
import { JsonToExcel } from "react-json-to-excel";

function TableOptionsBtns(props: any) {
  return (
    <div className='row'>
      <div className='col-md-4'>
        <AddNewPCButton />
      </div>

      <div className='col-md-4'>
        aaaaaaaaaaaaa
      </div>

      <div className='col-md-4'>
        <JsonToExcel
          title="Télécharger la liste"
          data={props.list}
          fileName="computers"
          btnClassName="download-btn"
        />
      </div>
    </div>
  )
}

export default TableOptionsBtns