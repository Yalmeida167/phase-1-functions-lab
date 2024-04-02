// Code your solution in this file!
function distanceFromHqInBlocks(streetNumber) {
    const hqLocation = 42;
    let numOfBlocks;
    if (streetNumber >= hqLocation) {
        return (numOfBlocks = streetNumber - hqLocation)
    }
    else if (streetNumber <= hqLocation) {
        return (numOfBlocks = hqLocation - streetNumber)
    }
    return numOfBlocks
}

function distanceFromHqInFeet(blocks) {
    distanceFromHqInBlocks();
    const hqLocation = 42;
    let blocksInFeet;
    if (blocks >= hqLocation) {
        return (blocksInFeet = (blocks - hqLocation) * 264)
    }
    else if (blocks <= hqLocation) {
        return (blocksInFeet = (hqLocation - blocks) * 264)
    }
    return blocksInFeet
}

function distanceTravelledInFeet (startBlock, endBlock) {
    let ftTravelled;
    if (startBlock >= endBlock) {
        return (ftTravelled = (startBlock - endBlock) * 264)
    }
    else if (startBlock <= endBlock) {
        return (ftTravelled = (endBlock - startBlock) * 264)
    }
    return ftTravelled
}

function calculatesFarePrice(start, destination) {
    const ftTravelled = distanceTravelledInFeet(start, destination);
    const freeFare = 400;
    let farePrice;
    if (ftTravelled <= freeFare) {
        return farePrice = 0
    }
    else if (ftTravelled >= freeFare && ftTravelled < 2000) {
        return (farePrice = (ftTravelled - freeFare) * .02)
    }
    else if (ftTravelled >= 2000 && ftTravelled < 2500) {
        return farePrice = 25
    }
    else if (ftTravelled >= 2500) {
        return "cannot travel that far"
    }
}