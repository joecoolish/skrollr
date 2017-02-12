declare namespace __Skrollr {
    export interface SkrollrStatic {
        get: () => any;
        //Main entry point;
        init: (options: Partial<SkrollrOptions>) => any;
        VERSION: string;
    }

    interface SkrollrOptions {
        constants: any;
        easing: Object;
        edgeStrategy: string;
        forceHeight: boolean;
        scale: number;
        mobileDecleration: number;
        smoothScrolling: boolean;
        smoothScrollingDuration: number;
        mobileCheck: () => boolean | boolean;
        skrollrBody: string;


        beforerender: (params?) => any;
        render: (params?) => any;
        keyframe: (...params) => any;
    }
}
declare module 'skrollr-typed' {
    const skrollr: __Skrollr.SkrollrStatic;
    export default skrollr;
}

import skr = __Skrollr;
