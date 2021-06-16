import React from 'react'
import {Route} from 'react-router'
import SideBar from "./SideBar";
import { Row, Col } from 'react-bootstrap';
import JobPostings from '../pages/JobPostings';
import Resumes from '../pages/Resumes';
import Employer from '../pages/users/Employer';
import Candidate from '../pages/users/Candidate'
import ResumeDetail from '../pages/ResumeDetail';
import AddJobPosting from '../pages/AddJobPosting';


export default function Dashboard() {

    return (
        <div>

            <Row>
                <Col xs={12} md={3}>
                    <SideBar />
                </Col>
                <Col xs={12} md={9}>
                    <Route exact path="/" component={JobPostings} />
                    <Route exact path="/resumes" component={Resumes} />
                    <Route exact path="/jobPostings" component={JobPostings} />
                    <Route exact path="/employers" component={Employer} />
                    <Route exact path="/candidates" component={Candidate} />
                    <Route exact path="/resume/candidate/:candidateId" component={ResumeDetail} />
                    <Route exact path="/addjobPosting" component={AddJobPosting}/>
                </Col>
            </Row>
        </div>
    )
}