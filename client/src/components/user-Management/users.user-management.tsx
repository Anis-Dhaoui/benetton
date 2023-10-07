import React from 'react'
import './style.user-management.scss';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table'

function UsersManagement() {

  const users: Object[] = [
    {
        "_id": "64f2e652db030ef4594d7ad7",
        "firstName": "Ahmed",
        "lastName": "Hamouda",
        "username": "ust4",
        "role": "User"
    },
    {
        "_id": "64f2e67adb030ef4594d7ada",
        "firstName": "Anis",
        "lastName": "Dhaoui",
        "username": "ussj",
        "role": "Admin"
    },
    {
        "_id": "64f5d2bae4a9b24c59c8f7a1",
        "firstName": "Ahmed",
        "lastName": "Bel Fekih",
        "username": "meko",
        "role": "User"
    }
]

  return (
    <div id='usres-table'>
      <BootstrapTable data={users} striped hover condensed 
        options={{
          clearSearch: true,
          noDataText: 'Tableau est vide'
        }}

        search
        searchPlaceholder="Que cherchez-vous?..."
      >
        <TableHeaderColumn dataField="_id" dataAlign="center" dataSort isKey>ID</TableHeaderColumn>
        <TableHeaderColumn dataField="firstName" dataAlign="center" dataSort width='200'>NOM</TableHeaderColumn>
        <TableHeaderColumn dataField="lastName" dataAlign="center" dataSort width='160px'>PRENOM</TableHeaderColumn>
        <TableHeaderColumn dataField="username" dataAlign="center" dataSort>USERNAME</TableHeaderColumn>
        <TableHeaderColumn dataField="role" dataAlign="center" dataSort>ROLE</TableHeaderColumn>
        <TableHeaderColumn dataField="password" dataAlign="center" dataSort>MOT DE PASSE</TableHeaderColumn>
      </BootstrapTable>
    </div>
  )
}

export default UsersManagement