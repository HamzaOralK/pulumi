// Copyright 2016 Marapongo, Inc. All rights reserved.

package compiler

import (
	"github.com/marapongo/mu/pkg/ast"
	"github.com/marapongo/mu/pkg/symbols"
)

// Symbol is a named entity that can be referenced and bound to.
type Symbol struct {
	Kind SymbolKind   // the kind of symbol.
	Name symbols.Name // the symbol's unique name.
	Node *ast.Node    // the Node part of the payload data structure.
	Real interface{}  // the real part of the payload (i.e., the whole structure).
}

// SymbolKind indicates the kind of symbol being registered (e.g., Stack, Service, etc).
type SymbolKind int

const (
	SymKindService SymbolKind = iota
	SymKindStack
	SymKindUninstStack
	SymKindSchema
)

func NewServiceSymbol(nm symbols.Name, svc *ast.Service) *Symbol {
	return &Symbol{SymKindService, nm, &svc.Node, svc}
}

func NewStackSymbol(nm symbols.Name, stack *ast.Stack) *Symbol {
	return &Symbol{SymKindStack, nm, &stack.Node, stack}
}

func NewUninstStackSymbol(nm symbols.Name, ref *ast.UninstStack) *Symbol {
	return &Symbol{SymKindUninstStack, nm, &ref.Node, ref}
}

func NewSchemaSymbol(nm symbols.Name, schema *ast.Schema) *Symbol {
	return &Symbol{SymKindSchema, nm, &schema.Node, schema}
}
