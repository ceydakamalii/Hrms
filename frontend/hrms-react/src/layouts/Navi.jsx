import React from "react";
import { Link, NavLink } from "react-router-dom";
import {
    Navbar,
    Container,
    Nav,
    Button,
    Jumbotron,
    Form,
    FormControl,
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
            <Jumbotron>
                <h1 className="h1" style={{ fontSize: "3rem" }}>
                    Hello, world!
                </h1>
                <h5>
                    This is a simple hero unit, a simple jumbotron-style component for
                    calling extra attention to featured content or information.
                </h5>
                <Form className="d-inline-flex">
                    <FormControl
                        type="search"
                        placeholder="City"
                        className="mr-4 ml-4"
                        aria-label="Search"
                    />
                    <Button variant="success">Search</Button>
                </Form>
            </Jumbotron>
        </div>
    );
}