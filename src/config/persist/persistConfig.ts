import storage from "redux-persist/lib/storage";
import {persistTransform} from "@config/persist/persistTransform";
import autoMergeLevel2 from "redux-persist/lib/stateReconciler/autoMergeLevel2";
import {createMigrate} from "redux-persist";
import {persistMigrations} from "@config/persist/persistMigrations";
import {MigrationManifest} from "redux-persist/es/types";

export const persistConfig = {
    key: 'root',
    storage,
    version: 1,
    blacklist: ['router'],
    transforms: [persistTransform],
    stateReconciler: autoMergeLevel2,
    migrate: createMigrate(persistMigrations as unknown as MigrationManifest),
};

