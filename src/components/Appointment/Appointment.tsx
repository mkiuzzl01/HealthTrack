"use client";
import React from "react";
import appointment from "@public/assets/appointment-img.jpg";
import Image from "next/image";
import {
  Button,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import dayjs from "dayjs";
import { DemoContainer, DemoItem } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { MobileDatePicker } from "@mui/x-date-pickers/MobileDatePicker";
import { MobileTimePicker } from "@mui/x-date-pickers/MobileTimePicker";

const Appointment = () => {
  return (
    <div className="lg:w-3/4 mx-auto grid grid-cols-1 lg:grid-cols-2 my-20 gap-10 lg:px-0 px-5">
      <div>
        <Image className="rounded" src={appointment} alt="" />
      </div>
      <div className="border rounded border-[#0057b8] p-5">
        <div className="text-center text-xl mb-5">
          <h4 className="font-medium">Make An Appointment</h4>
        </div>
        <form>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField id="name" label="Name" variant="outlined" fullWidth />
            </Grid>
            <Grid item xs={12}>
              <TextField
                id="email"
                label="Email"
                variant="outlined"
                fullWidth
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                id="phone"
                label="Phone"
                variant="outlined"
                fullWidth
              />
            </Grid>
            <Grid item xs={12}>
              <FormControl fullWidth>
                <InputLabel id="doctor">Select Doctor</InputLabel>
                <Select labelId="doctor" id="doctor" label="Select Doctor">
                  <MenuItem value="Dr. Smith">Dr. Smith</MenuItem>
                  <MenuItem value="Dr. Johnson">Dr. Johnson</MenuItem>
                  <MenuItem value="Dr. Williams">Dr. Williams</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={6}>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DemoContainer components={["MobileDatePicker"]}>
                  <DemoItem>
                    <MobileDatePicker defaultValue={dayjs("2022-04-17")} />
                  </DemoItem>
                </DemoContainer>
              </LocalizationProvider>
            </Grid>
            <Grid item xs={12} sm={6}>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DemoContainer components={["MobileTimePicker"]}>
                  <DemoItem>
                    <MobileTimePicker
                      defaultValue={dayjs("2022-04-17T15:30")}
                    />
                  </DemoItem>
                </DemoContainer>
              </LocalizationProvider>
            </Grid>
            <Grid item xs={12}>
              <Button
                className="bg-[#0057b8]"
                variant="contained"
                fullWidth
                disableElevation
              >
                Submit
              </Button>
            </Grid>
          </Grid>
        </form>
      </div>
    </div>
  );
};

export default Appointment;
