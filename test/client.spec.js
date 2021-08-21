const path = require('path');
const assert = require('yeoman-assert');
const helpers = require('yeoman-test');

describe('Subgenerator client of react-antd JHipster blueprint', () => {
    describe('Sample test', () => {
        before(async function () {
            this.timeout(20000);
            return helpers
                .create('jhipster:client')
                .withOptions({
                    fromCli: true,
                    skipInstall: true,
                    blueprint: 'react-antd',
                    skipChecks: true,
                })
                .withGenerators([
                    [
                        require('generator-jhipster/generators/client'), // eslint-disable-line global-require
                        'jhipster:client',
                        require.resolve('generator-jhipster/generators/client'),
                    ],
                    [
                        require('../generators/client'), // eslint-disable-line global-require
                        'jhipster-react-antd:client',
                        path.join(__dirname, '../generators/client/index.js'),
                    ],
                ])
                .withPrompts({
                    baseName: 'sampleMysql',
                    packageName: 'com.mycompany.myapp',
                    applicationType: 'monolith',
                    databaseType: 'sql',
                    devDatabaseType: 'h2Disk',
                    prodDatabaseType: 'mysql',
                    cacheProvider: 'ehcache',
                    authenticationType: 'session',
                    enableTranslation: true,
                    nativeLanguage: 'en',
                    languages: ['fr', 'de'],
                    buildTool: 'maven',
                    rememberMeKey: '2bb60a80889aa6e6767e9ccd8714982681152aa5',
                })
                .run();
        });

        it('it works', () => {
            // Adds your tests here
            assert.textEqual('Write your own tests!', 'Write your own tests!');
        });
    });
});
