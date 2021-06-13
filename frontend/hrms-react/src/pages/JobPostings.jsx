import React, { useEffect, useState } from 'react';
import JobPostingService from '../services/jobPostingService';
import { Card, Button } from 'react-bootstrap';
export default function JobPostings() {
    const [jobPostings, setJobPostings] = useState([]);
    useEffect(() => {
        let jobPostingService = new JobPostingService();
        jobPostingService.getJobPostings().then(result => setJobPostings(result.data.data))
    }, [])
    return (
        <div>

            {jobPostings.map((jobPosting) => (
                <Card className='mb-3'>
                    <Card.Header>Featured</Card.Header>


                    <Card.Body key={jobPosting.id}>
                        <Card.Title>{jobPosting.jobPositionPosition}</Card.Title>
                        <Card.Text>
                            {jobPosting.description}
                        </Card.Text>
                        <Card.Text>
                            {jobPosting.cityName}
                        </Card.Text>
                        <Button variant="success">Go somewhere</Button>
                    </Card.Body>



                </Card>
            ))}


        </div>
    )
}