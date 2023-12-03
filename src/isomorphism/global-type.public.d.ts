import type * as _Controllers from '../server/constrollers';
declare global {
    namespace CaibirdGlobal {
        type Controllers = typeof _Controllers;
    }
}