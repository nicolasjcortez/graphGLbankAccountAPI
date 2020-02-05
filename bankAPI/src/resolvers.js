const BankAccount = require('./BankAccount')

async function getSaldo(conta){
    const res  = await BankAccount.findOne( { conta: conta } ).select('saldo -_id');
    return res.saldo;
}

async function sacar(conta, valor){
    var saldo = await getSaldo(conta);
    var novoSaldo = saldo - valor;
    if(novoSaldo < 0)
    {
        throw new Error("Saldo insuficiente.")
    }
    await BankAccount.findOneAndUpdate( { conta: conta }, {saldo: novoSaldo} );
    const bankAccountAfter =  await BankAccount.findOne( { conta: conta });
    return bankAccountAfter;
}

async function depositar(conta, valor){
    var saldo = await getSaldo(conta);
    var novoSaldo = saldo + valor;
    await BankAccount.findOneAndUpdate( { conta: conta }, {saldo: novoSaldo} );
    const bankAccountAfter =  await BankAccount.findOne( { conta: conta });
    return bankAccountAfter;
}

module.exports = {
    Query: {
        contas: () => BankAccount.find(),
        saldo: (_, { conta }) => getSaldo(conta),
    },

    Mutation: {
        criarConta: (_, {conta, saldo}) => BankAccount.create({ conta, saldo}),
        sacar: (_, {conta, valor}) => sacar(conta, valor),
        depositar: (_, {conta, valor}) => depositar(conta, valor),
    }
}