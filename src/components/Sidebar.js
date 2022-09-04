import './Sidebar.css'
import * as React from 'react'
import { Link } from "react-router-dom"
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { styled, useTheme } from '@mui/material/styles'
import Box from '@mui/material/Box'
import Drawer from '@mui/material/Drawer'
import CssBaseline from '@mui/material/CssBaseline'
import MuiAppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import Divider from '@mui/material/Divider'
import IconButton from '@mui/material/IconButton'
import MenuIcon from '@mui/icons-material/Menu'
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft'
import ChevronRightIcon from '@mui/icons-material/ChevronRight'
import { Avatar, Button, Menu, MenuItem, Stack, Tooltip } from '@mui/material'
import NestedList from './NestedList'
import AddBooks from './Pages/AddBooks'
import EditBooks from './Pages/EditBooks'
import BookList from './Pages/BookList'
import Home from './Pages/Home'


const drawerWidth = 240

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  }),
)

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}))

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'center',
}))

const SidebarHeading = styled(Typography)`
  font-family: 'Barlow', sans-serif;
  font-weight: 300;
`

const StyledDrawer = styled(Drawer)(({ theme }) => ({}))

export default function PersistentDrawerLeft() {
  const theme = useTheme()
  const [open, setOpen] = React.useState(false)

  const [anchorElNav, setAnchorElNav] = React.useState(null)
  const [anchorElUser, setAnchorElUser] = React.useState(null)

  const handleDrawerOpen = () => {
    setOpen(true)
  }

  const handleDrawerClose = () => {
    setOpen(false)
  }

  const handleCloseNavMenu = () => {
    setAnchorElNav(null)
  }

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget)
  }

  const handleCloseUserMenu = () => {
    setAnchorElUser(null)
  }

  // const pages = ['About Us', 'Contact Us']
  // const settings = ['Profile', 'Account', 'Dashboard', 'Logout']

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        open={open}
        sx={{
          background:
            'linear-gradient(124deg, rgba(116,62,116,0.9392799356070554) 0%, rgba(128,70,128,0.9308765742625175) 50%, rgba(99,55,99,1) 20%, rgba(83,44,72,0.9028653697807247) 20%, rgba(78,21,65,1) 50%);',
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{ mr: 2, ...(open && { display: 'none' }) }}
          >
            <MenuIcon />
          </IconButton>

          {/* <Stack>
            <img src={Logo} />
          </Stack> */}

          <SidebarHeading variant="h6" noWrap component="div"><Link className="link_class" style={{color:"white",textDecoration:"none"}} to="/"> Library Management System</Link>
          </SidebarHeading>
        </Toolbar>
      </AppBar>

      <StyledDrawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
            background:
              'linear-gradient(124deg, rgba(131,58,180,1) 0%, rgba(165,50,138,1) 20%, rgba(170,49,132,1) 35%, rgba(192,44,105,1) 50%);',
            color: 'black',
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader>
          <SidebarHeading variant="h6"><Link className="link_class" style={{color:"white",textDecoration:"none"}} to="/"> LMS Library</Link></SidebarHeading>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? (
              <ChevronLeftIcon />
            ) : (
              <ChevronRightIcon />
            )}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <NestedList />

        <Divider />
      </StyledDrawer>
      <Main open={open}>
        <DrawerHeader />
        <Routes>
          <Route path="/addbooks" element={<AddBooks />} />
          <Route path="/" element={<Home />} />
          <Route path="/booklist" element={<BookList />} />
          <Route path="/editbooks" element={<EditBooks />} />
        </Routes>
      </Main>
    </Box>
  )
}
