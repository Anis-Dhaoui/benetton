import React, { useEffect, useState } from 'react'
import './style.user-management.scss';

import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table'
import { darkMode } from '../navbar/Plugins';

export default function RenderUsers({ usersList }: any) {
    const [isDarkMode, setisDarkMode] = useState(() => JSON.parse(localStorage.getItem('darkModeStatus')!) || true);
    useEffect(() => {
        localStorage.setItem('darkModeStatus', JSON.stringify(isDarkMode));
        darkMode(isDarkMode);
    }, [isDarkMode]);

    return (
        <div id='users-table'>
            <BootstrapTable data={usersList} striped hover condensed
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
