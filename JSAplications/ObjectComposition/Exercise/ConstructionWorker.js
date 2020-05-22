function solve(inputObj) {
    if (inputObj.dizziness) {
        inputObj.levelOfHydrated += (0.1 * inputObj.weight * inputObj.experience);
        inputObj.dizziness = false;
        return inputObj;
    }

    return inputObj;
};

let worker = {
    weight: 95,
    experience: 3,
    levelOfHydrated: 0,;
    dizziness: false
};

console.log(solve(worker));
