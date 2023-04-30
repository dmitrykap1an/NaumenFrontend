import {HttpStatusCode} from "axios";

const defaultConfig = {
    validateStatus: function (status: HttpStatusCode) {
        return status < 500;
    },
}

export default defaultConfig
