// Code generated by test DO NOT EDIT.
// *** WARNING: Do not edit by hand unless you're certain you know what you are doing! ***

package example

import (
	"context"
	"reflect"

	"github.com/pulumi/pulumi/sdk/v3/go/pulumi"
	"github.com/pulumi/pulumi/sdk/v3/go/pulumix"
	"unions-inside-arrays/example/internal"
)

var _ = internal.GetEnvOrDefault

type ServerPropertiesForReplica struct {
	CreateMode string  `pulumi:"createMode"`
	Version    *string `pulumi:"version"`
}

type ServerPropertiesForReplicaArgs struct {
	CreateMode pulumix.Input[string]  `pulumi:"createMode"`
	Version    pulumix.Input[*string] `pulumi:"version"`
}

func (ServerPropertiesForReplicaArgs) ElementType() reflect.Type {
	return reflect.TypeOf((*ServerPropertiesForReplica)(nil)).Elem()
}

func (i ServerPropertiesForReplicaArgs) ToServerPropertiesForReplicaOutput() ServerPropertiesForReplicaOutput {
	return i.ToServerPropertiesForReplicaOutputWithContext(context.Background())
}

func (i ServerPropertiesForReplicaArgs) ToServerPropertiesForReplicaOutputWithContext(ctx context.Context) ServerPropertiesForReplicaOutput {
	return pulumi.ToOutputWithContext(ctx, i).(ServerPropertiesForReplicaOutput)
}

func (i *ServerPropertiesForReplicaArgs) ToOutput(ctx context.Context) pulumix.Output[*ServerPropertiesForReplicaArgs] {
	return pulumix.Val(i)
}

type ServerPropertiesForReplicaOutput struct{ *pulumi.OutputState }

func (ServerPropertiesForReplicaOutput) ElementType() reflect.Type {
	return reflect.TypeOf((*ServerPropertiesForReplica)(nil)).Elem()
}

func (o ServerPropertiesForReplicaOutput) ToServerPropertiesForReplicaOutput() ServerPropertiesForReplicaOutput {
	return o
}

func (o ServerPropertiesForReplicaOutput) ToServerPropertiesForReplicaOutputWithContext(ctx context.Context) ServerPropertiesForReplicaOutput {
	return o
}

func (o ServerPropertiesForReplicaOutput) ToOutput(ctx context.Context) pulumix.Output[ServerPropertiesForReplica] {
	return pulumix.Output[ServerPropertiesForReplica]{
		OutputState: o.OutputState,
	}
}

func (o ServerPropertiesForReplicaOutput) CreateMode() pulumix.Output[string] {
	return pulumix.Apply[ServerPropertiesForReplica](o, func(v ServerPropertiesForReplica) string { return v.CreateMode })
}

func (o ServerPropertiesForReplicaOutput) Version() pulumix.Output[*string] {
	return pulumix.Apply[ServerPropertiesForReplica](o, func(v ServerPropertiesForReplica) *string { return v.Version })
}

type ServerPropertiesForRestore struct {
	CreateMode         string `pulumi:"createMode"`
	RestorePointInTime string `pulumi:"restorePointInTime"`
}

type ServerPropertiesForRestoreArgs struct {
	CreateMode         pulumix.Input[string] `pulumi:"createMode"`
	RestorePointInTime pulumix.Input[string] `pulumi:"restorePointInTime"`
}

func (ServerPropertiesForRestoreArgs) ElementType() reflect.Type {
	return reflect.TypeOf((*ServerPropertiesForRestore)(nil)).Elem()
}

func (i ServerPropertiesForRestoreArgs) ToServerPropertiesForRestoreOutput() ServerPropertiesForRestoreOutput {
	return i.ToServerPropertiesForRestoreOutputWithContext(context.Background())
}

func (i ServerPropertiesForRestoreArgs) ToServerPropertiesForRestoreOutputWithContext(ctx context.Context) ServerPropertiesForRestoreOutput {
	return pulumi.ToOutputWithContext(ctx, i).(ServerPropertiesForRestoreOutput)
}

func (i *ServerPropertiesForRestoreArgs) ToOutput(ctx context.Context) pulumix.Output[*ServerPropertiesForRestoreArgs] {
	return pulumix.Val(i)
}

type ServerPropertiesForRestoreOutput struct{ *pulumi.OutputState }

func (ServerPropertiesForRestoreOutput) ElementType() reflect.Type {
	return reflect.TypeOf((*ServerPropertiesForRestore)(nil)).Elem()
}

func (o ServerPropertiesForRestoreOutput) ToServerPropertiesForRestoreOutput() ServerPropertiesForRestoreOutput {
	return o
}

func (o ServerPropertiesForRestoreOutput) ToServerPropertiesForRestoreOutputWithContext(ctx context.Context) ServerPropertiesForRestoreOutput {
	return o
}

func (o ServerPropertiesForRestoreOutput) ToOutput(ctx context.Context) pulumix.Output[ServerPropertiesForRestore] {
	return pulumix.Output[ServerPropertiesForRestore]{
		OutputState: o.OutputState,
	}
}

func (o ServerPropertiesForRestoreOutput) CreateMode() pulumix.Output[string] {
	return pulumix.Apply[ServerPropertiesForRestore](o, func(v ServerPropertiesForRestore) string { return v.CreateMode })
}

func (o ServerPropertiesForRestoreOutput) RestorePointInTime() pulumix.Output[string] {
	return pulumix.Apply[ServerPropertiesForRestore](o, func(v ServerPropertiesForRestore) string { return v.RestorePointInTime })
}

func init() {
	pulumi.RegisterOutputType(ServerPropertiesForReplicaOutput{})
	pulumi.RegisterOutputType(ServerPropertiesForRestoreOutput{})
}
