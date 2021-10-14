import * as fs from "fs/promises";
import * as path from "path";
import * as yaml2jsish from "../src";

const yamlFixtureFile = "foo.yaml";
const yamlFixture = path.join("tests", "fixtures", yamlFixtureFile);

describe("Basic conversion", () => {
    test("To typescript", async () => {
        const fixtureContent = (await fs.readFile(yamlFixture, "utf-8")).toString();
        const fixtureExpected= (await fs.readFile(yamlFixture.replace(/yaml$/, "ts"), "utf-8")).toString();
        const {outPath, outContent} = yaml2jsish.convertFile(yamlFixtureFile, fixtureContent, {type: "ts"});
        expect(outContent).toMatch(fixtureExpected);
        expect(outPath).toEqual("foo.ts");
    });
    test("To javascript", async () => {
        const fixtureContent = (await fs.readFile(yamlFixture, "utf-8")).toString();
        const fixtureExpected= (await fs.readFile(yamlFixture.replace(/yaml$/, "js"), "utf-8")).toString();
        const {outPath, outContent} = yaml2jsish.convertFile(yamlFixtureFile, fixtureContent, {type: "js"});
        expect(outContent).toMatch(fixtureExpected);
        expect(outPath).toEqual("foo.js");
    });
    test("To json", async () => {
        const fixtureContent = (await fs.readFile(yamlFixture, "utf-8")).toString();
        const fixtureExpected= (await fs.readFile(yamlFixture.replace(/yaml$/, "json"), "utf-8")).toString();
        const {outPath, outContent} = yaml2jsish.convertFile(yamlFixtureFile, fixtureContent, {type: "json"});
        expect(outContent).toMatch(fixtureExpected);
        expect(outPath).toEqual("foo.json");
    });
});