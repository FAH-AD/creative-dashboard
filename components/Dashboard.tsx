"use client"

import React from "react"
import {
  Box,
  Drawer,
  AppBar,
  Toolbar,
  List,
  Typography,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Card,
  CardContent,
  Grid,
  Button,
  Avatar,
  IconButton,
  Chip,
  useTheme,
  alpha,
} from "@mui/material"
import {
  Dashboard as DashboardIcon,
  ShoppingCart,
  Analytics,
  AccountBalance,
  BookOnline,
  Folder,
  School,
  Person,
  Inventory,
  Search,
  Notifications,
  Settings,
  TrendingUp,
  TrendingDown,
  ExpandMore,
} from "@mui/icons-material"
import { ResponsiveContainer, BarChart, Bar } from "recharts"

const drawerWidth = 280

interface NavItem {
  text: string
  icon: React.ReactElement
  children?: NavItem[]
}

const navigationItems: NavItem[] = [
  { text: "App", icon: <DashboardIcon /> },
  { text: "Ecommerce", icon: <ShoppingCart /> },
  { text: "Analytics", icon: <Analytics /> },
  { text: "Banking", icon: <AccountBalance /> },
  { text: "Booking", icon: <BookOnline /> },
  { text: "File", icon: <Folder /> },
  { text: "Course", icon: <School /> },
  {
    text: "User",
    icon: <Person />,
    children: [
      { text: "Profile", icon: <Person /> },
      { text: "Settings", icon: <Settings /> },
    ],
  },
  {
    text: "Product",
    icon: <Inventory />,
    children: [
      { text: "Inventory", icon: <Inventory /> },
      { text: "Orders", icon: <ShoppingCart /> },
    ],
  },
]

const chartData = [
  { name: "Day 1", value: 20 },
  { name: "Day 2", value: 35 },
  { name: "Day 3", value: 25 },
  { name: "Day 4", value: 45 },
  { name: "Day 5", value: 30 },
  { name: "Day 6", value: 55 },
  { name: "Day 7", value: 40 },
]

