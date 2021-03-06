var undef;

exports.useStats = false;

var amountInfoMap = {
    '4k' : [64, 64],
    '8k' : [128, 64],
    '16k' : [128, 128],
    '32k' : [256, 128],
    '65k' : [256, 256],
    '131k' : [512, 256],
    '252k' : [512, 512],
    '524k' : [1024, 512],
    '1m' : [1024, 1024]
}

var amountOptions = exports.amountOptions = [];
var amountInfo = window.location.href.split('#')[1];
amountInfo = amountInfoMap[amountInfo] || amountInfoMap['16k'];
for(var i in amountInfoMap) {
    amountOptions.push(i);
    if(amountInfo === amountInfoMap[i]) {
        exports.amountValue = i;
    }
}

exports.simulatorTextureWidth = amountInfo[0];
exports.simulatorTextureHeight = amountInfo[1];
exports.emitterDistanceRatio = 0.65;
exports.emitterSpeed = 20.0;

exports.volumeWidth = 256;
exports.volumeHeight = 128;
exports.volumeDepth = 128;
exports.volumeSliceColumn = 8;
exports.volumeSliceRow = 16;
exports.volumeScale = 7;

exports.speed = 0.25;
exports.dieSpeed = 0.0035;
exports.radius = 0.3;
exports.blur = 0;
exports.curlSize = 0.00055;

exports.particleSize = 32;
exports.bgColor = '#c8c8c8';
exports.color1 = '#e6005e';
exports.color2 = '#00d7a4';
exports.dof = 0.8;
exports.dofFocus = 1;
exports.uDofDistance = 0;
exports.dofFocusZ = 0;
exports.dofMouse = false;

exports.capablePrecision = undef;

