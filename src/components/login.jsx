import React from "react";

import AtomBox from "../components/Atomic/atoms/AtomBox/index";
import AtomButton from "../components/Atomic/atoms/AtomButton/index";
import AtomCheckbox from "../components/Atomic/atoms/AtomCheckbox/index";
import AtomContainer from "../components/Atomic/atoms/AtomContainer/index";
import AtomFormControlLabel from "../components/Atomic/atoms/AtomFormControlLabel/index";
import AtomLink from "../components/Atomic/atoms/AtomLink/index";
import AtomTextField from "../components/Atomic/atoms/AtomTextField/index";
import AtomGrid from "../components/Atomic/atoms/AtomGrid/index";
import AtomAvatar from "../components/Atomic/atoms/AtomAvatar/index";
import AtomTypography from "../components/Atomic/atoms/AtomTypography/index";

import { makeStyles } from '@material-ui/core/styles';

import LockIcon from "../icons/Pages/LockIcon";


const useStyles = makeStyles ((theme) => ({
  rootPaper: {
    marginTop : theme.spacing(8),
    display : 'flex',
    flexDirection : 'column',//cột dọc
    alignItems : 'center',
  },
  rootAvatar: {
    margin : theme.spacing(1),
    backgroundColor : '#DC004E',
  },
  rootForm: {
    width : '100%',
    marginTop : theme.spacing(1),
  },
  rootSubmit: {
    margin : theme.spacing(3, 0, 2),
  },
  rootInfo: {
    marginTop: '64px',
  },
}));

export default function BasicExample() {
  const classes = useStyles();

  return (
    <AtomContainer component='main' maxWidth='xs'> 
      <div className={classes.rootPaper}>
        <AtomAvatar className={classes.rootAvatar}>
          <LockIcon/>
        </AtomAvatar>
        <AtomTypography variant='h5'>
          Sign in
        </AtomTypography>
        <form className={classes.rootForm}>
          <AtomTextField
            variant='outlined'
            margin='normal'
            required //đánh dấu sao quan trọng và hiện cảnh báo
            fullWidth
            id='email'
            label='Email Address'
            autoComplete //biểu mẫu nhanh hơn
            autoFocus //lấy phần tử đầu nếu đúng
          />
          <AtomTextField
            variant='outlined'
            margin='normal'
            required 
            fullWidth
            id='password'
            label='Password'
            autoComplete='current-password'
          />
          <AtomFormControlLabel
            control={<AtomCheckbox value='remember' color='primary' />}
            label='Remember me'
          />
          <AtomButton 
            type='submit'
            fullWidth
            variant='contained'
            color='primary'
            className={classes.rootSubmit}
            >
              Sign in
          </AtomButton>
          <AtomGrid container justify='space-between'>
            <AtomGrid item>
              <AtomLink href='Forgot-password' variant='body2'>
                Forgot password?
              </AtomLink>
            </AtomGrid>
            <AtomGrid item>
              <AtomLink href='Dont-have-an-account?-Sign-Up' variant='body2'>
                Don't have an account? Sign Up
              </AtomLink>
            </AtomGrid>
          </AtomGrid>
        </form>
      </div>
      <AtomBox className={classes.rootInfo}>
        <AtomTypography variant='body2' color='textSecondary' align='center'>
          {'Copyright ©'}
          <AtomLink color='inherit' href='https://www.hahalolo.com/'>
            Hahalolo Website
          </AtomLink>
          {' '}
          {new Date().getFullYear()}
          {'.'}
        </AtomTypography>
      </AtomBox>
    </AtomContainer>
    
  );
}
