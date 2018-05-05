const should = require('chai').should();

describe("Test", function(){
    it("should fail", function(){
        (()=>5)().should.equal(4);
    })
})