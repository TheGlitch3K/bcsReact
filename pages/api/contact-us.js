import ContactUs from '@models/contact-us';
import { getConnection } from '../../lib/db';
import { ConatactUsSchemaValidator } from 'validators/contact-us';

async function handleContactUsForm(req, res) {
  // Insert the booking into the database
  const error = await ConatactUsSchemaValidator({...req.body})
  if(error) {
  return res.status(400).json({error})
}
  await getConnection();
  try {
    const addData =  { ...req.body }
    await ContactUs.create(addData)
    return res.status(200).json({message:"Your Contact us form has been submited!"});
  } catch (error) {
    return res.status(400).json({message:"There was an error with your booking. Please try again later.",error});
  }
}

export default async function handler(req, res) {
    const requestMethod = req.method;
    switch (requestMethod) {
      case 'POST':
        return await handleContactUsForm(req, res)
      default:
        res.status(200).json({ message: 'Welcome to contact us Routes!' })
    }
  }