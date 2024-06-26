// *** WARNING: this file was generated by test. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as enums from "./types/enums";
import * as utilities from "./utilities";

export class Example_resource extends pulumi.CustomResource {
    /**
     * Get an existing Example_resource resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, opts?: pulumi.CustomResourceOptions): Example_resource {
        return new Example_resource(name, undefined as any, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'legacy_names:index:example_resource';

    /**
     * Returns true if the given object is an instance of Example_resource.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is Example_resource {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === Example_resource.__pulumiType;
    }

    public /*out*/ readonly URL!: pulumi.Output<string | undefined>;
    public /*out*/ readonly good_URLs!: pulumi.Output<string[] | undefined>;
    public readonly map_enum!: pulumi.Output<{[key: string]: enums.Enum_XYZ}[] | undefined>;

    /**
     * Create a Example_resource resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args?: Example_resourceArgs, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            resourceInputs["map_enum"] = args ? args.map_enum : undefined;
            resourceInputs["request_HTTP"] = args ? args.request_HTTP : undefined;
            resourceInputs["URL"] = undefined /*out*/;
            resourceInputs["good_URLs"] = undefined /*out*/;
        } else {
            resourceInputs["URL"] = undefined /*out*/;
            resourceInputs["good_URLs"] = undefined /*out*/;
            resourceInputs["map_enum"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(Example_resource.__pulumiType, name, resourceInputs, opts);
    }
}

/**
 * The set of arguments for constructing a Example_resource resource.
 */
export interface Example_resourceArgs {
    map_enum?: pulumi.Input<pulumi.Input<{[key: string]: pulumi.Input<enums.Enum_XYZ>}>[]>;
    request_HTTP?: pulumi.Input<inputs.HTTP_module.RequestArgs>;
}
