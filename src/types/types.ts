import { ReactElement } from 'react';

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
  amount: string,
};

export type SheetEntry = {
  [key: string]: string | number | undefined,
  group?: string,
  source: string,
  amount: number,
};

export type Sheet = {
  [key: string]: Date | Array<SheetEntry>,
  date: Date,
  data: Array<SheetEntry>,
};

export type DataSheet = {
  [key: string]: Date | Array<SheetEntry>,
  date: Date,
  data: Array<SheetEntry>;
}

export type ShowPopup = {
  [key: string]: ReactElement | null
  income: ReactElement | null,
  resources: ReactElement | null,
};
