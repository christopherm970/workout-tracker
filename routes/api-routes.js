const router = require("express").Router();
const db = require("../models");

router.get("/api/workouts",(req, res) => {
    db.Workout.find({})
    .then(dbWorkout => {
        res.json(dbWorkout);
    });
});

router.post("/api/workouts", (req, res)=> {
    db.Workout.create(req.body)
    .then(dbWorkout => {
        res.json(dbWorkout);
    })
    .catch(err => {
        res.status(400).json(err);
    });
});
module.exports = router;