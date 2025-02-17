import React, { useState, useEffect } from 'react';
import { Grid, Button, Card, CardContent, Typography, Container, makeStyles } from '@material-ui/core';
import { conetent } from '../../assets/js/globalStyle';
import { Formik, ErrorMessage, Form } from 'formik';
import * as Yup from 'yup';
import { alpha, styled } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import TextField, { TextFieldProps } from '@mui/material/TextField';
import { OutlinedInputProps } from '@mui/material/OutlinedInput';
import { WhiteTextTypography } from '../../constantData';
import FormControl from "@material-ui/core/FormControl";
import AccountCircleOutlinedIcon from '@material-ui/icons/AccountCircleOutlined';
import MailOutlineOutlinedIcon from '@material-ui/icons/MailOutlineOutlined';
import TextsmsOutlinedIcon from '@material-ui/icons/TextsmsOutlined';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import axios from 'axios';

const useStyles = makeStyles((theme) => ({
    conetent: conetent,
    card: {
        minHeight: "125px",
        maxWidth: "475px",
        background: "rgba(53, 53, 53, 0.19)",
        boxShadow: "3px 4px 4px rgba(0, 0, 0, 0.69)",
        backdropFilter: "blur(10px)",
        margin: "0 auto"
    },
    contactustitle: {
        marginTop: "18px",
        fontFamily: 'Inter',
        fontStyle: 'normal',
        fontWeight: '800',
        fontSize: '20px',
        lineHeight: '24px',
        color: '#CCCCCC',
        marginBottom: '15px'
    },
    contactussubtitle: {
        marginBottom: "15px",
        fontFamily: 'Inter',
        fontStyle: 'normal',
        fontWeight: '300',
        fontSize: '12px',
        lineHeight: '15px'
    },
    usericon: {
        fill: '#ffffff',
    },
    fullname: {
        marginTop: '5px',
        marginLeft: '5px'
    },
    iconandname: {
        display: "inline-flex",
        color: '#CCCCCC'
    },

    formcontrolforsetup: {
        minWidth: '337px',
        margin: '25px auto 0 auto'
    },
    formmargintop: {
        margin: '25px auto 0 auto'
    },
    textareaplaceholder: {
        background: 'rgba(255, 255, 255, 0.08)',
        border: 0,
        padding: '10px',
        fontFamily: 'Inter',
        fontStyle: 'normal',
        fontWeight: '300',
        fontSize: '12px',
        lineHeight: '15px',
        color: '#747474',
        marginBottom: "10px",
    },
    sendmessage: {
        marginTop: "40px",
        width: '337px',
        height: '45px',
        background: '#0D6EC9',
        fontFamily: 'Inter',
        fontStyle: 'normal',
        fontWeight: '700',
        fontSize: '20px',
        lineHeight: '24px',
        color: '#CCCCCC',
        textTransform: 'none'
    },
    errormessage: {
        color: '#FF0000	'
    }


}));

const initState = {
    fullname: '',
    email: '',
    message: ''
}
const validationSchema = Yup.object().shape({
    fullname: Yup.string().required("Name is Required"),
    email: Yup.string().email("Please Enter Valid Email").required("Email is Required"),
    message: Yup.string().required("Message is Required")
});




const BootstrapInput = styled(InputBase)(({ theme }) => ({
    'label + &': {
        marginTop: theme.spacing(3),
    },
    '& .MuiInputBase-input': {
        position: 'relative',
        background: 'rgba(217, 217, 217, 0.06)',
        color: '#747474',
        fontSize: 16,
        padding: '10px 12px',
        marginBottom: "10px",
        transition: theme.transitions.create([
            'border-color',
            'background-color',
            'box-shadow',
        ]),
        '&:focus': {
            boxShadow: `${alpha(theme.palette.primary.main, 0.25)} 0 0 0 0.2rem`,
            borderColor: theme.palette.primary.main,
        },
        placeholdername: {
            fontFamily: 'Inter',
            fontStyle: 'normal',
            fontWeight: '300',
            fontSize: '12px',
            lineHeight: '15px',
            color: '#747474'
        },

    },
}));


