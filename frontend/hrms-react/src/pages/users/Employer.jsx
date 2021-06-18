import React, { useEffect, useState } from 'react'
import EmployerService from '../../services/employerService';
import {  Button, Icon } from 'semantic-ui-react'
import { Table } from 'react-bootstrap'
import { NavLink } from "react-router-dom";
export default function Employer() {
    const [employers, setEmployers] = useState([])
    useEffect(() => {
        let employerService = new EmployerService();
        employerService.getEmployers().then(result => setEmployers(result.data.data));
    }, [])
    return (
        <div>
            <Table striped hover className="table table-bordered border-success table-light table-responsive-lg ">
                <thead>
                    <tr>
                        <th>E-Mail</th>
                        <th>ŞİRKET ADI</th>
                        <th>WEB SİTE</th>
                        <th>TELEFON</th>
                    </tr>
                </thead>
                <tbody>
                    {employers.map((employer) => (
                        <tr key={employer.id}>
                            <td>
                                {employer.mail}
                            </td>
                            <td>
                                {employer.companyName}
                            </td>
                            <td>
                                {employer.webAddress}
                            </td>
                            <td>
                                {employer.phoneNumber}
                            </td>
                            <td>
                                <Button animated as={NavLink} to={`/employers/${employer.id}`}>
                                    <Button.Content visible>İncele</Button.Content>
                                    <Button.Content hidden>
                                        <Icon name="arrow right" />
                                    </Button.Content>
                                </Button>
                            </td>

                        </tr>
                    ))}


                </tbody>
            </Table>

        </div >
    )
}