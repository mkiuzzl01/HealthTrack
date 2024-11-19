import React from "react";
import contactUs from "@public/assets/contact03.jpg";
import {
  Box,
  Grid,
  Typography,
  TextField,
  Button,
  Container,
} from "@mui/material";
import Image from "next/image";

const Contact = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#fff",
        py: 8,
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} md={6}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
             
            <Image src={contactUs} alt="Contact Us"/>
            </Box>
          </Grid>

          <Grid item xs={12} md={6}>
            <Typography variant="h4" component="h2" gutterBottom>
              Get in touch
            </Typography>
            <Typography variant="body1" gutterBottom>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </Typography>
            <form>
              <Grid container spacing={2} sx={{ mt: 2 }}>
                <Grid item xs={12}>
                  <TextField
                    label="Your Name *"
                    placeholder="Enter your name"
                    fullWidth
                    variant="outlined"
                    InputProps={{
                      style: { backgroundColor: "#f9f9f9" },
                    }}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    label="Your Email *"
                    placeholder="Enter your email"
                    fullWidth
                    variant="outlined"
                    InputProps={{
                      style: { backgroundColor: "#f9f9f9" },
                    }}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    label="Subject"
                    placeholder="Enter the subject"
                    fullWidth
                    variant="outlined"
                    InputProps={{
                      style: { backgroundColor: "#f9f9f9" },
                    }}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    label="Your Message"
                    placeholder="Write your message here"
                    multiline
                    rows={4}
                    fullWidth
                    variant="outlined"
                    InputProps={{
                      style: { backgroundColor: "#f9f9f9" },
                    }}
                  />
                </Grid>
                <Grid item xs={12}>
                  <Button
                    type="submit"
                    variant="contained"
                    fullWidth
                    sx={{
                      backgroundColor: "#0057b8",
                      color: "#fff",
                      padding: "10px",
                      borderRadius: "30px",
                      "&:hover": { backgroundColor: "#004494" },
                    }}
                  >
                    Submit
                  </Button>
                </Grid>
              </Grid>
            </form>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Contact;
