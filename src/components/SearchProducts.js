import ButtonGroup from "@material-ui/core/ButtonGroup";
import React from "react";
import AtomBox from "./Atomic/atoms/AtomBox";
import AtomButton from "./Atomic/atoms/AtomButton";
import AtomGrid from "./Atomic/atoms/AtomGrid";
import AtomHidden from "./Atomic/atoms/AtomHidden";
import AtomTextField from "./Atomic/atoms/AtomTextField";
import AtomTypography from "./Atomic/atoms/AtomTypography";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import IconButton  from "@material-ui/core/IconButton";
import AtomAvatar from "./Atomic/atoms/AtomAvatar";

import Img from "../img/Pages/Pic01";

import FormatListBulletedIcon from '@material-ui/icons/FormatListBulleted';
import AppsIcon from '@material-ui/icons/Apps';
import ShareIcon from '@material-ui/icons/Share';
import CreateIcon from '@material-ui/icons/Create';
import DeleteIcon from '@material-ui/icons/Delete';

import { makeStyles } from "@material-ui/core";


const useStyles = makeStyles((theme) =>({
    rootButton01: {
        height : 100,
        
    },
}));

export default function SearchProducts() {
    const classes = useStyles();
    return (
        <AtomBox p={2} maxWidth='100%'>
            <AtomBox>
                <AtomGrid container spacing={2}>
                    <AtomGrid item xs={12}>
                        <AtomTypography variant='h6'>
                            Search Products
                        </AtomTypography>
                    </AtomGrid>
                    <AtomGrid item xs={12} md='true'>
                        <AtomGrid container spacing={2}>
                            <AtomGrid item md={4} xs={12}>
                                <AtomTextField
                                    id="keywords"
                                    label="Keywords"
                                    variant='outlined'
                                    size="small"
                                    fullWidth
                                />
                            </AtomGrid>
                            <AtomGrid item md={4} xs={12}>
                                <AtomTextField
                                    id="category"
                                    label="Category"
                                    variant='outlined'
                                    select
                                    size="small"
                                    fullWidth
                                />
                            </AtomGrid>
                            <AtomGrid item md={4} xs={12}>
                                <AtomTextField
                                    id="supplier"
                                    label="Supplier"
                                    variant='outlined'
                                    select
                                    size="small"
                                    fullWidth
                                />
                            </AtomGrid>
                            <AtomGrid item md={4} xs={12}>
                                <AtomTextField
                                    id="startdate"
                                    label="Start date"
                                    variant='outlined'
                                    size="small"
                                    fullWidth
                                    defaultValue='31/05/2021'
                                />
                            </AtomGrid>
                            <AtomGrid item md={4} xs={12}>
                                <AtomTextField
                                    id="enddate"
                                    label="End date"
                                    variant='outlined'
                                    size="small"
                                    fullWidth
                                    defaultValue='31/05/2021'
                                />
                            </AtomGrid>
                        </AtomGrid>
                    </AtomGrid>
                    <AtomGrid item xs='true' md={2}>
                        <AtomButton
                            type="search"
                            variant="contained"
                            color="primary"
                            size='large'
                            fullWidth
                            className={classes.rootButton01}
                        >
                            Search
                        </AtomButton>
                    </AtomGrid>
                </AtomGrid>
            </AtomBox>
            <AtomBox>
                <AtomGrid container justify='center' spacing={2}>
                    <AtomGrid item xs={12}>
                        <AtomHidden smDown>
                            <AtomGrid container justify='flex-end'>
                                <AtomGrid item>
                                    <ButtonGroup color="primary" aria-label="outlined primary button group">
                                        <AtomButton>
                                            <AppsIcon/>
                                        </AtomButton>
                                        <AtomButton>
                                            <FormatListBulletedIcon/>
                                        </AtomButton>
                                    </ButtonGroup>
                                </AtomGrid>
                            </AtomGrid>
                        </AtomHidden>
                    </AtomGrid>
                    <AtomGrid item xs={12}>
                        <AtomGrid container spacing={2}>
                            <AtomGrid item md={6} lg={3} xs={12}>
                                <Card>
                                    <CardHeader
                                        avatar={
                                            <AtomAvatar>
                                                <Img/>
                                            </AtomAvatar>
                                        }
                                        title="Saigon Tourist"
                                        subheader="30 minute ago"
                                    />
                                    <CardMedia>
                                        <Img/>
                                    </CardMedia>
                                    <CardContent>
                                        <AtomTypography variant="body2" component="p">
                                            Tour Jeep 03: Ngắm Hoàng hôn trên đồi Trinh nữ - Bàu Trắng
                                        </AtomTypography>
                                    </CardContent>
                                    <CardContent>
                                        <AtomTypography color='error'>
                                            90.000.000 đ
                                        </AtomTypography>
                                    </CardContent>
                                    <CardContent >
                                        <AtomGrid container justify='space-between'>
                                            <AtomGrid item>
                                                <AtomTypography variant="body2" color='textSecondary'>
                                                    Start date: 
                                                </AtomTypography>
                                            </AtomGrid>
                                            <AtomGrid item>
                                                <AtomTypography variant="body2">
                                                    Aug 20, 2020
                                                </AtomTypography>
                                            </AtomGrid>
                                        </AtomGrid>
                                        <AtomGrid container justify='space-between'>
                                            <AtomGrid item>
                                                <AtomTypography variant="body2" color='textSecondary'>
                                                    End date: 
                                                </AtomTypography>
                                            </AtomGrid>
                                            <AtomGrid item>
                                                <AtomTypography variant="body2">
                                                    Nov 20, 2020
                                                </AtomTypography>
                                            </AtomGrid>
                                        </AtomGrid>
                                        <AtomGrid container justify='space-between'>
                                            <AtomGrid item>
                                                <AtomTypography variant="body2" color='textSecondary'>
                                                    Commission: 
                                                </AtomTypography>
                                            </AtomGrid>
                                            <AtomGrid item>
                                                <AtomTypography variant="body2">
                                                    8%
                                                </AtomTypography>
                                            </AtomGrid>
                                        </AtomGrid>
                                        <AtomGrid container justify='space-between'>
                                            <AtomGrid item>
                                                <AtomTypography variant="body2" color='textSecondary'>
                                                    Reward:
                                                </AtomTypography>
                                            </AtomGrid>
                                            <AtomGrid item>
                                                <AtomTypography variant="body2">
                                                    15%
                                                </AtomTypography>
                                            </AtomGrid>
                                        </AtomGrid>
                                        <AtomGrid container justify='space-between'>
                                            <AtomGrid item>
                                                <AtomTypography variant="body2" color='textSecondary'>
                                                    Commission:
                                                </AtomTypography>
                                            </AtomGrid>
                                            <AtomGrid item>
                                                <AtomTypography variant="body2">
                                                    2%
                                                </AtomTypography>
                                            </AtomGrid>
                                        </AtomGrid>
                                    </CardContent>
                                    <CardActions>
                                        <AtomGrid container justify='flex-end' alignItems='center'>
                                            <AtomGrid item>
                                                <AtomButton>
                                                Details
                                                </AtomButton>
                                            </AtomGrid>
                                            <AtomGrid item>
                                                <IconButton>
                                                <ShareIcon/>
                                                </IconButton>
                                            </AtomGrid>
                                            <AtomGrid item>
                                                <IconButton disabled>
                                                <CreateIcon/>
                                                </IconButton>
                                            </AtomGrid>
                                            <AtomGrid item>
                                                <IconButton color="secondary"> 
                                                <DeleteIcon/>
                                                </IconButton>
                                            </AtomGrid>
                                        </AtomGrid>
                                    </CardActions>
                                </Card>
                            </AtomGrid>
                            <AtomGrid item md={6} lg={3} xs={12}>
                            <Card>
                                    <CardHeader
                                        avatar={
                                            <AtomAvatar>
                                                <Img/>
                                            </AtomAvatar>
                                        }
                                        title="Saigon Tourist"
                                        subheader="30 minute ago"
                                    />
                                    <CardMedia>
                                        <Img/>
                                    </CardMedia>
                                    <CardContent>
                                        <AtomTypography variant="body2" component="p">
                                            Tour Jeep 03: Ngắm Hoàng hôn trên đồi Trinh nữ - Bàu Trắng
                                        </AtomTypography>
                                    </CardContent>
                                    <CardContent>
                                        <AtomTypography color='error'>
                                            90.000.000 đ
                                        </AtomTypography>
                                    </CardContent>
                                    <CardContent >
                                        <AtomGrid container justify='space-between'>
                                            <AtomGrid item>
                                                <AtomTypography variant="body2" color='textSecondary'>
                                                    Start date: 
                                                </AtomTypography>
                                            </AtomGrid>
                                            <AtomGrid item>
                                                <AtomTypography variant="body2">
                                                    Aug 20, 2020
                                                </AtomTypography>
                                            </AtomGrid>
                                        </AtomGrid>
                                        <AtomGrid container justify='space-between'>
                                            <AtomGrid item>
                                                <AtomTypography variant="body2" color='textSecondary'>
                                                    End date: 
                                                </AtomTypography>
                                            </AtomGrid>
                                            <AtomGrid item>
                                                <AtomTypography variant="body2">
                                                    Nov 20, 2020
                                                </AtomTypography>
                                            </AtomGrid>
                                        </AtomGrid>
                                        <AtomGrid container justify='space-between'>
                                            <AtomGrid item>
                                                <AtomTypography variant="body2" color='textSecondary'>
                                                    Commission: 
                                                </AtomTypography>
                                            </AtomGrid>
                                            <AtomGrid item>
                                                <AtomTypography variant="body2">
                                                    8%
                                                </AtomTypography>
                                            </AtomGrid>
                                        </AtomGrid>
                                        <AtomGrid container justify='space-between'>
                                            <AtomGrid item>
                                                <AtomTypography variant="body2" color='textSecondary'>
                                                    Reward:
                                                </AtomTypography>
                                            </AtomGrid>
                                            <AtomGrid item>
                                                <AtomTypography variant="body2">
                                                    15%
                                                </AtomTypography>
                                            </AtomGrid>
                                        </AtomGrid>
                                        <AtomGrid container justify='space-between'>
                                            <AtomGrid item>
                                                <AtomTypography variant="body2" color='textSecondary'>
                                                    Commission:
                                                </AtomTypography>
                                            </AtomGrid>
                                            <AtomGrid item>
                                                <AtomTypography variant="body2">
                                                    2%
                                                </AtomTypography>
                                            </AtomGrid>
                                        </AtomGrid>
                                    </CardContent>
                                    <CardActions>
                                        <AtomGrid container justify='flex-end' alignItems='center'>
                                            <AtomGrid item>
                                                <AtomButton>
                                                Details
                                                </AtomButton>
                                            </AtomGrid>
                                            <AtomGrid item>
                                                <IconButton>
                                                <ShareIcon/>
                                                </IconButton>
                                            </AtomGrid>
                                            <AtomGrid item>
                                                <IconButton disabled>
                                                <CreateIcon/>
                                                </IconButton>
                                            </AtomGrid>
                                            <AtomGrid item>
                                                <IconButton color="secondary"> 
                                                <DeleteIcon/>
                                                </IconButton>
                                            </AtomGrid>
                                        </AtomGrid>
                                    </CardActions>
                                </Card>
                            </AtomGrid>
                            <AtomGrid item md={6} lg={3} xs={12}>
                            <Card>
                                    <CardHeader
                                        avatar={
                                            <AtomAvatar>
                                                <Img/>
                                            </AtomAvatar>
                                        }
                                        title="Saigon Tourist"
                                        subheader="30 minute ago"
                                    />
                                    <CardMedia>
                                        <Img/>
                                    </CardMedia>
                                    <CardContent>
                                        <AtomTypography variant="body2" component="p">
                                            Tour Jeep 03: Ngắm Hoàng hôn trên đồi Trinh nữ - Bàu Trắng
                                        </AtomTypography>
                                    </CardContent>
                                    <CardContent>
                                        <AtomTypography color='error'>
                                            90.000.000 đ
                                        </AtomTypography>
                                    </CardContent>
                                    <CardContent >
                                        <AtomGrid container justify='space-between'>
                                            <AtomGrid item>
                                                <AtomTypography variant="body2" color='textSecondary'>
                                                    Start date: 
                                                </AtomTypography>
                                            </AtomGrid>
                                            <AtomGrid item>
                                                <AtomTypography variant="body2">
                                                    Aug 20, 2020
                                                </AtomTypography>
                                            </AtomGrid>
                                        </AtomGrid>
                                        <AtomGrid container justify='space-between'>
                                            <AtomGrid item>
                                                <AtomTypography variant="body2" color='textSecondary'>
                                                    End date: 
                                                </AtomTypography>
                                            </AtomGrid>
                                            <AtomGrid item>
                                                <AtomTypography variant="body2">
                                                    Nov 20, 2020
                                                </AtomTypography>
                                            </AtomGrid>
                                        </AtomGrid>
                                        <AtomGrid container justify='space-between'>
                                            <AtomGrid item>
                                                <AtomTypography variant="body2" color='textSecondary'>
                                                    Commission: 
                                                </AtomTypography>
                                            </AtomGrid>
                                            <AtomGrid item>
                                                <AtomTypography variant="body2">
                                                    8%
                                                </AtomTypography>
                                            </AtomGrid>
                                        </AtomGrid>
                                        <AtomGrid container justify='space-between'>
                                            <AtomGrid item>
                                                <AtomTypography variant="body2" color='textSecondary'>
                                                    Reward:
                                                </AtomTypography>
                                            </AtomGrid>
                                            <AtomGrid item>
                                                <AtomTypography variant="body2">
                                                    15%
                                                </AtomTypography>
                                            </AtomGrid>
                                        </AtomGrid>
                                        <AtomGrid container justify='space-between'>
                                            <AtomGrid item>
                                                <AtomTypography variant="body2" color='textSecondary'>
                                                    Commission:
                                                </AtomTypography>
                                            </AtomGrid>
                                            <AtomGrid item>
                                                <AtomTypography variant="body2">
                                                    2%
                                                </AtomTypography>
                                            </AtomGrid>
                                        </AtomGrid>
                                    </CardContent>
                                    <CardActions>
                                        <AtomGrid container justify='flex-end' alignItems='center'>
                                            <AtomGrid item>
                                                <AtomButton>
                                                Details
                                                </AtomButton>
                                            </AtomGrid>
                                            <AtomGrid item>
                                                <IconButton>
                                                <ShareIcon/>
                                                </IconButton>
                                            </AtomGrid>
                                            <AtomGrid item>
                                                <IconButton disabled>
                                                <CreateIcon/>
                                                </IconButton>
                                            </AtomGrid>
                                            <AtomGrid item>
                                                <IconButton color="secondary"> 
                                                <DeleteIcon/>
                                                </IconButton>
                                            </AtomGrid>
                                        </AtomGrid>
                                    </CardActions>
                                </Card>
                            </AtomGrid>
                            <AtomGrid item md={6} lg={3} xs={12}>
                            <Card>
                                    <CardHeader
                                        avatar={
                                            <AtomAvatar>
                                                <Img/>
                                            </AtomAvatar>
                                        }
                                        title="Saigon Tourist"
                                        subheader="30 minute ago"
                                    />
                                    <CardMedia className={classes.rootMedia}>
                                        <Img/>
                                    </CardMedia>
                                    <CardContent>
                                        <AtomTypography variant="body2" component="p">
                                            Tour Jeep 03: Ngắm Hoàng hôn trên đồi Trinh nữ - Bàu Trắng
                                        </AtomTypography>
                                    </CardContent>
                                    <CardContent>
                                        <AtomTypography color='error'>
                                            90.000.000 đ
                                        </AtomTypography>
                                    </CardContent>
                                    <CardContent >
                                        <AtomGrid container justify='space-between'>
                                            <AtomGrid item>
                                                <AtomTypography variant="body2" color='textSecondary'>
                                                    Start date: 
                                                </AtomTypography>
                                            </AtomGrid>
                                            <AtomGrid item>
                                                <AtomTypography variant="body2">
                                                    Aug 20, 2020
                                                </AtomTypography>
                                            </AtomGrid>
                                        </AtomGrid>
                                        <AtomGrid container justify='space-between'>
                                            <AtomGrid item>
                                                <AtomTypography variant="body2" color='textSecondary'>
                                                    End date: 
                                                </AtomTypography>
                                            </AtomGrid>
                                            <AtomGrid item>
                                                <AtomTypography variant="body2">
                                                    Nov 20, 2020
                                                </AtomTypography>
                                            </AtomGrid>
                                        </AtomGrid>
                                        <AtomGrid container justify='space-between'>
                                            <AtomGrid item>
                                                <AtomTypography variant="body2" color='textSecondary'>
                                                    Commission: 
                                                </AtomTypography>
                                            </AtomGrid>
                                            <AtomGrid item>
                                                <AtomTypography variant="body2">
                                                    8%
                                                </AtomTypography>
                                            </AtomGrid>
                                        </AtomGrid>
                                        <AtomGrid container justify='space-between'>
                                            <AtomGrid item>
                                                <AtomTypography variant="body2" color='textSecondary'>
                                                    Reward:
                                                </AtomTypography>
                                            </AtomGrid>
                                            <AtomGrid item>
                                                <AtomTypography variant="body2">
                                                    15%
                                                </AtomTypography>
                                            </AtomGrid>
                                        </AtomGrid>
                                        <AtomGrid container justify='space-between'>
                                            <AtomGrid item>
                                                <AtomTypography variant="body2" color='textSecondary'>
                                                    Commission:
                                                </AtomTypography>
                                            </AtomGrid>
                                            <AtomGrid item>
                                                <AtomTypography variant="body2">
                                                    2%
                                                </AtomTypography>
                                            </AtomGrid>
                                        </AtomGrid>
                                    </CardContent>
                                    <CardActions>
                                        <AtomGrid container justify='flex-end' alignItems='center'>
                                            <AtomGrid item>
                                                <AtomButton>
                                                Details
                                                </AtomButton>
                                            </AtomGrid>
                                            <AtomGrid item>
                                                <IconButton>
                                                <ShareIcon/>
                                                </IconButton>
                                            </AtomGrid>
                                            <AtomGrid item>
                                                <IconButton disabled>
                                                <CreateIcon/>
                                                </IconButton>
                                            </AtomGrid>
                                            <AtomGrid item>
                                                <IconButton color="secondary"> 
                                                <DeleteIcon/>
                                                </IconButton>
                                            </AtomGrid>
                                        </AtomGrid>
                                    </CardActions>
                                </Card>
                            </AtomGrid>
                        </AtomGrid>
                    </AtomGrid>
                    <AtomGrid item>
                        <AtomButton
                            type="search"
                            variant="contained"
                            color="primary"
                        >
                            Xem thêm
                        </AtomButton>
                    </AtomGrid>
                </AtomGrid>
            </AtomBox>
        </AtomBox>
    );
}