import type * as EasyTsControllers from '../server/constrollers';
declare global {
    namespace CustomGlobalType {
        type Controllers = typeof EasyTsControllers;
    }
}