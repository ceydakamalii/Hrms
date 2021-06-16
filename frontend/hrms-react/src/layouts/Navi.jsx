//import React from 'react'
import React from 'react';
import { Link } from "react-router-dom";
import { Navbar, Container, Nav, Button, Jumbotron, Form, FormControl, NavDropdown, Dropdown, ButtonGroup } from 'react-bootstrap';

export default function Navi() {


    return (
        <div>
            <Navbar bg="light" expand="lg">
                <Container>
                    <Navbar.Brand href="#" className="h1" style={{ fontSize: '3rem' }}>H R M S</Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="ml-auto my-5 my-lg-3"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >

                            <Nav  className="h4 mr-4"><Link to={'/'} style={{ textDecoration: 'none' ,color:'black'}}>Home</Link></Nav>
                            <Nav className="h4 mr-4"><Link to={'/resumes'} style={{ textDecoration: 'none' ,color:'black'}}>Resume</Link></Nav>
                            <Nav className="h4 mr-4"><Link to={'/jobPostings'} style={{ textDecoration: 'none' ,color:'black'}}>JobPosting</Link></Nav>
                            <Nav className="h4 mr-4"><Link to={'/candidates'} style={{ textDecoration: 'none' ,color:'black'}}>Candidate</Link></Nav>
                            <Nav className="h4 mr-4"><Link to={'/employers'} style={{ textDecoration: 'none' ,color:'black'}}>Employer</Link></Nav>
                        </Nav>



                        <Dropdown as={ButtonGroup} className='mr-2 ml-3'>
                            <Button variant="success">Login</Button>

                            <Dropdown.Toggle split variant="success" id="dropdown-split-basic" />

                            <Dropdown.Menu>
                                <Dropdown.Item href="#/action-1">Employer</Dropdown.Item>
                                <Dropdown.Item href="#/action-2">Candidate</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>

                        <Dropdown as={ButtonGroup}>
                            <Button variant="outline-success">SignUp</Button>

                            <Dropdown.Toggle split variant="outline-success" id="dropdown-split-basic" />

                            <Dropdown.Menu>
                                <Dropdown.Item href="#/action-1"><Link>Employer</Link></Dropdown.Item>
                                <Dropdown.Item><Link>Candidate</Link></Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>

                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <Jumbotron>
                <h1 className='h1' style={{ fontSize: '3rem' }}>Hello, world!</h1>
                <h5>
                    This is a simple hero unit, a simple jumbotron-style component for calling
                    extra attention to featured content or information.
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
    )
}