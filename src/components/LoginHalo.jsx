import React from "react";

import AtomButton from "../components/Atomic/atoms/AtomButton/index";
import AtomLink from "../components/Atomic/atoms/AtomLink/index";
import AtomTextField from "../components/Atomic/atoms/AtomTextField/index";
import AtomGrid from "../components/Atomic/atoms/AtomGrid/index";
import AtomTypography from "../components/Atomic/atoms/AtomTypography/index";
import AtomPaper from "../components/Atomic/atoms/AtomPaper/index";
import AtomDivider from "../components/Atomic/atoms/AtomDivider/index";
import AtomHidden from "../components/Atomic/atoms/AtomHidden/index";

import PropTypes from 'prop-types';

import { makeStyles } from '@material-ui/core/styles';

import AndroidIcon from "../icons/Pages/AndroidIcon";
import AppleIcon from '../icons/Pages/AppleIcon';
import GetAppIcon from '../icons/Pages/GetAppIcon';
 
import ImgLogo from '../img/Pages/Logo';

const useStyles = makeStyles ((theme) => ({

    rootPaper01: {
        position: 'relative',
    },
    rootItem01: {
        marginTop : theme.spacing(6),
        
    },
        rootItem0101: {
            marginBottom : theme.spacing(7),
        },
        rootItem0102: {
            fontSize : '35px',
            fontWeight : 'bold',
        },
        rootItem0103: {
            marginTop : theme.spacing(1),
            fontSize : '15px',
            color : '#757575',
        },
    rootItem02: {
        marginTop : theme.spacing(6),
        width : theme.spacing(48),
        height : theme.spacing(48),
        display : 'flex',
        flexDirection : 'column',
        alignItems : 'center',
    },
        rootItem0201: {
            marginTop : theme.spacing(1),
            fontWeight : 'bold',
        }, 
        rootItem0202: {
            width : '85%',
            marginTop : theme.spacing(3),
        },
            rootItem020201: {
                marginTop : theme.spacing(2),
            },
            rootItem020202: {
                marginTop : theme.spacing(4),
                marginBottom : theme.spacing(2),
                borderRadius : '24px',
                textTransform: 'none',
                backgroundColor : '#039be5',
                color : 'white',
            },
            rootItem020203: {
                color : '#00acc1',
            },
            rootItem020204: {
                marginTop : theme.spacing(1),
                color : 'grey',
                fontSize : '12px',
            },
            rootItem020205: {
                marginTop : theme.spacing(2),
            },
            rootItem020206: {
                marginTop : theme.spacing(2),
                borderRadius : '24px',
                textTransform : 'none',
                backgroundColor : '#4caf50',
                color : 'white',
            },
        rootItem00101: {
            marginTop : theme.spacing(4),
            marginBottom : theme.spacing(2),
            borderRadius : '24px',
            textTransform : 'none',
            width : '140px'
        },
        rootItem00102: {
            fontSize : '12px',
        },
        rootItem00103: {
            marginTop : theme.spacing(2),
            marginBottom : theme.spacing(1),
        },
        rootItem00104: {
            marginLeft : theme.spacing(3)
        },
        rootItem00105: {
            marginLeft : theme.spacing(1),    
        },
    rootItem03: {
        marginTop : theme.spacing(12),
        backgroundColor : '#eeeeee',
        height : '200px',
        width : '100%',
    },
    rootItem04: {
        position : 'fixed',
        padding : '5px',
        backgroundColor : '#616161',
        height : '60px',
        width : '100%',
        bottom : '0',
        
    },  
        rootItem0401: {
            color : '#039be5',
            fontSize : '20px',
            fontWeight : 'bold',
            marginLeft : '10px'
        }, 
        rootItem0402: {
            color : '#039be5',
            fontSize : '10px',
            marginLeft : '10px'
        }, 
        rootItem0403: {
            backgroundColor : '#039be5',            
        }, 
        rootItem0404: {
            color : 'white',
            fontSize : '15px',           
        }, 
  }));

  LoginHahalolo.propTypes = {
    width: PropTypes.oneOf(['lg', 'md', 'sm', 'xl', 'xs']).isRequired,
  };

