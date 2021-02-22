"use sound";
"use strict";
import assert = require("yunos/test/plover/Assert");// eslint-disable-line
import TestCase = require("yunos/test/plover/TestCase");
class TestDemo extends TestCase {
    all:number;
    each:number;
    /* @overwrite */
    beforeAll() {
        this.all = 1;
    }
    /* @overwrite */
    afterAll() {
    }
    /* @overwrite */
    beforeEach() {
        this.each = this.all;
    }
    /* @overwrite */
    afterEach() {
    }

    testCase1() {
        assert.equal(this.all, this.each);
        this.all++;
        assert.equal(this.each, 1);
    }

    testCase2() {
        assert.equal(this.each, 2);
        assert.equal(this.all, this.each);
    }
}

export = TestDemo;