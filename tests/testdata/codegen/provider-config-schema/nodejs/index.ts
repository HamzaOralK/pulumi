// *** WARNING: this file was generated by test. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

// Export members:
export { FuncWithAllOptionalInputsArgs, FuncWithAllOptionalInputsResult, FuncWithAllOptionalInputsOutputArgs } from "./funcWithAllOptionalInputs";
export const funcWithAllOptionalInputs: typeof import("./funcWithAllOptionalInputs").funcWithAllOptionalInputs = null as any;
export const funcWithAllOptionalInputsOutput: typeof import("./funcWithAllOptionalInputs").funcWithAllOptionalInputsOutput = null as any;
utilities.lazyLoad(exports, ["funcWithAllOptionalInputs","funcWithAllOptionalInputsOutput"], () => require("./funcWithAllOptionalInputs"));

export { ProviderArgs } from "./provider";
export type Provider = import("./provider").Provider;
export const Provider: typeof import("./provider").Provider = null as any;
utilities.lazyLoad(exports, ["Provider"], () => require("./provider"));


// Export enums:
export * from "./types/enums";

// Export sub-modules:
import * as config from "./config";
import * as types from "./types";

export {
    config,
    types,
};
pulumi.runtime.registerResourcePackage("configstation", {
    version: utilities.getVersion(),
    constructProvider: (name: string, type: string, urn: string): pulumi.ProviderResource => {
        if (type !== "pulumi:providers:configstation") {
            throw new Error(`unknown provider type ${type}`);
        }
        return new Provider(name, <any>undefined, { urn });
    },
});