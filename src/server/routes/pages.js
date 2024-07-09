import express from "express";

const router = express.Router();


// Hello world
router.get("/", (req, res) => {
    res.json({ msg: "GET main page" })
});

router.get("/about", (req, res) => {
    res.json({ msg: "GET About page" })
})

router.get("/portfolio", (req, res) => {
    res.json({ msg: "GET portfolio page" })
})

router.get("/jobs", (req, res) => {
    res.json({ msg: "GET Jobs page" })
})

router.get("/contact", (req, res) => {
    res.json({ msg: "GET Contact page" })
})

router.get("/edit", (req, res) => {
    res.json({ msg: "GET Edit page" })
})













export default router;