//Multer guide https://github.com/expressjs/multer

//Multer is a middleware that catches files coming from the frontend and makes them available to your Express backend through req.file or req.files.

const storage = multer.diskStorage({
    destination: function (req, file, cb) {  //json dont support file so using multer
      cb(null, "./public/temp")
    },
    filename: function (req, file, cb) {
      cb(null, file.originalname)
    }
  })
  
  export const upload = multer({ storage: storage })

