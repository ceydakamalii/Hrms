import React from "react";
import { Link, NavLink } from "react-router-dom";
import {
    Navbar,
    Container,
    Nav,
    Button,
    Dropdown,
    ButtonGroup,
    DropdownButton,
    
} from "react-bootstrap";

export default function Navi() {
    return (
        <div>
            <Navbar bg="light" expand="lg">
                <Container>
                    <Navbar.Brand href="#" className="h1" style={{ fontSize: "3rem" }}>
                        H R M S
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="ml-auto my-5 my-lg-3"
                            style={{ maxHeight: "100px" }}
                            navbarScroll
                        >
                            <Nav className="h4 mr-4">
                                <Link
                                    to={"/"}
                                    style={{ textDecoration: "none", color: "black" }}
                                >
                                    Home
                                </Link>
                            </Nav>
                            <Nav className="h4 mr-4">
                                <Link
                                    to={"/resumes"}
                                    style={{ textDecoration: "none", color: "black" }}
                                >
                                    Resume
                                </Link>
                            </Nav>
                            <Nav className="h4 mr-4">
                                <Link
                                    to={"/jobPostings"}
                                    style={{ textDecoration: "none", color: "black" }}
                                >
                                    JobPosting
                                </Link>
                            </Nav>
                            <Nav className="h4 mr-4">
                                <Link
                                    to={"/candidates"}
                                    style={{ textDecoration: "none", color: "black" }}
                                >
                                    Candidate
                                </Link>
                            </Nav>
                            <Nav className="h4 mr-4">
                                <Link
                                    to={"/employers"}
                                    style={{ textDecoration: "none", color: "black" }}
                                >
                                    Employer
                                </Link>
                            </Nav>
                        </Nav>

                        <Button
                            variant="outline-primary"
                            className="mr-2"
                            as={NavLink}
                            to={"/addCandidate"}
                        >
                            ÜYE OL
                        </Button>

                        <Button
                            variant="outline-primary"
                            className="mr-3"
                            as={NavLink}
                            to={"/loginCandidate"}
                        >
                            ÜYE GİRİŞİ
                        </Button>

                        <DropdownButton
                            as={ButtonGroup}
                            title="İşveren"
                            id="bg-nested-dropdown"
                        >
                            <Dropdown.Item eventKey="1">Giriş Yap</Dropdown.Item>
                            <Dropdown.Item eventKey="2" as={NavLink} to={"/addjobPosting"}>İlan Yayınla</Dropdown.Item>
                        </DropdownButton>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
           
        </div>
    );
}