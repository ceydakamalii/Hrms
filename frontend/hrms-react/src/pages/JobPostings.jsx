import React, { useEffect, useState } from 'react';
import JobPostingService from '../services/jobPostingService';
import { Card } from 'react-bootstrap'
import { NavLink } from "react-router-dom";
import {  Button, Icon } from "semantic-ui-react";
export default function JobPostings() {
    const [jobPostings, setJobPostings] = useState([]);
    useEffect(() => {
        let jobPostingService = new JobPostingService();
        jobPostingService.getJobPostings().then(result => setJobPostings(result.data.data))
    }, [])
    return (
        <div>

            {jobPostings.map((jobPosting) => (
                <Card className="mb-2 text-left table-responsive-lg" border="dark " key={jobPosting.id}>
                    <Card.Header as="h5">{jobPosting.employerCompanyName}-{jobPosting.jobPositionPosition}</Card.Header>
                    <Card.Body>
                        <Card.Title>Haydi Sende Bize Katıl!</Card.Title>
                        <Card.Text className="text-left">Ekibimize <b>{jobPosting.jobPositionPosition}</b> aranıyor.</Card.Text>
                        <Card.Text>Lokasyon: {jobPosting.cityName} / {jobPosting.employerCompanyName}</Card.Text>
                        <Card.Text>Maaş Skalası: {jobPosting.minSalary}-{jobPosting.maxSalary}</Card.Text>
                        <Button animated as={NavLink} to={`/jobPosting/${jobPosting.id}`}>
                            <Button.Content visible>İncele</Button.Content>
                            <Button.Content hidden>
                                <Icon name="arrow right" />
                            </Button.Content>
                        </Button>
                    </Card.Body>
                    <Card.Footer className="text-muted text-right">İlan oluşturulma Tarihi: {jobPosting.createdDate}</Card.Footer>
                </Card>
            ))}

        </div>
    );
}