import * as React from 'react';
import { Typography, AppBar, Box, Toolbar, Container, Button } from '@mui/material';



const pages = ['Blog', 'Pricing', 'Docs'];

const ResponsiveAppBar = () => {

    return (
        <AppBar position="static">
            <Container maxWidth="xl">
                <Toolbar color="transparent">
                    <Typography
                        variant="h6"
                        noWrap
                        component="div"
                        color="secondary"
                        sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
                    >
                        Dune.js
                    </Typography>

                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                        {pages.map((page) => (
                            <Button
                                key={page}
                                color="secondary"
                                sx={{ my: 2, color: 'white', display: 'block' }}
                            >
                                {page}
                            </Button>
                        ))}
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
};
export default ResponsiveAppBar;
