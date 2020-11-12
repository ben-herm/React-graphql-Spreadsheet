import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

/** expression to compare columns of type Int. All fields are combined with logical 'AND'. */
export type Int_Comparison_Exp = {
  _eq?: Maybe<Scalars['Int']>;
  _gt?: Maybe<Scalars['Int']>;
  _gte?: Maybe<Scalars['Int']>;
  _in?: Maybe<Array<Scalars['Int']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['Int']>;
  _lte?: Maybe<Scalars['Int']>;
  _neq?: Maybe<Scalars['Int']>;
  _nin?: Maybe<Array<Scalars['Int']>>;
};

/** expression to compare columns of type String. All fields are combined with logical 'AND'. */
export type String_Comparison_Exp = {
  _eq?: Maybe<Scalars['String']>;
  _gt?: Maybe<Scalars['String']>;
  _gte?: Maybe<Scalars['String']>;
  _ilike?: Maybe<Scalars['String']>;
  _in?: Maybe<Array<Scalars['String']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _like?: Maybe<Scalars['String']>;
  _lt?: Maybe<Scalars['String']>;
  _lte?: Maybe<Scalars['String']>;
  _neq?: Maybe<Scalars['String']>;
  _nilike?: Maybe<Scalars['String']>;
  _nin?: Maybe<Array<Scalars['String']>>;
  _nlike?: Maybe<Scalars['String']>;
  _nsimilar?: Maybe<Scalars['String']>;
  _similar?: Maybe<Scalars['String']>;
};

/** columns and relationships of "headers" */
export type Headers = {
  __typename?: 'headers';
  header_id: Scalars['Int'];
  header_name: Scalars['String'];
  table_id?: Maybe<Scalars['Int']>;
  /** An array relationship */
  values: Array<Values>;
  /** An aggregated array relationship */
  values_aggregate: Values_Aggregate;
};


/** columns and relationships of "headers" */
export type HeadersValuesArgs = {
  distinct_on?: Maybe<Array<Values_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Values_Order_By>>;
  where?: Maybe<Values_Bool_Exp>;
};


/** columns and relationships of "headers" */
export type HeadersValues_AggregateArgs = {
  distinct_on?: Maybe<Array<Values_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Values_Order_By>>;
  where?: Maybe<Values_Bool_Exp>;
};

/** aggregated selection of "headers" */
export type Headers_Aggregate = {
  __typename?: 'headers_aggregate';
  aggregate?: Maybe<Headers_Aggregate_Fields>;
  nodes: Array<Headers>;
};

/** aggregate fields of "headers" */
export type Headers_Aggregate_Fields = {
  __typename?: 'headers_aggregate_fields';
  avg?: Maybe<Headers_Avg_Fields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Headers_Max_Fields>;
  min?: Maybe<Headers_Min_Fields>;
  stddev?: Maybe<Headers_Stddev_Fields>;
  stddev_pop?: Maybe<Headers_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Headers_Stddev_Samp_Fields>;
  sum?: Maybe<Headers_Sum_Fields>;
  var_pop?: Maybe<Headers_Var_Pop_Fields>;
  var_samp?: Maybe<Headers_Var_Samp_Fields>;
  variance?: Maybe<Headers_Variance_Fields>;
};


