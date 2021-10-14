# yaml2jsish

A CLI driven converter for taking YAML files and converting them to JS/JSON/Typescript.

This is mostly a utility script for convering Swagger definitions written in YAML into a format
that is compilable and consumable by a Javascript application.

## Install

Should be a development dependency so that it can be pruned before a deploy to production

`npm install @flyweight.cloud/yaml2jsish --save-dev`

## Usage

`yaml2jsish "**/*.yaml" --type ts`
