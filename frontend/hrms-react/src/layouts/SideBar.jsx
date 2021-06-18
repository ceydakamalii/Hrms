import React from "react";
import { ListGroup } from 'react-bootstrap';
import{Icon} from 'semantic-ui-react'



export default function Sidebar() {
    return (
        <div className=" rounded p-3" >
            <ListGroup>
                <ListGroup.Item style={{color:"black",background: "#EDEDED"}} action >
                    <Icon name="address book outline"></Icon>İş İlanları
                </ListGroup.Item>
                <ListGroup.Item style={{color:"black",background: "#EDEDED"}} action>
                    <Icon name="remove bookmark"></Icon>İş Verenler
                </ListGroup.Item>
                <ListGroup.Item style={{color:"black",background: "#EDEDED"}} action>
                    <Icon name="address card outline"></Icon>Adaylar
                </ListGroup.Item>
                <ListGroup.Item style={{color:"black",background: "#EDEDED"}} action>
                    <Icon name="certificate"></Icon>Cvler
                </ListGroup.Item>

            </ListGroup>


        </div>
    )

}

