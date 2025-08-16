import multer from 'multer';
const storage = multer.memoryStorage();
<<<<<<< HEAD
export const singleUpload = multer({storage}).single("profileImage");
=======
export const singleUpload = multer({storage}).single("file");
>>>>>>> 774dcb2 (Save my local README and backend)
