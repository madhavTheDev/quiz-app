import mongoose from "mongoose";

const MONGO_URI = process.env.NODE_ENV === "development"
    ? process.env.MONGO_URI_DEVELOPMENT
    : process.env.MONGO_URI_PRODUCTION;

if (!MONGO_URI) {
    throw new Error("Please define the MONGO_URI environment variable inside .env.local");
}
let cached = global.mongoose;

if (!cached) {
    cached = global.mongoose = { conn: null, promise: null };
}

export async function dbConnect() {
    if (cached.conn) {
        console.log("🚀 Using existing database connection");
        return cached.conn;
    }

    if (!cached.promise) {
        const opts = {
            bufferCommands: false,
            authSource: "admin",
        };

        console.log(`📡 Connecting to ${MONGO_URI}`);
        cached.promise = mongoose.connect(MONGO_URI!, opts).then((mongoose) => {
            return mongoose;
        });
    }

    try {
        cached.conn = await cached.promise;
        console.log("✅ New database connection established");
    } catch (e) {
        cached.promise = null;
        throw e;
    }

    return cached.conn;
}