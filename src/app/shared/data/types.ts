import {HttpParams} from '@angular/common/http';

export type Dictionary<T> = { [key: string]: T };

export interface AppConfig {
  issuer: string;
  clientId: string;
  callbackUrl: string;
  appealServiceUrl: string;
  valuesServiceUrl: string;
  crmServiceUrl: string;
  myListServiceUrl: string;
}

export interface AppealCreateModel {
  aplType: string;
  contact: ContactInfo[];
}

export interface ContactInfo {
  firstName: string;
  middleName?: string;
  lastName: string;
}

export interface AppealData {
  appealType: string;
  firstName: string;
  lastName: string;
  aplId: string;
}

export interface ResponseModel<T> {
  methodReturnValue: T;
  status: string;
  statusCode: number;
  message: string;
}

export interface Contact {
  Dob: string;
  ackAdr: Boolean;
  adrSameAsApllant: Boolean;
  aplntSgndDt: string;
  appealId: string;
  authrzdRprsntvSgntr: Boolean;
  authrzgAplntSgtr: Boolean;
  authrztn: string;
  contactId: string;
  creaeOptrName: string;
  createDateTime: string;
  createOprtr: string;
  dob: string;
  dtSgnd: string;
  efctvEndDt: string;
  efctvStrtDt: string;
  emplrName: string;
  firstName: string;
  langAstnc: Boolean;
  lastName: string;
  middleName: string;
  primaryContact: Boolean;
  prsnType: string;
  raprsntvSgndDt: string;
  sfx: string;
  sgntrInd: Boolean;
  spkLang: string;
  type: string;
  ubleToContact: Boolean;
  updateDateTime: string;
  updateOprtName: string;
  updateOptr: string;
  vrfctnType: string;
  wrtnLang: string;
  contactAddress: ContactAddress[];
  contactTellInfo: PhoneNumber[];
  contactEmail: EmailAddress[];
}

export interface Appeal {
  appealId: string;
  status: string;
  location: string;
  phase: string;
  phaseChangedDate: string;
  reopenPhase: string;
  langAssitFlag: boolean;
  accommFlag: boolean;
  aplType: string;
  aplSubType: string;
  aplIssue: string;
  mdcd: boolean;
  smah: boolean;
  stateModel: string;
  state: string;
  intakeType: string;
  formType: string;
  receiptType: string;
  aplSubmittedBy: string;
  pendedReason: string;
  pendedReqStartDate: string;
  pendedReqEndDate: string;
  appCallReleaseHold: boolean;
  recieptDate: string;
  hearingRecieptDate: string;
  planYear: string;
  eacmsRecievedDate: string;
  openStatusDate: string;
  adjDeadlineDate: string;
  ndFlag: boolean;
  ndStartDate: string;
  ndEndDate: string;
  ndName: string;
  expFlag: boolean;
  expFor: string;
  expReqGranted: string;
  expComments: string;
  eligDecision: string;
  decisionDate: string;
  mktplcDecision: string;
  appReasonForAppeal: string;
  ackNotice: string;
  ackNoticeDate: string;
  ackNoticeGranted: string;
  hearingId: string;
  createDataTime: string;
  createOperator: string;
  createOperatorName: string;
  updateDateTime: string;
  updateOperator: string;
  updateOperatorName: string;
  contact: Contact[];
  representative: Contact[];
  xreference: string;
  xreferenceType: string;
  receiptDate: string;
  accommodations: Accommodation[];
  languageAssistance: LanguageAssistance[];
  marketPlaceInfo: MarketPlaceInfo[];
  appealInvalidReason: AppealInvalidReason[];
  additionalSubTypes: AdditionalSubType[];
  langAsistCommt: LanguageAssistanceComment[];
}

export interface LookupValue {
  id: number;
  type: string;
  displayText: string;
  code: string;
  context: string;
  active: boolean;
  displayOrder: number;
  parent: number;
  grandParent: number;
  misc1: string;
  misc2?: string;
  misc3?: string;
  description?: string;
  comments?: string;
  createOperator?: string;
  createOperatorName?: string;
  updateOperator?: string;
  updateOperatorName?: string;
  createDateTimeStamp: number[];
  updateDateTimeStamp: number[];
}

export interface AppealSearchParams extends HttpParams {
  index: number;
  noOfRecords: number;
  firstName?: string;
  lastName?: string;
  appealId?: string;
  dob?: string;
  state?: string;
  phoneNumber?: string;
  email?: string;
  marketplaceId?: string;
  organizationName?: string;
  hicsCaseNumber?: string;
}

export enum TabType {
  Appeal = 'Appeal',
  MyWork = 'MyWork',
  MasterCalendar = 'MasterCalendar',
  HearingCalendar = 'HearingCalendar',
  AppealPage = 'AppealPage',
  Dashboard = 'Dashboard',
  MyReport = 'MyReport',
  Workbasket = 'Workbasket',
  Crm = 'Crm',
}

export enum ResponseStatus {
  Success = 'SUCCESS',
}

export interface TabComponent {
  data?: any;
}

