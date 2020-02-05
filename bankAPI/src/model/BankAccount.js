const mongoose = require('mongoose');

const BankAccountSchema = new mongoose.Schema({
    conta: {
        type: Number,
        unique: true,
        required: true
    },
    saldo: Number
});

module.exports = mongoose.model( "BankAccount", BankAccountSchema);
