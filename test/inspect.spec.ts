import * as chai from "chai";

const { expect, assert } = chai;
import { 
    Inspect,
} from  '../src/index';

// Remove Inspect.vars from @servicestack/client to prevent dynamic resolve errors
async function vars(obj:any) {        
    if (typeof process != 'object') 
        return

    let inspectVarsPath = process.env.INSPECT_VARS
    if (!inspectVarsPath || !obj)
        return

    // resolve dynamic path to prevent ng webpack static analysis
    const I = (s:string) => import(/* @vite-ignore */ s)
    const nodeModule = (m:string) => 'no' + 'de:' + `${m}`
    await I(nodeModule('fs')).then(async fs => {
        await I(nodeModule('path')).then(path => {
            let varsPath = inspectVarsPath.replace(/\\/g,'/')
            if (varsPath.indexOf('/') >= 0) {
                let dir = path.dirname(varsPath)
                if (!fs.existsSync(dir)) {
                    fs.mkdirSync(dir)
                }
            }
            fs.writeFileSync(varsPath, JSON.stringify(obj))
        })
    })
}


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
    
        await vars({ orgRepos });
    })

})