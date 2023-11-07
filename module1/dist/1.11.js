"use strict";
{
    // nullable types
    const searchName = (value) => {
        if (value) {
            console.log('searching');
        }
        else {
            console.log('here is nothing to search');
        }
    };
    searchName(null);
    const getSpeedMeterPerSecond = (value) => {
        if (typeof value === 'number') {
            const convertedSpeed = (value * 1000) / 3600;
            console.log(`the speed is ${convertedSpeed}`);
        }
        if (typeof value === 'string') {
            const valueInNumber = value.split(' ');
            console.log(valueInNumber);
        }
        getSpeedMeterPerSecond(`1000 kmh-1`);
    };
}
