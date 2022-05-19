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

// experiences page
router.get("/experiences", async (req, res) => {
    try {
        res.render("experiences");
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

// projects page
router.get("/projects", async (req, res) => {
    try {
        res.render("projects");
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

module.exports = router;