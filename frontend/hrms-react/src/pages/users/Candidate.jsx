import React, { useState, useEffect } from 'react'
import CandidateService from '../../services/candidateService';
import { Table } from 'semantic-ui-react'
export default function Candidate() {
    const [candidates, setCandidates] = useState([]);
    useEffect(() => {
        let candidateService = new CandidateService();
        candidateService.getCandidates().then(result => setCandidates(result.data.data))
    }, [])
    return (
        <div>
            <Table inverted celled fixed>
                <Table.Header>
                    İŞ ARAYANLAR
                    <Table.Row>
                        <Table.HeaderCell>E-mail</Table.HeaderCell>
                        <Table.HeaderCell>AD</Table.HeaderCell>
                        <Table.HeaderCell>SOYAD</Table.HeaderCell>
                        <Table.HeaderCell>TC KİMLİK</Table.HeaderCell>
                        <Table.HeaderCell>DOĞUM TARİHİ</Table.HeaderCell>

                    </Table.Row>
                </Table.Header>
                <Table.Body>
                    {candidates.map((candidate) => (
                        <Table.Row key={candidate.id}>
                            <Table.Cell>{candidate.mail}</Table.Cell>
                            <Table.Cell>{candidate.name}</Table.Cell>
                            <Table.Cell>{candidate.surname}</Table.Cell>
                            <Table.Cell>{candidate.nationalIdentity}</Table.Cell>
                            <Table.Cell>{candidate.birth_year}</Table.Cell>

                        </Table.Row>
                    ))}
                </Table.Body>
            </Table>
        </div>
    )
}