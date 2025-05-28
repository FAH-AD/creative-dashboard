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
  Chip,
  useTheme,
  Select,
  MenuItem,
  FormControl,
  alpha,
  IconButton,
  Avatar,
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
  TrendingUp,
  TrendingDown,
  ExpandMore,
  Search,
  Notifications,
  Settings,
  KeyboardArrowLeft,
} from "@mui/icons-material"
import { PieChart, Pie, Cell, BarChart, Bar, XAxis, YAxis, ResponsiveContainer } from "recharts"

const drawerWidth = 280

interface NavItem {
  text: string
  icon: React.ReactElement
  hasChildren?: boolean
}

const overviewItems: NavItem[] = [
  { text: "App", icon: <DashboardIcon /> },
  { text: "Ecommerce", icon: <ShoppingCart /> },
  { text: "Analytics", icon: <Analytics /> },
  { text: "Banking", icon: <AccountBalance /> },
  { text: "Booking", icon: <BookOnline /> },
  { text: "File", icon: <Folder /> },
  { text: "Course", icon: <School /> },
]

const managementItems: NavItem[] = [
  { text: "User", icon: <Person />, hasChildren: true },
  { text: "Product", icon: <Inventory />, hasChildren: true },
]

// Data for charts
const pieData = [
  { name: "Mac", value: 45, color: "#10B981" },
  { name: "Windows", value: 35, color: "#3B82F6" },
  { name: "iOS", value: 15, color: "#8B5CF6" },
  { name: "Android", value: 5, color: "#1F2937" },
]

const barData = [
  { month: "Jan", Asia: 25, Europe: 35, Americas: 45 },
  { month: "Feb", Asia: 30, Europe: 25, Americas: 40 },
  { month: "Mar", Asia: 35, Europe: 30, Americas: 35 },
  { month: "Apr", Asia: 40, Europe: 45, Americas: 50 },
  { month: "May", Asia: 35, Europe: 40, Americas: 45 },
  { month: "Jun", Asia: 45, Europe: 35, Americas: 55 },
  { month: "Jul", Asia: 50, Europe: 50, Americas: 60 },
  { month: "Aug", Asia: 45, Europe: 45, Americas: 55 },
  { month: "Sep", Asia: 55, Europe: 40, Americas: 65 },
  { month: "Oct", Asia: 50, Europe: 55, Americas: 60 },
  { month: "Nov", Asia: 40, Europe: 35, Americas: 50 },
  { month: "Dec", Asia: 45, Europe: 40, Americas: 55 },
]

const miniChartData = [
  { value: 20 },
  { value: 35 },
  { value: 25 },
  { value: 45 },
  { value: 30 },
  { value: 55 },
  { value: 40 },
]

