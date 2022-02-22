export type IResponse = {
  status: 'error' | 'success',
  data?: string,
  description: string,
};

export type CallArgs = {
  prefix: 1 | 2,
  api: string,
  noStatus?: boolean,
  method?: string,
  body?: any,
  type?: 'json' | 'blob',
  token?: string,
  VerifyToken?: string,
  isUnAuthed?: boolean;
  noStringify?: boolean;
  noContentType?: boolean;
};

export type SheetBuilderInput = {
  [key: string]: any,
  group?: string,
  source: string,
  amount: string | number,
};

export type SheetEntry = {
  [key: string]: any,
  group?: string,
  source: string,
  amount: number,
};

export type DataSheet = Array<SheetEntry>
