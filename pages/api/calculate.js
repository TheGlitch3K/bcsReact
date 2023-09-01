import { vehicles } from '@utility/constants';
import axios from 'axios';
const API_KEY = process.env.GOOGLE_MAPS_API_KEY;

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

async function handleCalculateCost(req, res) {
  const { pickup_location,dropoff_location,vehicle_type } = req.body
  const { distance, duration } = await calculateRideInfo(
    pickup_location,
    dropoff_location
  );
  if(distance == 0  || duration == 0){
    res.status(400).json({ message: 'Please Select Valid Location' })  
}
const vehicleInfo = vehicles[vehicle_type];
const cost =
  (vehicleInfo.baseCost +
  vehicleInfo.costPerMile * (distance / 1609.34) +
  vehicleInfo.costPerMinute * (duration / 60)).toFixed(2);

  res.status(200).json({ cost })  
}

export default async function handler(req, res) {
  const requestMethod = req.method;
  switch (requestMethod) {
    case 'POST':
      return await handleCalculateCost(req, res)
    default:
      res.status(200).json({ message: 'Welcome to Booking Routes!' })
  }
}