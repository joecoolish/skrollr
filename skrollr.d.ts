interface SkrollrStatic {
    get: () => any,
    //Main entry point.
    init: (options) => any,
    VERSION: string,
    menu: any
}

interface SkrollrOptions {
    }

declare module 'skrollr' {
    const skrollr: SkrollrStatic;
    export default skrollr;
}
