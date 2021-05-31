import {
  Button,
  Card,
  CardContent,
  Divider,
  Grid,
  Typography,
  Link,
  useMediaQuery,
} from "@material-ui/core"
import { makeStyles, useTheme } from "@material-ui/core/styles"
import React from "react"
import AndroidIcon from "@material-ui/icons/Android"
import AppleIcon from "@material-ui/icons/Apple"
import ImgLogo from "../img/Pages/Logo"
import AtomBox from "./Atomic/atoms/AtomBox/index"
import AtomButton from "./Atomic/atoms/AtomButton/index"
import AtomContainer from "./Atomic/atoms/AtomContainer/index"
import AtomGrid from "./Atomic/atoms/AtomGrid/index"
import AtomHidden from "./Atomic/atoms/AtomHidden/index"
import AtomTextField from "./Atomic/atoms/AtomTextField/index"
import AtomTypography from "./Atomic/atoms/AtomTypography/index"

const useStyles = makeStyles((theme) => ({
  rootCard: {
    width: 400,
    margin: "auto",
  },
  btnSignUp: {
    backgroundColor: theme.palette.success.main,
    color: theme.palette.common.white,
    "&:hover": {
      backgroundColor: theme.palette.success.dark,
    },
  },
}))
function InputForm() {
  return (
    <AtomGrid container spacing={2}>
      <AtomGrid item xs={12}>
        <AtomTextField fullWidth label="Email hoặc số điện thoại" />
      </AtomGrid>
      <AtomGrid item xs={12}>
        <AtomTextField fullWidth label="Mật khẩu" />
      </AtomGrid>
    </AtomGrid>
  )
}
function ActionsForm() {
  const classes = useStyles()
  return (
    <Grid container spacing={2} justify="center">
      <Grid item xs={12}>
        <Button variant="contained" color="primary" fullWidth disableElevation>
          Đăng nhập
        </Button>
      </Grid>
      <Grid item>
        <Link href="#">
          <b>Quên mật khẩu?</b>
        </Link>
      </Grid>
      <Grid item xs={12}>
        <Grid container spacing={2} alignItems="center">
          <Grid item xs>
            <Divider />
          </Grid>
          <Grid item>
            <Typography color="textSecondary">hoặc</Typography>
          </Grid>
          <Grid item xs>
            <Divider />
          </Grid>
        </Grid>
      </Grid>
      <Grid item>
        <Button className={classes.btnSignUp}>Đăng ký</Button>
      </Grid>
    </Grid>
  )
}
export default function LoginHahalolo() {
  const classes = useStyles()
  const theme = useTheme()
  const matches = useMediaQuery(theme.breakpoints.down("sm"))
  return (
    <AtomBox
      display="flex"
      paddingTop={8}
      flexDirection="column"
      height="100vh"
    >
      <AtomContainer>
        <AtomGrid container justify="center" spacing={3}>
          <AtomGrid item xs="auto" md>
            <ImgLogo />
            <AtomHidden smDown>
              <AtomBox pt={8} maxWidth={320}>
                <AtomTypography variant="h5" gutterBottom>
                  Do you like
                </AtomTypography>
                <AtomTypography variant="h3">travelling?</AtomTypography>
                <AtomTypography variant="h5" paragraph>
                  Do you want to know more about next destination?
                </AtomTypography>
                <AtomTypography variant="h6" color="textSecondary">
                  Sign in with quick operation to experience and explore our
                  awesome conveniences.
                </AtomTypography>
              </AtomBox>
            </AtomHidden>
          </AtomGrid>
          <AtomGrid item xs={12} md="auto">
            <Card className={classes.rootCard}>
              <CardContent>
                <AtomGrid container spacing={3}>
                  <AtomGrid item xs={12}>
                    <AtomTypography variant="h5" align="center" gutterBottom>
                      <b>Đăng nhập</b>
                    </AtomTypography>
                  </AtomGrid>
                  <AtomGrid item xs={12}>
                    <InputForm />
                  </AtomGrid>
                  <AtomGrid item xs={12}>
                    <ActionsForm />
                  </AtomGrid>
                </AtomGrid>
              </CardContent>
            </Card>
          </AtomGrid>
        </AtomGrid>
      </AtomContainer>
      <AtomBox bgcolor="#eee" mt="auto" py={5}>
        <AtomContainer>
          <AtomGrid container alignItems="center" justify="center">
            <AtomGrid item xs={12} md>
              <Grid
                container
                spacing={1}
                justify={matches ? "center" : undefined}
              >
                <Grid item>
                  <Button startIcon={<AndroidIcon />} variant="outlined">
                    Google Play
                  </Button>
                </Grid>
                <Grid item>
                  <Button startIcon={<AppleIcon />} variant="outlined">
                    App Store
                  </Button>
                </Grid>
                <Grid item xs={12}>
                  <Typography align={matches ? "center" : undefined}>
                    © 2017 Hahalolo. All rights reserved
                  </Typography>
                </Grid>
              </Grid>
            </AtomGrid>
            <AtomGrid item>
              <AtomButton>Tiếng Việt</AtomButton>
              &nbsp;|&nbsp;
              <AtomButton>English</AtomButton>
            </AtomGrid>
          </AtomGrid>
        </AtomContainer>
      </AtomBox>
    </AtomBox>
  )
}
