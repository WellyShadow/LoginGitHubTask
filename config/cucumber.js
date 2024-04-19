module.exports = {
    default: {
        tags:process.env.npm_config_TAGS || "",
        formatOptions:{
            "snippetInterface":"async-await"
        },
        paths: [
            "src/tests/features/"
        ],
        require: [
            "src/tests/steps/*.ts",
            "src/hooks/hooks.ts"
        ],
        dryRun:false,
        requireModule: [
            "ts-node/register"
        ],
        format:[
            "./src/reports/allure/reporter.js"
        ],       
         
    }
}