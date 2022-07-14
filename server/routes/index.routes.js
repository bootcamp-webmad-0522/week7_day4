const router = require("express").Router();

router.use("/coasters", require('./coaster.routes'))

module.exports = router