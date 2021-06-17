import React, { useState, useEffect } from 'react'
import ResumeService from '../services/resumeService.js';
import { Table } from 'react-bootstrap'
import { Header, Image, Button, Icon } from "semantic-ui-react";
import { NavLink } from "react-router-dom";

export default function Resumes() {
    const [resumes, setResumes] = useState([]);
    useEffect(() => {
        let resumeService = new ResumeService();
        resumeService.getResumes().then(result => setResumes(result.data.data))
    }, [])
    //const paragraph = <Image src='https://react.semantic-ui.com/images/wireframe/short-paragraph.png' />

    return (
        <div>

            <Table striped bordered hover className="table-light table-responsive border-success">
                <thead>
                    <tr>
                        <th>Aday</th>
                        <th>Teknolojiler</th>
                        <th>Diller</th>
                        <th>Github</th>
                        <th>Linkedin</th>
                        <th>İncele</th>
                    </tr>
                </thead>
                <tbody>
                    {resumes.map((resume) => (
                        <tr key={resume.id}>
                            <td>
                                <Header as="h4" image>
                                    <Image src={resume.photo} rounded size="mini" />
                                    <Header.Content>
                                        {resume.candidateName + " " + resume.candidateSurname}
                                    </Header.Content>
                                </Header>
                            </td>
                            <td>
                                {resume.technologies.map((tech) => (
                                    <p key={tech.id}>{tech.description}</p>
                                ))}
                            </td>
                            <td>
                                {resume.languages.map((lang) => (
                                    <p key={lang.id}>{lang.language + " Seviye: " + lang.langLevel}</p>
                                ))}
                            </td>
                            <td>
                                <a href={resume.githubLink} target={"_blank"} rel="noopener noreferrer">
                                    <Button secondary>
                                        <Icon name="github" /> Github
                                    </Button>
                                </a>
                            </td>
                            <td>
                                <a href={resume.linkedLink} target={"_blank"} rel="noopener noreferrer">
                                    <Button color="linkedin">
                                        <Icon name="linkedin" /> LinkedIn
                                    </Button>
                                </a>
                            </td>
                            <td>
                                <Button animated as={NavLink} to={`/resume/candidate/${resume.candidateId}`}>
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