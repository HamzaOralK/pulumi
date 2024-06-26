// Code generated by test DO NOT EDIT.
// *** WARNING: Do not edit by hand unless you're certain you know what you are doing! ***

package example

import (
	"context"
	"reflect"

	"errors"
	"github.com/pulumi/pulumi/sdk/v3/go/pulumi"
	"github.com/pulumi/pulumi/sdk/v3/go/pulumix"
	"simple-resource-with-aliases/example/internal"
)

type BasicResourceV2 struct {
	pulumi.CustomResourceState

	Bar pulumi.StringOutput `pulumi:"bar"`
}

// NewBasicResourceV2 registers a new resource with the given unique name, arguments, and options.
func NewBasicResourceV2(ctx *pulumi.Context,
	name string, args *BasicResourceV2Args, opts ...pulumi.ResourceOption) (*BasicResourceV2, error) {
	if args == nil {
		return nil, errors.New("missing one or more required arguments")
	}

	if args.Bar == nil {
		return nil, errors.New("invalid value for required argument 'Bar'")
	}
	aliases := pulumi.Aliases([]pulumi.Alias{
		{
			Type: pulumi.String("example:index:BasicResource"),
		},
	})
	opts = append(opts, aliases)
	opts = internal.PkgResourceDefaultOpts(opts)
	var resource BasicResourceV2
	err := ctx.RegisterResource("example:index:BasicResourceV2", name, args, &resource, opts...)
	if err != nil {
		return nil, err
	}
	return &resource, nil
}

// GetBasicResourceV2 gets an existing BasicResourceV2 resource's state with the given name, ID, and optional
// state properties that are used to uniquely qualify the lookup (nil if not required).
func GetBasicResourceV2(ctx *pulumi.Context,
	name string, id pulumi.IDInput, state *BasicResourceV2State, opts ...pulumi.ResourceOption) (*BasicResourceV2, error) {
	var resource BasicResourceV2
	err := ctx.ReadResource("example:index:BasicResourceV2", name, id, state, &resource, opts...)
	if err != nil {
		return nil, err
	}
	return &resource, nil
}

// Input properties used for looking up and filtering BasicResourceV2 resources.
type basicResourceV2State struct {
}

type BasicResourceV2State struct {
}

func (BasicResourceV2State) ElementType() reflect.Type {
	return reflect.TypeOf((*basicResourceV2State)(nil)).Elem()
}

type basicResourceV2Args struct {
	Bar string `pulumi:"bar"`
}

// The set of arguments for constructing a BasicResourceV2 resource.
type BasicResourceV2Args struct {
	Bar pulumi.StringInput
}

func (BasicResourceV2Args) ElementType() reflect.Type {
	return reflect.TypeOf((*basicResourceV2Args)(nil)).Elem()
}

type BasicResourceV2Input interface {
	pulumi.Input

	ToBasicResourceV2Output() BasicResourceV2Output
	ToBasicResourceV2OutputWithContext(ctx context.Context) BasicResourceV2Output
}

func (*BasicResourceV2) ElementType() reflect.Type {
	return reflect.TypeOf((**BasicResourceV2)(nil)).Elem()
}

func (i *BasicResourceV2) ToBasicResourceV2Output() BasicResourceV2Output {
	return i.ToBasicResourceV2OutputWithContext(context.Background())
}

func (i *BasicResourceV2) ToBasicResourceV2OutputWithContext(ctx context.Context) BasicResourceV2Output {
	return pulumi.ToOutputWithContext(ctx, i).(BasicResourceV2Output)
}

func (i *BasicResourceV2) ToOutput(ctx context.Context) pulumix.Output[*BasicResourceV2] {
	return pulumix.Output[*BasicResourceV2]{
		OutputState: i.ToBasicResourceV2OutputWithContext(ctx).OutputState,
	}
}

type BasicResourceV2Output struct{ *pulumi.OutputState }

func (BasicResourceV2Output) ElementType() reflect.Type {
	return reflect.TypeOf((**BasicResourceV2)(nil)).Elem()
}

func (o BasicResourceV2Output) ToBasicResourceV2Output() BasicResourceV2Output {
	return o
}

func (o BasicResourceV2Output) ToBasicResourceV2OutputWithContext(ctx context.Context) BasicResourceV2Output {
	return o
}

func (o BasicResourceV2Output) ToOutput(ctx context.Context) pulumix.Output[*BasicResourceV2] {
	return pulumix.Output[*BasicResourceV2]{
		OutputState: o.OutputState,
	}
}

func (o BasicResourceV2Output) Bar() pulumi.StringOutput {
	return o.ApplyT(func(v *BasicResourceV2) pulumi.StringOutput { return v.Bar }).(pulumi.StringOutput)
}

func init() {
	pulumi.RegisterInputType(reflect.TypeOf((*BasicResourceV2Input)(nil)).Elem(), &BasicResourceV2{})
	pulumi.RegisterOutputType(BasicResourceV2Output{})
}
