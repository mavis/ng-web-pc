
const HOST = '';
const api = {
    'getTopBanners':'/index/getTopBanners',
    'getNotice':'/index/getNotice',
    'getTradeDynamics':'/index/getTradeDynamics',
    'getBookingMonthList':'/index/getBookingMonthList',
    "getMapData1":'/index/getMapData1',
    "getMapData2":'/index/getMapData2',
    "getCategory":'/index/getCategory',
    "getPriceData":'/index/getPriceData',
    "getStockData":'/index/getStockData',
    "getTradeData":'/index/getTradeData',
    'getPlatIndexData':'/index/getPlatIndexData',
    'getHotProList':'/index/getHotProList',
    'getPlatNotices':'/index/getPlatNotices'
}

for (let [key, value] of Object.entries(api)) {
    api[key] = HOST + value;
}
export {
    api
};