const trainerModel = require('../models/trainerModel');

const getAllTrainers = (req, res) => {
    const trainers = trainerModel.getTrainers();
    res.render('index', { trainers });
};

const getTrainer = (req, res) => {
    const trainer = trainerModel.getTrainerById(req.params.id);
    if (trainer) {
        res.render('trainer', { trainer });
    } else {
        res.status(404).send('Treinador não encontrado');
    }
};

module.exports = { getAllTrainers, getTrainer }