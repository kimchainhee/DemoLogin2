import React from "react";

import AtomButton from "./Atomic/atoms/AtomButton/index";
import AtomContainer from './Atomic/atoms/AtomContainer/index';
import AtomBox from './Atomic/atoms/AtomBox/index';
import AtomLink from "./Atomic/atoms/AtomLink/index";
import AtomTextField from "./Atomic/atoms/AtomTextField/index";
import AtomGrid from "./Atomic/atoms/AtomGrid/index";
import AtomTypography from "./Atomic/atoms/AtomTypography/index";
import AtomPaper from "./Atomic/atoms/AtomPaper/index";
import AtomDivider from "./Atomic/atoms/AtomDivider/index";
import AtomHidden from "./Atomic/atoms/AtomHidden/index";

import PropTypes from 'prop-types';

import { makeStyles } from '@material-ui/core/styles';

import AndroidIcon from "../icons/Pages/AndroidIcon";
import AppleIcon from '../icons/Pages/AppleIcon';
import GetAppIcon from '../icons/Pages/GetAppIcon';
 
import ImgLogo from '../img/Pages/Logo';

const useStyles = makeStyles ((theme) => ({
    rootBox: {
        display : 'flex',
        marginTop : theme.spacing(8),
        height : '100%',
        position : 'relative',
    }, 
    rootBox02: {
        position : 'absolute',
        bottom : 0,
        width : '100%',
        height : '150px',
        backgroundColor : '#eeeeee',
    }, 
    rootPaper: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        height : '380px'
    },    
    rootPaper02:{
        marginTop : theme.spacing(2),
        fontWeight : 'bold',
    },
    rootPaper03: {
        width: '80%',
        marginTop: theme.spacing(2),
    },
    rootButton01: {
        marginTop : theme.spacing(4),
        marginBottom : theme.spacing(2),
        borderRadius : '24px',
        textTransform: 'none',
    },
    rootButton02: {
        marginTop : theme.spacing(2),
        borderRadius : '24px',
        textTransform : 'none',
        backgroundColor : '#4caf50',
        color : 'white',
    },
    rootButton03: {
        marginTop : theme.spacing(4),
        marginRight : theme.spacing(1),
        borderRadius : '24px',
        textTransform : 'none',
        width : '135px'
    },
    rootButton04: {
        borderRadius : '24px',
        textTransform : 'none',
        fontSize : '12px',
    },
    rootItem01: {
        marginTop : theme.spacing(1),
        color : 'grey',
        fontSize : '12px',
    },
    rootItem02: {
        fontSize : '12px',
    },
    rootItem03: {
        marginTop : theme.spacing(3),
        marginBottom : theme.spacing(1),
        fontSize : '12px',
    },
    rootItem04: {
        fontSize : '35px',
        fontWeight : 'bold',
    },
    rootItem05: {
        marginTop : theme.spacing(1),
        fontSize : '15px',
        color : '#757575',
    },
    rootItem06: {
        position : 'fixed',
        padding : '5px',
        backgroundColor : '#616161',
        height : '60px',
        width : '100%',
        bottom : '0',
        
    },  
        rootItem0601: {
            color : '#039be5',
            fontSize : '20px',
            fontWeight : 'bold',
            marginLeft : '10px'
        }, 
        rootItem0602: {
            color : '#039be5',
            fontSize : '10px',
            marginLeft : '10px'
        }, 
        rootItem0603: {
            backgroundColor : '#039be5',            
        }, 
        rootItem0604: {
            color : 'white',
            fontSize : '15px',           
        }, 
    rootDivider: {
        marginTop : theme.spacing(1),
    },
    rootTextField: {
        marginTop : theme.spacing(1),
    }
  }));

  LoginHahalolo.propTypes = {
    width: PropTypes.oneOf(['lg', 'md', 'sm', 'xl', 'xs']).isRequired,
  };

