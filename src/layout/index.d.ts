/**
 * Meta
 */
export declare interface IMeta {
    title?: string,
    affix?: boolean,
    icon?: string,
}

/**
 * VuexRoutes
 */
export declare interface IVuexRoutes {
    "path": string,
    "name": string,
    "meta": IMeta,
    "noShowingChildren"?: boolean,
    "checked"?: boolean,
    "basePath": string
}
