/**
 * api接口，切换HOST即可切换本地模拟api或线上api
 */
const uploadPre ='http://192.168.30.32:8181/service';
// const HOST = '/rest';
const HOST = '';
const api = {
    'login':'/oauth/token',
    'getUserInfo':'/userDetail',
    'getHotelGroup':'/web/hotel/getGroupByUserId',
    'user':'/user',
    'logout':'/user/logout',
    'updatePassword':'/web/hotel/updatePassword',//POST  更新个人信息
    'roomList':'/web/hotel/getRoomsByHotelId',
    'searchRoomsByKeyword':'/web/hotel/searchRoomsByKeyword',//GET 搜索房间
    'addRoom':'/web/hotel/addRoom',//POST  添加房间
    'updateRoom':'/web/hotel/updateRoom',//POST  添加房间
    'deleteRoom':'/web/hotel/deleteRoom',//DELETE 删除房间
    'addHotel':'/web/hotel/addHotel',//post 新增酒店
    'updateHotel':'/web/hotel/updateHotel',//post 更新酒店
    'deleteHotel':'/web/hotel/deleteHotel',//post 删除酒店
    'getHotelDetail':'/web/hotel/getHotelDetail',//GET 酒店详情
    'listDevicesByRoomId':'/web/hotel/listDevicesByRoomId',//get 酒店设备
    'orderList':'/web/order/listOrders',//GET 
    'orderInfo':'/order/info',
    'hotelList':'/web/hotel/listHotelByUserId',//GET 根据userId列出所有门店
    'userList':'/user/list',
    'cities':'/common/cityByProvince',///GET 
    'provinces':'/common/provinces',//GET 
    'addServiceToHotel':'/web/service/addServiceToHotel',//post 给酒店增加服务
    'listServiceByHotelId':'/web/listServiceByHotelId',//GET 获取酒店支持的服务
    'getFoodById':'/web/service/getFoodById',//get 通过id获取菜品信息
    'getItemById':'/web/service/getItemById',//GET 通过id获取物品信息
    'listFoodsByHotelServiceId':'/web/service/listFoodsByHotelServiceId',//GET 通过hotelServiceId获取菜单
    'listItemByHotelServiceId':'/web/service/listItemByHotelServiceId',//GET 通过hotelServiceId获取物品
    'listService':'/web/service/listService',//GET 获取所有的服务
    'removeFood':'/web/service/removeFood',//DELETE 删除菜品
    'removeHotelService':'/web/service/removeHotelService',//DELETE 删除某个酒店的服务
    'removeItem':'/web/service/removeItem',//DELETE 删除物品
    'saveFood':'/web/service/saveFood',//POST 保存菜品
    'saveItem':'/web/service/saveItem',//POST 保存物品
    'updateFood':'/web/service/updateFood',//POST 编辑菜品
    'updateItem':'/web/service/updateItem',//POST 编辑物品
    'uploadFile':'/common/uploadFile'//POST 
}

for (let [key, value] of Object.entries(api)) {
    api[key] = HOST + value;
}
export {
    api,uploadPre
};