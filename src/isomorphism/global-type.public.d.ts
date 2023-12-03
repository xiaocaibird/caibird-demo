import type * as _Controllers from '../server/constrollers';
declare global {
    namespace CustomGlobalType {
        type Controllers = typeof _Controllers;
    }
}