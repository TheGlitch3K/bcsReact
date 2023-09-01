import { getConnection } from '../../lib/db';
import Booking from '@models/booking';
import { vehicles } from '@utility/constants';
import nodemailer from 'nodemailer'
import { BookingSchemaValidator } from 'validators';
import axios from 'axios';
const API_KEY = process.env.GOOGLE_MAPS_API_KEY;

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false,
  auth: {
    user: "myriadmeta@gmail.com",
    pass: "vqpsnajozbfvthzm",
  },
});

async function sendBookingEmails(bookingInfo) {
  //
  const customerEmail = bookingInfo.email;
  const businessEmail = "myriadmeta@gmail.com";

  const customerMessage = {
    from: "myriadmeta@gmail.com",
    to: customerEmail,
    subject: "Booking Confirmation",
    html: ` <html> <head> <style>
    body{
      font-family: Arial, sans-serif;
      font-size: 14px;
      line-height: 1.2;
      color: #333;
      background-color: #f2f2f2;
      text-align: center;
    }
    h1{
      font-size: 28px;
      font-weight: bold;
      color: #b58d3c;
      
    }
    h2{
      font-size: 20px;
      font-weight: bold;
      color: #b58d3c;
      text-align: center;
      margin: 20px 0;
    }
    p{
      margin: 0 0 10px 0;
    }
    .container{
      max-width: 600px;
      margin: 0 auto;
      padding: 20px;
      background-color: #fff;
      box-shadow: 0 0 10px #b58d3c;
    }
    .btn{
      background-color: #b58d3c;
      color: #fff;
      font-size: 16px;
      padding: 10px 20px;
      border-radius: 5px;
      text-decoration: none;
      margin: 10px 0;
      display: inline-block;
    }
    .btn:hover{
      background-color: #a16e2c;
    }
    .logo img {
      width: 200px;
      height: 200px;
      }      
  </style>
  <div class="logo">
  <img src="https://media.discordapp.net/attachments/1056481247758663720/1071995112948768828/logoConfirmationEmail.png?width=1368&height=1371" alt="logo">
</div> </head> <body> <h1>Booking Confirmation</h1>
<p>Greetings ${bookingInfo.name},</p>
  <p>We are thrilled to confirm your booking with BCS. Mark your calendars, your pick up is scheduled for the ${bookingInfo.date} at ${bookingInfo.time}. We are all set to make your journey comfortable and memorable!</p>
  <p>Vehicle: ${bookingInfo.vehicle}</p>
  <p>Departing from: ${bookingInfo.origin}</p>
  <p>Arriving at: ${bookingInfo.destination}</p>
  <p>Cost for the journey: $${bookingInfo.totalCost}</p>
  <p>Thank you for choosing BCS. Best regards, The BCS Team</p> </body> </html>`,
  };

  const businessMessage = {
    from: "myriadmeta@gmail.com",
    to: businessEmail,
    subject: "New Booking",
    html: `<html> <head> <style>
    body{
      font-family: Arial, sans-serif;
      font-size: 14px;
      line-height: 1.2;
      color: #333;
      background-color: #f2f2f2;
      text-align: center;
    }
    h1{
      font-size: 28px;
      font-weight: bold;
      color: #b58d3c;
      
    }
    h2{
      font-size: 20px;
      font-weight: bold;
      color: #b58d3c;
      text-align: center;
      margin: 20px 0;
    }
    p{
      margin: 0 0 10px 0;
    }
    .container{
      max-width: 600px;
      margin: 0 auto;
      padding: 20px;
      background-color: #fff;
      box-shadow: 0 0 10px #b58d3c;
    }
    .btn{
      background-color: #b58d3c;
      color: #fff;
      font-size: 16px;
      padding: 10px 20px;
      border-radius: 5px;
      text-decoration: none;
      margin: 10px 0;
      display: inline-block;
    }
    .btn:hover{
      background-color: #a16e2c;
    }
    .logo img {
      width: 200px;
      height: 200px;
      }      
  </style>
  <div class="logo">
  <img src="https://media.discordapp.net/attachments/1056481247758663720/1071995112948768828/logoConfirmationEmail.png?width=1368&height=1371" alt="logo">
</div> </head> <body> <h1>New Booking</h1> <p>Name: ${bookingInfo.name}</p>
<p>Email: ${customerEmail}</p>
<p>Date: ${bookingInfo.date}</p>
<p>Time: ${bookingInfo.time} </p>
<p>Vehicle: ${bookingInfo.vehicle}</p>
<p>Origin: ${bookingInfo.origin}</p>
<p>Destination: ${bookingInfo.destination}</p>
<p>Total Cost: $${bookingInfo.totalCost}</p></body> </html>`,
  };
  try {
    await transporter.sendMail(customerMessage);
    await transporter.sendMail(businessMessage);
  } catch (error) {
    console.error(error);
  }
}

