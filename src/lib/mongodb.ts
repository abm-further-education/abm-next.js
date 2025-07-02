import mongoose from 'mongoose';

const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
  console.warn(
    'MONGODB_URI environment variable is not defined. MongoDB connection will not be available.'
  );
}

/**
 * Global is used here to maintain a cached connection across hot reloads
 * in development. This prevents connections growing exponentially
 * during API Route usage.
 */
let cached = global.mongoose;

if (!cached) {
  cached = global.mongoose = { conn: null, promise: null };
}

// Type assertion to ensure cached is not undefined
const mongooseCache = cached as {
  conn: mongoose.Mongoose | null;
  promise: Promise<mongoose.Mongoose> | null;
};

async function connectDB() {
  if (mongooseCache.conn) {
    return mongooseCache.conn;
  }

  if (!mongooseCache.promise) {
    const opts = {
      bufferCommands: false,
    };

    mongooseCache.promise = mongoose
      .connect(MONGODB_URI!, opts)
      .then((mongoose) => {
        return mongoose;
      });
  }

  try {
    mongooseCache.conn = await mongooseCache.promise;
  } catch (e) {
    mongooseCache.promise = null;
    throw e;
  }

  return mongooseCache.conn;
}

export default connectDB;
