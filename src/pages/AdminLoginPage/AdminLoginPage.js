import React, { useState } from "react";
import { Container, Grid, TextField, Button, Typography, Paper, Dialog, DialogTitle, DialogContent, DialogActions } from "@mui/material";
import { Formik, Form, Field } from "formik";
import { ErrorOutline } from "@material-ui/icons";
import * as Yup from "yup";
import { useHistory } from "react-router-dom";
import { styled } from "@mui/system";
import NewLogo from '../../assets/images/New-logo-light.png'
// Styled Components
const LoginContainer = styled("div")({
  height: "100vh",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  background: "#f8f9fa",
});

const PaperStyled = styled(Paper)({
  padding: "20px",
  maxWidth: "500px",
  borderRadius: "10px",
});

const ImageContainer = styled("div")({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  padding: "30px",
  background: "#fff",
  borderRadius: "10px 0 0 10px",
});

const SignInButton = styled(Button)({
  background: "linear-gradient(to right, #1e3c72, #2a5298)", // Blue gradient
  color: "#fff",
  borderRadius: "20px",
  marginTop: "20px",
  padding: "10px 20px",
  fontWeight: "bold",
  textTransform: "none",
  "&:hover": {
    background: "#1a3a70",
  },
});

// Validation Schema
const validationSchema = Yup.object({
  email: Yup.string().email("Invalid email format").required("Required"),
  password: Yup.string().min(6, "Minimum 6 characters").required("Required"),
});

const AdminLoginPage = () => {
  const [errorDialogOpen, setErrorDialogOpen] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const history = useHistory();

  const handleLogin = (values) => {
    if (values.email === "admin@gmail.com" && values.password === "Admin@@2025") {
      localStorage.setItem("adminAuth", "true");
      history.push("/admin-panel");
      setErrorMessage('')
    } else {
      setErrorMessage("Invalid Credentials. Please try again.");
      setErrorDialogOpen(true);
    }
  };

  return (
    <LoginContainer>
      <Container>
        <Grid container spacing={2} justifyContent="center">
          {/* Left Image Section */}
          <Grid item xs={12} md={5}>
            <ImageContainer>
              <img src={NewLogo} alt="Aspire Market Trendz" style={{ width: "100%" }} />
            </ImageContainer>
          </Grid>

          {/* Right Login Form */}
          <Grid item xs={12} md={7}>
            <PaperStyled elevation={3}>
              <Typography variant="h5" fontWeight="bold" textAlign="center" mb={2}>
                Login
              </Typography>

              <Formik
                initialValues={{ email: "", password: "" }}
                validationSchema={validationSchema}
                onSubmit={handleLogin}
              >
                {({ errors, touched }) => (
                  <Form>
                    <Field
                      as={TextField}
                      label="Username/Email address"
                      name="email"
                      fullWidth
                      margin="normal"
                      error={touched.email && Boolean(errors.email)}
                      helperText={touched.email && errors.email}
                    />

                    <Field
                      as={TextField}
                      label="Password"
                      type="password"
                      name="password"
                      fullWidth
                      margin="normal"
                      error={touched.password && Boolean(errors.password)}
                      helperText={touched.password && errors.password}
                    />

                    <SignInButton type="submit" variant="contained" fullWidth>
                      Sign In
                    </SignInButton>
                  </Form>
                )}
              </Formik>
            </PaperStyled>
          </Grid>
        </Grid>
      </Container>
      {/* Error Dialog for Invalid Credentials */}
      <Dialog open={errorDialogOpen} onClose={() => setErrorDialogOpen(false)}>
        <DialogTitle style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <ErrorOutline style={{ color: "red" }} />
          Error
        </DialogTitle>
        <DialogContent>
          <Typography>{errorMessage}</Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setErrorDialogOpen(false)} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </LoginContainer>
  );
};

export default AdminLoginPage;
