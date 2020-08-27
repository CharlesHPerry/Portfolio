import Head from 'next/head'
import Link from 'next/link'
import {useEffect} from 'react'
import { Navbar, Nav} from 'react-bootstrap'

export default function Header() {


    return (
        <div>
            <Head>
                <title>Charles Perry Portfilio</title>
            </Head>
            <Navbar fixed="top" bg="dark" variant="dark">
                <Navbar.Brand href="/">Projects</Navbar.Brand>
                <Nav>
                    <Nav.Link href="/about">About</Nav.Link>
                </Nav>
            </Navbar>
        </div>
    )
}