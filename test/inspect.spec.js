"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const chai = require("chai");
const { expect, assert } = chai;
const index_1 = require("../src/index");
describe('Inspect Tests', () => {
    it('Can use Inspect', () => __awaiter(void 0, void 0, void 0, function* () {
        let orgName = "nodejs";
        let orgRepos = (yield (yield fetch(`https://api.github.com/orgs/${orgName}/repos`)).json())
            .map(x => ({
            name: x.name,
            description: x.description,
            lang: x.language,
            watchers: x.watchers_count,
            forks: x.forks
        }));
        orgRepos.sort((a, b) => b.watchers - a.watchers);
        console.log(`Top 3 ${orgName} Github Repos:`);
        index_1.Inspect.printDump(orgRepos.slice(0, 3));
        console.log(`\nTop 10 ${orgName} Github Repos:`);
        index_1.Inspect.printDumpTable(orgRepos.map(x => ({
            name: x.name, lang: x.lang, watchers: x.watchers, forks: x.forks
        })).slice(0, 10));
        index_1.Inspect.vars({ orgRepos });
    }));
});
