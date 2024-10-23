import * as chai from "chai";

const { expect, assert } = chai;
import { 
    Inspect,
} from  '../src/index';

describe ('Inspect Tests', () => {

    it ('Can use Inspect', async () => {
        let orgName = "nodejs";

        let orgRepos = (await (await fetch(`https://api.github.com/orgs/${orgName}/repos`)).json())
            .map(x => ({
                name: x.name,
                description: x.description,
                lang: x.language,
                watchers: x.watchers_count,
                forks: x.forks
            }));
    
        orgRepos.sort((a, b) => b.watchers - a.watchers);
    
        console.log(`Top 3 ${orgName} Github Repos:`);
        Inspect.printDump(orgRepos.slice(0, 3));
    
        console.log(`\nTop 10 ${orgName} Github Repos:`);
        Inspect.printDumpTable(orgRepos.map(x => ({
            name: x.name, lang: x.lang, watchers: x.watchers, forks: x.forks
        })).slice(0, 10));
    
        Inspect.vars({ orgRepos });
    })

})