import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ResumeService from "../services/resumeService";
import { Card, Table, Header, Icon, Button,Image } from "semantic-ui-react";

export default function ResumeDetail() {
  let { id } = useParams(); //useParams() parametreleri obje olarak döndürür.

  const [resumes, setResumes] = useState({});
  useEffect(() => {
    let resumeService = new ResumeService();
    resumeService.getById(id).then((result) => setResumes(result.data.data));
  }, [id]);

  return (
    <div>
      <Card.Group>
        <Card fluid>
          <Card.Content>

            <Image
              floated="left"
              size="small"
              src={resumes.photo}
              circular
              key={resumes.id}
            />


            <Card.Header>
              {resumes.candidate?.name + " " + resumes.candidate?.surname}
            </Card.Header>
            <Card.Meta>
              <strong></strong>
            </Card.Meta>
            <Card.Description>
              <Table celled color={"black"}>
                <Table.Header>
                  <Table.Row>
                    <Table.HeaderCell>Kullanıcı</Table.HeaderCell>
                    <Table.HeaderCell>Bilgiler</Table.HeaderCell>
                  </Table.Row>
                </Table.Header>

                <Table.Body>
                  <Table.Row>
                    <Table.Cell>
                      <Header as="h4" image>
                        <Header.Content>Ad</Header.Content>
                      </Header>
                    </Table.Cell>
                    <Table.Cell>{resumes.candidate?.name}</Table.Cell>
                  </Table.Row>

                  <Table.Row>
                    <Table.Cell>
                      <Header as="h4" image>
                        <Header.Content>Soyad</Header.Content>
                      </Header>
                    </Table.Cell>
                    <Table.Cell>{resumes.candidate?.surname}</Table.Cell>
                  </Table.Row>

                  <Table.Row>
                    <Table.Cell>
                      <Header as="h4" image>
                        <Header.Content>Doğum Tarihi</Header.Content>
                      </Header>
                    </Table.Cell>
                    <Table.Cell>{resumes.candidate?.birth_year}</Table.Cell>
                  </Table.Row>

                  <Table.Row>
                    <Table.Cell>
                      <Header as="h4" image>
                        <Header.Content>Email</Header.Content>
                      </Header>
                    </Table.Cell>
                    <Table.Cell>{resumes.candidate?.mail}</Table.Cell>
                  </Table.Row>

                  <Table.Row>
                    <Table.Cell>
                      <Header as="h4" image>
                        <Header.Content>
                          <a
                            href={resumes.githubLink}
                            target={"_blank"}
                            rel="noopener noreferrer"
                          >
                            <Button secondary>
                              <Icon name="github" /> Github
                            </Button>
                          </a>
                        </Header.Content>
                      </Header>
                    </Table.Cell>
                    <Table.Cell>{resumes.githubLink}</Table.Cell>
                  </Table.Row>

                  <Table.Row>
                    <Table.Cell>
                      <Header as="h4" image>
                        <Header.Content>
                          <a
                            href={resumes.linkedLink}
                            target={"_blank"}
                            rel="noopener noreferrer"
                          >
                            <Button color="linkedin">
                              <Icon name="linkedin" /> LinkedIn
                            </Button>
                          </a>
                        </Header.Content>
                      </Header>
                    </Table.Cell>
                    <Table.Cell>{resumes.linkedLink}</Table.Cell>
                  </Table.Row>
                </Table.Body>
              </Table>
            </Card.Description>
          </Card.Content>
          <Card.Content extra></Card.Content>
        </Card>
      </Card.Group>
      <Card fluid>
        <Card.Content header="Biyografi" />
        
        <Card.Content description={resumes.description} />
      </Card>

      <Card fluid>
        <Card.Content header="Okuduğu Okullar" />
        <Table celled color={"black"}>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>Okul Adı</Table.HeaderCell>
              <Table.HeaderCell>Bölüm</Table.HeaderCell>
              <Table.HeaderCell>Derece</Table.HeaderCell>
              <Table.HeaderCell>Başlangıç Tarihi</Table.HeaderCell>
              <Table.HeaderCell>Mezuniyet Tarihi</Table.HeaderCell>

            </Table.Row>
          </Table.Header>

          <Table.Body>
            {resumes.education?.map((school) => (
              <Table.Row key={school.id}>
                <Table.Cell>{school.schoolName}</Table.Cell>
                <Table.Cell>{school.schoolDepartment}</Table.Cell>
                <Table.Cell>{school.graduate?.description}</Table.Cell>
                <Table.Cell>{school.startedDate}</Table.Cell>
                <Table.Cell>{school.endedDate}</Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table>
      </Card>

      <Card fluid>
        <Card.Content header="Yabancı Diller" />
        <Table celled color={"black"}>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>Dil Adı</Table.HeaderCell>
              <Table.HeaderCell>Seviye min:1 max:5</Table.HeaderCell>
            </Table.Row>
          </Table.Header>

          <Table.Body>
            {resumes.languages?.map((language) => (
              <Table.Row key={language.id}>
                <Table.Cell>{language.language}</Table.Cell>
                <Table.Cell>{language.langLevel}</Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table>
      </Card>

      <Card fluid>
        <Card.Content header="Teknolojiler" />
        <Table celled color={"black"}>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>Teknoloji Adı</Table.HeaderCell>
            </Table.Row>
          </Table.Header>

          <Table.Body>
            {resumes.technologies?.map((technology) => (
              <Table.Row key={technology.id}>
                <Table.Cell>{technology.description}</Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table>
      </Card>
    </div>

  );
}