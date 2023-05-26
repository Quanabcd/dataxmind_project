import axios from 'axios';
import { TIMEOUT_API } from 'commons/configs';
import SessionManager from 'managers/session-manager';

export const ResponseCodes = {
    Success: 200,

    BadRequest: 400,
    TokenInvalid: 403,
    Timeout: 408,
    Expires: 406
};

const HEADER = {
    Accept: 'application/x-www-form-urlencoded'
};

const getHeader = () => {
    const myHeader: any = {
        ...HEADER
    };
    if (SessionManager.accessToken) {
        myHeader.Authorization = SessionManager.accessToken;
    }
    return myHeader;
};
export class BaseService {
    api = () => {
        const defHeader = getHeader();

        const _api = axios.create({
            headers: defHeader,
            timeout: TIMEOUT_API
        });

        return _api;
    };

    buildUrlEncoded = (data: any) => {
        const params = new URLSearchParams();
        Object.keys(data).map(key => params.append(key, data[key]));
        return { params };
    };

    buildFormData = (data: any) => {
        const formData = new FormData();
        const keys = Object.keys(data);
        if (keys && keys.length > 0) {
            keys.forEach((key) => {
                if (data[key] !== undefined) {
                    if (data[key] instanceof Array) {
                        if (data[key].length > 0) {
                            for (let i = 0; i < data[key].length; i++) {
                                formData.append(`${key}`, data[key][i]);
                            }
                        }
                    } else if (key !== 'file') {
                        formData.append(key, data[key]);
                    } else if (data[key]) {
                        formData.append(key, {
                            uri: data[key]?.path || '',
                            type: data[key].mime
                        } as any);
                    }
                }
            });
        }

        return formData;
    };
}
