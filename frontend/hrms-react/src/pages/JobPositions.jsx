import React, { useState, useEffect } from 'react'
import JobPositionService from '../services/jobPositionService'
import { Table } from 'semantic-ui-react'
export default function JobPositions() {
    const [jobPositions, setJobPositions] = useState([]);
    useEffect(() => {
        let jobPositionService = new JobPositionService();
        jobPositionService.getJobPositions().then(result => setJobPositions(result.data.data))
    }, [])
    return (
        <div>
            <Table inverted celled fixed>
                <Table.Header>
                    <Table.Row>
                        
                        <Table.HeaderCell>POZİSYONLAR</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>
                <Table.Body>
                    {jobPositions.map((jobPosition) => (
                        <Table.Row key={jobPosition.id}>
                          
                            <Table.Cell>{jobPosition.position}</Table.Cell>

                        </Table.Row>
                    ))}
                </Table.Body>
            </Table>
        </div>
    )
}