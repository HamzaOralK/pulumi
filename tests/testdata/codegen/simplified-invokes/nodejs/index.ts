// *** WARNING: this file was generated by test. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

// Export members:
export { AbsArgs, AbsResult, AbsOutputArgs } from "./abs";
export const abs: typeof import("./abs").abs = null as any;
export const absOutput: typeof import("./abs").absOutput = null as any;
utilities.lazyLoad(exports, ["abs","absOutput"], () => require("./abs"));

export { AbsMultiArgsResult } from "./absMultiArgs";
export const absMultiArgs: typeof import("./absMultiArgs").absMultiArgs = null as any;
export const absMultiArgsOutput: typeof import("./absMultiArgs").absMultiArgsOutput = null as any;
utilities.lazyLoad(exports, ["absMultiArgs","absMultiArgsOutput"], () => require("./absMultiArgs"));

export const absMultiArgsReducedOutput: typeof import("./absMultiArgsReducedOutput").absMultiArgsReducedOutput = null as any;
export const absMultiArgsReducedOutputOutput: typeof import("./absMultiArgsReducedOutput").absMultiArgsReducedOutputOutput = null as any;
utilities.lazyLoad(exports, ["absMultiArgsReducedOutput","absMultiArgsReducedOutputOutput"], () => require("./absMultiArgsReducedOutput"));

export const absMultiArgsReducedOutputSwapped: typeof import("./absMultiArgsReducedOutputSwapped").absMultiArgsReducedOutputSwapped = null as any;
export const absMultiArgsReducedOutputSwappedOutput: typeof import("./absMultiArgsReducedOutputSwapped").absMultiArgsReducedOutputSwappedOutput = null as any;
utilities.lazyLoad(exports, ["absMultiArgsReducedOutputSwapped","absMultiArgsReducedOutputSwappedOutput"], () => require("./absMultiArgsReducedOutputSwapped"));

export { AbsReducedOutputArgs, AbsReducedOutputOutputArgs } from "./absReducedOutput";
export const absReducedOutput: typeof import("./absReducedOutput").absReducedOutput = null as any;
export const absReducedOutputOutput: typeof import("./absReducedOutput").absReducedOutputOutput = null as any;
utilities.lazyLoad(exports, ["absReducedOutput","absReducedOutputOutput"], () => require("./absReducedOutput"));

export const getArchive: typeof import("./getArchive").getArchive = null as any;
export const getArchiveOutput: typeof import("./getArchive").getArchiveOutput = null as any;
utilities.lazyLoad(exports, ["getArchive","getArchiveOutput"], () => require("./getArchive"));

export const getArrayCustomResult: typeof import("./getArrayCustomResult").getArrayCustomResult = null as any;
export const getArrayCustomResultOutput: typeof import("./getArrayCustomResult").getArrayCustomResultOutput = null as any;
utilities.lazyLoad(exports, ["getArrayCustomResult","getArrayCustomResultOutput"], () => require("./getArrayCustomResult"));

export const getAsset: typeof import("./getAsset").getAsset = null as any;
export const getAssetOutput: typeof import("./getAsset").getAssetOutput = null as any;
utilities.lazyLoad(exports, ["getAsset","getAssetOutput"], () => require("./getAsset"));

export const getCustomResult: typeof import("./getCustomResult").getCustomResult = null as any;
export const getCustomResultOutput: typeof import("./getCustomResult").getCustomResultOutput = null as any;
utilities.lazyLoad(exports, ["getCustomResult","getCustomResultOutput"], () => require("./getCustomResult"));

export const getDictionary: typeof import("./getDictionary").getDictionary = null as any;
export const getDictionaryOutput: typeof import("./getDictionary").getDictionaryOutput = null as any;
utilities.lazyLoad(exports, ["getDictionary","getDictionaryOutput"], () => require("./getDictionary"));

export { ProviderArgs } from "./provider";
export type Provider = import("./provider").Provider;
export const Provider: typeof import("./provider").Provider = null as any;
utilities.lazyLoad(exports, ["Provider"], () => require("./provider"));


// Export sub-modules:
import * as types from "./types";

export {
    types,
};
pulumi.runtime.registerResourcePackage("std", {
    version: utilities.getVersion(),
    constructProvider: (name: string, type: string, urn: string): pulumi.ProviderResource => {
        if (type !== "pulumi:providers:std") {
            throw new Error(`unknown provider type ${type}`);
        }
        return new Provider(name, <any>undefined, { urn });
    },
});
