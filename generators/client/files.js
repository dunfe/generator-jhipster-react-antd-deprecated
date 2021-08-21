/**
 * Copyright 2013-2021 the original author or authors from the JHipster project.
 *
 * This file is part of the JHipster project, see https://www.jhipster.tech/
 * for more information.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const constants = require('generator-jhipster/generators/generator-constants');

const { REACT_DIR } = constants;

/**
 * The default is to use a file path string. It implies use of the template method.
 * For any other config an object { file:.., method:.., template:.. } can be used
 */
const files = {
    common: [
        {
            templates: ['package.json', '.eslintrc.json'],
        },
    ],
    reactApp: [
        {
            path: REACT_DIR,
            templates: [{ file: 'app.tsx', method: 'processJsx' }],
        },
        {
            path: REACT_DIR,
            templates: ['app.scss'],
        },
    ],
    reactMain: [
        {
            path: REACT_DIR,
            templates: [
                { file: 'modules/home/home.tsx', method: 'processJsx' },
                { file: 'modules/login/logout.tsx', method: 'processJsx' },
            ],
        },
        {
            condition: generator => generator.authenticationType !== 'oauth2',
            path: REACT_DIR,
            templates: [
                { file: 'modules/login/login.tsx', method: 'processJsx' },
                { file: 'modules/login/login-modal.tsx', method: 'processJsx' },
            ],
        },
        {
            condition: generator => generator.authenticationType === 'oauth2',
            path: REACT_DIR,
            templates: [{ file: 'modules/login/login-redirect.tsx', method: 'processJsx' }],
        },
        {
            path: REACT_DIR,
            templates: ['modules/home/home.scss'],
        },
    ],
    accountModule: [
        {
            condition: generator => !generator.skipUserManagement,
            path: REACT_DIR,
            templates: [
                { file: 'modules/account/index.tsx', method: 'processJsx' },
                { file: 'modules/account/activate/activate.tsx', method: 'processJsx' },
                { file: 'modules/account/password/password.tsx', method: 'processJsx' },
                { file: 'modules/account/register/register.tsx', method: 'processJsx' },
                { file: 'modules/account/password-reset/init/password-reset-init.tsx', method: 'processJsx' },
                { file: 'modules/account/password-reset/finish/password-reset-finish.tsx', method: 'processJsx' },
                { file: 'modules/account/settings/settings.tsx', method: 'processJsx' },
                { file: 'modules/account/register/register.reducer.ts', method: 'processJsx' },
                { file: 'modules/account/activate/activate.reducer.ts', method: 'processJsx' },
                { file: 'modules/account/password-reset/password-reset.reducer.ts', method: 'processJsx' },
                { file: 'modules/account/password/password.reducer.ts', method: 'processJsx' },
                { file: 'modules/account/settings/settings.reducer.ts', method: 'processJsx' },
            ],
        },
        {
            condition: generator => generator.authenticationType === 'session' && !generator.skipUserManagement,
            path: REACT_DIR,
            templates: [
                { file: 'modules/account/sessions/sessions.tsx', method: 'processJsx' },
                'modules/account/sessions/sessions.reducer.ts',
            ],
        },
    ],
    adminModule: [
        {
            path: REACT_DIR,
            templates: [
                { file: 'modules/administration/index.tsx', method: 'processJsx' },
                'modules/administration/administration.reducer.ts',
                { file: 'modules/administration/docs/docs.tsx', method: 'processJsx' },
                'modules/administration/docs/docs.scss',
            ],
        },
        {
            condition: generator => generator.withAdminUi,
            path: REACT_DIR,
            templates: [
                'modules/administration/metrics/metrics.scss',
                { file: 'modules/administration/configuration/configuration.tsx', method: 'processJsx' },
                { file: 'modules/administration/health/health.tsx', method: 'processJsx' },
                { file: 'modules/administration/health/health-modal.tsx', method: 'processJsx' },
                { file: 'modules/administration/logs/logs.tsx', method: 'processJsx' },
                { file: 'modules/administration/metrics/threads/jvmThreads.tsx', method: 'processJsx' },
                { file: 'modules/administration/metrics/threads/threadModal.tsx', method: 'processJsx' },
                { file: 'modules/administration/metrics/cacheMetrics.tsx', method: 'processJsx' },
                { file: 'modules/administration/metrics/datasourceMetrics.tsx', method: 'processJsx' },
                { file: 'modules/administration/metrics/endpointRequestsMetrics.tsx', method: 'processJsx' },
                { file: 'modules/administration/metrics/garbage.tsx', method: 'processJsx' },
                { file: 'modules/administration/metrics/httpRequestMetrics.tsx', method: 'processJsx' },
                { file: 'modules/administration/metrics/jvmMemory.tsx', method: 'processJsx' },
                { file: 'modules/administration/metrics/systemMetrics.tsx', method: 'processJsx' },
                { file: 'modules/administration/metrics/text-format.tsx', method: 'processJsx' },
                { file: 'modules/administration/metrics/cacheMetrics.tsx', method: 'processJsx' },
            ],
        },
        {
            condition: generator => generator.websocket === 'spring-websocket',
            path: REACT_DIR,
            templates: [{ file: 'modules/administration/tracker/tracker.tsx', method: 'processJsx' }],
        },
        {
            condition: generator => !generator.skipUserManagement,
            path: REACT_DIR,
            templates: [
                { file: 'modules/administration/user-management/index.tsx', method: 'processJsx' },
                { file: 'modules/administration/user-management/user-management.tsx', method: 'processJsx' },
                { file: 'modules/administration/user-management/user-management-update.tsx', method: 'processJsx' },
                { file: 'modules/administration/user-management/user-management-detail.tsx', method: 'processJsx' },
                { file: 'modules/administration/user-management/user-management-delete-dialog.tsx', method: 'processJsx' },
                'modules/administration/user-management/user-management.reducer.ts',
            ],
        },
        {
            condition: generator => generator.applicationType === 'gateway' && generator.serviceDiscoveryType,
            path: REACT_DIR,
            templates: [{ file: 'modules/administration/gateway/gateway.tsx', method: 'processJsx' }],
        },
    ],
    reactShared: [
        {
            path: REACT_DIR,
            templates: [
                // layouts
                { file: 'shared/layout/footer/footer.tsx', method: 'processJsx' },
                { file: 'shared/layout/header/header.tsx', method: 'processJsx' },
                { file: 'shared/layout/header/header-components.tsx', method: 'processJsx' },
                { file: 'shared/layout/menus/admin.tsx', method: 'processJsx' },
                { file: 'shared/layout/menus/account.tsx', method: 'processJsx' },
                { file: 'shared/layout/menus/entities.tsx', method: 'processJsx' },
                { file: 'shared/layout/sider/sider.tsx', method: 'processJsx' },
                // util
                'shared/util/nanToZero.ts',
                'shared/util/progress-utils.ts',
                // components
                { file: 'shared/error/page-not-found.tsx', method: 'processJsx' },
            ],
        },
        {
            condition: generator => generator.enableTranslation,
            path: REACT_DIR,
            templates: [{ file: 'shared/layout/menus/locale.tsx', method: 'processJsx' }],
        },
        {
            condition: generator => generator.authenticationType === 'oauth2',
            path: REACT_DIR,
        },
        {
            condition: generator => generator.authenticationType === 'session' && generator.websocket === 'spring-websocket',
            path: REACT_DIR,
        },
        {
            path: REACT_DIR,
            templates: ['shared/layout/header/header.scss', 'shared/layout/footer/footer.scss'],
        },
    ],
};

module.exports = {
    writeFiles,
    files,
};

function writeFiles() {
    // write React files
    this.writeFilesToDisk(files, 'react');
}
