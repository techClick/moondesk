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
  timestamp?: string,
  source?: string,
  amount?: string,
  sheetDate1?: Date,
  sheetDate2?: Date,
}

export type RowBuild = {
  [key: string]: string | Date | undefined,
  group?: string,
  timestamp?: string,
  source: string,
  amount: string,
  sheetDate1: Date,
  sheetDate2: Date,
}

export type InputError = {
  [key: string]: string | undefined | false,
  group?: string | false,
  timestamp?: string | false,
  source?: string | false,
  amount?: string | false,
}

export type SheetEntry = {
  [key: string]: string | number | undefined,
  group?: string,
  source: string,
  amount: number,
};

export type DataSheet = {
  [key: string]: Date | Array<SheetEntry>,
  date: Date,
  data: Array<SheetEntry>;
}

export type PopupElement = {
  [key: string]: ReactElement | undefined | boolean
  component: ReactElement,
  exitOnBgClick?: boolean,
};

export type ShowPopup = {
  [key: string]: PopupElement | undefined | false
  income?: PopupElement | false,
  resources?: PopupElement,
};

export type Sheets = {
  [key: string]: DataSheet[] | null | undefined
  income?: DataSheet[],
  resources?: DataSheet[],
}

export type ShowSheetBuilder = {
  [key: string]: boolean | undefined
  income?: boolean,
  resources?: boolean,
}

export type SelectedSheet = {
  [key: string]: number | undefined
  income: number,
  resources: number,
};
