var sum = function(a, b) {
    'use strict';
    return a + b;
}
sum(8, 11);
console.log(sum(a, b));

var raceaverage = function(a, b, c, d, e) {
    'use strict';
    return (a + b + c + d + e) / 5;

}


raceaverage(120, 110.4, 135.1, 108.9, 97.5);
raceaverage(240, 210.4, 235.1, 208.9, 197.5);

console.log (raceaverage(a, b, c, d, e));




var mattbankaccount = {
    checking: 0,
    savings: 0,
    retirement: 0,
};

var robertosbankaccount = {
    checking: 0,
    savings: 0,
    retirement: 0,
};

var addToBank = function(account, savings, retirement, checking) {
    'use strict';
    account.savings = account.savings + savings;
    account.retirement = account.retirement + retirement;
    account.checking = account.checking + checking;
}


var getsum = function getSumOfAccounts(account) {
    'use strict'
    return account.checking + account.savings + account.retirement;

   
}
//1 Add deposits to matt & robertos account
    addToBank(mattbankaccount, 100, 10, 1);
    addToBank(robertosbankaccount, 200, 50, 19);

//2 get & store the new balance of checking/saving/retrment accounts
    var sumOfMatts = getsum(mattbankaccount);
    var sumOfRobertos = getsum(robertosbankaccount);

//3 show the balance in the console
    console.log(sumOfMatts - sumOfRobertos);