const Dashboard: React.FC = () => {
  const theme = useTheme()
  const [selectedItem, setSelectedItem] = React.useState("App")

  const handleItemClick = (item: string) => {
    setSelectedItem(item)
  }

  const renderNavItems = (items: NavItem[], depth = 0) => {
    return items.map((item) => (
      <React.Fragment key={item.text}>
        <ListItem disablePadding sx={{ pl: depth * 2 }}>
          <ListItemButton
            selected={selectedItem === item.text}
            onClick={() => handleItemClick(item.text)}
            sx={{
              borderRadius: 2,
              mx: 1,
              mb: 0.5,
              "&.Mui-selected": {
                backgroundColor: alpha(theme.palette.primary.main, 0.1),
                color: theme.palette.primary.main,
                "& .MuiListItemIcon-root": {
                  color: theme.palette.primary.main,
                },
              },
            }}
          >
            <ListItemIcon sx={{ minWidth: 40, color: "inherit" }}>{item.icon}</ListItemIcon>
            <ListItemText primary={item.text} />
            {item.children && <ExpandMore />}
          </ListItemButton>
        </ListItem>
        {item.children && renderNavItems(item.children, depth + 1)}
      </React.Fragment>
    ))
  }

  return (
    <Box sx={{ display: "flex", bgcolor: "#f5f5f5", minHeight: "100vh" }}>
      {/* App Bar */}
      <AppBar
        position="fixed"
        sx={{
          width: `calc(100% - ${drawerWidth}px)`,
          ml: `${drawerWidth}px`,
          bgcolor: "white",
          color: "text.primary",
          boxShadow: "none",
          borderBottom: "1px solid",
          borderColor: "divider",
        }}
      >
        <Toolbar sx={{ justifyContent: "space-between" }}>
          <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
            <Box
              sx={{
                width: 32,
                height: 32,
                borderRadius: 1,
                background: "linear-gradient(45deg, #FF6B6B, #4ECDC4, #45B7D1, #96CEB4)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Typography variant="body2" sx={{ color: "white", fontWeight: "bold" }}>
                ✦
              </Typography>
            </Box>
            <Typography variant="h6" sx={{ fontWeight: 600 }}>
              Team 2
            </Typography>
            <Chip label="Pro" size="small" color="primary" />
          </Box>
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <IconButton>
              <Search />
            </IconButton>
            <Typography variant="body2">⌘K</Typography>
            <IconButton>
              <img src="/placeholder.svg?height=24&width=24" alt="UK Flag" style={{ width: 24, height: 24 }} />
            </IconButton>
            <IconButton>
              <Notifications />
            </IconButton>
            <IconButton>
              <Settings />
            </IconButton>
            <Avatar src="/placeholder.svg?height=32&width=32" sx={{ width: 32, height: 32 }} />
          </Box>
        </Toolbar>
      </AppBar>

      {/* Sidebar */}
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
            bgcolor: "white",
            borderRight: "1px solid",
            borderColor: "divider",
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <Toolbar>
          <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
            <Box
              sx={{
                width: 32,
                height: 32,
                borderRadius: 1,
                background: "linear-gradient(45deg, #00C851, #00C851)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Typography variant="body2" sx={{ color: "white", fontWeight: "bold" }}>
                M
              </Typography>
            </Box>
          </Box>
        </Toolbar>
        <Box sx={{ px: 2, py: 1 }}>
          <Typography variant="overline" sx={{ color: "text.secondary", fontWeight: 600 }}>
            OVERVIEW
          </Typography>
        </Box>
        <List sx={{ px: 1 }}>{renderNavItems(navigationItems.slice(0, 6))}</List>
        <Box sx={{ px: 2, py: 1 }}>
          <Typography variant="overline" sx={{ color: "text.secondary", fontWeight: 600 }}>
            MANAGEMENT
          </Typography>
        </Box>
        <List sx={{ px: 1 }}>{renderNavItems(navigationItems.slice(6))}</List>
      </Drawer>

      {/* Main Content */}
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          bgcolor: "#f5f5f5",
          p: 3,
          mt: 8,
        }}
      >
        <Grid container width={'100%'} spacing={3}>
          {/* Welcome Card */}
          <Grid width={'100%'} >
            <Card
              sx={{
                background: "linear-gradient(135deg, #2C3E50 0%, #34495E 100%)",
                color: "white",
                borderRadius: 3,
                overflow: "hidden",
                position: "relative",
                minHeight: 280,
                width:'100%'
              }}
            >
              <CardContent sx={{ p: 4, position: "relative", zIndex: 2 }}>
                <Typography variant="h4" sx={{ fontWeight: 600, mb: 2 }}>
                  Welcome back 👋
                </Typography>
                <Typography variant="h5" sx={{ fontWeight: 700, mb: 3 }}>
                  Jaydon Frankie
                </Typography>
                <Typography variant="body1" sx={{ mb: 4, maxWidth: 400, opacity: 0.9 }}>
                  If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything.
                </Typography>
                <Button
                  variant="contained"
                  sx={{
                    bgcolor: "#00C851",
                    color: "white",
                    px: 4,
                    py: 1.5,
                    borderRadius: 2,
                    fontWeight: 600,
                    "&:hover": {
                      bgcolor: "#00A041",
                    },
                  }}
                >
                  Go now
                </Button>
              </CardContent>
              <Box
                sx={{
                  position: "absolute",
                  right: 20,
                  top: "50%",
                  transform: "translateY(-50%)",
                  zIndex: 1,
                }}
              >
                <img
                  src="/placeholder.svg?height=200&width=200"
                  alt="Dashboard Illustration"
                  style={{ width: 200, height: 200, opacity: 0.8 }}
                />
              </Box>
            </Card>


            
          </Grid>

        
          
          {/* Metrics Cards */}
          <Grid >
            <Card sx={{ borderRadius: 3, p: 3 }}>
              <Typography variant="body2" sx={{ color: "text.secondary", mb: 2 }}>
                Total active users
              </Typography>
              <Typography variant="h4" sx={{ fontWeight: 700, mb: 2 }}>
                18,765
              </Typography>
              <Box sx={{ display: "flex", alignItems: "center", gap: 1, mb: 2 }}>
                <TrendingUp sx={{ color: "#00C851", fontSize: 16 }} />
                <Typography variant="body2" sx={{ color: "#00C851", fontWeight: 600 }}>
                  +2.6%
                </Typography>
                <Typography variant="body2" sx={{ color: "text.secondary" }}>
                  last 7 days
                </Typography>
              </Box>
              <Box sx={{ height: 60 }}>
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={chartData}>
                    <Bar dataKey="value" fill="#00C851" radius={[2, 2, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </Box>
            </Card>
          </Grid>

          <Grid >
            <Card sx={{ borderRadius: 3, p: 3 }}>
              <Typography variant="body2" sx={{ color: "text.secondary", mb: 2 }}>
                Total installed
              </Typography>
              <Typography variant="h4" sx={{ fontWeight: 700, mb: 2 }}>
                4,876
              </Typography>
              <Box sx={{ display: "flex", alignItems: "center", gap: 1, mb: 2 }}>
                <TrendingUp sx={{ color: "#00C851", fontSize: 16 }} />
                <Typography variant="body2" sx={{ color: "#00C851", fontWeight: 600 }}>
                  +0.2%
                </Typography>
                <Typography variant="body2" sx={{ color: "text.secondary" }}>
                  last 7 days
                </Typography>
              </Box>
              <Box sx={{ height: 60 }}>
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={chartData}>
                    <Bar dataKey="value" fill="#2196F3" radius={[2, 2, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </Box>
            </Card>
          </Grid>

          <Grid >
            <Card sx={{ borderRadius: 3, p: 3 }}>
              <Typography variant="body2" sx={{ color: "text.secondary", mb: 2 }}>
                Total downloads
              </Typography>
              <Typography variant="h4" sx={{ fontWeight: 700, mb: 2 }}>
                678
              </Typography>
              <Box sx={{ display: "flex", alignItems: "center", gap: 1, mb: 2 }}>
                <TrendingDown sx={{ color: "#F44336", fontSize: 16 }} />
                <Typography variant="body2" sx={{ color: "#F44336", fontWeight: 600 }}>
                  -0.1%
                </Typography>
                <Typography variant="body2" sx={{ color: "text.secondary" }}>
                  last 7 days
                </Typography>
              </Box>
              <Box sx={{ height: 60 }}>
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={chartData}>
                    <Bar dataKey="value" fill="#F44336" radius={[2, 2, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </Box>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </Box>
  )
}

export default Dashboard
