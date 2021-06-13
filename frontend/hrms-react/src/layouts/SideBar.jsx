import React, { useState, useEffect } from "react";
import { Card, Form} from 'react-bootstrap';
import CityService from "../services/cityService";
import JobPositionService from '../services/jobPositionService';

export default function Sidebar() {

    const [cities, setCities] = useState([]);
    const [jobPositions, setJobPositions] = useState([]);

    useEffect(() => {
        let cityService = new CityService()
        cityService.getCities().then(result => setCities(result.data.data))
    }, [])

    useEffect(() => {
        let jobPositionService = new JobPositionService();
        jobPositionService.getJobPositions().then(result => setJobPositions(result.data.data))
    }, [])

    return (
        <div>
            <Card className="mb-4">
                <Form>
                    <Form.Group className="mb-3" controlId="formGroupEmail">
                        <h2
                            style={{
                                textAlign: "left",
                                marginTop: "5px",
                                marginLeft: "5px",
                                fontSize: "23px",
                            }}
                        >
                            City
                        </h2>

                        <hr />
                        <div
                            bg="light"
                            divStyle
                            style={{
                                textAlign: "left",
                                marginLeft: "15px",
                                marginTop: "5px",
                                marginBottom: "15px",
                                overflowY: "scroll",
                                border: "1px solid white",
                                width: "90%",
                                float: "left",
                                height: "120px",
                                position: "relative",
                            }}
                        >
                            {cities.map((city) => (
                                <Form.Check
                                    key={city.id}
                                    type="radio"
                                    label={city.name}
                                    name="formHorizontalRadios"
                                    id="formHorizontalRadios1"
                                />
                            ))}
                        </div>
                    </Form.Group>
                </Form>
            </Card>

            <Card className="mb-4">
                <Form>
                    <Form.Group className="mb-3" controlId="formGroupEmail">
                        <h2
                            style={{
                                textAlign: "left",
                                marginTop: "5px",
                                marginLeft: "5px",
                                fontSize: "23px",
                            }}
                        >
                            Position
                        </h2>

                        <hr />
                        <div
                            bg="light"
                            divStyle
                            style={{
                                textAlign: "left",
                                marginLeft: "15px",
                                marginTop: "5px",
                                marginBottom: "15px",
                                overflowY: "scroll",
                                border: "1px solid white",
                                width: "90%",
                                float: "left",
                                height: "120px",
                                position: "relative",
                            }}
                        >
                            {jobPositions.map((position) => (
                                <Form.Check
                                    key={position.id}
                                    type="radio"
                                    label={position.position}
                                    name="formHorizontalRadios"
                                    id="formHorizontalRadios1"
                                />
                            ))}
                        </div>
                    </Form.Group>
                </Form>
            </Card>

            <Card className="mb-4">
                <Form>
                    <Form.Group className="mb-3" controlId="formGroupEmail">
                        <h2
                            style={{
                                textAlign: "left",
                                marginTop: "5px",
                                marginLeft: "5px",
                                fontSize: "23px",
                            }}
                        >
                            Çalışma Şekli
                        </h2>

                        <hr />
                        <div
                            bg="light"
                            divStyle
                            style={{
                                textAlign: "left",
                                marginLeft: "15px",
                                marginTop: "5px",
                                marginBottom: "15px",
                                overflowY: "scroll",
                                border: "1px solid white",
                                width: "90%",
                                float: "left",
                                height: "120px",
                                position: "relative",
                            }}
                        >
                            {cities.map((city) => (
                                <Form.Check
                                    key={city.id}
                                    type="radio"
                                    label={city.name}
                                    name="formHorizontalRadios"
                                    id="formHorizontalRadios1"
                                />
                            ))}
                        </div>
                    </Form.Group>
                </Form>
            </Card>

            <Card>
                <Form>
                    <Form.Group className="mb-3" controlId="formGroupEmail">
                        <h2
                            style={{
                                textAlign: "left",
                                marginTop: "5px",
                                marginLeft: "5px",
                                fontSize: "23px",
                            }}
                        >
                            Çalışma Zamanı
                        </h2>

                        <hr />
                        <div
                            bg="light"
                            divStyle
                            style={{
                                textAlign: "left",
                                marginLeft: "15px",
                                marginTop: "5px",
                                marginBottom: "15px",
                                overflowY: "scroll",
                                border: "1px solid white",
                                width: "90%",
                                float: "left",
                                height: "120px",
                                position: "relative",
                            }}
                        >
                            {cities.map((city) => (
                                <Form.Check
                                    key={city.id}
                                    type="radio"
                                    label={city.name}
                                    name="formHorizontalRadios"
                                    id="formHorizontalRadios1"
                                />
                            ))}
                        </div>
                    </Form.Group>
                </Form>
            </Card>
        </div>
    )
}

