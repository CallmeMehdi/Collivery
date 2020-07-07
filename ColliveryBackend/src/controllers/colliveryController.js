const express = require("express");
const app = express();
const mongoose = require("mongoose");
const collivery = require("../models/Collivery");
app.use(express.json());
module.exports = {
  getColliverys(req, res) {
    collivery
      .find({})
      .then((demand) => {
        if (demand != null) {
          res.statusCode = 200;
          res.setHeader("Content-Type", "application/json");
          res.json({
            success: true,
            status: demand,
          });
        } else {
          res.json({
            err: "the requested demand not found !!",
          });
        }
      })
      .catch((err) => {
        res.json({
          err: err.message,
        });
      });
  },
  addCollivery(req, res) {
    collivery
      .find({})
      .then(async (resp) => {
        collivery
          .create({ ...req.body })
          .then((doc) => {
            res.status(201);
            res.json({
              success: true,
              status: doc,
            });
          })
          .catch((err) => {
            res.json({ err: err.message });
          });
      })
      .catch((err) => {
        res.json({ err: err.message });
      });
  },
  deleteCollivery(req, res) {
    collivery
      .remove({
        _id: req.body._id,
      })
      .then((resp) => {
        res.statusCode = 200;
        res.setHeader("Content-Type", "application/json");
        res.json({
          success: true,
          status: resp,
        });
      })
      .catch((err) => res.send({ err: err.message }));
  },
};
