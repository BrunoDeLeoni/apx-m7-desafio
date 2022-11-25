/* Imports */
import { v2 as cloudinary } from "cloudinary"

/* Cloudinary */
cloudinary.config({
    cloud_name: process.env.CLOUDINARY_NAME,
    api_key: process.env.CLOUDINARY_KEY,
    api_secret: process.env.CLOUDINARY_SECRET,
});

/* Export */
export { cloudinary }
