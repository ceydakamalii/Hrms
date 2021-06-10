import React from 'react'
import { Button, Menu } from  "semantic-ui-react";


export default function SignedOut({signIn}) { //props yazıp obje göndermek yerine destructiring yaptık
    return (
        <div>
            <Menu.Item>
                <Button onClick={signIn} primary>Giriş Yap</Button>
                <Button primary style={{marginLeft:"0.5em"}}>Kayıt Ol</Button>
            </Menu.Item>
            
        </div>
    )
}