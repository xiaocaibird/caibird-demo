import Koa from 'koa';
import { controllersRouter } from '@futu/easy-ts/koa';

import * as Controllers from './constrollers';
import { CONFIGS, KEYS } from '../public/consts';

const app = new Koa();

app.keys = ['easy-ts-koa-demo-app'];

app.use(controllersRouter({
    Controllers,
    prefix: CONFIGS.Prefix,
    transformGetMethodJsonData: {
        enabled: true,
        queryKey: KEYS.UrlJsonParamsKey,
    },
}, app));

app.listen(CONFIGS.Port, CONFIGS.Host);