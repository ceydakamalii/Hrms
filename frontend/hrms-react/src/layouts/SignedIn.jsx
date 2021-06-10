import React from 'react'
import { Menu, Dropdown} from "semantic-ui-react";

export default function SignedIn({signOut}) {
    return (
        <div>
            <Menu.Item>
               
                <Dropdown pointing="top left" text="Kullanıcı">
                    <Dropdown.Menu>
                        <Dropdown.Item text="Bilgilerim" icon="info"/>
                        <Dropdown.Item onClick={signOut} text="Çıkış Yap" icon="sign-out"/>
                    </Dropdown.Menu>
                </Dropdown>
            </Menu.Item>
        </div>
    )
}