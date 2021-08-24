function woodCalculator(chairQty, tableQty, bedQty){
    let perChairWood = 3;
    let pertableWood = 6;
    let perBedWood = 9;
    const chairWoodNeed = perChairWood* chairQty;
    const tableWoodNeed = pertableWood * tableQty;
    const bedWoodNeed = perBedWood * bedQty;

    const total = chairWoodNeed + tableWoodNeed + bedWoodNeed;
    return total;
}

const output = woodCalculator(2, 3, 4)
console.log(output);