import { useState, useEffect } from 'react';
import { Box, Drawer, Button, List, Divider, ListItem, ListItemButton, ListItemIcon } from '@mui/material';
import { Link } from 'react-router-dom';
import dataNavbarMobile from '../dataNavbarMobile';
import { CloseRounded } from '@mui/icons-material';
import { useDispatch, useSelector } from 'react-redux';
import { showCart } from '../../../redux/cartOpenSlice';
import { getTotalQuantity, getQuantity, getCartItems } from '../../../redux/cartSlice';
import cls from './Sidebar.module.css';

export const Sidebar = () => {
    const [open, setOpen] = useState(false);
    const dispatch = useDispatch();
    const cartItems = useSelector(getCartItems);
    const totalQuantity = useSelector(getQuantity);

    useEffect(() => {
        dispatch(getTotalQuantity());
    }, [cartItems, dispatch])

    const toggleDrawer = (open) => {
    setOpen(open);
    };

    const list = () => (
        <Box sx={{
            width: { xs: 260, sm: 300 },
            height: '100%',
            backgroundColor: 'black',
            color: 'white',
        }} role='presentation'
        onClick={ () => toggleDrawer(false) }
        onKeyDown={ () => toggleDrawer(false) }
        >
            
        <List>
            <ListItem sx={{ textAlign: 'end' }}>
                <CloseRounded onClick={ () => toggleDrawer(false) } className={ cls.close_menu_btn } sx={{ color: 'white', m: 1 }}/>
            </ListItem>
            {dataNavbarMobile.map((item, i) => (
                <ListItem key={i} disablePadding>
                    <Link to={item.to} className={item.class}>
                        <ListItemButton>
                            <ListItemIcon>
                                <img className={ cls.icon } src={`/images/${'leaves'}.png`} alt='Item' />
                            </ListItemIcon>
                                {item.title}
                        </ListItemButton>
                    </Link>
                </ListItem>
            ))}
            <Divider variant='middle' sx={{ borderTopColor: '#b9b4b0', borderBottomColor: '#b9b4b0', my: 3 }}/>
            <ListItem>
                <ListItemButton>
                    <div className={ cls.container }>
                        <Button onClick={ () => dispatch(showCart(true)) }
                            sx={{ color: 'white', p: 0, fontFamily: 'Josefin Sans', letterSpacing: '3px' }}
                        >
                        CART
                        <span>{ totalQuantity === 0 ? '' : `(${ totalQuantity })` }</span>
                        </Button>
                    </div>
                </ListItemButton>
            </ListItem>
        </List>
    </Box>
    );

    return (
        <div>
            <Button className={ cls.menu_btn } onClick={ () => toggleDrawer(true) }
                    sx={{ color: 'white', p: 0 }}
            >
                <span className={ cls.top_line }></span>
                <span className={ cls.bottom_line }></span>
            </Button>
            <Drawer anchor={'right'}
                    open={open}
                    onClose={ () => toggleDrawer(false) }
            >
                {list()}
            </Drawer>
        </div>
    );
}
