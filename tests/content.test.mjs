import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import test from "node:test";
import vm from "node:vm";

const source = readFileSync(new URL("../main.js", import.meta.url), "utf8");
const shared = source.match(/\/\* @shared:start[\s\S]*?\/\* @shared:end \*\//)[0];
const context = vm.createContext({});
vm.runInContext(shared, context);

for (const [available, expected] of [["Everytime", "Everytime"], ["2027-01-01", "January 2027"]]) {
  test(`availability supports ${available}`, () => {
    context.input = { site: { available }, label: "{availableMonth}" };
    assert.equal(vm.runInContext("resolveData(input).label", context), expected);
  });
}