const DashboardSections: React.FC = () => {
  const theme = useTheme()
  const [selectedItem, setSelectedItem] = React.useState("App")

  const handleItemClick = (item: string) => {
    setSelectedItem(item)
  }

  const renderNavItems = (items: NavItem[]) => {
    return items.map((item) => (
      <ListItem key={item.text} disablePadding>
        <ListItemButton
          selected={selectedItem === item.text}
          onClick={() => handleItemClick(item.text)}
          sx={{
            borderRadius: 2,
            mx: 1,
            mb: 0.5,
            "&.Mui-selected": {
              backgroundColor: alpha("#00C851", 0.1),
              color: "#00C851",
              "& .MuiListItemIcon-root": {
                color: "#00C851",
              },
            },
            "&:hover": {
              backgroundColor: alpha("#00C851", 0.05),
            },
          }}
        >
          <ListItemIcon sx={{ minWidth: 40, color: "inherit" }}>{item.icon}</ListItemIcon>
          <ListItemText
            primary={item.text}
            primaryTypographyProps={{
              fontSize: "0.875rem",
              fontWeight: selectedItem === item.text ? 600 : 400,
            }}
          />
          {item.hasChildren && <ExpandMore sx={{ fontSize: 16, color: "text.secondary" }} />}
        </ListItemButton>
      </ListItem>
    ))
  }

  return (
    <Box sx={{ display: "flex", bgcolor: "#f8f9fa", minHeight: "100vh" }}>
      {/* Top Bar */}
      <AppBar
        position="fixed"
        sx={{
          width: `calc(100% - ${drawerWidth}px)`,
          ml: `${drawerWidth}px`,
          bgcolor: "white",
          color: "text.primary",
          boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
          borderBottom: "1px solid #E5E7EB",
          zIndex: theme.zIndex.drawer + 1,
        }}
      >
        <Toolbar sx={{ justifyContent: "space-between", minHeight: "64px !important" }}>
          {/* Left Side - Navigation and Branding */}
          <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
            <IconButton sx={{ color: "text.secondary" }}>
              <KeyboardArrowLeft />
            </IconButton>
            <Box
              sx={{
                width: 24,
                height: 24,
                borderRadius: 1,
                background: "linear-gradient(45deg, #FF6B6B, #4ECDC4, #45B7D1, #96CEB4)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Typography variant="body2" sx={{ color: "white", fontWeight: "bold", fontSize: "0.75rem" }}>
                ✦
              </Typography>
            </Box>
            <Typography variant="h6" sx={{ fontWeight: 600, fontSize: "1rem" }}>
              Team 2
            </Typography>
            <Chip
              label="Pro"
              size="small"
              sx={{
                bgcolor: "#E0F2FE",
                color: "#0369A1",
                fontWeight: 600,
                fontSize: "0.75rem",
                height: 24,
              }}
            />
          </Box>

          {/* Right Side - Controls */}
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            {/* Search */}
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 1,
                bgcolor: "#F9FAFB",
                borderRadius: 2,
                px: 2,
                py: 0.5,
                border: "1px solid #E5E7EB",
              }}
            >
              <Search sx={{ color: "text.secondary", fontSize: 18 }} />
              <Typography variant="body2" sx={{ color: "text.secondary", fontSize: "0.875rem" }}>
                ⌘K
              </Typography>
            </Box>

            {/* UK Flag */}
            <IconButton sx={{ p: 0.5 }}>
              <Box
                sx={{
                  width: 24,
                  height: 24,
                  borderRadius: 0.5,
                  background: "linear-gradient(to bottom, #012169 33%, white 33%, white 66%, #C8102E 66%)",
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                <Box
                  sx={{
                    position: "absolute",
                    inset: 0,
                    background: `
                      linear-gradient(45deg, transparent 40%, white 40%, white 60%, transparent 60%),
                      linear-gradient(-45deg, transparent 40%, white 40%, white 60%, transparent 60%),
                      linear-gradient(45deg, transparent 45%, #C8102E 45%, #C8102E 55%, transparent 55%),
                      linear-gradient(-45deg, transparent 45%, #C8102E 45%, #C8102E 55%, transparent 55%)
                    `,
                  }}
                />
              </Box>
            </IconButton>

            {/* Notifications */}
            <IconButton sx={{ color: "text.secondary" }}>
              <Notifications sx={{ fontSize: 20 }} />
            </IconButton>

            {/* Settings */}
            <IconButton sx={{ color: "text.secondary" }}>
              <Settings sx={{ fontSize: 20 }} />
            </IconButton>

            {/* User Avatar */}
            <Avatar
              src="/placeholder.svg?height=32&width=32"
              sx={{
                width: 32,
                height: 32,
                bgcolor: "#00C851",
                fontSize: "0.875rem",
                fontWeight: 600,
              }}
            >
              JF
            </Avatar>
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
            borderRight: "1px solid #E5E7EB",
            boxShadow: "none",
          },
        }}
        variant="permanent"
        anchor="left"
      >
        {/* Logo Section */}
        <Box sx={{ p: 3, borderBottom: "1px solid #E5E7EB" }}>
          <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
            <Box
              sx={{
                width: 32,
                height: 32,
                borderRadius: 1,
                background: "linear-gradient(45deg, #00C851, #00A041)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Typography variant="body1" sx={{ color: "white", fontWeight: "bold" }}>
                M
              </Typography>
            </Box>
          </Box>
        </Box>

        {/* Overview Section */}
        <Box sx={{ px: 2, pt: 3, pb: 1 }}>
          <Typography
            variant="overline"
            sx={{
              color: "#6B7280",
              fontWeight: 600,
              fontSize: "0.75rem",
              letterSpacing: "0.5px",
            }}
          >
            OVERVIEW
          </Typography>
        </Box>
        <List sx={{ px: 1, pb: 2 }}>{renderNavItems(overviewItems)}</List>

        {/* Management Section */}
        <Box sx={{ px: 2, py: 1 }}>
          <Typography
            variant="overline"
            sx={{
              color: "#6B7280",
              fontWeight: 600,
              fontSize: "0.75rem",
              letterSpacing: "0.5px",
            }}
          >
            MANAGEMENT
          </Typography>
        </Box>
        <List sx={{ px: 1 }}>{renderNavItems(managementItems)}</List>
      </Drawer>

      {/* Main Content */}
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          bgcolor: "#f8f9fa",
          p: 3,
          mt: 8, // Account for top bar height
        }}
      >
        {/* Welcome Card - Full Width */}
        <Card
          sx={{
            background: "linear-gradient(135deg, #2C3E50 0%, #34495E 100%)",
            color: "white",
            borderRadius: 3,
            overflow: "hidden",
            position: "relative",
            minHeight: 200,
            mb: 4,
          }}
        >
          <CardContent sx={{ p: 4, position: "relative", zIndex: 2 }}>
            <Typography variant="h4" sx={{ fontWeight: 600, mb: 1 }}>
              Welcome back 👋
            </Typography>
            <Typography variant="h5" sx={{ fontWeight: 700, mb: 2 }}>
              Jaydon Frankie
            </Typography>
            <Typography variant="body1" sx={{ mb: 3, maxWidth: 350, opacity: 0.9, lineHeight: 1.6 }}>
              If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything.
            </Typography>
            <Button
              variant="contained"
              sx={{
                bgcolor: "#00C851",
                color: "white",
                px: 3,
                py: 1,
                borderRadius: 2,
                fontWeight: 600,
                textTransform: "none",
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
              right: 40,
              top: "50%",
              transform: "translateY(-50%)",
              zIndex: 1,
            }}
          >
            <Box
              sx={{
                width: 120,
                height: 120,
                borderRadius: "50%",
                bgcolor: "#00C851",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                position: "relative",
              }}
            >
              <Typography variant="h6" sx={{ color: "white" }}>
                📊
              </Typography>
            </Box>
          </Box>
        </Card>

        {/* Centered Metrics Cards */}
        <Box sx={{ display: "flex", justifyContent: "start", mb: 4 }}>
          <Grid container spacing={3} sx={{ maxWidth: 1200 }}>
            <Grid >
              <Card sx={{ borderRadius: 3, p: 3 }}>
                <Typography variant="body2" sx={{ color: "text.secondary", mb: 1, fontWeight: 500 }}>
                  Total active users
                </Typography>
                <Typography variant="h4" sx={{ fontWeight: 700, mb: 1 }}>
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
                <Box sx={{ height: 40 }}>
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={miniChartData}>
                      <Bar dataKey="value" fill="#00C851" radius={[1, 1, 0, 0]} />
                    </BarChart>
                  </ResponsiveContainer>
                </Box>
              </Card>
            </Grid>

            <Grid >
              <Card sx={{ borderRadius: 3, p: 3 }}>
                <Typography variant="body2" sx={{ color: "text.secondary", mb: 1, fontWeight: 500 }}>
                  Total installed
                </Typography>
                <Typography variant="h4" sx={{ fontWeight: 700, mb: 1 }}>
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
                <Box sx={{ height: 40 }}>
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={miniChartData}>
                      <Bar dataKey="value" fill="#3B82F6" radius={[1, 1, 0, 0]} />
                    </BarChart>
                  </ResponsiveContainer>
                </Box>
              </Card>
            </Grid>

            <Grid >
              <Card sx={{ borderRadius: 3, p: 3 }}>
                <Typography variant="body2" sx={{ color: "text.secondary", mb: 1, fontWeight: 500 }}>
                  Total downloads
                </Typography>
                <Typography variant="h4" sx={{ fontWeight: 700, mb: 1 }}>
                  678
                </Typography>
                <Box sx={{ display: "flex", alignItems: "center", gap: 1, mb: 2 }}>
                  <TrendingDown sx={{ color: "#EF4444", fontSize: 16 }} />
                  <Typography variant="body2" sx={{ color: "#EF4444", fontWeight: 600 }}>
                    -0.1%
                  </Typography>
                  <Typography variant="body2" sx={{ color: "text.secondary" }}>
                    last 7 days
                  </Typography>
                </Box>
                <Box sx={{ height: 40 }}>
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={miniChartData}>
                      <Bar dataKey="value" fill="#EF4444" radius={[1, 1, 0, 0]} />
                    </BarChart>
                  </ResponsiveContainer>
                </Box>
              </Card>
            </Grid>
          </Grid>
        </Box>

        {/* Charts Section */}
        <Grid container spacing={3}>
          <Grid >
            <Card sx={{ borderRadius: 3, p: 3 }}>
              <Typography variant="h6" sx={{ fontWeight: 600, mb: 1 }}>
                Current download
              </Typography>
              <Typography variant="body2" sx={{ color: "text.secondary", mb: 3 }}>
                Downloaded by operating system
              </Typography>

              <Box
                sx={{
                  position: "relative",
                  height: 300,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={pieData}
                      cx="50%"
                      cy="50%"
                      innerRadius={80}
                      outerRadius={120}
                      paddingAngle={2}
                      dataKey="value"
                    >
                      {pieData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                  </PieChart>
                </ResponsiveContainer>
                <Box
                  sx={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    textAlign: "center",
                  }}
                >
                  <Typography variant="body2" sx={{ color: "text.secondary" }}>
                    Total
                  </Typography>
                  <Typography variant="h5" sx={{ fontWeight: 700 }}>
                    188,245
                  </Typography>
                </Box>
              </Box>

              <Box sx={{ mt: 3 }}>
                <Grid container spacing={2}>
                  {pieData.map((item, index) => (
                    <Grid  key={index}>
                      <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                        <Box
                          sx={{
                            width: 12,
                            height: 12,
                            borderRadius: "50%",
                            bgcolor: item.color,
                          }}
                        />
                        <Typography variant="body2" sx={{ color: "text.secondary" }}>
                          {item.name}
                        </Typography>
                      </Box>
                    </Grid>
                  ))}
                </Grid>
              </Box>
            </Card>
          </Grid>

          <Grid >
            <Card sx={{ borderRadius: 3, p: 3 }}>
              <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 1 }}>
                <Typography variant="h6" sx={{ fontWeight: 600 }}>
                  Area installed
                </Typography>
                <FormControl size="small">
                  <Select value="2023" sx={{ minWidth: 80 }}>
                    <MenuItem value="2023">2023</MenuItem>
                    <MenuItem value="2022">2022</MenuItem>
                  </Select>
                </FormControl>
              </Box>
              <Typography variant="body2" sx={{ color: "text.secondary", mb: 3 }}>
                (+43%) than last year
              </Typography>

              <Box sx={{ display: "flex", gap: 3, mb: 3 }}>
                <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                  <Box sx={{ width: 12, height: 12, borderRadius: "50%", bgcolor: "#10B981" }} />
                  <Typography variant="body2">Asia</Typography>
                  <Typography variant="h6" sx={{ fontWeight: 600 }}>
                    1.23k
                  </Typography>
                </Box>
                <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                  <Box sx={{ width: 12, height: 12, borderRadius: "50%", bgcolor: "#F59E0B" }} />
                  <Typography variant="body2">Europe</Typography>
                  <Typography variant="h6" sx={{ fontWeight: 600 }}>
                    6.79k
                  </Typography>
                </Box>
                <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                  <Box sx={{ width: 12, height: 12, borderRadius: "50%", bgcolor: "#3B82F6" }} />
                  <Typography variant="body2">Americas</Typography>
                  <Typography variant="h6" sx={{ fontWeight: 600 }}>
                    1.01k
                  </Typography>
                </Box>
              </Box>

              <Box sx={{ height: 250 }}>
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={barData}>
                    <XAxis dataKey="month" axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: "#6B7280" }} />
                    <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: "#6B7280" }} />
                    <Bar dataKey="Asia" stackId="a" fill="#10B981" radius={[0, 0, 0, 0]} />
                    <Bar dataKey="Europe" stackId="a" fill="#F59E0B" radius={[0, 0, 0, 0]} />
                    <Bar dataKey="Americas" stackId="a" fill="#3B82F6" radius={[4, 4, 0, 0]} />
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

export default DashboardSections
