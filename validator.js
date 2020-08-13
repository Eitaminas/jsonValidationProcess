let schema;
let obj;

try {
    schema = JSON.parse(`{
        "$schema": "http://json-schema.org/draft-07/schema",
        "required": [
            "_id",
            "_rev",
            "projects"
        ],
        "properties": {
            "_id": {
                "type": "string"
            },
            "_rev": {
                "type": "string"
            },
            "projects": {
                "type": "array",
                "required": [
                    "projectId",
                    "billing",
                    "language",
                    "customer",
                    "name"
                ],
                "properties": {
                    "projectId": {
                        "type": "integer"
                    },
                    "billing": {
                        "type": "boolean"
                    },
                    "language": {
                        "type": "string",
                        "enum": [
                            "lt",
                            "en"
                        ]
                    },
                    "customer": {
                        "type": "string"
                    },
                    "name": {
                        "type": "string"
                    }
                }
            }
        }       
    }`);

    try {
        obj = JSON.parse(`{
            "_id": "d08aaa33d3151c073c6d57799e01ea85",
            "_rev": "12-54ad2ff48e6565fe1e876dc2a0be6a68",
            "projects": [
                {
                    "projectId": 1,
                    "billing": true,
                    "language": "lt",
                    "customer": "d08aaa33d3151c073c6d57799e0265b4",
                    "name": "EV Sprendimai"
                },
                {
                    "projectId": 5,
                    "billing": true,
                    "language": "lt",
                    "customer": "d08aaa33d3151c073c6d57799e02d097",
                    "name": "EIC-Energy"
                },
                {
                    "projectId": 13,
                    "billing": true,
                    "language": "lt",
                    "customer": "d08aaa33d3151c073c6d57799e02d479",
                    "name": "Vitransa"
                },
                {
                    "projectId": 22,
                    "billing": true,
                    "language": "lt",
                    "customer": "d08aaa33d3151c073c6d57799e030093",
                    "name": "Arginta"
                },
                {
                    "projectId": 24,
                    "billing": true,
                    "language": "lt",
                    "customer": "d08aaa33d3151c073c6d57799e031404",
                    "name": "Saules energija"
                },
                {
                    "projectId": 25,
                    "billing": true,
                    "language": "lt",
                    "customer": "d08aaa33d3151c073c6d57799e031522",
                    "name": "MT-Energy"
                },
                {
                    "projectId": 30,
                    "billing": true,
                    "language": "lt",
                    "customer": "",
                    "name": "Kietaviskiu siltnamiai"
                },
                {
                    "projectId": 31,
                    "billing": true,
                    "language": "lt",
                    "customer": "d08aaa33d3151c073c6d57799e020226",
                    "name": "Renvia Monitoringas"
                },
                {
                    "projectId": 35,
                    "billing": true,
                    "language": "lt",
                    "customer": "",
                    "name": "Automagistrale"
                },
                {
                    "projectId": 3488,
                    "billing": true,
                    "language": "lt",
                    "customer": "",
                    "name": "Naujoji ranga"
                },
                {
                    "projectId": 3490,
                    "billing": true,
                    "language": "lt",
                    "customer": "",
                    "name": "Geisiu VE"
                },
                {
                    "projectId": 3491,
                    "billing": true,
                    "language": "lt",
                    "customer": "",
                    "name": "SICOR"
                },
                {
                    "projectId": 3494,
                    "billing": true,
                    "language": "lt",
                    "customer": "",
                    "name": "Elseta"
                },
                {
                    "projectId": 3496,
                    "billing": true,
                    "language": "lt",
                    "customer": "",
                    "name": "Solarlt"
                },
                {
                    "projectId": 3497,
                    "billing": true,
                    "language": "lt",
                    "customer": "",
                    "name": "NordicSugar"
                },
                {
                    "projectId": 3498,
                    "billing": true,
                    "language": "lt",
                    "customer": "",
                    "name": "IT Pasaulis"
                },
                {
                    "projectId": 3501,
                    "billing": true,
                    "language": "lt",
                    "customer": "",
                    "name": "pje"
                },
                {
                    "projectId": 3507,
                    "billing": true,
                    "language": "lt",
                    "customer": "",
                    "name": "vwp"
                },
                {
                    "projectId": 3508,
                    "billing": true,
                    "language": "lt",
                    "customer": "",
                    "name": "August"
                },
                {
                    "projectId": 3510,
                    "billing": true,
                    "language": "en",
                    "customer": "",
                    "name": "energy24"
                },
                {
                    "projectId": 3511,
                    "billing": true,
                    "language": "lt",
                    "customer": "",
                    "name": "Kauno regiono keliai"
                },
                {
                    "projectId": 3523,
                    "billing": true,
                    "language": "lt",
                    "customer": "",
                    "name": "BCT"
                },
                {
                    "projectId": 3533,
                    "billing": true,
                    "language": "en",
                    "customer": "",
                    "name": "Peneco"
                },
                {
                    "projectId": 3536,
                    "billing": true,
                    "language": "lt",
                    "customer": "",
                    "name": "Hidrojegaine"
                },
                {
                    "projectId": 3537,
                    "billing": true,
                    "language": "lt",
                    "customer": "",
                    "name": "Maldis"
                },
                {
                    "projectId": 3538,
                    "billing": true,
                    "language": "lt",
                    "customer": "",
                    "name": "Homeras"
                },
                {
                    "projectId": 3539,
                    "billing": true,
                    "language": "en",
                    "customer": "",
                    "name": "Solar Polaris"
                },
                {
                    "projectId": 3543,
                    "billing": false,
                    "language": "lt",
                    "customer": "",
                    "name": "NewSec"
                },
                {
                    "projectId": 3544,
                    "billing": true,
                    "language": "lt",
                    "customer": "",
                    "name": "Enpro"
                },
                {
                    "projectId": 3545,
                    "billing": true,
                    "language": "lt",
                    "customer": "",
                    "name": "EH energy"
                },
                {
                    "projectId": 3546,
                    "billing": true,
                    "language": "lt",
                    "customer": "",
                    "name": "Solet"
                },
                {
                    "projectId": 3551,
                    "billing": true,
                    "language": "lt",
                    "customer": "",
                    "name": "kggroup"
                },
                {
                    "projectId": 3554,
                    "billing": true,
                    "language": "en",
                    "customer": "",
                    "name": "UTZ"
                },
                {
                    "projectId": 3555,
                    "billing": true,
                    "language": "en",
                    "customer": "",
                    "name": "Coveris"
                },
                {
                    "projectId": 3556,
                    "billing": true,
                    "language": "en",
                    "customer": "",
                    "name": "Ergis"
                },
                {
                    "projectId": 3557,
                    "billing": true,
                    "language": "lt",
                    "customer": "",
                    "name": "Promonitor"
                },
                {
                    "projectId": 3558,
                    "billing": true,
                    "language": "en",
                    "customer": "",
                    "name": "reweb"
                },
                {
                    "projectId": 3560,
                    "billing": true,
                    "language": "lt",
                    "customer": "",
                    "name": "EnergijosTiekimas"
                },
                {
                    "projectId": 3561,
                    "billing": true,
                    "language": "en",
                    "customer": "",
                    "name": "OM-3"
                },
                {
                    "projectId": 3561,
                    "billing": true,
                    "language": "en",
                    "customer": "",
                    "name": "Plastic Omnium"
                }
            ]
        }`);

        if (validateObject(schema, obj)) {
            console.log('JSON validates against the schema');
        } else {
            console.log('JSON does not validate against the schema');
        }
    } catch (err) {
         console.log('Syntactically INVALID JSON');
    }
} catch (err) {
    console.log('Invalid schema');
}

function validateObject(schema, obj) {
  
    for (let i = 0; i < schema.required.length; i++) {
        let key = schema.required[i];
        if (!obj.hasOwnProperty(key))
            return false;
    }

    for (let key in schema.properties) {  
        if (obj.hasOwnProperty(key)) {
            let requiredType = schema.properties[key].type;
            if (typeof obj[key] !== requiredType)
                return false;
            if (requiredType === 'array') {
                for (let i = 0; i < obj[key].length; i++) {
                    let subobject = obj[key][i];
                    if (schema.properties[key].hasOwnProperty('required') || schema.properties[key].hasOwnProperty('properties')) {
                        if (typeof subobject === 'object') {
                            if (!validateObject(schema.properties[key], subobject))
                                return false;
                        } else
                            return false;
                    } else {
                        console.log('no required or properties located'); }
                }
            } else {
                console.log('is not array'); }
        } else {
        console.log('No own propertys'); }
    }
    return true;
}