let json = [   
    { "a": 150 },
    { "a": 50  },
    { "b": 100 },
    { "b": 25  } 
];

let sumSameProperties = function (json) {
    let middleJson = [];
    for (let i = 0; i < json.length; ++i) {
        let keys = Object.keys(json[i]);
        for (let k = 0; k < keys.length; ++k) { 
            if(!isNaN(middleJson[keys[k]])){
                middleJson[keys[k]] += json[i][keys[k]];
            }else {
                middleJson[keys[k]] = json[i][keys[k]];
            }
        }
    }
    return middleJson;
};
let finalJson = [];
let almostThere = sumSameProperties(json);
for (let key in almostThere) {
    let obj = {};
    obj[key] = almostThere[key];
    finalJson.push(obj);
}
console.log(finalJson);