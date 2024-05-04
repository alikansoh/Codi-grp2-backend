import dotenv from 'dotenv';
import mongoose from 'mongoose';
import express from 'express';
import companiesRoutes from './routes/companyRoute.js';
import feedbackRoutes from './routes/feedbacks.js';
import adminRoutes from './routes/adminRoute.js';
import categoriesRoutes from './routes/categoriesRoute.js';
import designRoutes from './routes/designRoute.js';
import cors from 'cors';
import db from './configuration/db.js'; 
const app = express();


// Middleware
app.use(express.json());
dotenv.config();
app.use(cors({
  "origin": "*",
  "methods": "GET,HEAD,PUT,PATCH,POST,DELETE",
  "preflightContinue": false,
  "optionsSuccessStatus": 200
 }
 ));

app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

// Routes
app.use('/api/companies', companiesRoutes);
app.use('/api/feedbacks', feedbackRoutes)
app.use('/api/categories', categoriesRoutes)
app.use('/api/admins',adminRoutes);
app.use('/api/designs', designRoutes);
app.use('/uploads', express.static('uploads'));



//listen to port 
app.listen(process.env.PORT, () => {
      console.log('listening on port', process.env.PORT);
    });
  