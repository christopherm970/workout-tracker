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

router.put("/api/workouts/:id", (req, res)=> {
    var exercise = req.body
    db.Workout.updateOne(
        { _id: req.params.id},
        { $push: { exercises: exercise }})
    .then(dbWorkout => {
        res.json(dbWorkout);
    })
    .catch (err => {
        res.status(400).json(err);
    });
});

router.get("/api/workouts/range", (req, res) => {
    db.Workout.find({})
    .then(dbWorkout => {
        res.json(dbWorkout)
    })
    .catch(err => {
        res.status(400).json(err);
    });
});
module.exports = router;