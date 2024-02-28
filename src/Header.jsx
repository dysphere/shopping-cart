import './input.css';
import { Menu, Center, Container } from '@mantine/core';
import { IconChevronDown } from '@tabler/icons-react';
import { Link } from "react-router-dom";

const links = [
    {link: '#',
    label: 'Shop',
    links: [
        {link: '/shop/electronics', label: 'Electronics'},
        {link: '/shop/jewelry', label: 'Jewelry'},
        {link:'/shop/mens%20clothing', label: `Men's Clothing`},
        {link: '/shop/womens%20clothing', label: `Women's Clothing`},
    ]},
    {link: '/cart', label: 'Cart'},
];

const Header = () => {

    const items = links.map((link) => {
        const menuItems = link.links?.map((item) => (
          <Menu.Item key={item.link}>
            <Link to={item.link}>{item.label}</Link>
            </Menu.Item>
        ));

        if (menuItems) {
            return (
              <Menu key={link.label} trigger="hover" transitionProps={{ exitDuration: 0 }} withinPortal>
                <Menu.Target>
                  <Link
                    to={link.link}
                  >
                    <Center>
                      <span>{link.label}</span>
                      <IconChevronDown size="0.9rem" stroke={1.5} />
                    </Center>
                  </Link>
                </Menu.Target>
                <Menu.Dropdown>{menuItems}</Menu.Dropdown>
              </Menu>
            );
          }
          
          return (
            <Link
              key={link.label}
              to={link.link}
            >
              {link.label}
            </Link>
          );
        });

        return (
            <header>
              <Container fluid>
                <div className="flex flex-row justify-around">
                    <div className="linkSize">
                    <Link to="/">Home</Link>
                    </div>
                    <div className="linkSize flex flex-row">
                    {items}
                  </div>
                </div>
              </Container>
            </header>
          );

}

export default Header;