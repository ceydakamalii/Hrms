import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ResumService from "../services/resumeService"
import { Card,Image} from "semantic-ui-react";


export default function ResumeDetail() {

    let{candidateId} = useParams();
    const[resume , setResum]=useState([]);
    useEffect(()=>{
        let resumeService=new ResumService();
        resumeService.getByCandidateId(candidateId).then((result)=> setResum.data.data);
    },[candidateId]);
    return (
        <div>
            <Card.Group>
                <Card fluid>
                    <Card.Content>
                        <Image floated="right" size="mini" src="/images/avatar/large/steve.jpg"/>
                        <Card.Header>{resume.candidateName}</Card.Header>
                    </Card.Content>
                </Card>
            </Card.Group>
           

        </div>
    )
}
