function distanceFromHqInBlocks(blocks) {
    return Math.abs(blocks - 42);
}

function distanceFromHqInFeet(blocks) {
    return distanceFromHqInBlocks(blocks) * 264;
}

function distanceTravelledInFeet(start, destination) {
    return Math.abs(destination - start) * 264;
}

function calculatesFarePrice(start, destination) {
    const distanceInFeet = distanceTravelledInFeet(start, destination);

    if (distanceInFeet > 2500) {
        return "does not allow rides over 2500 feet";
    } else if (distanceInFeet <= 400) {
        return 0;
    } else if (distanceInFeet > 2000 && distanceInFeet <= 2500) {
        return 25;
    } else if (distanceInFeet > 400 && distanceInFeet <= 2000) {
        return (distanceInFeet - 400) * 0.02;
    }
}