/**
 * api接口，切换HOST即可切换本地模拟api或线上api
 */
// const HOST = '/rest';
const HOST = '';
const api = {
    'getTopBanners':'/index/getTopBanners'
}

for (let [key, value] of Object.entries(api)) {
    api[key] = HOST + value;
}
export {
    api
};