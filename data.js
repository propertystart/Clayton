var APP_DATA = {
  "scenes": [
    {
      "id": "0-entry",
      "name": "Entry",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1500,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -3.063247605321928,
          "pitch": 0.22741051568220527,
          "rotation": 0,
          "target": "1-passage"
        },
        {
          "yaw": 2.5557921260321876,
          "pitch": -0.15611505128205572,
          "rotation": 0,
          "target": "7-leisure"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-passage",
      "name": "Passage",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1500,
      "initialViewParameters": {
        "yaw": -1.6863910269935118,
        "pitch": -0.03297371075576905,
        "fov": 1.3726940369267648
      },
      "linkHotspots": [
        {
          "yaw": -1.8221929490636057,
          "pitch": 0.15992302235257227,
          "rotation": 0,
          "target": "2-powder"
        },
        {
          "yaw": -1.556273738545702,
          "pitch": 0.07775378300677538,
          "rotation": 0,
          "target": "4-dining"
        },
        {
          "yaw": 2.9853127616277497,
          "pitch": -0.2766128531250338,
          "rotation": 0,
          "target": "7-leisure"
        },
        {
          "yaw": 1.7355519020538601,
          "pitch": 0.17994871717540306,
          "rotation": 0,
          "target": "0-entry"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-powder",
      "name": "Powder",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1500,
      "initialViewParameters": {
        "yaw": 0.0783325130717305,
        "pitch": 0.02457858250847167,
        "fov": 1.3726940369267648
      },
      "linkHotspots": [
        {
          "yaw": -1.655722388892519,
          "pitch": 0.17823808260332896,
          "rotation": 0,
          "target": "0-entry"
        },
        {
          "yaw": 1.5203640562302105,
          "pitch": 0.2695152464154642,
          "rotation": 0,
          "target": "4-dining"
        },
        {
          "yaw": 1.9551422557974103,
          "pitch": 0.25471985452105095,
          "rotation": 0,
          "target": "3-laundry"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-laundry",
      "name": "Laundry",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1500,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.6059705371450743,
          "pitch": 0.37117215779794144,
          "rotation": 0,
          "target": "1-passage"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-dining",
      "name": "Dining",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1500,
      "initialViewParameters": {
        "yaw": -1.978054126594131,
        "pitch": 0.12974079155820917,
        "fov": 1.3726940369267648
      },
      "linkHotspots": [
        {
          "yaw": -0.5814388273541127,
          "pitch": 0.07284626290603846,
          "rotation": 0,
          "target": "5-kitchen"
        },
        {
          "yaw": -1.331400779344941,
          "pitch": 0.030818371119629262,
          "rotation": 0,
          "target": "6-family"
        },
        {
          "yaw": 1.6536129061819524,
          "pitch": 0.12950426831945094,
          "rotation": 0,
          "target": "1-passage"
        },
        {
          "yaw": 1.3995766179114817,
          "pitch": 0.2356147833725224,
          "rotation": 0,
          "target": "3-laundry"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-kitchen",
      "name": "Kitchen",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1500,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.0981251769647002,
          "pitch": 0.08491448701391846,
          "rotation": 0,
          "target": "4-dining"
        },
        {
          "yaw": 2.3126319247785254,
          "pitch": 0.20873532774434622,
          "rotation": 0,
          "target": "6-family"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "6-family",
      "name": "Family",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1500,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.864812711770215,
          "pitch": 0.12596005815508526,
          "rotation": 0,
          "target": "5-kitchen"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "7-leisure",
      "name": "Leisure",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1500,
      "initialViewParameters": {
        "yaw": 0.010261094426791573,
        "pitch": 0.027559452525316885,
        "fov": 0.8443214187421674
      },
      "linkHotspots": [
        {
          "yaw": -2.7851160107255186,
          "pitch": 0.6575537671710467,
          "rotation": 0,
          "target": "0-entry"
        },
        {
          "yaw": 2.270074988282537,
          "pitch": 0.38049684268838746,
          "rotation": 0,
          "target": "8-bedroom1"
        },
        {
          "yaw": 1.306072147416316,
          "pitch": 0.4135526002879715,
          "rotation": 0,
          "target": "9-bedroom2"
        },
        {
          "yaw": 0.12499427730274526,
          "pitch": 0.05412932098131762,
          "rotation": 0,
          "target": "11-master"
        },
        {
          "yaw": 0.2676369782067809,
          "pitch": 0.04940774386441049,
          "rotation": 0,
          "target": "10-bathroom"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "8-bedroom1",
      "name": "Bedroom1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1500,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.7369253794008443,
          "pitch": 0.29956482594715617,
          "rotation": 0,
          "target": "7-leisure"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "9-bedroom2",
      "name": "Bedroom2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1500,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.195873194495224,
          "pitch": 0.354994732366384,
          "rotation": 0,
          "target": "7-leisure"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "10-bathroom",
      "name": "Bathroom",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1500,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.2849973589080967,
          "pitch": 0.2496109009688503,
          "rotation": 0,
          "target": "7-leisure"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "11-master",
      "name": "Master",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1500,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.1310837684206554,
          "pitch": 0.1117870048237819,
          "rotation": 0,
          "target": "12-ensuite"
        },
        {
          "yaw": -2.920533122874474,
          "pitch": 0.14920196331361169,
          "rotation": 0,
          "target": "7-leisure"
        },
        {
          "yaw": 3.0289143982559867,
          "pitch": 0.14376176830807808,
          "rotation": 0,
          "target": "10-bathroom"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "12-ensuite",
      "name": "Ensuite",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1500,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.943444904768862,
          "pitch": 0.32431800149247536,
          "rotation": 0,
          "target": "11-master"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "clayton",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
