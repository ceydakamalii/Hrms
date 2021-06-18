import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ResumeService from "../services/resumeService";
import { Card, Image} from "semantic-ui-react";

export default function ResumeDetail() {
  let { id } = useParams(); //useParams() parametreleri obje olarak döndürür.

  const [resumes, setResumes] = useState([]);
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
              floated="right"
              size="mini"
              src="/images/avatar/large/steve.jpg"
            />

            <Card.Header></Card.Header>

            <Card.Description>{resumes.candidate?.name}</Card.Description>
          </Card.Content>
          <Card.Content extra>
            <div className="ui two buttons">
              
            </div>
          </Card.Content>
        </Card>
      </Card.Group>
    </div>
  );
}