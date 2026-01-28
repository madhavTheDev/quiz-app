import mongoose from "mongoose";

const MONGO_URI = process.env.MONGO_URI_DEVELOPMENT!

// process.env.NODE_ENV === "development"
//     ? process.env.MONGO_URI_DEVELOPMENT
//     : process.env.MONGO_URI_PRODUCTION;

if (!MONGO_URI) {
    console.log(MONGO_URI)
    throw new Error("Please define the MONGO_URI environment variable inside .env");
}

let cached = global.mongoose;

if (!cached) {
    cached = global.mongoose = { conn: null, promise: null };
}

export async function dbConnect() {
    if (cached.conn) {
        // console.log("🚀 Using existing database connection");
        return cached.conn;
    }

    if (!cached.promise) {
        const opts = {
            bufferCommands: false,
        };

        console.log(`📡 Connecting to MongoDB...`);
        cached.promise = mongoose.connect(MONGO_URI!, opts).then((mongoose) => {
            console.log("✅ Database connection established");
            return mongoose;
        });
    }

    try {
        cached.conn = await cached.promise;
    } catch (e) {
        cached.promise = null;
        console.error("❌ Database connection failed:", e);
        throw e;
    }

    return cached.conn;
}