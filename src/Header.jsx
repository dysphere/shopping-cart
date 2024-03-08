import './input.css';
import { Menu, Center, Container, Burger, Group, Flex, Drawer, NavLink } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { IconChevronDown } from '@tabler/icons-react';
import { Link } from "react-router-dom";
import { useContext } from "react";
import { ShopContext } from './ShopContext';

const Header = () => {

    const {cartItems} = useContext(ShopContext); 
    const cartItemCount = cartItems.length;
    const [opened, {toggle, close}] = useDisclosure(false);

    const links = [
        {link: '#',
        label: 'Shop',
        links: [
            {link: '/shop/electronics', label: 'Electronics'},
            {link: '/shop/jewelry', label: 'Jewelry'},
            {link:'/shop/mens%20clothing', label: `Men's Clothing`},
            {link: '/shop/womens%20clothing', label: `Women's Clothing`},
        ]},
        {link: '/cart', label: `Cart${cartItemCount > 0 ? ` (${cartItemCount})` : ''}`},
    ];

    const items = links.map((link) => {
        const menuItems = link.links?.map((item) => (
          <Menu.Item key={item.link}>
            <Link to={item.link} className="text-xl">{item.label}</Link>
            </Menu.Item>
        ));

        if (menuItems) {
            return (
              <Menu key={link.label} trigger="hover" transitionProps={{ exitDuration: 0 }} withinPortal>
                <Menu.Target>
                  <Link
                    to={link.link} className="text-xl"
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
            className="text-xl">
              {link.label}
            </Link>
          );
        });

        return (
            <header>
              <Container fluid>
                <Flex direction="column">
                <div className="flex flex-row justify-around">
                    <div className="linkSize">
                    <Link to="/" className="text-xl">Home</Link>
                    </div>
                    <Group gap={5} visibleFrom="sm">
                    {items}
                  </Group>
                  <Burger opened={opened} onClick={toggle} size="sm" hiddenFrom="sm" />
                </div>
                <div>
                <Drawer opened={opened} onClose={close}
                position="right">
                  <NavLink component={Link} label="Shop" className='text-xl'>
                    <NavLink component={Link} label="Electronics" to='/shop/electronics' className='text-xl'></NavLink>
                    <NavLink component={Link} label="Jewelry" to='/shop/jewelry' className='text-xl'></NavLink>
                    <NavLink component={Link} label={`Men's Clothing`} to='/shop/mens%20clothing' className='text-xl'></NavLink>
                    <NavLink component={Link} label={`Women's Clothing`} to='/shop/womens%20clothing' className='text-xl'></NavLink>
                  </NavLink>
                  <NavLink component={Link} label={`Cart${cartItemCount > 0 ? ` (${cartItemCount})` : ''}`} to='/cart' className='text-xl'></NavLink>
                </Drawer>
                </div>
                </Flex>
              </Container>
            </header>
          );

}

export default Header;