export default function LoginHahalolo() { 
    const classes = useStyles();
    return(
        <AtomGrid container justify='space-around' className={classes.rootPaper01}>
            <AtomGrid item md={6} xs={12} className={classes.rootItem01}>
                <AtomGrid container justify='center'>
                    <AtomGrid item md={12}>
                        <AtomGrid container justify='center'>
                            <AtomGrid item md={4} className={classes.rootItem0101}>
                                <ImgLogo/>
                            </AtomGrid>
                        </AtomGrid>
                    </AtomGrid>
                    <AtomGrid item md={4}>
                        <AtomHidden mdDown>
                            <AtomGrid item >
                                <AtomTypography>
                                    Do you like
                                </AtomTypography>
                            </AtomGrid>
                            <AtomGrid item xs={12} >
                                <AtomTypography className={classes.rootItem0102}>
                                    travelling?
                                </AtomTypography>
                            </AtomGrid>
                                <AtomGrid item xs={10}>
                                    <AtomTypography>
                                        Do you want to know more about next destination?                                   
                                    </AtomTypography>
                                </AtomGrid>
                            <AtomGrid item >
                                <AtomTypography className={classes.rootItem0103}>
                                    Sign in with quick operation to experience and explore our awesome conveniences.                                   
                                </AtomTypography>
                            </AtomGrid>
                        </AtomHidden>
                    </AtomGrid>
                </AtomGrid>
            </AtomGrid>
            <AtomGrid item md={6} xs={12}>
                <AtomGrid container justify='center'>
                    <AtomGrid item>
                        <AtomPaper className={classes.rootItem02} elevation={3} >
                                <AtomTypography variant='h6' className={classes.rootItem0201}>
                                    Đăng nhập
                                </AtomTypography>
                                <form className={classes.rootItem0202}>
                                    <AtomTextField
                                        fullWidth
                                        id='email'
                                        label='Email hoặc số điện thoại'
                                    />
                                    <AtomTextField
                                        fullWidth
                                        id='password'
                                        label='Mật khẩu'
                                        className={classes.rootItem020201}
                                    />
                                    <AtomButton
                                        type='login'
                                        fullWidth
                                        variant='contained'
                                        size='large'
                                        className={classes.rootItem020202}
                                    >
                                        Đăng nhập
                                    </AtomButton>
                                        <AtomGrid container justify='center'>
                                            <AtomLink 
                                                href='https://www.hahalolo.com/auth/forgotpw' 
                                                variant='body2' 
                                                className={classes.rootItem020203}
                                            >
                                                Quên mật khẩu?
                                            </AtomLink>
                                        </AtomGrid>
                                            <div>
                                                <AtomGrid container>
                                                    <AtomGrid item xs={5} className={classes.rootItem020205}>
                                                        <AtomDivider/>
                                                    </AtomGrid>
                                                    <AtomGrid item xs={2}>
                                                        <AtomGrid container justify='center'>
                                                            <AtomTypography className={classes.rootItem020204}>hoặc</AtomTypography>
                                                        </AtomGrid>
                                                    </AtomGrid>                                   
                                                    <AtomGrid item xs={5} className={classes.rootItem020205}>
                                                        <AtomDivider/>
                                                    </AtomGrid>
                                                </AtomGrid>
                                            </div>
                                            <AtomGrid container justify='center'>
                                                <AtomButton
                                                    type='registration'
                                                    variant='contained'
                                                    size='large'
                                                    className={classes.rootItem020206}
                                                >
                                                    Đăng ký
                                                </AtomButton>
                                            </AtomGrid>
                                    </form>
                            </AtomPaper>                             
                    </AtomGrid>
                </AtomGrid>
            </AtomGrid>
            <AtomGrid item md={12} xs={12} className={classes.rootItem03}>
                <AtomGrid container >
                    <AtomGrid item md={6} xs={12}>
                        <AtomGrid container justify='center' >
                            <AtomHidden smDown>
                                <AtomGrid item className={classes.rootItem00104}>
                                    <AtomButton
                                        type='downloadGP'
                                        variant='outlined'
                                        size='large'
                                        href='https://play.google.com/store/apps/details?id=com.hahalolo.android.social&hl=en'
                                        className={classes.rootItem00101}
                                    >
                                        <AtomGrid container justify='space-between' alignItems='center' >
                                            <AtomGrid item>
                                                <AndroidIcon/>
                                            </AtomGrid>
                                            <AtomGrid item className={classes.rootItem00102}>
                                                Google play
                                            </AtomGrid>
                                        </AtomGrid>
                                    </AtomButton>
                                </AtomGrid>
                                <AtomGrid item className={classes.rootItem00105}>
                                    <AtomButton
                                        type='downloadAT'
                                        variant='outlined'
                                        size='large'
                                        href='https://apps.apple.com/us/app/hahalolo/id1437417120'
                                        className={classes.rootItem00101}
                                    >
                                        <AtomGrid container justify='space-between' alignItems='center'>
                                            <AtomGrid item>
                                                <AppleIcon/>
                                            </AtomGrid>
                                            <AtomGrid item className={classes.rootItem00102}>
                                                Apple store
                                            </AtomGrid>
                                        </AtomGrid>
                                    </AtomButton>
                                </AtomGrid>
                            </AtomHidden>
                            <AtomGrid item md={12} xs={12}>                                 
                                <AtomGrid container justify='center'>
                                    <AtomGrid item>
                                        <AtomTypography className={classes.rootItem00102}>
                                            © 2017 Hahalolo. All rights reserved
                                        </AtomTypography>       
                                    </AtomGrid>     
                                </AtomGrid>                            
                            </AtomGrid>
                        </AtomGrid>
                    </AtomGrid>
                    <AtomGrid item md={6} xs={12}>
                        <AtomGrid container spacing={5} justify='center' className={classes.rootItem00103}>
                            <AtomGrid item>
                                <AtomLink href="vn" >
                                    Tiếng Việt
                                </AtomLink>
                            </AtomGrid>
                                <AtomDivider orientation="vertical" flexItem />
                            <AtomGrid item>
                                <AtomLink href="en" >
                                    English
                                </AtomLink>  
                            </AtomGrid>
                        </AtomGrid>
                    </AtomGrid>
           
                </AtomGrid>
            </AtomGrid>
            <AtomHidden mdUp>
                <AtomGrid item md={12} xs={12} className={classes.rootItem04}>
                    <AtomGrid container justify='space-between' alignItems='center'>                       
                        <AtomGrid item xs={8} >
                            <AtomTypography className={classes.rootItem0401}>
                                ỨNG DỤNG HAHALOLO 
                            </AtomTypography>
                            <AtomTypography className={classes.rootItem0402}>
                                KẾT NỐI DỄ DÀNG & NHANH CHÓNG
                            </AtomTypography>
                        </AtomGrid>
                        <AtomGrid item xs={4}>
                            <AtomGrid container justify='flex-end'>
                                <AtomButton 
                                    variant='contained'
                                    href='https://play.google.com/store/apps/details?id=com.hahalolo.android.social&hl=en'
                                    className={classes.rootItem0403}>
                                    <AtomGrid container>
                                        <AtomGrid item>
                                            <AtomTypography className={classes.rootItem0404}>
                                                Tải ngay
                                            </AtomTypography>    
                                        </AtomGrid> 
                                        <AtomGrid item className={classes.rootItem0404}>
                                            <GetAppIcon/>
                                        </AtomGrid> 
                                    </AtomGrid>
                                </AtomButton>
                            </AtomGrid>
                        </AtomGrid>                            
                    </AtomGrid>
                </AtomGrid>
            </AtomHidden>
        </AtomGrid>
    );

}