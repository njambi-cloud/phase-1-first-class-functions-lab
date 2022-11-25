// Code your solution in this file!
const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];

const returnFirstTwoDrivers = function(){
    let newDrivers = drivers.slice(0,2);
    return newDrivers;
}
returnFirstTwoDrivers(['Antonia', 'Nuru', 'Amari', 'Mo'])

const returnLastTwoDrivers = function(){
    //should return an array of the last two drivers
    let newDrivers = drivers.slice(-2);
    return newDrivers;
}
returnFirstTwoDrivers(['Antonia', 'Nuru', 'Amari', 'Mo'])

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(number) {
    return function (fareMultiplier) {
        return fareMultiplier * number
    }
}
const fareDoubler = function(fareMultiplier){
    return createFareMultiplier(2)(fareMultiplier)
}
const fareTripler = function(fareMultiplier){
    return createFareMultiplier(3)(fareMultiplier)
}
function selectDifferentDrivers(arrayOfDrivers, drivers) {
    return drivers(arrayOfDrivers)
}

selectDifferentDrivers(['Antonia', 'Nuru', 'Amari', 'Mo'], returnLastTwoDrivers);
selectDifferentDrivers(['Antonia', 'Nuru', 'Amari', 'Mo'], returnFirstTwoDrivers)