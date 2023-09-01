import { Schema, model, models } from 'mongoose';

const ContactUsSchema = new Schema({
    name: String,
    email:String,
    phone_no: String,
    message: String,
});

const ContactUs = models.ContactUs || model('ContactUs', ContactUsSchema);

export default ContactUs;