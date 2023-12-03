import { ApiService } from 'caibird/client';

import { CONFIGS, KEYS } from '../public/consts';

const apiService = new ApiService<CustomGlobalType.Controllers>({
    prefix: CONFIGS.Prefix,
    transformGetMethodJsonData: {
        enabled: true,
        queryKey: KEYS.UrlJsonParamsKey,
    },
});

const fn = async () => {
    const res1 = await apiService.call.Test.getConfig({ obj: { a: '11', b: 0 } }, { httpMethod: 'GET' });
    const res2 = await apiService.call.Test.getConfig({ obj: { a: '22', b: 0 } }, { isRaw: true });

    console.log(res1);
    console.log(res2);
}

fn();