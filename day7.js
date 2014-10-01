var sum = function(a, b) {
    'use strict';
    return a + b;
    console.log(sum(a, b));
}
sum(8, 11)


var raceaverage = function(a, b, c, d, e) {
    'use strict';
    return (a + b + c + d + e) / 5;

}
var raceaverage = function(a, b, c, d, e) {
    'use strict';
    return (a + b + c + d + e) / 5;
}
raceaverage(240, 210.4, 235.1, 208.9, 197.5)



var raceaverage = function(a, b, c, d, e) {
    'use strict';
    return (a + b + c + d + e) / 5;
}

raceaverage(120, 110.4, 135.1, 108.9, 97.5)


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
    return checking + savings + retirement;

    addToBank(mattbankaccount, 100, 10, 1);
    addToBank(robertosbankaccount, 200, 50, 19);

    var sumOfMatts = getsum(mattbankaccount);
    var sumOfRobertos = getsum(robertosbankaccount);

    console.log(sumOfMatts - sumOfRobertos);
}
