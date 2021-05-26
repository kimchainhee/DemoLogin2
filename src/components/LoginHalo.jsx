import React from "react";

import AtomBox from "../components/Atomic/atoms/AtomBox/index";
import AtomButton from "../components/Atomic/atoms/AtomButton/index";
import AtomLink from "../components/Atomic/atoms/AtomLink/index";
import AtomTextField from "../components/Atomic/atoms/AtomTextField/index";
import AtomGrid from "../components/Atomic/atoms/AtomGrid/index";
import AtomTypography from "../components/Atomic/atoms/AtomTypography/index";
import AtomPaper from "../components/Atomic/atoms/AtomPaper/index";
import AtomDivider from "../components/Atomic/atoms/AtomDivider/index";

import { makeStyles } from '@material-ui/core/styles';

import AndroidIcon from "../icons/Pages/AndroidIcon";
import AppleIcon from '@material-ui/icons/Apple';
 
import ImgLogo from '../img/Pages/Logo';

const useStyles = makeStyles ((theme) => ({
    rootPaper01: {
        display : 'flex',
        height : '550px',
        backgroundColor : '#fafafa'
    },
    rootItem01: {
        marginTop : theme.spacing(6),
        marginLeft : theme.spacing(32),
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
    rootPaper02: {
        display : 'flex',
        height : '200px',
        backgroundColor : '#eeeeee'
    },
        rootItem001: {
            marginLeft : theme.spacing(32)
        },
        rootItem00101: {
            marginTop : theme.spacing(4),
            marginRight : theme.spacing(1),
            marginBottom : theme.spacing(2),
            borderRadius : '24px',
            textTransform : 'none',
            width : '140px'
        },
        rootItem00102: {
            fontSize : '12px',
        },
        rootItem00103: {
            marginTop : theme.spacing(4),
        },

  }));

export default function LoginHahalolo() { 
    const classes = useStyles();
    return(
        <AtomGrid container>
            <AtomGrid item xs={12}>
                <AtomBox className={classes.rootPaper01}>
                  <AtomGrid container >
                    <AtomGrid item md={5} className={classes.rootItem01}>
                        <AtomGrid container>
                            <AtomGrid item xs={5}>
                                <AtomGrid container>
                                    <AtomGrid item className={classes.rootItem0101}>
                                        <ImgLogo/>
                                    </AtomGrid>
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
                                </AtomGrid>
                            </AtomGrid>
                        </AtomGrid>
                    </AtomGrid>
                    <AtomGrid item>
                        <AtomGrid container>
                            <AtomPaper className={classes.rootItem02} elevation={3}>
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
            </AtomBox>
            </AtomGrid>
            <AtomGrid item xs={12}>
                <AtomBox className={classes.rootPaper02}>
                    <AtomGrid container>
                        <AtomGrid item md={6} className={classes.rootItem001}>
                            <AtomGrid container>
                                <AtomGrid item>
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
                                <AtomGrid item>
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
                                <AtomGrid item xs={12} >
                                    <AtomTypography className={classes.rootItem00102}>
                                        © 2017 Hahalolo. All rights reserved
                                    </AtomTypography>
                                </AtomGrid>                               
                            </AtomGrid>                                                                                  
                        </AtomGrid>
                        <AtomGrid item md={2}>
                            <div>
                                <AtomGrid container justify='space-evenly' className={classes.rootItem00103}>
                                    <AtomGrid item>
                                        <AtomLink href="vn">
                                            Tiếng Việt
                                        </AtomLink>
                                    </AtomGrid>
                                    <AtomDivider orientation="vertical" flexItem />
                                    <AtomGrid item>
                                        <AtomLink href="en">
                                            English
                                        </AtomLink>
                                    </AtomGrid>
                                </AtomGrid>
                            </div>
                        </AtomGrid>
                    </AtomGrid>
                </AtomBox>
            </AtomGrid>
        </AtomGrid>
    );

}