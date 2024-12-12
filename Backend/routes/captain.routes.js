const express=require('express')
const router=express.Router();
const {body}=require("express-validator")
const captaincon=require("../controlers/captain.con")

router.post('/register',  [
    body('email').isEmail().withMessage("Invalid email"),
    body('fullname.firstname')
      .isLength({ min: 3 })
      .withMessage("First name must be more than 3 characters"),
    body('fullname.lastname')
      .optional()
      .isLength({ min: 3 })
      .withMessage("Last name must be more than 3 characters"),
    body('password')
      .isLength({ min: 3 })
      .withMessage("Password must be more than 3 characters"),
    body('vehicle.color')
      .isLength({ min: 3 })
      .withMessage("Color must be greater than 3 characters"),
    body('vehicle.plate')
      .isLength({ min: 3 })
      .withMessage("Plate must be greater than 3 characters"),
    body('vehicle.capecity')
      .isInt({ min: 1 })
      .withMessage("Capacity must be at least 1"),
    body('vehicle.vehicleType')
      .isIn(['car', 'bike', 'auto'])
      .withMessage("Vehicle type must be one of: car, bike, auto"),
  ],

  captaincon.register)



module.exports=router