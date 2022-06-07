import React from 'react'
import { Link } from 'react-router-dom'
import {
    Typography,
    Toolbar,
  } from '@mui/material'
import { useStyles } from './Navbar.style'
import NavLogo from "../../Assets/Navbar/Logo.png"

export default function NavBar() {
    const classes = useStyles()
  return (
      <>
      <Toolbar style={{zIndex:'5'}}>
                  {/* Nav Header */}
        <Link to="/">
          <img src={NavLogo} className={classes.navLogo} alt="nav logo" />
        </Link>
          <div className={classes.allNavItems}>
            {/* ---------------Desktop View Nav items-------------------------- */}

              <Typography variant="body2" className={classes.navItems}>
                FEATURES
              </Typography>

              <Typography variant="body2" className={classes.navItems}>
                PRICINGS
              </Typography>

              <Typography variant="body2" className={classes.navItems}>
                BUSINESS
              </Typography>

              <Typography variant="body2" className={classes.navItems}>
                SMART CARD
              </Typography>
                  <Typography variant="body2" className={classes.navItems_Contact_us}>
                    CONTACT US
                  </Typography>
            {/* ---------------End of  Desktop View Nav items-------------------------- */}
          </div>
     </Toolbar>
      </>
  )
}
