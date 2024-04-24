displayHome = (req, res) => {
    const data = 
       'Emilio Ordonez';
    res.status(200).send(data);
};

module.exports = { displayHome,
}