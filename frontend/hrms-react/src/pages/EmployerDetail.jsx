import React, { useEffect, useState } from 'react'
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { Header, Table, Icon, Button, Card } from "semantic-ui-react";
import EmployerService from '../services/employerService';
import JobPostingService from '../services/jobPostingService';
export default function EmployerDetail() {
    let { id } = useParams();

    const [employer, setEmployer] = useState({});
    const [jobPostings, setJobPosting] = useState([]);

    useEffect(() => {
        let employerService = new EmployerService();
        let jobPostingService = new JobPostingService();
        employerService
            .getByEmployerId(id)
            .then((result) => setEmployer(result.data.data));
        jobPostingService
            .getJobPostings(id)
            .then((result) => setJobPosting(result.data.data));
    }, [id]);

    return (
        <div>
            
            <Table celled>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>İş veren</Table.HeaderCell>
                        <Table.HeaderCell>Bilgiler</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>

                <Table.Body>
                    <Table.Row>
                        <Table.Cell>
                            <Header as="h4">
                                <Header.Content>
                                    <Icon name="building" />
                                    Şirket Adı
                                </Header.Content>
                            </Header>
                        </Table.Cell>
                        <Table.Cell>{employer.companyName}</Table.Cell>
                    </Table.Row>

                    <Table.Row>
                        <Table.Cell>
                            <Header as="h4">
                                <Header.Content>
                                    <Icon name="world" />
                                    Web Sitesi
                                </Header.Content>
                            </Header>
                        </Table.Cell>
                        <Table.Cell>{employer.webAddress}</Table.Cell>
                    </Table.Row>

                    <Table.Row>
                        <Table.Cell>
                            <Header as="h4">
                                <Header.Content>
                                    <Icon name="mail" />
                                    Email
                                </Header.Content>
                            </Header>
                        </Table.Cell>
                        <Table.Cell>{employer.mail}</Table.Cell>
                    </Table.Row>

                    <Table.Row>
                        <Table.Cell>
                            <Header as="h4">
                                <Header.Content>
                                    <Icon name="phone" />
                                    Telefon
                                </Header.Content>
                            </Header>
                        </Table.Cell>
                        <Table.Cell>{employer.phoneNumber}</Table.Cell>
                    </Table.Row>
                </Table.Body>
            </Table>

            <Card fluid>
                <Card.Content header="Bu Şirkete Ait İş İlanları" />
                <Card.Content>
                    <Table color={"black"}>
                        <Table.Header>
                            <Table.Row>
                                <Table.HeaderCell>İş Pozisyonu</Table.HeaderCell>
                                <Table.HeaderCell>Şehir</Table.HeaderCell>
                                <Table.HeaderCell>Açık Pozisyon</Table.HeaderCell>
                                <Table.HeaderCell>Çalışma Yeri</Table.HeaderCell>
                                <Table.HeaderCell>Çalışma Zamanı</Table.HeaderCell>
                                <Table.HeaderCell>Detaylar</Table.HeaderCell>
                            </Table.Row>
                        </Table.Header>

                        <Table.Body>
                            {jobPostings.map((jobPosting) => (
                                <Table.Row key={jobPosting.id}>
                                    <Table.Cell>{jobPosting.jobPositionPosition}</Table.Cell>
                                    <Table.Cell>{jobPosting.cityName}</Table.Cell>
                                    <Table.Cell>{jobPosting.openPositionNumber}</Table.Cell>
                                    <Table.Cell>{jobPosting.workPlaceName}</Table.Cell>
                                    <Table.Cell>{jobPosting.workTimeName}</Table.Cell>
                                    <Table.Cell>
                                        <Button animated as={Link} to={`/jobPosting/${jobPosting.id}`}>
                                            <Button.Content visible>Detayları Gör</Button.Content>
                                            <Button.Content hidden>
                                                <Icon name="arrow right" />
                                            </Button.Content>
                                        </Button>
                                    </Table.Cell>
                                </Table.Row>
                            ))}
                        </Table.Body>
                    </Table>
                </Card.Content>
                <Card.Content extra>
                    <Icon name="list" />
                    {jobPostings?.length} Adet İş ilanı mevcut
                </Card.Content>
            </Card>
        </div>
    );
}
