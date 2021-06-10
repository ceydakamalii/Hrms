import React, { useEffect, useState } from 'react';
import { Table } from 'semantic-ui-react'
import JobPostingService from '../services/jobPostingService';
export default function JobPostings() {
    const [jobPostings, setJobPostings] = useState([]);
    useEffect(() => {
        let jobPostingService = new JobPostingService();
        jobPostingService.getJobPostings().then(result => setJobPostings(result.data.data))
    }, [])
    return (
        <div>
            <Table inverted celled fixed>

                <Table.Header>
                    İŞ İLANLARI
                    <Table.Row>
                        
                        <Table.HeaderCell>Pozisyon</Table.HeaderCell>
                        <Table.HeaderCell>Şirket</Table.HeaderCell>
                        <Table.HeaderCell>Açıklama</Table.HeaderCell>
                        <Table.HeaderCell>Maaş</Table.HeaderCell>
                        <Table.HeaderCell>Son başvuru tarihi</Table.HeaderCell>
                        <Table.HeaderCell>Açık pozisyon </Table.HeaderCell>
                        
                    </Table.Row>
                </Table.Header>
                <Table.Body>
                    {jobPostings.map((jobPosting) => (
                        <Table.Row key={jobPosting.id}>
                            
                            <Table.Cell>{jobPosting.jobPositionPosition}</Table.Cell>
                            <Table.Cell>{jobPosting.employerCompanyName}</Table.Cell>
                            <Table.Cell>{jobPosting.description}</Table.Cell>
                            <Table.Cell>{`${jobPosting.minSalary} - ${jobPosting.maxSalary}`}</Table.Cell>
                            <Table.Cell>{jobPosting.closedDate}</Table.Cell>
                            <Table.Cell>{jobPosting.openPositionNumber}</Table.Cell>
                            
                        </Table.Row>
                    ))}
                </Table.Body>
            </Table>
        </div>
    )
}