/* eslint-disable no-param-reassign */
import _ from 'lodash';

export interface RangeParam {
    from: number;
    to: number;
}

export interface RequestParams {
    page?: number;
    limit?: number;
    extended?: 'full' | 'metadata';
    query?: string;
    years?: number;
    genres?: string[];
    languages?: string[];
    countries?: string[];
    runtimes?: RangeParam;
    ratings?: RangeParam;
    certifications?: string[];
    networks?: string[];
    status?: any;
    [key: string]: any;
}
/**
 * Helper class for Request Params handling
 */
export default class RequestHelper {
    /**
     * Receives a RequestParams object and transforms it to an object that can be handled by {@link buildApiUrl}
     * @param params
     */
    static createParamsObject(
        params: RequestParams
    ): { [key: string]: string } {
        if (!params || params === {}) {
            return {};
        }
        const query: { [key: string]: any } = {};
        Object.keys(params).forEach(key => {
            if (
                [
                    'genres',
                    'languages',
                    'countries',
                    'certifications',
                    'networks'
                ].includes(key)
            ) {
                query[key] = _.isArray(params[key])
                    ? params[key].join()
                    : params[key];
            } else if (['runtimes', 'ratings'].includes(key)) {
                const val = params[key];
                query[key] = `${val.from}-${val.to}`;
            } else {
                const val = params[key];
                query[key] = _.isArray(val) ? val.join() : val;
            }
        });

        return query;
    }

    static createParamsFromNextUrl = (
        nextUrl: string = null
    ): RequestParams => {
        const res = !nextUrl
            ? {}
            : JSON.parse(
                  // tslint:disable:quotemark
                  // tslint:disable-next-line:prefer-template
                  `{"${decodeURIComponent(nextUrl.match('[^?]*$')[0])
                      .replace(/"/g, '\\"')
                      .replace(/&/g, '","')
                      .replace(/=/g, '":"')}"}`
                  // tslint:enable:quotemark
              );
        const result = {};
        Object.keys(res).forEach(key => {
            RequestHelper.traverse(result, key, res[key]);
        });
        return result;
    };

    private static traverse = (result, key, val) => {
        const match = key.match(/\[.*?\]/g) || [];

        if (match.length === 0) {
            result[key] = Number.isNaN(Number(val)) ? val : Number(val);
        } else if (match.length === 1) {
            const newKey = key.replace(match[0], '');
            const subKey = match[0].replace('[', '').replace(']', '');
            if (!result[newKey]) {
                result[newKey] = {};
            }
            result[newKey][subKey] = Number.isNaN(Number(val))
                ? val
                : Number(val);
        } else {
            let base = key;
            let newKey = {};
            match.forEach((m, i) => {
                base = base.replace(m, '');
                if (i === 0) {
                    newKey = m.replace('[', '').replace(']', '');
                } else {
                    newKey += m;
                }
            });
            if (!result[base]) {
                result[base] = {};
            }
            RequestHelper.traverse(result[base], newKey, val);
        }
    };
}
