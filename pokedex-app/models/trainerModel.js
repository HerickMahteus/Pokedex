const trainers = [
    { id: 1, nome: 'X', }
];

const getTrainers = () => trainers;
const getTrainerById = (id) => trainer.find(p => p.id === parseInt(id));
const createTrainer = (nome) => trainers.push(trainers.length+1, nome)

module.exports = { getTrainers, getTrainerById, createTrainer };