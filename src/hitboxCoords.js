"use strict";
// 4/15/2018: Drew pixels on Terrorist Image in paint.net, looked at the coordinates
//            paint put out for these drawn pixels, then inserted them here by hand.
//            Still faster than writing a generator, but it's still not perfect. If
//            this were a commercial release, I'd definitely take a full day to get
//            the coordinates exactly right.

const coordsHeadVertices = [[190,4], [225,15], [242,55], [244,66], [234,83], [231,110], [206,136], [186,134], [168,120], [165,106], [154,89], [152,77], [148,70], [150,37], [160,19], [176,11]]
const coordsHeadText = [170,86]
const coordsChestVertices = [[234,91], [295,110], [328,132], [350,205], [350,254], [325,263], [316,276], [291,265], [260,266], [156,274], [101,274], [67,251], [72,223], [103,138], [133,112], [158,101], [166,115], [194,138], [213,131], [229,112]]
const coordsChestText = [185,216]
const coordsStomachVertices = [[162,272],[187,364],[151,414],[235,440],[360,422],[360,352],[350,322],[347,257],[324,266],[316,278],[290,267],[261,267]]
const coordsStomachText = [225,360]
const coordsLegsVertices = [[149,416],[101,524],[100,586],[119,623],[134,670],[133,734],[84,764],[75,784],[145,793],[168,787],[226,784],[221,752],[228,681],[201,564],[232,518],[250,614],[256,683],[277,765],[254,803],[253,814],[322,819],[350,808],[352,774],[357,731],[363,661],[337,588],[333,541],[345,528],[340,480],[358,427],[234,442]]
const coordsLegsText = [160,560]

module.exports = {
  coordsHeadVertices,
  coordsHeadText,
  coordsChestVertices,
  coordsChestText,
  coordsStomachVertices,
  coordsStomachText,
  coordsLegsVertices,
  coordsLegsText	
}