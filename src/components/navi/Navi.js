import React, { useState } from 'react';
import {
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from 'reactstrap';

const Navi = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="light" light expand >
        <img style={{marginLeft:"38%", width:"260px", height:"100px"}} src="https://www.nicepng.com/png/detail/353-3532398_pokemon-logo-symbol-vector-free-download-ravensburger-pokemon.png" />

        <NavbarToggler onClick={toggle} />
          <Nav navbar style={{marginLeft:"10%"}}>
            <NavItem>
              <NavLink href="/components/">Favorites</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="https://github.com/Fy1717/PokemonsReact">Source</NavLink>
            </NavItem>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Technologies
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>
                  React
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem>
                  Redux
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem>
                  Thunk
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem>
                  Axios
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
      </Navbar>
    </div>
  );
}

export default Navi;