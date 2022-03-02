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

export type RowBuilderInput = {
  [key: string]: string | Date | undefined,
  group?: string,
  timestamp?: Date,
  source?: string,
  amount?: string,
  sheetDate1?: Date,
  sheetDate2?: Date,
}

export type InputErrorCB = {
  [key: string]: string | Date | undefined | false,
  group?: string | false,
  timestamp?: string | false,
  source?: string | false,
  amount?: string | false,
}

export type SheetEntry = {
  [key: string]: string | Date | number | undefined,
  group?: string,
  timestamp?: Date,
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
