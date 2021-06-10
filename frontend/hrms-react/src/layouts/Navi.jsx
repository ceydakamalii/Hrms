//import React from 'react'
import React , {useState} from 'react'
import { useHistory } from 'react-router-dom';
import { Dropdown, Menu } from 'semantic-ui-react'
import {Link, NavLink} from "react-router-dom";
import { routes } from "../Routing"
import SignedIn from './SignedIn';
import SignedOut from './SignedOut';
export default function Navi() {
    const[isAuthenticated,setIsAuthenticated]=useState(false)
    const history=useHistory();
    function handleSignOut(params){ //Çıkış yap
        setIsAuthenticated(false)
        history.push("/")
        
    }
    function handleSignIn(params){
        setIsAuthenticated(true)
    }
    return (
        <div>
            <Menu inverted size='massive'>
                {routes.map(route => (
                    <Menu.Item key={route.title} name={route.title}> <Link to={route.path}>{route.title}</Link> </Menu.Item>
                ))}
                <Menu.Menu position='right'>
                    <Dropdown item text='Language'>
                        <Dropdown.Menu>
                            <Dropdown.Item as={NavLink} to="/jobPosting">İş ilanları</Dropdown.Item>
                            <Dropdown.Item as={NavLink} to="/resume">Açık Cv'ler</Dropdown.Item>
                            <Dropdown.Item as={NavLink} to="/jobPosition">Pozisyonlar</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                    <Menu.Item>
                        {isAuthenticated?<SignedIn signOut={handleSignOut} bisey="1"/>:<SignedOut signIn={handleSignIn} bisey="1"/>}
                    </Menu.Item>
                </Menu.Menu>
            </Menu>

        </div>
    )
}