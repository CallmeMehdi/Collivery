const express = require("express");
const router = express.Router();
const collivery = require("../../controllers/colliveryController");
const passportService = require("../../services/passportService");

// to acces this route you need to give the jwt token in the Authorization Header

  router.get("/", passportService.verifyUser, (req, res, next) => {
    collivery.getColliverys(req,res);
  });
  router.post("/",passportService.verifyUser , (req,res, next) => {
    collivery.addCollivery(req,res);
  });
  router.delete("/",passportService.verifyUser, (req, res, next) => {
    collivery.deleteCollivery(req,res);
  });

module.exports = router;
