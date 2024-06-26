// *** WARNING: this file was generated by test. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "../../utilities";

/**
 * A non-overlay component resource.
 */
export class ConfigGroup extends pulumi.ComponentResource {
    /** @internal */
    public static readonly __pulumiType = 'kubernetes:yaml/v2:ConfigGroup';

    /**
     * Returns true if the given object is an instance of ConfigGroup.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is ConfigGroup {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === ConfigGroup.__pulumiType;
    }

    /**
     * Resources created by the ConfigGroup.
     */
    public /*out*/ readonly resources!: pulumi.Output<any[]>;

    /**
     * Create a ConfigGroup resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args?: ConfigGroupArgs, opts?: pulumi.ComponentResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            resourceInputs["files"] = args ? args.files : undefined;
            resourceInputs["objs"] = args ? args.objs : undefined;
            resourceInputs["resourcePrefix"] = args ? args.resourcePrefix : undefined;
            resourceInputs["yaml"] = args ? args.yaml : undefined;
            resourceInputs["resources"] = undefined /*out*/;
        } else {
            resourceInputs["resources"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(ConfigGroup.__pulumiType, name, resourceInputs, opts, true /*remote*/);
    }
}

/**
 * The set of arguments for constructing a ConfigGroup resource.
 */
export interface ConfigGroupArgs {
    /**
     * Set of paths or a URLs that uniquely identify files.
     */
    files?: pulumi.Input<string | pulumi.Input<string>[]>;
    /**
     * Objects representing Kubernetes resources.
     */
    objs?: pulumi.Input<any | any[]>;
    /**
     * An optional prefix for the auto-generated resource names. Example: A resource created with resourcePrefix="foo" would produce a resource named "foo-resourceName".
     */
    resourcePrefix?: pulumi.Input<string>;
    /**
     * YAML text containing Kubernetes resource definitions.
     */
    yaml?: pulumi.Input<string | pulumi.Input<string>[]>;
}
