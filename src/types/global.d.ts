import mongoose from 'mongoose';
/* eslint-disable no-var */
declare global {
  var mongoose:
    | {
        conn: mongoose.Mongoose | null;
        promise: Promise<mongoose.Mongoose> | null;
      }
    | undefined;
}
