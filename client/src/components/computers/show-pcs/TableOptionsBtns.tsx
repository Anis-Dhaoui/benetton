import React, { useState } from 'react'
import AddNewPCButton from '../computer-form/AddNewPCButton'
import { JsonToExcel } from "react-json-to-excel";
import Multiselect from 'multiselect-react-dropdown';
import { useAppSelector } from '../../../state/store.state';

function TableOptionsBtns(props: any) {

  const { loading, user, errMsg, isAuthenticated } = useAppSelector(state => state.login);

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
    { cat: 'cpu', key: 'CPU' },
    { cat: 'status', key: 'STATUS' }
  ]

  var selectedColumns: any;
  if (columnsState.length > 0) {
    const catArray = columnsState.map((item: any) => item.cat);
    selectedColumns = props.list && props.list.map((item: any) => {
      delete item._id;
      const filteredItem: any = {};

      catArray.forEach((prop: any) => {
        if (item.hasOwnProperty(prop)) {
          filteredItem[prop] = item[prop];
        }
      });

      return filteredItem;
    });
  } else {

    selectedColumns = props.list && props.list.map(({ _id, createdAt, updatedAt, ...rest }: any) => rest)
  }

  const transformArraysToString = (data: any) => {
    if (!data) {
      return [];
    }

    return data.map((item: any) => {
      const {
        sessions,
        softwares,
        networkDriveAccess,
        ...restOfProperties  // Destructure and capture the rest of the properties
      } = item;

      const transformedItem: any = { ...restOfProperties };  // Initialize with the rest of the properties

      if (sessions) {
        transformedItem.sessions = sessions.join(', ');
      }

      if (softwares) {
        transformedItem.softwares = softwares.join(', ');
      }

      if (networkDriveAccess) {
        transformedItem.networkDriveAccess = networkDriveAccess.join(', ');
      }

      return transformedItem;
    });
  };

  return (
    <div id='table-options-btns-container' className='row'>

      {
        user?.user.role === 'Admin' ?
          <div className='col-md-4 col-sm-12'>
            <AddNewPCButton />
          </div>
          :
          null
      }

      <div className='col-md-4 col-sm-12'>
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
              borderRadius: '9px'
            },
            searchBox: {
              marginTop: '0px !important',
              border: 'none',
              height: '35px',
              backgroundColor: '#3c3c43'
            }
          }}
          className='tab-btn'
        />
      </div>

      <div className='col-md-4 col-sm-12'>
        <JsonToExcel
          title={'⤋Exporter'}
          data={transformArraysToString(selectedColumns)}
          fileName="computers"
          btnClassName="download-btn tab-btn"
        />
      </div>
    </div>
  )
}

export default TableOptionsBtns