import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AdminRoute, ClientRoutes } from "../../../Routes/Routes";
import Avatar from "@mui/material/Avatar";
import Tooltip from "@mui/material/Tooltip";
import Menu from "@mui/material/Menu";
import IconButton from "@mui/material/IconButton";
import MenuItem from "@mui/material/MenuItem";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

const settings = ["Logout"];

const Navigation = () => {
  const [isAdmin, setIsAdmin] = useState(false);
  const [isUser, setIsUser] = useState(false);
  const [anchorElUser, setAnchorElUser] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    let isAdmin = localStorage.getItem("adminToken");
    let isUser = localStorage.getItem("loginToken");
    if (isAdmin) {
      setIsAdmin(true);
      setIsUser(false);
    } else if (isUser) {
      setIsUser(true);
      setIsAdmin(false);
    }
  });

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleLogout = () => {
    localStorage.clear();
    navigate("/login");
    setIsAdmin(false);
    setIsUser(false);
  };

  return (
    <>
      {!isAdmin && !isUser ? " " : " "}
      {isUser ? (
        <>
          <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
              <Navbar.Brand>Expense Tracker</Navbar.Brand>
              <Navbar.Toggle aria-controls="responsive-navbar-nav" />
              <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto">
                  {ClientRoutes?.map((element, index) => {
                    return (
                      <Nav.Link>
                        {" "}
                        <Link
                          to={element?.path}
                          className="text-decoration-none text-light"
                        >
                          {element?.name}
                        </Link>
                      </Nav.Link>
                    );
                  })}
                </Nav>
                <Nav>
                  <Nav.Link
                    className="text-light d-md-none"
                    onClick={handleLogout}
                  >
                    Logout
                  </Nav.Link>
                  <Tooltip title="Open settings" className="d-none d-md-block">
                    <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                      <Avatar
                        alt="Remy Sharp"
                        src="/static/images/avatar/2.jpg"
                      />
                    </IconButton>
                  </Tooltip>
                  <Menu
                    sx={{ mt: "45px" }}
                    id="menu-appbar"
                    anchorEl={anchorElUser}
                    anchorOrigin={{
                      vertical: "top",
                      horizontal: "right",
                    }}
                    keepMounted
                    transformOrigin={{
                      vertical: "top",
                      horizontal: "right",
                    }}
                    open={Boolean(anchorElUser)}
                    onClose={handleCloseUserMenu}
                  >
                    {settings.map((setting) => (
                      <MenuItem key={setting} onClick={handleCloseUserMenu}>
                        <button
                          className=" btn py-0 px-4"
                          onClick={handleLogout}
                        >
                          {setting}
                        </button>
                      </MenuItem>
                    ))}
                  </Menu>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </>
      ) : (
        ""
      )}
      {isAdmin ? (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
          <Container>
            <Navbar.Brand>Expense Tracker</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto">
                {AdminRoute?.map((element, index) => {
                  return (
                    <Nav.Link>
                      {" "}
                      <Link
                        to={element?.path}
                        className="text-decoration-none text-light"
                      >
                        {element?.name}
                      </Link>
                    </Nav.Link>
                  );
                })}
              </Nav>
              <Nav>
                <Nav.Link
                  className="text-light d-md-none"
                  onClick={handleLogout}
                >
                  Logout
                </Nav.Link>
                <Tooltip title="Open settings" className="d-none d-md-block">
                  <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                    <Avatar
                      alt="Remy Sharp"
                      src="/static/images/avatar/2.jpg"
                    />
                  </IconButton>
                </Tooltip>
                <Menu
                  sx={{ mt: "45px" }}
                  id="menu-appbar"
                  anchorEl={anchorElUser}
                  anchorOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  open={Boolean(anchorElUser)}
                  onClose={handleCloseUserMenu}
                >
                  {settings.map((setting) => (
                    <MenuItem key={setting} onClick={handleCloseUserMenu}>
                      <button className=" btn py-0 px-4" onClick={handleLogout}>
                        {setting}
                      </button>
                    </MenuItem>
                  ))}
                </Menu>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      ) : (
        ""
      )}
    </>
  );
};

export default Navigation;
