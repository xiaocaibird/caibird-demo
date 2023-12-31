import { Controller, httpMethodFilter, View, BaseController } from 'caibird';

@httpMethodFilter('POST')
@Controller()
export class TestController extends BaseController {
    @httpMethodFilter(['POST', 'GET'])
    public async getConfig(reqData: { obj: { a: string, b: number } }) {
        console.log('node test/getconfig reqData:', reqData);
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