async function calculateRideInfo(origin, destination) {
  try {
    const url = `https://maps.googleapis.com/maps/api/distancematrix/json?origins=${origin}&destinations=${destination}%mode=driving&units=imperial&key=${API_KEY}`;
    const response = await axios.get(url);
    console.log(response.data.rows[0].elements[0].distance);
    console.log(response.data.rows[0].elements[0].duration);
    console.log(origin);
    console.log(destination);
    return {
      distance: response.data.rows[0].elements[0].distance.value,
      duration: response.data.rows[0].elements[0].duration.value,
    };
  } catch (error) {
    console.log(error);
    return { distance: 0, duration: 0 };
  }
}

async function handleBookingForm(req, res) {
  const first_name = req.body.first_name;
  const last_name = req.body.last_name;
  const email = req.body.email;
  const phone_number = req.body.phone_number;
  const date = req.body.ride_date;
  const pickup_time = req.body.pickup_time;
  const pickup_location = req.body.pickup_location;
  const dropoff_location = req.body.dropoff_location;
  const number_of_passengers = req.body.number_of_passengers;
  const luggage = req.body.luggage;
  const vehicle_type = req.body.vehicle_type;
  const addData =  { first_name, last_name, email, phone_number, date, pickup_time, pickup_location, dropoff_location, number_of_passengers,luggage,vehicle_type }

  const error = await BookingSchemaValidator(addData)
    console.log("🚀 ~ file: booking.js ~ line 232 ~ handleBookingForm ~ error", error)
    if(error) {
    return res.status(400).json({error})
  }

  const rideInfo = await calculateRideInfo(pickup_location, dropoff_location);
  const vehicleInfo = vehicles[vehicle_type];
  const cost =
    vehicleInfo.baseCost +
    vehicleInfo.costPerMile * (rideInfo.distance / 1609.34) +
    vehicleInfo.costPerMinute * (rideInfo.duration / 60);

  var formattedCost = cost.toFixed(2);
  console.log("Total Cost: $" + formattedCost);

  // Format the pickup time in "standard" format
  const pickupTime = new Date(`${date} ${pickup_time}`).toLocaleTimeString(
    "en-US",
    {
      hour: "numeric",
      minute: "numeric",
      hour12: true,
    }
  );

  // Format the date in the "standard"
  const formattedDate = new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  // Insert the booking into the database
  await getConnection();
  try {
    await Booking.create({...addData, cost})
    sendBookingEmails({
      name: first_name,
      email: email,
      vehicle: vehicle_type,
      origin: pickup_location,
      destination: dropoff_location,
      totalCost: formattedCost,
      date: formattedDate,
      time: pickupTime,
    });
    res.status(200).json({ message: "Your booking has been confirmed!"});
  } catch (error) {
    res.status(400).json({ message:  "There was an error with your booking. Please try again later.",error});
  }
}

export default async function handler(req, res) {
  const requestMethod = req.method;
  switch (requestMethod) {
    case 'POST':
      return await handleBookingForm(req, res)
    case 'POST':
        return await handleBookingForm(req, res)
    default:
      res.status(200).json({ message: 'Welcome to Booking Routes!' })
  }
}