// *** WARNING: this file was generated by test. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

// Export members:
export { ComponentArgs } from "./component";
export type Component = import("./component").Component;
export const Component: typeof import("./component").Component = null as any;

export { DoFooArgs } from "./doFoo";
export const doFoo: typeof import("./doFoo").doFoo = null as any;

export { ProviderArgs } from "./provider";
export type Provider = import("./provider").Provider;
export const Provider: typeof import("./provider").Provider = null as any;

utilities.lazyLoad(exports, ["Component"], () => require("./component"));
utilities.lazyLoad(exports, ["doFoo"], () => require("./doFoo"));
utilities.lazyLoad(exports, ["Provider"], () => require("./provider"));

// Export sub-modules:
import * as types from "./types";

export {
    types,
};

const _module = {
    version: utilities.getVersion(),
    construct: (name: string, type: string, urn: string): pulumi.Resource => {
        switch (type) {
            case "example::Component":
                return new Component(name, <any>undefined, { urn })
            default:
                throw new Error(`unknown resource type ${type}`);
        }
    },
};
pulumi.runtime.registerResourceModule("example", "", _module)
pulumi.runtime.registerResourcePackage("example", {
    version: utilities.getVersion(),
    constructProvider: (name: string, type: string, urn: string): pulumi.ProviderResource => {
        if (type !== "pulumi:providers:example") {
            throw new Error(`unknown provider type ${type}`);
        }
        return new Provider(name, <any>undefined, { urn });
    },
});
