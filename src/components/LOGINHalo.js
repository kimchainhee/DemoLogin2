import React from "react";

import AtomButton from "./Atomic/atoms/AtomButton/index";
import AtomContainer from "./Atomic/atoms/AtomContainer/index";
import AtomBox from "./Atomic/atoms/AtomBox/index";
import AtomLink from "./Atomic/atoms/AtomLink/index";
import AtomTextField from "./Atomic/atoms/AtomTextField/index";
import AtomGrid from "./Atomic/atoms/AtomGrid/index";
import AtomTypography from "./Atomic/atoms/AtomTypography/index";
import AtomDivider from "./Atomic/atoms/AtomDivider/index";
import AtomHidden from "./Atomic/atoms/AtomHidden/index";
import { Card, CardActions } from "@material-ui/core";

import PropTypes from "prop-types";

import { makeStyles } from "@material-ui/core/styles";

import AndroidIcon from "../icons/Pages/AndroidIcon";
import AppleIcon from "../icons/Pages/AppleIcon";

import ImgLogo from "../img/Pages/Logo";
import { CardContent } from "@material-ui/core";
import { getThemeProps } from "@material-ui/styles";

const useStyles = makeStyles((theme) => ({
  rootCard: {
    width: 400,
    height: 390,
  },
  rootBox: {
    display: "flex",
    marginTop: theme.spacing(8),
  },
  rootBox01: {
    marginTop: theme.spacing(8),
  },
  rootBox02: {
    height : '120px',
    backgroundColor: "#eeeeee",
  },
  rootContent: {
    fontWeight: "bold",
  },
  rootTextField01: {
    width: "90%",
  },
  rootButton01: {
    marginTop: theme.spacing(1),
    width: "90%",
    borderRadius: "24px",
    textTransform: "none",
  },
  rootButton02: {
    marginTop: theme.spacing(1),
    borderRadius: "24px",
    textTransform: "none",
  },
  rootButton03: {
    marginTop: theme.spacing(4),
    marginRight: theme.spacing(1),
    borderRadius: "24px",
    textTransform: "none",
    width: "135px",
  },
  rootButton04: {
    textTransform: "none",
    fontSize: "12px",
  },
  rootItem01: {
    color: "grey",
    fontSize: "12px",
  },
  rootItem02: {
    fontSize: "12px",
  },
  rootItem03: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(1),
    fontSize: "12px",
  },
  rootItem05: {
    marginTop: theme.spacing(1),
    fontSize: "15px",
    color: "#757575",
  },
}));

LoginHahalolo.propTypes = {
  width: PropTypes.oneOf(["lg", "md", "sm", "xl", "xs"]).isRequired,
};

