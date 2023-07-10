import {config} from 'dotenv';

config();

export const MONGODB = process.env.MONGODB || '';
export const PORT = process.env.PORT || 5005;