import { Controller, httpMethodFilter, View, BaseController } from '@futu/easy-ts/koa';

@httpMethodFilter('POST')
@Controller()
export class TestController extends BaseController {
    @httpMethodFilter(['POST', 'GET'])
    public async getConfig(reqData: { obj: { a: string, b: number } }) {
        console.log(reqData);
        return { prop12: true };
    }

    public async getMsg() {
        return '你好';
    }

    @httpMethodFilter('GET')
    public async toUrl(reqData: { url: string }) {
        return View.Redirect(reqData.url);
    }
}