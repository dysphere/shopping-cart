import { Menu, Group, Center, Burger, Container } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { IconChevronDown } from '@tabler/icons-react';
import { Link } from "react-router-dom";
import classes from './mantine.module.css';

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
    const [opened, { toggle }] = useDisclosure(false);

    const items = links.map((link) => {
        const menuItems = link.links?.map((item) => (
          <Menu.Item key={item.link}>
            <Link to={item.link} className={classes.link}>{item.label}</Link>
            </Menu.Item>
        ));

        if (menuItems) {
            return (
              <Menu key={link.label} trigger="hover" transitionProps={{ exitDuration: 0 }} withinPortal>
                <Menu.Target>
                  <Link
                    to={link.link}
                    className={classes.link}
                  >
                    <Center>
                      <span className={classes.linkLabel}>{link.label}</span>
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
              className={classes.link}
            >
              {link.label}
            </Link>
          );
        });

        return (
            <header className={classes.header}>
              <Container size="md">
                <div className={classes.inner}>
                    <Link to="/">Home</Link>
                  <Group gap={5} visibleFrom="sm">
                    {items}
                  </Group>
                  <Burger opened={opened} onClick={toggle} size="sm" hiddenFrom="sm" />
                </div>
              </Container>
            </header>
          );

}

export default Header;