import React from "react";
import { ListGroup } from 'react-bootstrap';



export default function Sidebar() {
    return (
        <div>
            <ListGroup >
                <ListGroup.Item style={{color:"black"}} action variant="success">
                    İş İlanları
                </ListGroup.Item>
                <ListGroup.Item style={{color:"black"}} action variant="info">
                    İş Verenler
                </ListGroup.Item>
                <ListGroup.Item style={{color:"black"}} action variant="success">
                    Kullanıcılar
                </ListGroup.Item>
                <ListGroup.Item style={{color:"black"}} action variant="info">
                    Cvler
                </ListGroup.Item>

            </ListGroup>


        </div>
    )

}

