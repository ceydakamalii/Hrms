import React, { useState, useEffect } from 'react'
import CandidateService from '../../services/candidateService';
import { Header, Image, Button, Icon } from 'semantic-ui-react'
import { Table } from 'react-bootstrap'
import { NavLink } from "react-router-dom";
export default function Candidate() {
    const [candidates, setCandidates] = useState([]);
    useEffect(() => {
        let candidateService = new CandidateService();
        candidateService.getCandidates().then(result => setCandidates(result.data.data))
    }, [])
    return (
        <div>
            <Table striped bordered hover className="table-light table-responsive border-success">
                <thead>
                    <tr>
                        <th>E-Mail</th>
                        <th>AD</th>
                        <th>SOYAD</th>
                        <th>TC KİMLİK</th>
                        <th>DOĞUM TARİHİ</th>
                        <th>İncele</th>
                    </tr>
                </thead>
                <tbody>
                    {candidates.map((candidate) => (
                        <tr key={candidate.id}>
                            <td>
                                {candidate.mail}
                            </td>
                            <td>
                                {candidate.name}
                            </td>
                            <td>
                                {candidate.surname}
                            </td>
                            <td>
                                {candidate.nationalIdentity}
                            </td>
                            <td>
                                {candidate.birth_year}
                            </td>
                            <td>
                                <Button animated as={NavLink} to={"/"}>
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

        </div>
    )
}