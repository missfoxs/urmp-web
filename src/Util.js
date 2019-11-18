import axios from 'axios';
function AjaxHelper(params){
    return axios({...params,withCredentials: true})
}

const Util = {
    AjaxHelper
}

export default Util;