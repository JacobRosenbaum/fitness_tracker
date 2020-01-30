var db = require("../models");

module.exports = function(app) {
    // // GET ROUTES
    // app.get("/api/workouts", function(req, res) {
    //     db.Workout.find({}).pretty().then(function(dbworkout) {
    //             res.json(dbworkout);
    //         })
    //         .catch(err => {
    //             res.status(400).json(err);
    //         });
    // });
    // app.get("/api/workouts/range", function(req, res) {
    //     db.Workout.find({}).pretty().limit(7).then(function(dbworkout) {
    //             res.json(dbworkout);
    //         })
    //         .catch(err => {
    //             res.status(400).json(err);
    //         });
    // });
    // // UPDATE ROUTE
    // app.put("/api/workouts", function(req, res) {
    //     db.Workout.insert({}).then(result => {
    //             res.json(result);
    //         })
    //         .catch(err => {
    //             res.status(400).json(err);
    //         });
    // });
    // //POST ROUTE
    // app.post("/api/workouts", function(req, res) {
    //     db.Workout.create(req.body).then(function(dbworkout) {
    //             res.json(dbworkout);
    //         })
    //         .catch(err => {
    //             res.status(400).json(err);
    //         });
    // });
    // GET ROUTES
    app.get("/api/workouts", function(req, res) {
        db.Workout.find({}).then(function(dbWorkouts) {
            res.json(dbWorkouts);
        });
    });
    app.get("/api/workouts/range", function(req, res) {
        db.Workout.find({}).then(function(dbWorkouts) {
            res.json(dbWorkouts);
        });
    });
    // POST ROUTES
    app.post("/api/workouts/", function(req, res) {
        db.Workout.create({
            day: new Date().setDate(new Date().getDate()),
            exercises: []
        }).then(function(response) {
            res.json(response);
        });
    });

    // UPDATE ROUTES
    app.put("/api/workouts/:id", function(req, res) {
        let updateWorkout = req.body;
        db.Workout.updateOne({ _id: req.params.id }, { $push: { exercises: updateWorkout } }).then(function(result) {
            return res.json(result);
        });
    })
}