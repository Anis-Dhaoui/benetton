import React, { useEffect, useState } from 'react'
import AddNewPCButton from '../computer-form/AddNewPCButton'
import { JsonToExcel } from "react-json-to-excel";
import Multiselect from 'multiselect-react-dropdown';

function TableOptionsBtns(props: any) {

  const [columnsState, setColumnsState] = useState<string[]>([])
  const columns = [
    { cat: 'ref', key: 'REF' },
    { cat: 'usedBy', key: 'UTILISÉ PAR' },
    { cat: 'group', key: 'GPE' },
    { cat: 'sessions', key: 'SESSIONS' },
    { cat: 'softwares', key: 'PROGS-UTILISÉ' },
    { cat: 'networkDriveAccess', key: 'A.L.R' },
    { cat: 'brandName', key: 'MARQ' },
    { cat: 'model', key: 'MODEL' },
    { cat: 'os', key: 'OS' },
    { cat: 'type', key: 'TYPE' },
    { cat: 'cpu', key: 'STATUS' }
  ]

  var selectedColumns: any;
  if (columnsState.length > 0) {
    const catArray = columnsState.map((item: any) => item.cat);
    selectedColumns = props.list && props.list.map((item: any) => {
      const filteredItem: any = {};

      catArray.forEach((prop: any) => {
        if (item.hasOwnProperty(prop)) {
          filteredItem[prop] = item[prop];
        }
      });

      return filteredItem;
    });
  } else {
    selectedColumns = props.list;
  }

  return (
    <div className='row' style={{ marginBottom: '-103px' }}>

      <div className='col-md-4'>
        <AddNewPCButton />
      </div>

      <div className='col-md-4'>
        <Multiselect
          onRemove={(removedItem: string[]) => { setColumnsState(removedItem) }}
          onSelect={(selectedItem: string[]) => { setColumnsState(selectedItem) }}
          isObject={true}
          options={columns}
          showArrow
          showCheckbox
          hideSelectedList
          placeholder='Filtrer'
          avoidHighlightFirstOption={true}
          selectedValues={columnsState}
          displayValue='key'
          style={{
            // chips: {
            //   background: 'red'
            // },
            multiselectContainer: {
              height: '35px',
              margin: 'auto auto 56px -25px',
              borderRadius: '9px'
            },
            searchBox: {
              marginTop: '0px !important',
              border: 'none',
              height: '35px',
              backgroundColor: '#3c3c43'
            }
          }}
        />
      </div>

      <div className='col-md-4'>
        <JsonToExcel
          title="Télécharger la liste"
          data={selectedColumns}
          fileName="computers"
          btnClassName="download-btn"
        />
      </div>
    </div>
  )
}

export default TableOptionsBtns