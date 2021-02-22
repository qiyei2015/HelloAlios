/*<@leixing>{"header":{"version":"3.0.2","filename":"test/TestDemo.js","sound":1},"types":["any","number","boolean","string","void","int","object",{"path":"../../node_modules/@ali/caf-types/yunos/test/plover/Assert.js","name":""},{"path":"../../node_modules/@ali/caf-types/yunos/test/plover/TestCase.js","name":""},{"cname":"TestDemo","supers":{"TestCase":8},"fields":{"all":1,"each":1},"methods":[10,11,12,13,14,15,16]},{"fname":"constructor","ret":9},{"fname":"beforeAll"},{"fname":"afterAll"},{"fname":"beforeEach"},{"fname":"afterEach"},{"fname":"testCase1"},{"fname":"testCase2"}],"exports":10}*/
"use strict";
const /*<@7>*/assert = require("yunos/test/plover/Assert"); // eslint-disable-line
const /*<@8>*/TestCase = require("yunos/test/plover/TestCase");
class /*<@10>*/TestDemo extends TestCase {
    /* @overwrite */
    /*<@11>*/beforeAll() {
        this.all = 1;
    }
    /* @overwrite */
    /*<@12>*/afterAll() {
    }
    /* @overwrite */
    /*<@13>*/beforeEach() {
        this.each = this.all;
    }
    /* @overwrite */
    /*<@14>*/afterEach() {
    }
    /*<@15>*/testCase1() {
        assert.equal(this.all, this.each);
        this.all++;
        assert.equal(this.each, 1);
    }
    /*<@16>*/testCase2() {
        assert.equal(this.each, 2);
        assert.equal(this.all, this.each);
    }
}
module.exports = TestDemo;
//# sourceMappingURL=TestDemo.js.map