/* eslint-disable max-len */
// prettier-ignore
export default {
  // General adapter exceptions
  invalidApiImplementation: 'Invalid read-model adapter API implementation',
  readSideForbiddenOperation: operation => `Operation "${operation}" is not allowed on the read side`,
  alreadyInitialized: 'The read model table is already initialized',
  tableExists: tableName => `Table "${tableName}" already exists`,
  tableNotExist: tableName => `Table "${tableName}" does not exist`,

  // Define table schema
  invalidTableSchema: (tableName, reason, fragment) =>
    `Provided table schema for "${tableName}" is invalid:
    ${reason} at "${fragment}"`,
  tableDescriptorNotArray: 'Array with table columns descriptors expected',
  columnDescriptorInvalidShape: 'Table column descriptor should be object with "name", "type" and optional "index" fields',
  columnWrongName: 'Table column name should be an alphanumeric identifier',
  columnWrongTypeOrIndex: `Column type should be one of "number", "string" or "json",
    and index should be "primary" or "secondary" if present`,
  wrongTypeForIndexedColumn: 'Primary or secondary index column must have "number" or "string" column type',
  tableWithoutPrimaryIndex: 'Primary index should be set',

  // Search-alike expressions
  invalidSearchExpression: (operation, tableName, searchExpression, reason, fragment) =>
    `Search expression in operation "${operation}" for table "${tableName}"
    provisioned "${JSON.stringify(searchExpression)}" is invalid:
    ${reason}${fragment ? ` at "${fragment}"` : ''}`,
  searchExpressionNotObject: 'Object with search fields and/or operators expected',
  mixedSearchOperatorsAndValues: 'Nor fields values and search operators allowed in one search query at once',
  illegalLogicalOperator: 'Illegal logical operator',
  illegalOperatorAndOrArgument: 'Logical operators $and/$or accepts only array of subexpressions',
  searchValueScalarOrCompareOperator: `Search field should be scalar value or compare operator
    as object with only one key like { "$lt" : "value" }`,
  illegalCompareOperator: 'Illegal compare operator',
  incompatibleSearchField: 'Search field value is incompatible with apropriate table column type',
  invalidPagination: (skip, limit) => `Pagination range skip=${skip} and limit=${limit} is invalid`,

  // Fields and projection keys
  invalidFieldList: (operation, tableName, fieldList, reason, fragment) =>
    `Fields list in operation "${operation}" for table "${tableName}"
    provisioned "${JSON.stringify(fieldList)}" is invalid:
    ${reason}${fragment ? ` at "${fragment}"` : ''}`,
  fieldListNotObject: 'Object with values for every column declated in table description expected',
  unexistingField: 'Unexisting table column or wrong nested field invocation',
  columnTypeMismatch: 'Column type mismatch or indexed column value is null',
  illegalProjectionColumn: 'Enumerated result projection column should present in table schema and set to 0 or 1',
  projectionNotObject: 'Result projection columns should be object like { "field1": 1, "field2": 0 }',
  illegalSortColumn: 'Enumerated sort column should present in table schema and set to -1 or 1',
  sortNotObject: 'Sort columns should be object like { "field1": 1, "field2": -1 }',

  // Update-alike expressions
  invalidUpdateExpression: (tableName, updateExpression, reason, fragment) =>
    `Update expression for updating table "${tableName}"
    provisioned "${JSON.stringify(updateExpression)}" is invalid:
    ${reason}${fragment ? ` at "${fragment}"` : ''}`,
  updateExpressionNotValidObject: 'Object with keys as only allowed update operators expected like { $set: {...} }',
  illegalUpdateOperator: 'Illegal update operator',
  updateOperatorNotObject: 'Update operator value only as object expected',
  uncompatibleUpdateValue: 'Value in update operator is incompatible with table column or operator requirement'


}

/* eslint-enable max-len */
