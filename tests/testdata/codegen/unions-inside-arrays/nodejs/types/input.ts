// *** WARNING: this file was generated by test. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "../types/input";
import * as outputs from "../types/output";

export interface ServerPropertiesForReplicaArgs {
    createMode: pulumi.Input<"Replica">;
    version?: pulumi.Input<string>;
}

export interface ServerPropertiesForRestoreArgs {
    createMode: pulumi.Input<"PointInTimeRestore">;
    restorePointInTime: pulumi.Input<string>;
}
