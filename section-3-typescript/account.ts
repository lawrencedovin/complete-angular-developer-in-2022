import { IAccount } from './account.interface';

const account: IAccount = {
    name: 'Luis',
    balance: 10
}

let accounts: Array<IAccount>;

accounts = [
    {
        name: 'Luis',
        balance: 10
    },
    {
        name: 'Lawrence',
        balance: 5
    },
    {
        name: 'Michael',
        balance: 15,
        status: 'Good'
    }
]

class InvestmentAccount implements IAccount {
    constructor(public name, public balance) {}

    private withdraw() {
        
    }
}