import {expect} from "chai";
import {N, m, output_spec} from "../constants";
import {getItemsToBuy} from "../src/solution";
describe("Testing of expect function: ", ()=>{
    describe("Testing add function", ()=>{
        it("Check returned value from getItemsToBuy(N,m), using  expect(output_spec[index]).to.equal(result[index])",()=>{
            const result = getItemsToBuy(N,m);
            expect(output_spec[0]).to.equal(result[0])
            expect(output_spec[1]).to.equal(result[1])
        })
    })
})