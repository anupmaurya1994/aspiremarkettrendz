import React from 'react';
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core";
import { conetent } from '../../assets/js/globalStyle';
const useStyles = makeStyles((theme) => ({
    conetent: conetent,
}));

function SignupPage() {
    const classes = useStyles();

    return (<Container maxWidth="lg" className={`${classes.conetent} container`}>
        <main>
            <h1>SignupPage</h1>
        </main>
    </Container>
    )
}

export default SignupPage;