/** aggregate fields of "headers" */
export type Headers_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Headers_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "headers" */
export type Headers_Aggregate_Order_By = {
  avg?: Maybe<Headers_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Headers_Max_Order_By>;
  min?: Maybe<Headers_Min_Order_By>;
  stddev?: Maybe<Headers_Stddev_Order_By>;
  stddev_pop?: Maybe<Headers_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Headers_Stddev_Samp_Order_By>;
  sum?: Maybe<Headers_Sum_Order_By>;
  var_pop?: Maybe<Headers_Var_Pop_Order_By>;
  var_samp?: Maybe<Headers_Var_Samp_Order_By>;
  variance?: Maybe<Headers_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "headers" */
export type Headers_Arr_Rel_Insert_Input = {
  data: Array<Headers_Insert_Input>;
  on_conflict?: Maybe<Headers_On_Conflict>;
};

/** aggregate avg on columns */
export type Headers_Avg_Fields = {
  __typename?: 'headers_avg_fields';
  header_id?: Maybe<Scalars['Float']>;
  table_id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "headers" */
export type Headers_Avg_Order_By = {
  header_id?: Maybe<Order_By>;
  table_id?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "headers". All fields are combined with a logical 'AND'. */
export type Headers_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Headers_Bool_Exp>>>;
  _not?: Maybe<Headers_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Headers_Bool_Exp>>>;
  header_id?: Maybe<Int_Comparison_Exp>;
  header_name?: Maybe<String_Comparison_Exp>;
  table_id?: Maybe<Int_Comparison_Exp>;
  values?: Maybe<Values_Bool_Exp>;
};

/** unique or primary key constraints on table "headers" */
export enum Headers_Constraint {
  /** unique or primary key constraint */
  HeadersPkey = 'headers_pkey'
}

/** input type for incrementing integer column in table "headers" */
export type Headers_Inc_Input = {
  header_id?: Maybe<Scalars['Int']>;
  table_id?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "headers" */
export type Headers_Insert_Input = {
  header_id?: Maybe<Scalars['Int']>;
  header_name?: Maybe<Scalars['String']>;
  table_id?: Maybe<Scalars['Int']>;
  values?: Maybe<Values_Arr_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type Headers_Max_Fields = {
  __typename?: 'headers_max_fields';
  header_id?: Maybe<Scalars['Int']>;
  header_name?: Maybe<Scalars['String']>;
  table_id?: Maybe<Scalars['Int']>;
};

/** order by max() on columns of table "headers" */
export type Headers_Max_Order_By = {
  header_id?: Maybe<Order_By>;
  header_name?: Maybe<Order_By>;
  table_id?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Headers_Min_Fields = {
  __typename?: 'headers_min_fields';
  header_id?: Maybe<Scalars['Int']>;
  header_name?: Maybe<Scalars['String']>;
  table_id?: Maybe<Scalars['Int']>;
};

/** order by min() on columns of table "headers" */
export type Headers_Min_Order_By = {
  header_id?: Maybe<Order_By>;
  header_name?: Maybe<Order_By>;
  table_id?: Maybe<Order_By>;
};

/** response of any mutation on the table "headers" */
export type Headers_Mutation_Response = {
  __typename?: 'headers_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Headers>;
};

/** input type for inserting object relation for remote table "headers" */
export type Headers_Obj_Rel_Insert_Input = {
  data: Headers_Insert_Input;
  on_conflict?: Maybe<Headers_On_Conflict>;
};

/** on conflict condition type for table "headers" */
export type Headers_On_Conflict = {
  constraint: Headers_Constraint;
  update_columns: Array<Headers_Update_Column>;
  where?: Maybe<Headers_Bool_Exp>;
};

/** ordering options when selecting data from "headers" */
export type Headers_Order_By = {
  header_id?: Maybe<Order_By>;
  header_name?: Maybe<Order_By>;
  table_id?: Maybe<Order_By>;
  values_aggregate?: Maybe<Values_Aggregate_Order_By>;
};

/** primary key columns input for table: "headers" */
export type Headers_Pk_Columns_Input = {
  header_id: Scalars['Int'];
};

/** select columns of table "headers" */
export enum Headers_Select_Column {
  /** column name */
  HeaderId = 'header_id',
  /** column name */
  HeaderName = 'header_name',
  /** column name */
  TableId = 'table_id'
}

/** input type for updating data in table "headers" */
export type Headers_Set_Input = {
  header_id?: Maybe<Scalars['Int']>;
  header_name?: Maybe<Scalars['String']>;
  table_id?: Maybe<Scalars['Int']>;
};

/** aggregate stddev on columns */
export type Headers_Stddev_Fields = {
  __typename?: 'headers_stddev_fields';
  header_id?: Maybe<Scalars['Float']>;
  table_id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "headers" */
export type Headers_Stddev_Order_By = {
  header_id?: Maybe<Order_By>;
  table_id?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Headers_Stddev_Pop_Fields = {
  __typename?: 'headers_stddev_pop_fields';
  header_id?: Maybe<Scalars['Float']>;
  table_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "headers" */
export type Headers_Stddev_Pop_Order_By = {
  header_id?: Maybe<Order_By>;
  table_id?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Headers_Stddev_Samp_Fields = {
  __typename?: 'headers_stddev_samp_fields';
  header_id?: Maybe<Scalars['Float']>;
  table_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "headers" */
export type Headers_Stddev_Samp_Order_By = {
  header_id?: Maybe<Order_By>;
  table_id?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Headers_Sum_Fields = {
  __typename?: 'headers_sum_fields';
  header_id?: Maybe<Scalars['Int']>;
  table_id?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "headers" */
export type Headers_Sum_Order_By = {
  header_id?: Maybe<Order_By>;
  table_id?: Maybe<Order_By>;
};

/** update columns of table "headers" */
export enum Headers_Update_Column {
  /** column name */
  HeaderId = 'header_id',
  /** column name */
  HeaderName = 'header_name',
  /** column name */
  TableId = 'table_id'
}

/** aggregate var_pop on columns */
export type Headers_Var_Pop_Fields = {
  __typename?: 'headers_var_pop_fields';
  header_id?: Maybe<Scalars['Float']>;
  table_id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "headers" */
export type Headers_Var_Pop_Order_By = {
  header_id?: Maybe<Order_By>;
  table_id?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Headers_Var_Samp_Fields = {
  __typename?: 'headers_var_samp_fields';
  header_id?: Maybe<Scalars['Float']>;
  table_id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "headers" */
export type Headers_Var_Samp_Order_By = {
  header_id?: Maybe<Order_By>;
  table_id?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Headers_Variance_Fields = {
  __typename?: 'headers_variance_fields';
  header_id?: Maybe<Scalars['Float']>;
  table_id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "headers" */
export type Headers_Variance_Order_By = {
  header_id?: Maybe<Order_By>;
  table_id?: Maybe<Order_By>;
};

/** mutation root */
export type Mutation_Root = {
  __typename?: 'mutation_root';
  /** delete data from the table: "headers" */
  delete_headers?: Maybe<Headers_Mutation_Response>;
  /** delete single row from the table: "headers" */
  delete_headers_by_pk?: Maybe<Headers>;
  /** delete data from the table: "rows" */
  delete_rows?: Maybe<Rows_Mutation_Response>;
  /** delete single row from the table: "rows" */
  delete_rows_by_pk?: Maybe<Rows>;
  /** delete data from the table: "tables" */
  delete_tables?: Maybe<Tables_Mutation_Response>;
  /** delete single row from the table: "tables" */
  delete_tables_by_pk?: Maybe<Tables>;
  /** delete data from the table: "values" */
  delete_values?: Maybe<Values_Mutation_Response>;
  /** delete single row from the table: "values" */
  delete_values_by_pk?: Maybe<Values>;
  /** insert data into the table: "headers" */
  insert_headers?: Maybe<Headers_Mutation_Response>;
  /** insert a single row into the table: "headers" */
  insert_headers_one?: Maybe<Headers>;
  /** insert data into the table: "rows" */
  insert_rows?: Maybe<Rows_Mutation_Response>;
  /** insert a single row into the table: "rows" */
  insert_rows_one?: Maybe<Rows>;
  /** insert data into the table: "tables" */
  insert_tables?: Maybe<Tables_Mutation_Response>;
  /** insert a single row into the table: "tables" */
  insert_tables_one?: Maybe<Tables>;
  /** insert data into the table: "values" */
  insert_values?: Maybe<Values_Mutation_Response>;
  /** insert a single row into the table: "values" */
  insert_values_one?: Maybe<Values>;
  /** update data of the table: "headers" */
  update_headers?: Maybe<Headers_Mutation_Response>;
  /** update single row of the table: "headers" */
  update_headers_by_pk?: Maybe<Headers>;
  /** update data of the table: "rows" */
  update_rows?: Maybe<Rows_Mutation_Response>;
  /** update single row of the table: "rows" */
  update_rows_by_pk?: Maybe<Rows>;
  /** update data of the table: "tables" */
  update_tables?: Maybe<Tables_Mutation_Response>;
  /** update single row of the table: "tables" */
  update_tables_by_pk?: Maybe<Tables>;
  /** update data of the table: "values" */
  update_values?: Maybe<Values_Mutation_Response>;
  /** update single row of the table: "values" */
  update_values_by_pk?: Maybe<Values>;
};


/** mutation root */
export type Mutation_RootDelete_HeadersArgs = {
  where: Headers_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Headers_By_PkArgs = {
  header_id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_RowsArgs = {
  where: Rows_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Rows_By_PkArgs = {
  row_id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_TablesArgs = {
  where: Tables_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Tables_By_PkArgs = {
  table_id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_ValuesArgs = {
  where: Values_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Values_By_PkArgs = {
  value_id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootInsert_HeadersArgs = {
  objects: Array<Headers_Insert_Input>;
  on_conflict?: Maybe<Headers_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Headers_OneArgs = {
  object: Headers_Insert_Input;
  on_conflict?: Maybe<Headers_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_RowsArgs = {
  objects: Array<Rows_Insert_Input>;
  on_conflict?: Maybe<Rows_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Rows_OneArgs = {
  object: Rows_Insert_Input;
  on_conflict?: Maybe<Rows_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_TablesArgs = {
  objects: Array<Tables_Insert_Input>;
  on_conflict?: Maybe<Tables_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Tables_OneArgs = {
  object: Tables_Insert_Input;
  on_conflict?: Maybe<Tables_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_ValuesArgs = {
  objects: Array<Values_Insert_Input>;
  on_conflict?: Maybe<Values_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Values_OneArgs = {
  object: Values_Insert_Input;
  on_conflict?: Maybe<Values_On_Conflict>;
};


/** mutation root */
export type Mutation_RootUpdate_HeadersArgs = {
  _inc?: Maybe<Headers_Inc_Input>;
  _set?: Maybe<Headers_Set_Input>;
  where: Headers_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Headers_By_PkArgs = {
  _inc?: Maybe<Headers_Inc_Input>;
  _set?: Maybe<Headers_Set_Input>;
  pk_columns: Headers_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_RowsArgs = {
  _inc?: Maybe<Rows_Inc_Input>;
  _set?: Maybe<Rows_Set_Input>;
  where: Rows_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Rows_By_PkArgs = {
  _inc?: Maybe<Rows_Inc_Input>;
  _set?: Maybe<Rows_Set_Input>;
  pk_columns: Rows_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_TablesArgs = {
  _inc?: Maybe<Tables_Inc_Input>;
  _set?: Maybe<Tables_Set_Input>;
  where: Tables_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Tables_By_PkArgs = {
  _inc?: Maybe<Tables_Inc_Input>;
  _set?: Maybe<Tables_Set_Input>;
  pk_columns: Tables_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_ValuesArgs = {
  _inc?: Maybe<Values_Inc_Input>;
  _set?: Maybe<Values_Set_Input>;
  where: Values_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Values_By_PkArgs = {
  _inc?: Maybe<Values_Inc_Input>;
  _set?: Maybe<Values_Set_Input>;
  pk_columns: Values_Pk_Columns_Input;
};

/** column ordering options */
export enum Order_By {
  /** in the ascending order, nulls last */
  Asc = 'asc',
  /** in the ascending order, nulls first */
  AscNullsFirst = 'asc_nulls_first',
  /** in the ascending order, nulls last */
  AscNullsLast = 'asc_nulls_last',
  /** in the descending order, nulls first */
  Desc = 'desc',
  /** in the descending order, nulls first */
  DescNullsFirst = 'desc_nulls_first',
  /** in the descending order, nulls last */
  DescNullsLast = 'desc_nulls_last'
}

/** query root */
export type Query_Root = {
  __typename?: 'query_root';
  /** fetch data from the table: "headers" */
  headers: Array<Headers>;
  /** fetch aggregated fields from the table: "headers" */
  headers_aggregate: Headers_Aggregate;
  /** fetch data from the table: "headers" using primary key columns */
  headers_by_pk?: Maybe<Headers>;
  /** fetch data from the table: "rows" */
  rows: Array<Rows>;
  /** fetch aggregated fields from the table: "rows" */
  rows_aggregate: Rows_Aggregate;
  /** fetch data from the table: "rows" using primary key columns */
  rows_by_pk?: Maybe<Rows>;
  /** fetch data from the table: "tables" */
  tables: Array<Tables>;
  /** fetch aggregated fields from the table: "tables" */
  tables_aggregate: Tables_Aggregate;
  /** fetch data from the table: "tables" using primary key columns */
  tables_by_pk?: Maybe<Tables>;
  /** fetch data from the table: "values" */
  values: Array<Values>;
  /** fetch aggregated fields from the table: "values" */
  values_aggregate: Values_Aggregate;
  /** fetch data from the table: "values" using primary key columns */
  values_by_pk?: Maybe<Values>;
};


/** query root */
export type Query_RootHeadersArgs = {
  distinct_on?: Maybe<Array<Headers_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Headers_Order_By>>;
  where?: Maybe<Headers_Bool_Exp>;
};


/** query root */
export type Query_RootHeaders_AggregateArgs = {
  distinct_on?: Maybe<Array<Headers_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Headers_Order_By>>;
  where?: Maybe<Headers_Bool_Exp>;
};


/** query root */
export type Query_RootHeaders_By_PkArgs = {
  header_id: Scalars['Int'];
};


/** query root */
export type Query_RootRowsArgs = {
  distinct_on?: Maybe<Array<Rows_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Rows_Order_By>>;
  where?: Maybe<Rows_Bool_Exp>;
};


/** query root */
export type Query_RootRows_AggregateArgs = {
  distinct_on?: Maybe<Array<Rows_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Rows_Order_By>>;
  where?: Maybe<Rows_Bool_Exp>;
};


/** query root */
export type Query_RootRows_By_PkArgs = {
  row_id: Scalars['Int'];
};


/** query root */
export type Query_RootTablesArgs = {
  distinct_on?: Maybe<Array<Tables_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Tables_Order_By>>;
  where?: Maybe<Tables_Bool_Exp>;
};


/** query root */
export type Query_RootTables_AggregateArgs = {
  distinct_on?: Maybe<Array<Tables_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Tables_Order_By>>;
  where?: Maybe<Tables_Bool_Exp>;
};


/** query root */
export type Query_RootTables_By_PkArgs = {
  table_id: Scalars['Int'];
};


/** query root */
export type Query_RootValuesArgs = {
  distinct_on?: Maybe<Array<Values_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Values_Order_By>>;
  where?: Maybe<Values_Bool_Exp>;
};


/** query root */
export type Query_RootValues_AggregateArgs = {
  distinct_on?: Maybe<Array<Values_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Values_Order_By>>;
  where?: Maybe<Values_Bool_Exp>;
};


/** query root */
export type Query_RootValues_By_PkArgs = {
  value_id: Scalars['Int'];
};

/** columns and relationships of "rows" */
export type Rows = {
  __typename?: 'rows';
  row_id: Scalars['Int'];
  table_id?: Maybe<Scalars['Int']>;
  /** An array relationship */
  values: Array<Values>;
  /** An aggregated array relationship */
  values_aggregate: Values_Aggregate;
};


/** columns and relationships of "rows" */
export type RowsValuesArgs = {
  distinct_on?: Maybe<Array<Values_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Values_Order_By>>;
  where?: Maybe<Values_Bool_Exp>;
};


/** columns and relationships of "rows" */
export type RowsValues_AggregateArgs = {
  distinct_on?: Maybe<Array<Values_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Values_Order_By>>;
  where?: Maybe<Values_Bool_Exp>;
};

/** aggregated selection of "rows" */
export type Rows_Aggregate = {
  __typename?: 'rows_aggregate';
  aggregate?: Maybe<Rows_Aggregate_Fields>;
  nodes: Array<Rows>;
};

/** aggregate fields of "rows" */
export type Rows_Aggregate_Fields = {
  __typename?: 'rows_aggregate_fields';
  avg?: Maybe<Rows_Avg_Fields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Rows_Max_Fields>;
  min?: Maybe<Rows_Min_Fields>;
  stddev?: Maybe<Rows_Stddev_Fields>;
  stddev_pop?: Maybe<Rows_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Rows_Stddev_Samp_Fields>;
  sum?: Maybe<Rows_Sum_Fields>;
  var_pop?: Maybe<Rows_Var_Pop_Fields>;
  var_samp?: Maybe<Rows_Var_Samp_Fields>;
  variance?: Maybe<Rows_Variance_Fields>;
};


/** aggregate fields of "rows" */
export type Rows_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Rows_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "rows" */
export type Rows_Aggregate_Order_By = {
  avg?: Maybe<Rows_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Rows_Max_Order_By>;
  min?: Maybe<Rows_Min_Order_By>;
  stddev?: Maybe<Rows_Stddev_Order_By>;
  stddev_pop?: Maybe<Rows_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Rows_Stddev_Samp_Order_By>;
  sum?: Maybe<Rows_Sum_Order_By>;
  var_pop?: Maybe<Rows_Var_Pop_Order_By>;
  var_samp?: Maybe<Rows_Var_Samp_Order_By>;
  variance?: Maybe<Rows_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "rows" */
export type Rows_Arr_Rel_Insert_Input = {
  data: Array<Rows_Insert_Input>;
  on_conflict?: Maybe<Rows_On_Conflict>;
};

/** aggregate avg on columns */
export type Rows_Avg_Fields = {
  __typename?: 'rows_avg_fields';
  row_id?: Maybe<Scalars['Float']>;
  table_id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "rows" */
export type Rows_Avg_Order_By = {
  row_id?: Maybe<Order_By>;
  table_id?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "rows". All fields are combined with a logical 'AND'. */
export type Rows_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Rows_Bool_Exp>>>;
  _not?: Maybe<Rows_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Rows_Bool_Exp>>>;
  row_id?: Maybe<Int_Comparison_Exp>;
  table_id?: Maybe<Int_Comparison_Exp>;
  values?: Maybe<Values_Bool_Exp>;
};

/** unique or primary key constraints on table "rows" */
export enum Rows_Constraint {
  /** unique or primary key constraint */
  RowsPkey = 'rows_pkey'
}

/** input type for incrementing integer column in table "rows" */
export type Rows_Inc_Input = {
  row_id?: Maybe<Scalars['Int']>;
  table_id?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "rows" */
export type Rows_Insert_Input = {
  row_id?: Maybe<Scalars['Int']>;
  table_id?: Maybe<Scalars['Int']>;
  values?: Maybe<Values_Arr_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type Rows_Max_Fields = {
  __typename?: 'rows_max_fields';
  row_id?: Maybe<Scalars['Int']>;
  table_id?: Maybe<Scalars['Int']>;
};

/** order by max() on columns of table "rows" */
export type Rows_Max_Order_By = {
  row_id?: Maybe<Order_By>;
  table_id?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Rows_Min_Fields = {
  __typename?: 'rows_min_fields';
  row_id?: Maybe<Scalars['Int']>;
  table_id?: Maybe<Scalars['Int']>;
};

/** order by min() on columns of table "rows" */
export type Rows_Min_Order_By = {
  row_id?: Maybe<Order_By>;
  table_id?: Maybe<Order_By>;
};

/** response of any mutation on the table "rows" */
export type Rows_Mutation_Response = {
  __typename?: 'rows_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Rows>;
};

/** input type for inserting object relation for remote table "rows" */
export type Rows_Obj_Rel_Insert_Input = {
  data: Rows_Insert_Input;
  on_conflict?: Maybe<Rows_On_Conflict>;
};

/** on conflict condition type for table "rows" */
export type Rows_On_Conflict = {
  constraint: Rows_Constraint;
  update_columns: Array<Rows_Update_Column>;
  where?: Maybe<Rows_Bool_Exp>;
};

/** ordering options when selecting data from "rows" */
export type Rows_Order_By = {
  row_id?: Maybe<Order_By>;
  table_id?: Maybe<Order_By>;
  values_aggregate?: Maybe<Values_Aggregate_Order_By>;
};

/** primary key columns input for table: "rows" */
export type Rows_Pk_Columns_Input = {
  row_id: Scalars['Int'];
};

/** select columns of table "rows" */
export enum Rows_Select_Column {
  /** column name */
  RowId = 'row_id',
  /** column name */
  TableId = 'table_id'
}

/** input type for updating data in table "rows" */
export type Rows_Set_Input = {
  row_id?: Maybe<Scalars['Int']>;
  table_id?: Maybe<Scalars['Int']>;
};

/** aggregate stddev on columns */
export type Rows_Stddev_Fields = {
  __typename?: 'rows_stddev_fields';
  row_id?: Maybe<Scalars['Float']>;
  table_id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "rows" */
export type Rows_Stddev_Order_By = {
  row_id?: Maybe<Order_By>;
  table_id?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Rows_Stddev_Pop_Fields = {
  __typename?: 'rows_stddev_pop_fields';
  row_id?: Maybe<Scalars['Float']>;
  table_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "rows" */
export type Rows_Stddev_Pop_Order_By = {
  row_id?: Maybe<Order_By>;
  table_id?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Rows_Stddev_Samp_Fields = {
  __typename?: 'rows_stddev_samp_fields';
  row_id?: Maybe<Scalars['Float']>;
  table_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "rows" */
export type Rows_Stddev_Samp_Order_By = {
  row_id?: Maybe<Order_By>;
  table_id?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Rows_Sum_Fields = {
  __typename?: 'rows_sum_fields';
  row_id?: Maybe<Scalars['Int']>;
  table_id?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "rows" */
export type Rows_Sum_Order_By = {
  row_id?: Maybe<Order_By>;
  table_id?: Maybe<Order_By>;
};

/** update columns of table "rows" */
export enum Rows_Update_Column {
  /** column name */
  RowId = 'row_id',
  /** column name */
  TableId = 'table_id'
}

/** aggregate var_pop on columns */
export type Rows_Var_Pop_Fields = {
  __typename?: 'rows_var_pop_fields';
  row_id?: Maybe<Scalars['Float']>;
  table_id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "rows" */
export type Rows_Var_Pop_Order_By = {
  row_id?: Maybe<Order_By>;
  table_id?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Rows_Var_Samp_Fields = {
  __typename?: 'rows_var_samp_fields';
  row_id?: Maybe<Scalars['Float']>;
  table_id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "rows" */
export type Rows_Var_Samp_Order_By = {
  row_id?: Maybe<Order_By>;
  table_id?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Rows_Variance_Fields = {
  __typename?: 'rows_variance_fields';
  row_id?: Maybe<Scalars['Float']>;
  table_id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "rows" */
export type Rows_Variance_Order_By = {
  row_id?: Maybe<Order_By>;
  table_id?: Maybe<Order_By>;
};

/** subscription root */
export type Subscription_Root = {
  __typename?: 'subscription_root';
  /** fetch data from the table: "headers" */
  headers: Array<Headers>;
  /** fetch aggregated fields from the table: "headers" */
  headers_aggregate: Headers_Aggregate;
  /** fetch data from the table: "headers" using primary key columns */
  headers_by_pk?: Maybe<Headers>;
  /** fetch data from the table: "rows" */
  rows: Array<Rows>;
  /** fetch aggregated fields from the table: "rows" */
  rows_aggregate: Rows_Aggregate;
  /** fetch data from the table: "rows" using primary key columns */
  rows_by_pk?: Maybe<Rows>;
  /** fetch data from the table: "tables" */
  tables: Array<Tables>;
  /** fetch aggregated fields from the table: "tables" */
  tables_aggregate: Tables_Aggregate;
  /** fetch data from the table: "tables" using primary key columns */
  tables_by_pk?: Maybe<Tables>;
  /** fetch data from the table: "values" */
  values: Array<Values>;
  /** fetch aggregated fields from the table: "values" */
  values_aggregate: Values_Aggregate;
  /** fetch data from the table: "values" using primary key columns */
  values_by_pk?: Maybe<Values>;
};


/** subscription root */
export type Subscription_RootHeadersArgs = {
  distinct_on?: Maybe<Array<Headers_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Headers_Order_By>>;
  where?: Maybe<Headers_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootHeaders_AggregateArgs = {
  distinct_on?: Maybe<Array<Headers_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Headers_Order_By>>;
  where?: Maybe<Headers_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootHeaders_By_PkArgs = {
  header_id: Scalars['Int'];
};


/** subscription root */
export type Subscription_RootRowsArgs = {
  distinct_on?: Maybe<Array<Rows_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Rows_Order_By>>;
  where?: Maybe<Rows_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootRows_AggregateArgs = {
  distinct_on?: Maybe<Array<Rows_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Rows_Order_By>>;
  where?: Maybe<Rows_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootRows_By_PkArgs = {
  row_id: Scalars['Int'];
};


/** subscription root */
export type Subscription_RootTablesArgs = {
  distinct_on?: Maybe<Array<Tables_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Tables_Order_By>>;
  where?: Maybe<Tables_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootTables_AggregateArgs = {
  distinct_on?: Maybe<Array<Tables_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Tables_Order_By>>;
  where?: Maybe<Tables_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootTables_By_PkArgs = {
  table_id: Scalars['Int'];
};


/** subscription root */
export type Subscription_RootValuesArgs = {
  distinct_on?: Maybe<Array<Values_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Values_Order_By>>;
  where?: Maybe<Values_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootValues_AggregateArgs = {
  distinct_on?: Maybe<Array<Values_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Values_Order_By>>;
  where?: Maybe<Values_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootValues_By_PkArgs = {
  value_id: Scalars['Int'];
};

/** columns and relationships of "tables" */
export type Tables = {
  __typename?: 'tables';
  table_id: Scalars['Int'];
};

/** aggregated selection of "tables" */
export type Tables_Aggregate = {
  __typename?: 'tables_aggregate';
  aggregate?: Maybe<Tables_Aggregate_Fields>;
  nodes: Array<Tables>;
};

/** aggregate fields of "tables" */
export type Tables_Aggregate_Fields = {
  __typename?: 'tables_aggregate_fields';
  avg?: Maybe<Tables_Avg_Fields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Tables_Max_Fields>;
  min?: Maybe<Tables_Min_Fields>;
  stddev?: Maybe<Tables_Stddev_Fields>;
  stddev_pop?: Maybe<Tables_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Tables_Stddev_Samp_Fields>;
  sum?: Maybe<Tables_Sum_Fields>;
  var_pop?: Maybe<Tables_Var_Pop_Fields>;
  var_samp?: Maybe<Tables_Var_Samp_Fields>;
  variance?: Maybe<Tables_Variance_Fields>;
};


/** aggregate fields of "tables" */
export type Tables_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Tables_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "tables" */
export type Tables_Aggregate_Order_By = {
  avg?: Maybe<Tables_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Tables_Max_Order_By>;
  min?: Maybe<Tables_Min_Order_By>;
  stddev?: Maybe<Tables_Stddev_Order_By>;
  stddev_pop?: Maybe<Tables_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Tables_Stddev_Samp_Order_By>;
  sum?: Maybe<Tables_Sum_Order_By>;
  var_pop?: Maybe<Tables_Var_Pop_Order_By>;
  var_samp?: Maybe<Tables_Var_Samp_Order_By>;
  variance?: Maybe<Tables_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "tables" */
export type Tables_Arr_Rel_Insert_Input = {
  data: Array<Tables_Insert_Input>;
  on_conflict?: Maybe<Tables_On_Conflict>;
};

/** aggregate avg on columns */
export type Tables_Avg_Fields = {
  __typename?: 'tables_avg_fields';
  table_id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "tables" */
export type Tables_Avg_Order_By = {
  table_id?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "tables". All fields are combined with a logical 'AND'. */
export type Tables_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Tables_Bool_Exp>>>;
  _not?: Maybe<Tables_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Tables_Bool_Exp>>>;
  table_id?: Maybe<Int_Comparison_Exp>;
};

/** unique or primary key constraints on table "tables" */
export enum Tables_Constraint {
  /** unique or primary key constraint */
  TablesPkey = 'tables_pkey'
}

/** input type for incrementing integer column in table "tables" */
export type Tables_Inc_Input = {
  table_id?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "tables" */
export type Tables_Insert_Input = {
  table_id?: Maybe<Scalars['Int']>;
};

/** aggregate max on columns */
export type Tables_Max_Fields = {
  __typename?: 'tables_max_fields';
  table_id?: Maybe<Scalars['Int']>;
};

/** order by max() on columns of table "tables" */
export type Tables_Max_Order_By = {
  table_id?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Tables_Min_Fields = {
  __typename?: 'tables_min_fields';
  table_id?: Maybe<Scalars['Int']>;
};

/** order by min() on columns of table "tables" */
export type Tables_Min_Order_By = {
  table_id?: Maybe<Order_By>;
};

/** response of any mutation on the table "tables" */
export type Tables_Mutation_Response = {
  __typename?: 'tables_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Tables>;
};

/** input type for inserting object relation for remote table "tables" */
export type Tables_Obj_Rel_Insert_Input = {
  data: Tables_Insert_Input;
  on_conflict?: Maybe<Tables_On_Conflict>;
};

/** on conflict condition type for table "tables" */
export type Tables_On_Conflict = {
  constraint: Tables_Constraint;
  update_columns: Array<Tables_Update_Column>;
  where?: Maybe<Tables_Bool_Exp>;
};

/** ordering options when selecting data from "tables" */
export type Tables_Order_By = {
  table_id?: Maybe<Order_By>;
};

/** primary key columns input for table: "tables" */
export type Tables_Pk_Columns_Input = {
  table_id: Scalars['Int'];
};

/** select columns of table "tables" */
export enum Tables_Select_Column {
  /** column name */
  TableId = 'table_id'
}

/** input type for updating data in table "tables" */
export type Tables_Set_Input = {
  table_id?: Maybe<Scalars['Int']>;
};

/** aggregate stddev on columns */
export type Tables_Stddev_Fields = {
  __typename?: 'tables_stddev_fields';
  table_id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "tables" */
export type Tables_Stddev_Order_By = {
  table_id?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Tables_Stddev_Pop_Fields = {
  __typename?: 'tables_stddev_pop_fields';
  table_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "tables" */
export type Tables_Stddev_Pop_Order_By = {
  table_id?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Tables_Stddev_Samp_Fields = {
  __typename?: 'tables_stddev_samp_fields';
  table_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "tables" */
export type Tables_Stddev_Samp_Order_By = {
  table_id?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Tables_Sum_Fields = {
  __typename?: 'tables_sum_fields';
  table_id?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "tables" */
export type Tables_Sum_Order_By = {
  table_id?: Maybe<Order_By>;
};

/** update columns of table "tables" */
export enum Tables_Update_Column {
  /** column name */
  TableId = 'table_id'
}

/** aggregate var_pop on columns */
export type Tables_Var_Pop_Fields = {
  __typename?: 'tables_var_pop_fields';
  table_id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "tables" */
export type Tables_Var_Pop_Order_By = {
  table_id?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Tables_Var_Samp_Fields = {
  __typename?: 'tables_var_samp_fields';
  table_id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "tables" */
export type Tables_Var_Samp_Order_By = {
  table_id?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Tables_Variance_Fields = {
  __typename?: 'tables_variance_fields';
  table_id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "tables" */
export type Tables_Variance_Order_By = {
  table_id?: Maybe<Order_By>;
};

/** columns and relationships of "values" */
export type Values = {
  __typename?: 'values';
  /** An object relationship */
  header: Headers;
  header_id: Scalars['Int'];
  /** An object relationship */
  row: Rows;
  row_id: Scalars['Int'];
  table_id?: Maybe<Scalars['Int']>;
  value: Scalars['String'];
  value_id: Scalars['Int'];
};

/** aggregated selection of "values" */
export type Values_Aggregate = {
  __typename?: 'values_aggregate';
  aggregate?: Maybe<Values_Aggregate_Fields>;
  nodes: Array<Values>;
};

/** aggregate fields of "values" */
export type Values_Aggregate_Fields = {
  __typename?: 'values_aggregate_fields';
  avg?: Maybe<Values_Avg_Fields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Values_Max_Fields>;
  min?: Maybe<Values_Min_Fields>;
  stddev?: Maybe<Values_Stddev_Fields>;
  stddev_pop?: Maybe<Values_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Values_Stddev_Samp_Fields>;
  sum?: Maybe<Values_Sum_Fields>;
  var_pop?: Maybe<Values_Var_Pop_Fields>;
  var_samp?: Maybe<Values_Var_Samp_Fields>;
  variance?: Maybe<Values_Variance_Fields>;
};


/** aggregate fields of "values" */
export type Values_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Values_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "values" */
export type Values_Aggregate_Order_By = {
  avg?: Maybe<Values_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Values_Max_Order_By>;
  min?: Maybe<Values_Min_Order_By>;
  stddev?: Maybe<Values_Stddev_Order_By>;
  stddev_pop?: Maybe<Values_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Values_Stddev_Samp_Order_By>;
  sum?: Maybe<Values_Sum_Order_By>;
  var_pop?: Maybe<Values_Var_Pop_Order_By>;
  var_samp?: Maybe<Values_Var_Samp_Order_By>;
  variance?: Maybe<Values_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "values" */
export type Values_Arr_Rel_Insert_Input = {
  data: Array<Values_Insert_Input>;
  on_conflict?: Maybe<Values_On_Conflict>;
};

/** aggregate avg on columns */
export type Values_Avg_Fields = {
  __typename?: 'values_avg_fields';
  header_id?: Maybe<Scalars['Float']>;
  row_id?: Maybe<Scalars['Float']>;
  table_id?: Maybe<Scalars['Float']>;
  value_id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "values" */
export type Values_Avg_Order_By = {
  header_id?: Maybe<Order_By>;
  row_id?: Maybe<Order_By>;
  table_id?: Maybe<Order_By>;
  value_id?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "values". All fields are combined with a logical 'AND'. */
export type Values_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Values_Bool_Exp>>>;
  _not?: Maybe<Values_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Values_Bool_Exp>>>;
  header?: Maybe<Headers_Bool_Exp>;
  header_id?: Maybe<Int_Comparison_Exp>;
  row?: Maybe<Rows_Bool_Exp>;
  row_id?: Maybe<Int_Comparison_Exp>;
  table_id?: Maybe<Int_Comparison_Exp>;
  value?: Maybe<String_Comparison_Exp>;
  value_id?: Maybe<Int_Comparison_Exp>;
};

/** unique or primary key constraints on table "values" */
export enum Values_Constraint {
  /** unique or primary key constraint */
  ValuesPkey = 'values_pkey'
}

/** input type for incrementing integer column in table "values" */
export type Values_Inc_Input = {
  header_id?: Maybe<Scalars['Int']>;
  row_id?: Maybe<Scalars['Int']>;
  table_id?: Maybe<Scalars['Int']>;
  value_id?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "values" */
export type Values_Insert_Input = {
  header?: Maybe<Headers_Obj_Rel_Insert_Input>;
  header_id?: Maybe<Scalars['Int']>;
  row?: Maybe<Rows_Obj_Rel_Insert_Input>;
  row_id?: Maybe<Scalars['Int']>;
  table_id?: Maybe<Scalars['Int']>;
  value?: Maybe<Scalars['String']>;
  value_id?: Maybe<Scalars['Int']>;
};

/** aggregate max on columns */
export type Values_Max_Fields = {
  __typename?: 'values_max_fields';
  header_id?: Maybe<Scalars['Int']>;
  row_id?: Maybe<Scalars['Int']>;
  table_id?: Maybe<Scalars['Int']>;
  value?: Maybe<Scalars['String']>;
  value_id?: Maybe<Scalars['Int']>;
};

/** order by max() on columns of table "values" */
export type Values_Max_Order_By = {
  header_id?: Maybe<Order_By>;
  row_id?: Maybe<Order_By>;
  table_id?: Maybe<Order_By>;
  value?: Maybe<Order_By>;
  value_id?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Values_Min_Fields = {
  __typename?: 'values_min_fields';
  header_id?: Maybe<Scalars['Int']>;
  row_id?: Maybe<Scalars['Int']>;
  table_id?: Maybe<Scalars['Int']>;
  value?: Maybe<Scalars['String']>;
  value_id?: Maybe<Scalars['Int']>;
};

/** order by min() on columns of table "values" */
export type Values_Min_Order_By = {
  header_id?: Maybe<Order_By>;
  row_id?: Maybe<Order_By>;
  table_id?: Maybe<Order_By>;
  value?: Maybe<Order_By>;
  value_id?: Maybe<Order_By>;
};

/** response of any mutation on the table "values" */
export type Values_Mutation_Response = {
  __typename?: 'values_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Values>;
};

/** input type for inserting object relation for remote table "values" */
export type Values_Obj_Rel_Insert_Input = {
  data: Values_Insert_Input;
  on_conflict?: Maybe<Values_On_Conflict>;
};

/** on conflict condition type for table "values" */
export type Values_On_Conflict = {
  constraint: Values_Constraint;
  update_columns: Array<Values_Update_Column>;
  where?: Maybe<Values_Bool_Exp>;
};

/** ordering options when selecting data from "values" */
export type Values_Order_By = {
  header?: Maybe<Headers_Order_By>;
  header_id?: Maybe<Order_By>;
  row?: Maybe<Rows_Order_By>;
  row_id?: Maybe<Order_By>;
  table_id?: Maybe<Order_By>;
  value?: Maybe<Order_By>;
  value_id?: Maybe<Order_By>;
};

/** primary key columns input for table: "values" */
export type Values_Pk_Columns_Input = {
  value_id: Scalars['Int'];
};

/** select columns of table "values" */
export enum Values_Select_Column {
  /** column name */
  HeaderId = 'header_id',
  /** column name */
  RowId = 'row_id',
  /** column name */
  TableId = 'table_id',
  /** column name */
  Value = 'value',
  /** column name */
  ValueId = 'value_id'
}

/** input type for updating data in table "values" */
export type Values_Set_Input = {
  header_id?: Maybe<Scalars['Int']>;
  row_id?: Maybe<Scalars['Int']>;
  table_id?: Maybe<Scalars['Int']>;
  value?: Maybe<Scalars['String']>;
  value_id?: Maybe<Scalars['Int']>;
};

/** aggregate stddev on columns */
export type Values_Stddev_Fields = {
  __typename?: 'values_stddev_fields';
  header_id?: Maybe<Scalars['Float']>;
  row_id?: Maybe<Scalars['Float']>;
  table_id?: Maybe<Scalars['Float']>;
  value_id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "values" */
export type Values_Stddev_Order_By = {
  header_id?: Maybe<Order_By>;
  row_id?: Maybe<Order_By>;
  table_id?: Maybe<Order_By>;
  value_id?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Values_Stddev_Pop_Fields = {
  __typename?: 'values_stddev_pop_fields';
  header_id?: Maybe<Scalars['Float']>;
  row_id?: Maybe<Scalars['Float']>;
  table_id?: Maybe<Scalars['Float']>;
  value_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "values" */
export type Values_Stddev_Pop_Order_By = {
  header_id?: Maybe<Order_By>;
  row_id?: Maybe<Order_By>;
  table_id?: Maybe<Order_By>;
  value_id?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Values_Stddev_Samp_Fields = {
  __typename?: 'values_stddev_samp_fields';
  header_id?: Maybe<Scalars['Float']>;
  row_id?: Maybe<Scalars['Float']>;
  table_id?: Maybe<Scalars['Float']>;
  value_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "values" */
export type Values_Stddev_Samp_Order_By = {
  header_id?: Maybe<Order_By>;
  row_id?: Maybe<Order_By>;
  table_id?: Maybe<Order_By>;
  value_id?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Values_Sum_Fields = {
  __typename?: 'values_sum_fields';
  header_id?: Maybe<Scalars['Int']>;
  row_id?: Maybe<Scalars['Int']>;
  table_id?: Maybe<Scalars['Int']>;
  value_id?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "values" */
export type Values_Sum_Order_By = {
  header_id?: Maybe<Order_By>;
  row_id?: Maybe<Order_By>;
  table_id?: Maybe<Order_By>;
  value_id?: Maybe<Order_By>;
};

/** update columns of table "values" */
export enum Values_Update_Column {
  /** column name */
  HeaderId = 'header_id',
  /** column name */
  RowId = 'row_id',
  /** column name */
  TableId = 'table_id',
  /** column name */
  Value = 'value',
  /** column name */
  ValueId = 'value_id'
}

/** aggregate var_pop on columns */
export type Values_Var_Pop_Fields = {
  __typename?: 'values_var_pop_fields';
  header_id?: Maybe<Scalars['Float']>;
  row_id?: Maybe<Scalars['Float']>;
  table_id?: Maybe<Scalars['Float']>;
  value_id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "values" */
export type Values_Var_Pop_Order_By = {
  header_id?: Maybe<Order_By>;
  row_id?: Maybe<Order_By>;
  table_id?: Maybe<Order_By>;
  value_id?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Values_Var_Samp_Fields = {
  __typename?: 'values_var_samp_fields';
  header_id?: Maybe<Scalars['Float']>;
  row_id?: Maybe<Scalars['Float']>;
  table_id?: Maybe<Scalars['Float']>;
  value_id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "values" */
export type Values_Var_Samp_Order_By = {
  header_id?: Maybe<Order_By>;
  row_id?: Maybe<Order_By>;
  table_id?: Maybe<Order_By>;
  value_id?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Values_Variance_Fields = {
  __typename?: 'values_variance_fields';
  header_id?: Maybe<Scalars['Float']>;
  row_id?: Maybe<Scalars['Float']>;
  table_id?: Maybe<Scalars['Float']>;
  value_id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "values" */
export type Values_Variance_Order_By = {
  header_id?: Maybe<Order_By>;
  row_id?: Maybe<Order_By>;
  table_id?: Maybe<Order_By>;
  value_id?: Maybe<Order_By>;
};

export type InsertHeaderMutationVariables = Exact<{
  header_id: Scalars['Int'];
  header_name: Scalars['String'];
}>;


export type InsertHeaderMutation = (
  { __typename?: 'mutation_root' }
  & { insert_headers_one?: Maybe<(
    { __typename?: 'headers' }
    & Pick<Headers, 'header_id' | 'header_name'>
  )> }
);

export type InsertHeaderValueMutationVariables = Exact<{
  header_id: Scalars['Int'];
  header_name: Scalars['String'];
}>;


export type InsertHeaderValueMutation = (
  { __typename?: 'mutation_root' }
  & { update_headers_by_pk?: Maybe<(
    { __typename?: 'headers' }
    & Pick<Headers, 'header_id'>
  )> }
);

export type InsertRowMutationVariables = Exact<{
  row_id: Scalars['Int'];
}>;


export type InsertRowMutation = (
  { __typename?: 'mutation_root' }
  & { insert_rows_one?: Maybe<(
    { __typename?: 'rows' }
    & Pick<Rows, 'row_id'>
  )> }
);

export type InsertValueMutationVariables = Exact<{
  row_id: Scalars['Int'];
  header_id: Scalars['Int'];
  value: Scalars['String'];
  value_id: Scalars['Int'];
}>;


export type InsertValueMutation = (
  { __typename?: 'mutation_root' }
  & { insert_values?: Maybe<(
    { __typename?: 'values_mutation_response' }
    & { returning: Array<(
      { __typename?: 'values' }
      & Pick<Values, 'header_id' | 'row_id' | 'value_id' | 'value'>
    )> }
  )> }
);

export type UpdateValueMutationVariables = Exact<{
  value_id: Scalars['Int'];
  value: Scalars['String'];
}>;


export type UpdateValueMutation = (
  { __typename?: 'mutation_root' }
  & { update_values_by_pk?: Maybe<(
    { __typename?: 'values' }
    & Pick<Values, 'value_id'>
  )> }
);

export type TableDataQueryVariables = Exact<{
  table_id: Scalars['Int'];
}>;


export type TableDataQuery = (
  { __typename?: 'query_root' }
  & { headers: Array<(
    { __typename?: 'headers' }
    & Pick<Headers, 'header_id' | 'header_name'>
  )>, rows: Array<(
    { __typename?: 'rows' }
    & Pick<Rows, 'row_id'>
  )>, values: Array<(
    { __typename?: 'values' }
    & Pick<Values, 'header_id' | 'row_id' | 'value' | 'value_id'>
  )> }
);

export type TablesQueryVariables = Exact<{ [key: string]: never; }>;


export type TablesQuery = (
  { __typename?: 'query_root' }
  & { tables: Array<(
    { __typename?: 'tables' }
    & Pick<Tables, 'table_id'>
  )> }
);


export const InsertHeaderDocument = gql`
    mutation InsertHeader($header_id: Int!, $header_name: String!) {
  insert_headers_one(object: {header_id: $header_id, header_name: $header_name}) {
    header_id
    header_name
  }
}
    `;
export type InsertHeaderMutationFn = Apollo.MutationFunction<InsertHeaderMutation, InsertHeaderMutationVariables>;

/**
 * __useInsertHeaderMutation__
 *
 * To run a mutation, you first call `useInsertHeaderMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useInsertHeaderMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [insertHeaderMutation, { data, loading, error }] = useInsertHeaderMutation({
 *   variables: {
 *      header_id: // value for 'header_id'
 *      header_name: // value for 'header_name'
 *   },
 * });
 */
export function useInsertHeaderMutation(baseOptions?: Apollo.MutationHookOptions<InsertHeaderMutation, InsertHeaderMutationVariables>) {
        return Apollo.useMutation<InsertHeaderMutation, InsertHeaderMutationVariables>(InsertHeaderDocument, baseOptions);
      }
export type InsertHeaderMutationHookResult = ReturnType<typeof useInsertHeaderMutation>;
export type InsertHeaderMutationResult = Apollo.MutationResult<InsertHeaderMutation>;
export type InsertHeaderMutationOptions = Apollo.BaseMutationOptions<InsertHeaderMutation, InsertHeaderMutationVariables>;
export const InsertHeaderValueDocument = gql`
    mutation InsertHeaderValue($header_id: Int!, $header_name: String!) {
  update_headers_by_pk(
    pk_columns: {header_id: $header_id}
    _set: {header_name: $header_name}
  ) {
    header_id
  }
}
    `;
export type InsertHeaderValueMutationFn = Apollo.MutationFunction<InsertHeaderValueMutation, InsertHeaderValueMutationVariables>;

/**
 * __useInsertHeaderValueMutation__
 *
 * To run a mutation, you first call `useInsertHeaderValueMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useInsertHeaderValueMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [insertHeaderValueMutation, { data, loading, error }] = useInsertHeaderValueMutation({
 *   variables: {
 *      header_id: // value for 'header_id'
 *      header_name: // value for 'header_name'
 *   },
 * });
 */
export function useInsertHeaderValueMutation(baseOptions?: Apollo.MutationHookOptions<InsertHeaderValueMutation, InsertHeaderValueMutationVariables>) {
        return Apollo.useMutation<InsertHeaderValueMutation, InsertHeaderValueMutationVariables>(InsertHeaderValueDocument, baseOptions);
      }
export type InsertHeaderValueMutationHookResult = ReturnType<typeof useInsertHeaderValueMutation>;
export type InsertHeaderValueMutationResult = Apollo.MutationResult<InsertHeaderValueMutation>;
export type InsertHeaderValueMutationOptions = Apollo.BaseMutationOptions<InsertHeaderValueMutation, InsertHeaderValueMutationVariables>;
export const InsertRowDocument = gql`
    mutation InsertRow($row_id: Int!) {
  insert_rows_one(object: {row_id: $row_id}) {
    row_id
  }
}
    `;
export type InsertRowMutationFn = Apollo.MutationFunction<InsertRowMutation, InsertRowMutationVariables>;

/**
 * __useInsertRowMutation__
 *
 * To run a mutation, you first call `useInsertRowMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useInsertRowMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [insertRowMutation, { data, loading, error }] = useInsertRowMutation({
 *   variables: {
 *      row_id: // value for 'row_id'
 *   },
 * });
 */
export function useInsertRowMutation(baseOptions?: Apollo.MutationHookOptions<InsertRowMutation, InsertRowMutationVariables>) {
        return Apollo.useMutation<InsertRowMutation, InsertRowMutationVariables>(InsertRowDocument, baseOptions);
      }
export type InsertRowMutationHookResult = ReturnType<typeof useInsertRowMutation>;
export type InsertRowMutationResult = Apollo.MutationResult<InsertRowMutation>;
export type InsertRowMutationOptions = Apollo.BaseMutationOptions<InsertRowMutation, InsertRowMutationVariables>;
export const InsertValueDocument = gql`
    mutation InsertValue($row_id: Int!, $header_id: Int!, $value: String!, $value_id: Int!) {
  insert_values(
    objects: {row_id: $row_id, header_id: $header_id, value: $value, value_id: $value_id}
  ) {
    returning {
      header_id
      row_id
      value_id
      value
    }
  }
}
    `;
export type InsertValueMutationFn = Apollo.MutationFunction<InsertValueMutation, InsertValueMutationVariables>;

/**
 * __useInsertValueMutation__
 *
 * To run a mutation, you first call `useInsertValueMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useInsertValueMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [insertValueMutation, { data, loading, error }] = useInsertValueMutation({
 *   variables: {
 *      row_id: // value for 'row_id'
 *      header_id: // value for 'header_id'
 *      value: // value for 'value'
 *      value_id: // value for 'value_id'
 *   },
 * });
 */
export function useInsertValueMutation(baseOptions?: Apollo.MutationHookOptions<InsertValueMutation, InsertValueMutationVariables>) {
        return Apollo.useMutation<InsertValueMutation, InsertValueMutationVariables>(InsertValueDocument, baseOptions);
      }
export type InsertValueMutationHookResult = ReturnType<typeof useInsertValueMutation>;
export type InsertValueMutationResult = Apollo.MutationResult<InsertValueMutation>;
export type InsertValueMutationOptions = Apollo.BaseMutationOptions<InsertValueMutation, InsertValueMutationVariables>;
export const UpdateValueDocument = gql`
    mutation UpdateValue($value_id: Int!, $value: String!) {
  update_values_by_pk(pk_columns: {value_id: $value_id}, _set: {value: $value}) {
    value_id
  }
}
    `;
export type UpdateValueMutationFn = Apollo.MutationFunction<UpdateValueMutation, UpdateValueMutationVariables>;

/**
 * __useUpdateValueMutation__
 *
 * To run a mutation, you first call `useUpdateValueMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateValueMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateValueMutation, { data, loading, error }] = useUpdateValueMutation({
 *   variables: {
 *      value_id: // value for 'value_id'
 *      value: // value for 'value'
 *   },
 * });
 */
export function useUpdateValueMutation(baseOptions?: Apollo.MutationHookOptions<UpdateValueMutation, UpdateValueMutationVariables>) {
        return Apollo.useMutation<UpdateValueMutation, UpdateValueMutationVariables>(UpdateValueDocument, baseOptions);
      }
export type UpdateValueMutationHookResult = ReturnType<typeof useUpdateValueMutation>;
export type UpdateValueMutationResult = Apollo.MutationResult<UpdateValueMutation>;
export type UpdateValueMutationOptions = Apollo.BaseMutationOptions<UpdateValueMutation, UpdateValueMutationVariables>;
export const TableDataDocument = gql`
    query TableData($table_id: Int!) {
  headers(where: {table_id: {_eq: $table_id}}) {
    header_id
    header_name
  }
  rows(where: {table_id: {_eq: $table_id}}) {
    row_id
  }
  values(where: {table_id: {_eq: $table_id}}) {
    header_id
    row_id
    value
    value_id
  }
}
    `;

/**
 * __useTableDataQuery__
 *
 * To run a query within a React component, call `useTableDataQuery` and pass it any options that fit your needs.
 * When your component renders, `useTableDataQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useTableDataQuery({
 *   variables: {
 *      table_id: // value for 'table_id'
 *   },
 * });
 */
export function useTableDataQuery(baseOptions?: Apollo.QueryHookOptions<TableDataQuery, TableDataQueryVariables>) {
        return Apollo.useQuery<TableDataQuery, TableDataQueryVariables>(TableDataDocument, baseOptions);
      }
export function useTableDataLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<TableDataQuery, TableDataQueryVariables>) {
          return Apollo.useLazyQuery<TableDataQuery, TableDataQueryVariables>(TableDataDocument, baseOptions);
        }
export type TableDataQueryHookResult = ReturnType<typeof useTableDataQuery>;
export type TableDataLazyQueryHookResult = ReturnType<typeof useTableDataLazyQuery>;
export type TableDataQueryResult = Apollo.QueryResult<TableDataQuery, TableDataQueryVariables>;
export const TablesDocument = gql`
    query Tables {
  tables {
    table_id
  }
}
    `;

/**
 * __useTablesQuery__
 *
 * To run a query within a React component, call `useTablesQuery` and pass it any options that fit your needs.
 * When your component renders, `useTablesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useTablesQuery({
 *   variables: {
 *   },
 * });
 */
export function useTablesQuery(baseOptions?: Apollo.QueryHookOptions<TablesQuery, TablesQueryVariables>) {
        return Apollo.useQuery<TablesQuery, TablesQueryVariables>(TablesDocument, baseOptions);
      }
export function useTablesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<TablesQuery, TablesQueryVariables>) {
          return Apollo.useLazyQuery<TablesQuery, TablesQueryVariables>(TablesDocument, baseOptions);
        }
export type TablesQueryHookResult = ReturnType<typeof useTablesQuery>;
export type TablesLazyQueryHookResult = ReturnType<typeof useTablesLazyQuery>;
export type TablesQueryResult = Apollo.QueryResult<TablesQuery, TablesQueryVariables>;