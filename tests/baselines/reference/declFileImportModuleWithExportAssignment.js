//// [tests/cases/compiler/declFileImportModuleWithExportAssignment.ts] ////

//// [declFileImportModuleWithExportAssignment_0.ts]

module m2 {
    export interface connectModule {
        (res, req, next): void;
    }
    export interface connectExport {
        use: (mod: connectModule) => connectExport;
        listen: (port: number) => void;
    }

}
var m2: {
    (): m2.connectExport;
    test1: m2.connectModule;
    test2(): m2.connectModule;
};
export = m2;

//// [declFileImportModuleWithExportAssignment_1.ts]
/**This is on import declaration*/
import a1 = require("declFileImportModuleWithExportAssignment_0");
export var a = a1;
a.test1(null, null, null);


//// [declFileImportModuleWithExportAssignment_0.js]
var m2;
module.exports = m2;
//// [declFileImportModuleWithExportAssignment_1.js]
var a1 = require("declFileImportModuleWithExportAssignment_0");
exports.a = a1;
exports.a.test1(null, null, null);


//// [declFileImportModuleWithExportAssignment_0.d.ts]
declare module m2 {
    interface connectModule {
        (res: any, req: any, next: any): void;
    }
    interface connectExport {
        use: (mod: connectModule) => connectExport;
        listen: (port: number) => void;
    }
}
declare var m2: {
    (): m2.connectExport;
    test1: m2.connectModule;
    test2(): m2.connectModule;
};
export = m2;
//// [declFileImportModuleWithExportAssignment_1.d.ts]
export declare var a: {
    (): a1.connectExport;
    test1: a1.connectModule;
    test2(): a1.connectModule;
};


//// [DtsFileErrors]


==== tests/cases/compiler/declFileImportModuleWithExportAssignment_1.d.ts (3 errors) ====
    export declare var a: {
        (): a1.connectExport;
            ~~~~~~~~~~~~~~~~
!!! Cannot find name 'a1'.
        test1: a1.connectModule;
               ~~~~~~~~~~~~~~~~
!!! Cannot find name 'a1'.
        test2(): a1.connectModule;
                 ~~~~~~~~~~~~~~~~
!!! Cannot find name 'a1'.
    };
    
==== tests/cases/compiler/declFileImportModuleWithExportAssignment_0.d.ts (0 errors) ====
    declare module m2 {
        interface connectModule {
            (res: any, req: any, next: any): void;
        }
        interface connectExport {
            use: (mod: connectModule) => connectExport;
            listen: (port: number) => void;
        }
    }
    declare var m2: {
        (): m2.connectExport;
        test1: m2.connectModule;
        test2(): m2.connectModule;
    };
    export = m2;
    