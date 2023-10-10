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
                <TableHeaderColumn dataField="username" dataAlign="center" dataSort isKey>USERNAME</TableHeaderColumn>
                <TableHeaderColumn dataField="firstName" dataAlign="center" dataSort>NOM</TableHeaderColumn>
                <TableHeaderColumn dataField="lastName" dataAlign="center" dataSort>PRENOM</TableHeaderColumn>
                <TableHeaderColumn dataField="password" dataAlign="center" dataSort>MOT DE PASSE</TableHeaderColumn>
                <TableHeaderColumn dataField="role" dataAlign="center" dataSort>ROLE</TableHeaderColumn>
            </BootstrapTable>
        </div>
    )
}
