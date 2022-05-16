import * as Types from './libs/graphql/$types';

import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type PikachuQueryVariables = Types.Exact<{ [key: string]: never; }>;


export type PikachuQuery = { __typename?: 'Query', pokemon?: { __typename?: 'Pokemon', name?: string | null, image?: string | null } | null };


export const PikachuDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Pikachu"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"pokemon"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"name"},"value":{"kind":"StringValue","value":"pikachu","block":false}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"image"}}]}}]}}]} as unknown as DocumentNode<PikachuQuery, PikachuQueryVariables>;