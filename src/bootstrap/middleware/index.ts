/* all the application level middlwares here */
import express, { Application } from 'express';
import cors from 'cors';

// eslint-disable-next-line import/prefer-default-export
export const applyMiddlewares = async (app: Application) => {
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  app.use(express.static(`${__dirname}/../../public`));
  app.use(cors());
};