export interface AppealIntakeWorkBasket {
  appealId: string;
  status: string;
  location: string;
  phase: string;
  phaseChangedDate: string;
  reopenPhase: string;
  langAssitFlag: boolean;
  accommFlag: boolean;
  aplType: string;
  aplSubType: string;
  aplIssue: string;
  mdcd: boolean;
  smah: boolean;
  stateModel: string;
  state: string;
  intakeType: string;
  formType: string;
  receiptType: string;
  aplSubmittedBy: string;
  pendedReason: string;
  pendedReqStartDate: string;
  pendedReqEndDate: string;
  appCallReleaseHold: boolean;
  recieptDate: string;
  hearingRecieptDate: string;
  planYear: string;
  eacmsRecievedDate: string;
  openStatusDate: string;
  adjDeadlineDate: string;
  ndFlag: boolean;
  ndStartDate: string;
  ndEndDate: string;
  ndName: string;
  expFlag: boolean;
  expFor: string;
  expReqGranted: string;
  expComments: string;
  langAssitComments: string;
  eligDecision: string;
  decisionDate: string;
  mktplcDecision: string;
  appReasonForAppeal: string;
  ackNotice: string;
  ackNoticeDate: string;
  ackNoticeGranted: string;
  kpiDay: string;
  taskDetails: TaskDetails;
  xreference: string;
  xreferenceType: string;
}

export interface TaskDetails {
  taskId: string;
  businessKey: string;
  createDate: string;
  assigee: string;
  processDefKey: string;
  taskDefKey: string;
  executionId: string;
}

export interface AllLang {
  english: string;
  alpha2: string;
}

export interface LanguageAssistance {
  id: string;
  appealId: string;
  personType: string;
  spokenLanguage: string;
  writtenLanguage: string;
  requestDate: string;
  createDataTime: string;
  createOperator: string;
  createOperatorName: string;
  updateDateTime: string;
  updateOperator: string;
  updateOperatorName: string;
}

export interface InvalidReason {
  appealInvalidReason: AppealInvalidReason[];
  appReasonForAppeal: string;
}

export interface AppealInvalidReason {
  invalidResId?: string;
  appealId?: string;
  createDataTime?: string;
  createOperator?: string;
  createOperatorName?: string;
  updateDateTime?: string;
  updateOperator?: string;
  updateOperatorName?: string;
  appealInvalidRes: string;
  comments: string;
}

export interface Accommodation {
  accoId?: string;
  personType: string;
  appealId?: string;
  largPrint: boolean;
  audio: boolean;
  braille: boolean;
  vrs: boolean;
  tty: boolean;
  other: boolean;
  reportable: boolean;
  comments: string;
  requestDate: string;
  decision: string;
  grantOrDenyDate: string;
  createDataTime?: number[];
  createOperator?: any;
  createOperatorName?: any;
  updateDateTime?: number[];
  updateOperator?: any;
  updateOperatorName?: any;
}

export interface MarketPlaceInfo {
  id: string;
  appealId: string;
  marketPlaceAppID: string;
  planYear: string;
  eligibilityNotice: string;
  spokenLang: string;
  writtenLang: string;
  eligibilityNoticeDate: string;
  contestedEDNDate: string;
  esdCustomNoticeDate: string;
  contestedEDN: boolean;
  mostRecentEDN: boolean;
  timelinessWaived: boolean;
  timelinessWaivedOption: string;
  createDataTime: string;
  createOperator: string;
  createOperatorName: string;
  updateDateTime: string;
  updateOperator: string;
  updateOperatorName: string;
}

export interface AdditionalSubType {
  additionSubTypeId: string;
  appealId?: any;
  createDataTime: number[];
  createOperator?: any;
  createOperatorName?: any;
  updateDateTime: number[];
  updateOperator?: any;
  updateOperatorName?: any;
  subType: string;
}

export interface PhoneNumber {
  contractTellInfoId: string;
  appealId: string;
  createDtTime: string;
  createOprtr: string;
  createOprtrName: string;
  updateDtTime: string;
  updateOprtr: string;
  updateOprtrName: string;
  txtPrefnc: boolean;
  phoneType: string;
  telePhoneNumber: string;
  extNo: string;
}

export interface EmailAddress {
  contactEmailId: string;
  contactId: string;
  appealId: string;
  createDtTime: string;
  createOprtr: string;
  createOprtrName: string;
  updateDtTime: string;
  updateOprtr: string;
  updateOprtrName: string;
  emailPrefn: boolean;
  emailType: string;
  email: string;
}

export interface ContactAddress {
  addressId: string;
  contactId: string;
  appleaId: string;
  createDtTime: string;
  createOprtr: string;
  createOprtrName: string;
  updateDtTime: string;
  updateOprt: string;
  updateOprtrName: string;
  addressType: string;
  stAddressType1: string;
  stAddressType2: string;
  city: string;
  state: string;
  zip: string;
  county: string;
  country: string;
}

export interface LanguageAssistanceComment {
  id: string;
  createDataTime: string;
  createOperator: string;
  createOperatorName: string;
  comments: string;
}

export interface LanguageAssistanceDetails {
  langAssitFlag: boolean;
  languageAssistance: LanguageAssistance[];
  langAsistCommt: LanguageAssistanceComment[];
}

export interface ContactHistory {
  id: string;
  contactId: string;
  appealId: string;
  effectiveStartDate: string;
  effectiveEndDate: string;
  changeDate: string;
  createdOprtr: string;
  updatedOprtr: string;
  createdOprtrName: string;
  updatedOprtrName: string;
  createdDate: string;
  updatedDate: string;
  verificationType: string;
}

export interface AppealNote {
  appealNotes: string;
  appealNotesId: string;
  createDateTime: string;
  createOperator: string;
  createOperatorName: string;
  deleteDateTime: string;
  deleteOperator: string;
  deleteOperatorName: string;
  dltFlag: boolean;
  updateDateTime: string;
  updateOperator: string;
  updateOperatorName: string;
}

export interface AppealNotes {
  notes: [];
}
