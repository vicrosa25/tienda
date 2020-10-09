import mongoose from "mongoose";

const conectaDB = async () => {
  try {
    const con = await mongoose.connect(process.env.MONGO_URI, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
      useCreateIndex: true,
    });

    console.log(`MongoDB conectado: ${con.connection.host}`.cyan.bold);
  } catch (error) {
    console.error(`Error: ${error.message}`.red.bold);
    process.exit(1);
  }
};

export default conectaDB;
