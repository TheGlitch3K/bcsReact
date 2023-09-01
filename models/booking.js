import { Schema, model, models } from 'mongoose';

const BookingSchema = new Schema({
  date: Date, 
  pickup_time: String, 
  pickup_location: String, 
  dropoff_location: String, 
  number_of_passengers: Number, 
  luggage: String, 
  vehicle_type: String, 
  cost: Number,
  first_name:String,
  last_name:String,
  email:String, 
  phone_number:String,
});

const Booking = models.Booking || model('Booking', BookingSchema);

export default Booking;