export default function LoginHahalolo() { 
    const classes = useStyles();
    return(
      <AtomBox>
        <AtomContainer maxWidth='lg'>
            <AtomBox component='div' className={classes.rootBox}>
                <AtomGrid container justify='space-around'>
                    <AtomGrid item md={8}>
                        <AtomGrid container spacing={6} direction='column'>
                            <AtomGrid item>
                                <ImgLogo />
                            </AtomGrid>
                            <AtomGrid item>
                                <AtomHidden smDown>
                                    <AtomGrid container direction='column'>
                                        <AtomGrid item >
                                            <AtomTypography>
                                                Do you like
                                            </AtomTypography>
                                        </AtomGrid>
                                        <AtomGrid item >
                                            <AtomTypography className={classes.rootItem04}>
                                                travelling?
                                            </AtomTypography>
                                        </AtomGrid>
                                        <AtomGrid item md={3}>
                                            <AtomTypography>
                                                Do you want to know more about next destination?                                   
                                            </AtomTypography>
                                        </AtomGrid>
                                        <AtomGrid item md={4}>
                                            <AtomTypography className={classes.rootItem05}>
                                                Sign in with quick operation to experience and explore our awesome conveniences.                                   
                                            </AtomTypography>
                                        </AtomGrid>
                                    </AtomGrid>
                                </AtomHidden>
                            </AtomGrid>
                        </AtomGrid>
                    </AtomGrid>
                    <AtomGrid item xs={12} md={4}>
                        <AtomPaper className={classes.rootPaper}>
                            <AtomTypography variant='h6' className={classes.rootPaper02}>
                                Đăng nhập
                            </AtomTypography>
                            <form className={classes.rootPaper03}>
                                <AtomTextField
                                    fullWidth
                                    id='email'
                                    label='Email hoặc số điện thoại'
                                />
                                <AtomTextField
                                    fullWidth
                                    id='password'
                                    label='Mật khẩu'
                                    className={classes.rootTextField}
                                />
                                <AtomButton
                                    type='login'
                                    fullWidth
                                    variant='contained'
                                    size='large'
                                    color="primary"
                                    className={classes.rootButton01}
                                    >
                                        Đăng nhập
                                </AtomButton>
                                <AtomGrid container justify='center'>
                                    <AtomLink 
                                        href='https://www.hahalolo.com/auth/forgotpw' 
                                        variant='body2' 
                                    >
                                            Quên mật khẩu?
                                    </AtomLink>
                                </AtomGrid>  
                                <AtomGrid container spacing={2} alignItems='center'>   
                                    <AtomGrid item xs={true} >
                                        <AtomDivider className={classes.rootDivider}/>
                                    </AtomGrid>
                                    <AtomGrid item >
                                        <AtomTypography className={classes.rootItem01}>hoặc</AtomTypography>
                                    </AtomGrid>                                   
                                    <AtomGrid item xs={true} >
                                        <AtomDivider className={classes.rootDivider}/>
                                    </AtomGrid>
                                </AtomGrid> 
                                <AtomGrid container justify='center'>
                                    <AtomButton
                                        type='registration'
                                        variant='contained'
                                        size='large'
                                        className={classes.rootButton02}
                                    >
                                        Đăng ký
                                    </AtomButton>
                                </AtomGrid>
                            </form>
                        </AtomPaper>
                    </AtomGrid>
                </AtomGrid>     
            </AtomBox>   
        </AtomContainer>
        <AtomBox className={classes.rootBox02}>
            <AtomContainer>
                <AtomGrid container justify='space-around' alignItems='center'>
                    <AtomGrid item md={10}>
                        <AtomHidden smDown>
                            <AtomButton
                                type='downloadGP'
                                variant='outlined'
                                size='large'
                                href='https://play.google.com/store/apps/details?id=com.hahalolo.android.social&hl=en'
                                className={classes.rootButton03}
                            >                                
                                <AndroidIcon/>
                                <AtomTypography className={classes.rootItem02}>
                                    Google play
                                </AtomTypography>    
                            </AtomButton>
                            <AtomButton
                                type='downloadAT'
                                variant='outlined'
                                size='large'
                                href='https://apps.apple.com/us/app/hahalolo/id1437417120'
                                className={classes.rootButton03}
                            > 
                                <AppleIcon/>
                                <AtomTypography className={classes.rootItem02}>
                                    Apple store
                                </AtomTypography>
                            </AtomButton>
                        </AtomHidden>
                        <AtomTypography className={classes.rootItem03}>
                            © 2017 Hahalolo. All rights reserved
                        </AtomTypography>
                    </AtomGrid>
                    <AtomGrid item xs={12} md={2}>
                        <AtomGrid container justify='center' >
                            <AtomButton href="vn" type='vietnam' className={classes.rootButton04}>
                                Tiếng Việt
                            </AtomButton>
                                <AtomDivider orientation="vertical" flexItem />
                            <AtomButton href="en" type='english' className={classes.rootButton04}>
                                English
                            </AtomButton> 
                        </AtomGrid> 
                    </AtomGrid>
                </AtomGrid>
            </AtomContainer>
        </AtomBox>        
        <AtomHidden mdUp>
            <AtomBox className={classes.rootItem06}>
                <AtomGrid container justify='space-between' alignItems='center'>                       
                    <AtomGrid item xs={8} >
                        <AtomTypography className={classes.rootItem0601}>
                            ỨNG DỤNG HAHALOLO 
                        </AtomTypography>
                        <AtomTypography className={classes.rootItem0602}>
                            KẾT NỐI DỄ DÀNG & NHANH CHÓNG
                        </AtomTypography>
                    </AtomGrid>
                    <AtomGrid item xs={4}>
                        <AtomGrid container justify='flex-end'>
                            <AtomButton 
                                variant='contained'
                                href='https://landing-mobile.hahalolo.com/'
                                className={classes.rootItem0603}>
                                <AtomTypography className={classes.rootItem0604}>
                                    Tải ngay
                                    <GetAppIcon />
                                </AtomTypography>    
                            </AtomButton>
                        </AtomGrid>
                    </AtomGrid>                            
                </AtomGrid>
            </AtomBox>
        </AtomHidden>
      </AtomBox>
    );
}