export default function LoginHahalolo() {
  const classes = useStyles();
  return (
    <AtomBox className={classes.rootBox} flexDirection='column' height='100vh'>
      <AtomContainer>
        <AtomGrid container spacing={6} justify="space-around">
          <AtomGrid item md="true">
            <ImgLogo />
            <AtomHidden smDown>
              <AtomBox className={classes.rootBox01}>
                <AtomGrid container direction="column">
                  <AtomGrid item xs={4}>
                    <AtomTypography>Do you like</AtomTypography>
                    <AtomTypography variant="h3">travelling?</AtomTypography>
                    <AtomTypography>
                      Do you want to know more about next destination?
                    </AtomTypography>
                    <AtomTypography className={classes.rootItem05}>
                      Sign in with quick operation to experience and explore our
                      awesome conveniences.
                    </AtomTypography>
                  </AtomGrid>
                </AtomGrid>
              </AtomBox>
            </AtomHidden>
          </AtomGrid>
          <AtomGrid item md="auto">
            <Card className={classes.rootCard}>
              <CardContent>
                <AtomTypography
                  variant="h6"
                  align="center"
                  className={classes.rootContent}
                >
                  Đăng nhập
                </AtomTypography>
              </CardContent>
              <CardActions>
                <AtomBox display="flex" justifyContent="center" width="100%">
                  <AtomTextField
                    id="email"
                    label="Email hoặc số điện thoại"
                    className={classes.rootTextField01}
                  />
                </AtomBox>
              </CardActions>
              <CardActions>
                <AtomBox display="flex" justifyContent="center" width="100%">
                  <AtomTextField
                    id="password"
                    label="Mật khẩu"
                    className={classes.rootTextField01}
                  />
                </AtomBox>
              </CardActions>
              <CardActions>
                <AtomBox display="flex" justifyContent="center" width="100%">
                  <AtomButton
                    type="login"
                    fullWidth
                    variant="contained"
                    size="large"
                    color="primary"
                    className={classes.rootButton01}
                  >
                    Đăng nhập
                  </AtomButton>
                </AtomBox>
              </CardActions>
              <CardActions>
                <AtomBox display="flex" justifyContent="center" width="100%">
                  <AtomLink
                    href="https://www.hahalolo.com/auth/forgotpw"
                    variant="body2"
                  >
                    Quên mật khẩu?
                  </AtomLink>
                </AtomBox>
              </CardActions>
              <AtomGrid
                container
                justify="center"
                spacing={2}
                alignItems="center"
              >
                <AtomGrid item xs={5}>
                  <AtomDivider />
                </AtomGrid>
                <AtomGrid item>
                  <AtomTypography className={classes.rootItem01}>
                    hoặc
                  </AtomTypography>
                </AtomGrid>
                <AtomGrid item xs={5}>
                  <AtomDivider />
                </AtomGrid>
              </AtomGrid>
              <CardActions>
                <AtomBox display="flex" justifyContent="center" width="100%">
                  <AtomButton
                    type="registration"
                    variant="contained"
                    size="large"
                    color="primary"
                    className={classes.rootButton02}
                  >
                    Đăng ký
                  </AtomButton>
                </AtomBox>
              </CardActions>
            </Card>
          </AtomGrid>
        </AtomGrid>
      </AtomContainer>
      <AtomBox className={classes.rootBox02} mt='auto' >
        <AtomContainer>
          <AtomGrid container justify="space-around" alignItems="center" >
            <AtomGrid item md="true">
              <AtomHidden smDown>
                <AtomButton
                  type="downloadGP"
                  variant="outlined"
                  size="large"
                  href="https://play.google.com/store/apps/details?id=com.hahalolo.android.social&hl=en"
                  className={classes.rootButton03}
                >
                  <AndroidIcon />
                  <AtomTypography className={classes.rootItem02}>
                    Google play
                  </AtomTypography>
                </AtomButton>
                <AtomButton
                  type="downloadAT"
                  variant="outlined"
                  size="large"
                  href="https://apps.apple.com/us/app/hahalolo/id1437417120"
                  className={classes.rootButton03}
                >
                  <AppleIcon />
                  <AtomTypography className={classes.rootItem02}>
                    Apple store
                  </AtomTypography>
                </AtomButton>
              </AtomHidden>
              <AtomTypography className={classes.rootItem03}>
                © 2017 Hahalolo. All rights reserved
              </AtomTypography>
            </AtomGrid>
            <AtomGrid item xs={12} md="auto" >
              <AtomGrid container justify="center" >
                <AtomGrid item>
                <AtomButton
                  href="vn"
                  type="vietnam"
                  className={classes.rootButton04}
                >
                  Tiếng Việt
                </AtomButton>
                </AtomGrid>
                    <AtomDivider orientation="vertical" flexItem />
                <AtomGrid item>
                <AtomButton
                  href="en"
                  type="english"
                  className={classes.rootButton04}
                >
                  English
                </AtomButton>
                </AtomGrid>
              </AtomGrid>
            </AtomGrid>
          </AtomGrid>
        </AtomContainer>
      </AtomBox>
    </AtomBox>
  );
}
