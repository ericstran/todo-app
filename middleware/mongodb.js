import mongoose from 'mongoose';

const connectDB = handler => async (req, res) => {
    if (mongoose.connections[0].readyState) {
        // Use current db connection
        return handler(req, res);
    }
    // Use new db connection
    await mongoose.connect('mongodb://localhost:3000/test', {
        ssl: true,
        sslValidate: true,
        sslCA: `${__dirname}/cert.pem`
    });
    return handler(req, res);
};

export default connectDB;