function ContactPage() {
    const classes = useStyles();
    useEffect(() => {
        window.scrollTo({ top: 0 });
    }, []);

    const [isSubmited, setIsSubmited] = useState(false)

    const submitContactForm = (values) => {
        const data = {
            name: values.fullname,
            email: values.email,
            message: values.message
        }

        axios.post(`https://marketwealthadvisor.herokuapp.com/api/send-contactus`, data)
            .then(res =>
                console.log(res.message))
        setIsSubmited(true)
            .catch(err =>
                console.log(err))

    }

    return (<Container maxWidth="lg" className={`${classes.conetent} contact-container`}>
        <main>

            <Card className={`${classes.card} cardlight`} >

                <CardContent>
                    <Typography gutterBottom variant="h5" align="center" className={classes.contactustitle}>
                        Contact Us
                    </Typography>
                    {!isSubmited &&
                        <Typography align="center" variant="body2" component="p" className={`${classes.contactussubtitle} simple-text`} gutterBottom>
                            Fill up the form below to send us a message.
                        </Typography>
                    }

                    {!isSubmited &&
                        <div>
                            <Formik
                                initialValues={initState}
                                validationSchema={validationSchema}
                                validateOnChange
                                validateOnBlur
                                onSubmit={(values) => {
                                    submitContactForm(values)

                                }}
                            >
                                {({ values, handleChange, handleBlur, isSubmitting, submitCount, setFieldValue }) => (

                                    <Form>


                                        <Grid container spacing={1} justifyContent="center">
                                            <FormControl variant="standard" className={`${classes.formcontrolforsetup} ${classes.formmargintop}`}>
                                                <div className={`${classes.iconandname} lable`}>
                                                    <AccountCircleOutlinedIcon classname={classes.usericon} />
                                                    <label className={`${classes.fullname} ${classes.contactussubtitle}`}>Full Name</label>
                                                </div>
                                                <BootstrapInput placeholder="John Doe" value={values.fullname} onChange={handleChange} onBlur={handleBlur} className={classes.placeholdername} name='fullname' id="bootstrap-input" />
                                                <span className='text-danger'> <ErrorMessage className="validation-error" name='fullname' /></span>

                                            </FormControl>

                                        </Grid>

                                        <Grid container spacing={1} justifyContent="center">
                                            <FormControl variant="standard" className={classes.formcontrolforsetup}>
                                                <div className={`${classes.iconandname} lable`}>
                                                    <MailOutlineOutlinedIcon classname={classes.usericon} />
                                                    <label className={`${classes.fullname} ${classes.contactussubtitle}`}>Email Address</label>
                                                </div>
                                                <BootstrapInput name='email' value={values.email} onChange={handleChange} onBlur={handleBlur} placeholder="you@company.com" className={classes.placeholdername} id="bootstrap-input" />
                                                <span className='text-danger'> <ErrorMessage className="validation-error" name='email' /></span>

                                            </FormControl>
                                        </Grid>

                                        <Grid container spacing={1} justifyContent="center">
                                            <FormControl variant="standard" className={classes.formcontrolforsetup}>
                                                <div className={`${classes.iconandname} lable`}>
                                                    <TextsmsOutlinedIcon classname={classes.usericon} />
                                                    <label className={`${classes.fullname} ${classes.contactussubtitle}`}>Your Message</label>
                                                </div>
                                                <TextareaAutosize aria-label="minimum height" value={values.message} onChange={handleChange} onBlur={handleBlur} name='message' minRows={5} placeholder="Your Message" className={classes.textareaplaceholder} id="bootstrap-input" />
                                                <span className='text-danger'> <ErrorMessage className="validation-error" name='message' /></span>

                                            </FormControl>
                                        </Grid>

                                        <Grid container spacing={1} justifyContent="center">
                                            <Button variant="contained" type='submit' color="primary" className={classes.sendmessage} >
                                                Send Message
                                            </Button>
                                        </Grid>
                                    </Form>
                                )}
                            </Formik>
                        </div>
                    }

                </CardContent>

                {isSubmited && <>

                    <CardContent>
                        <p className={`${classes.contactussubtitle} simple-text`} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>Thanks Your Message is Submitted Successfully !</p>
                    </CardContent>
                </>}
            </Card>


        </main>
    </Container >
    )
}

export default ContactPage;