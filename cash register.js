function checkCashRegister(price, cash, cid) {
            let unitAmount = {
            "PENNY": .01,
            "NICKEL": .05,
            "DIME": .10,
            "QUARTER": .25,
            "ONE": 1.00,
            "FIVE": 5.00,
            "TEN": 10.00,
            "TWENTY": 20.00,
            "ONE HUNDRED": 100.00
            }
            let totalCID = 0;
            for (let element of cid) {
    // console.log("firsttotalCid = " + totalCID);
    // console.log("--------------")
                totalCID += element[1];
    // console.log("my el = " + element[1]); 
    // console.log("secondtotalCid = " + totalCID); 
    // console.log("##########################");
            }
            totalCID = totalCID.toFixed(2); 
    //#####################################
    // console.log("totalCid = totalCID.toFixed(2)" + totalCID);
    // console.log("****************")
    //#####################################
            let changeToGive = cash - price; 
// console.log("cash - price = changeToGive = " + changeToGive);
// console.log("-----------------");
            const changeArray = [];
            if (changeToGive > totalCID) {
                return { status: "INSUFFICIENT_FUNDS", change: changeArray };
            } else if (changeToGive.toFixed(2) === totalCID) {
                return { status: "CLOSED", change: cid };
            } else {
                cid = cid.reverse();
                for (let elem of cid) {
                    let temp = [elem[0], 0]; 
// console.log("temp = [elem[0], 0] = " + temp);
// console.log("&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&")
            while (changeToGive >= unitAmount[elem[0]] && elem[1] > 0) {
                temp[1] += unitAmount[elem[0]];     
// console.log("temp[1] += unitAmount[elem[0]] = " + temp[1]);
// console.log("-----------------------elem = " + elem[1])
                elem[1] -= unitAmount[elem[0]];
// console.log("unitAmount = " + unitAmount[elem[0]])
// console.log("elem[1] -= unitAmount[elem[0]] = " + elem[1]);
                changeToGive -= unitAmount[elem[0]];
// console.log("changeToGive -= unitAmount[elem[0]] " + changeToGive)
                changeToGive = changeToGive.toFixed(2);
            }
        if (temp[1] > 0) {
            changeArray.push(temp);
        }
    }
    }
    if (changeToGive > 0) {
        return { status: "INSUFFICIENT_FUNDS", change: [] };
    }
        return { status: "OPEN", change: changeArray};
}

checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]])