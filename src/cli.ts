#!/usr/bin/env node

import * as commandLineArgs from "command-line-args";
import { convertYaml } from ".";

const mainDefs = [
    { name: "command", defaultOption: true },
];
const mainOptions = commandLineArgs(mainDefs, { stopAtFirstUnknown: true });
const argv = mainOptions._unknown || [];

const mergeDefinitions = [
    { name: "type", alias: "t", defaultValue: "ts" },
    { name: "ignore", alias: "i", defaultValue: "**/node_modules/**" },
];
const mergeOptions = commandLineArgs(mergeDefinitions, { argv });

const glob = mainOptions.command;
const type = mergeOptions.type;

convertYaml({match: glob, options: {
    ignore: [mergeOptions.ignore],
}}, {type}).then((outs) => {
    for (const outPath of outs) {
        // tslint:disable-next-line no-console
        console.log("Converted:", outPath[0], " <=> ", outPath[1]);
    }
}).catch((err)=> {
    process.stdout.write(err);
    process.exit(1);
});
