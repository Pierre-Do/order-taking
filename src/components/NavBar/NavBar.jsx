import React, { Component } from 'react';

import { Input, Menu, Container, Dropdown } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

class NavBar extends Component {
  constructor(props) {
    super(props);

    this.handleItemClick = this.handleItemClick.bind(this);

    this.state = { activeItem: 'home' };
  }

  handleItemClick(e, { name }) {
    this.setState({ activeItem: name });
  }

  render() {
    const { activeItem } = this.state;

    return (
      <Menu fixed="top" inverted>
        <Container>
          <Dropdown item text="Menu">
            <Dropdown.Menu>
              <Dropdown.Item as={Link} to="/">
                New Order
              </Dropdown.Item>
              <Dropdown.Item as={Link} to="/new-third">
                New Third
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          <Menu.Menu position="right">
            <Menu.Item>
              <Input icon="search" placeholder="Search..." />
            </Menu.Item>
            <Menu.Item
              name="logout"
              active={activeItem === 'logout'}
              onClick={this.handleItemClick}
            />
          </Menu.Menu>
        </Container>
      </Menu>
    );
  }
}

export default NavBar;
