import { NavLink } from 'react-router-dom';

import { Container, Navbar, Nav } from 'react-bootstrap';

const Barra = () =>
{
    const activa =
    {
        color: 'red',
        fontWeight: '700',
        paddingLeft: '2em'
    }

    const inactiva =
    {
        color: 'white',
        fontWeight: '700',
        paddingLeft: '2em'
    }

    return (
        <Navbar bg="dark" expand="lg">
            <Container>
                <Navbar.Brand
                    href="/"
                >
                    <img
                        src="/logo.png"
                        alt="logo"
                        className="d-inline-block align-top"
                        style={{ maxHeight: '2em' }}
                    />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav" className='d-flex justify-content-end'>
                    <Nav>
                        <NavLink
                            style={({ isActive }) => (isActive ? activa : inactiva)}
                            to='/'
                        >
                            Home
                        </NavLink>
                        <NavLink
                            style={({ isActive }) => (isActive ? activa : inactiva)}
                            to='/pokemon'
                        >
                            Pokémon
                        </NavLink>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Barra;
