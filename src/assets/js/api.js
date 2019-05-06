/**
 * api接口，切换HOST即可切换本地模拟api或线上api
 */
// const HOST = '/rest';
const HOST = '';
const api = {
    'getTopBanners':'/index/getTopBanners',
    'getNotice':'/index/getNotice',
    'getTradeDynamics':'/index/getTradeDynamics',
    'getBookingMonthList':'/index/getBookingMonthList',
    "getMapData1":'/index/getMapData1',
    "getMapData2":'/index/getMapData2',
    "getPriceData":'/index/getPriceData',
    "getStockData":'/index/getStockData',
    "getTradeData":'/index/getTradeData'
}

for (let [key, value] of Object.entries(api)) {
    api[key] = HOST + value;
}
export {
    api
};