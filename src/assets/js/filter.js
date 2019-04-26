import './date_prototype.js'

function formatGender(code){
    if(code == "M"){
        return '男'
    }
    if(code == "F"){
        return '女'
    }
    return '';
}
function formatDate(dateStr){
    if(!dateStr){
        return '';
    }
    var date = new Date(dateStr);
    return date.Format("yyyy-MM-dd hh:mm");
}
export default{
    formatGender,
    formatDate
}