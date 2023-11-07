"use strict";
var _a, _b;
{
    // ternary operator | optional chaining | nullish coalescing operator
    const age = 18;
    if (age <= 17) {
        console.log('adult');
    }
    else {
        console.log('not adult');
    }
    const isAdult = age <= 18 ? 'adult' : 'not adult';
    console.log({ isAdult });
    // nullish operator
    const isAuthenticated = '';
    const result1 = isAuthenticated !== null && isAuthenticated !== void 0 ? isAuthenticated : 'Guest';
    const result2 = isAuthenticated ? isAuthenticated : 'Guest';
    console.log({ result1 }, { result2 });
    const userss = {
        name: 'rakib',
        address: {
            city: 'dhaka',
            road: '60',
            presentAddress: 'dhaka mirpur'
        }
    };
    const permanentAddress = (_b = (_a = userss === null || userss === void 0 ? void 0 : userss.address) === null || _a === void 0 ? void 0 : _a.permanentAddress) !== null && _b !== void 0 ? _b : 'No permanent Address';
    console.log({ permanentAddress });
}
