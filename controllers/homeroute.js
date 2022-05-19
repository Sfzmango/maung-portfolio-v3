const router = require('express').Router();


// home page
router.get("/", async (req, res) => {
    try {
        res.render("home");
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

module.exports = router;