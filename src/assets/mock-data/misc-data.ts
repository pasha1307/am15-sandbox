// import { Dictionary } from 'src/app/shared/data/dictionary-types';
export interface CommunicationTask {
  icId: string;
  appealId: string;
  creationDateTime: string;
  internalCommunicationTopic: string;
  internalCommunicationSubTopic: string;
  returnResponseRequested: boolean;
  moveTaskTo: string;
  taskStatus: string;
  closeTask: boolean;
}

export interface AppealIntakeModel {
  appealId: string;
  aplType: string;
  aplSubType: string;
  aplIssue: string;
  intakeType: string;
  status: string;
  createDataTime: string;
  createOperatorName: string;
  location: string;
  accommFlag: boolean;
  expFlag: boolean;
  langAssitFlag: boolean;
  ackNotice: boolean;
  appCallReleaseHold: boolean;
  adjudicationId: string;
  adjDeadlineDate: string;
  smah: boolean;
  mdcd: boolean;
  formType: string;
  hearingId: string;
  phase: string;
  phaseChangedDate: string;
  planYear: string;
  updateDateTime: string;
  updateOperatorName: string;

  ackNoticeDate: string;
  ackNoticeGranted?: string;
  aplSubmittedBy: string;
  appReasonForAppeal: string;
  createOperator: string;
  decisionDate: string;
  eacmsRecievedDate: string;
  eligDecision: string | boolean;
  expComments: string;
  expFor: string;
  expReqGranted: boolean;
  hearingRecieptDate: string;
  invalidRevNextAction: boolean;
  invalidRevNextActionDate: string;
  langAssitComments: string;
  mktplcDecision: boolean;
  mmsReceiptDate: string;
  ndEndDate: string;
  ndFlag: boolean;
  ndName: string;
  ndStartDate: string;
  openStatusDate: string;
  pendedReason: string;
  pendedReqEndDate: string;
  pendedReqStartDate: string;
  reasonForInvalid: string;
  receiptDateZ: string;
  receiptType: string;
  reopenPhase: string;
  requestType: string;
  state: string;
  stateModel: string;
  truePrcsgDate: string;
  updateOperator: string;
  xreference: boolean | string;
  xreferenceType: string;
}

// export interface BeanAppealIntake {
//   appealId: string;
//   aplType: string;
//   status: string;
//   createDataTime: string;
//   lastName: string;
//   loc: string;
//   accomadation: boolean;
//   expediate: string;
//   langAssitance: boolean;
//   appalantCall: boolean;
//   smah: boolean;
//   mdcd: boolean;
//   nationalDisaster: boolean;
//   nationalDisasterStartDate: string;
//   updateDateTime: string;
// }

export const WB_CATEGORIES = {
  Intake: [
    'Electronic Validation',
    'Electronic Appeals',
    'AuthRep MAT',
    'OCR Auth Rep',
    'Intake QA',
    'Appeal Intake',
    'Appeal QA',
    'LE Appeal',
    'LE EFT',
    'LE EFT Responses',
    'Invalid Review',
    'Unable to Contact',
    'Unable to Contact Task',
    'Vacate/Reopen',
  ],
  Adjudication: ['Exemption WB', 'Adjudication WB'],
};

export const APPEAL_FIELDS = [
  'appealId',
  'aplType',
  'aplsubType',
  'receiptDate',
  'expediatedAppeal',
  'phase',
  'high_profile',
  'updateDateTime',
  'plan_year',
  'adjud_deadline',
];

export const MOCK_ITEMS = [
  {
    appealID: 'APL-00001',
    wbType: 'eValidation',
  },
  {
    appealID: 'APL-00002',
    wbType: 'eAppeals',
  },
  {
    appealID: 'APL-00003',
    wbType: 'authRepMat',
  },
  {
    appealID: 'APL-00004',
    wbType: 'authRepOcr',
  },
];

export interface MockItem {
  appealID: string;
  wbType: string;
}

export const WB_FIELDS = {
  appealID: 'appealID',
  receiptDt: 'receiptDate',
  expedite: 'expedite',
  languageAssistance: 'languageAssistance',
  accommodations: 'accommodations',
  kpiDay: 'kpiDay',
  mmsReceiptDt: 'mmsReceiptDate',
  aplPhase: 'appealPhase',
  reasonForInvalidity: 'reasonForInvalidity',
  invalidRevNextAction: 'invalidReviewNextAction',
  invalidRevNextActionDt: 'invalidReviewNextActionDate',
  reopenPhase: 'reopenPhase',
  requestType: 'requestType',
  requestReceivedDt: 'requestReceivedDate',
  pendedReason: 'pendedReason',
  pendedEndDt: 'pendedEndDate',
};

export const INTAKE_DISPLAY_COLS = [
  'appealId',
  'receiptDt',
  'expedite',
  'languageAssistance',
  'accommodations',
  'kpiDay',
  'mmsReceiptDt',
  'aplPhase',
  'reasonForInvalidity',
  'invalidRevNextAction',
  'invalidRevNextActionDt',
  'reopenPhase',
  'requestType',
  'requestReceivedDt',
  'pendedReason',
  'pendedEndDt',
];

export const WB_TITLES = [
  {
    fieldName: WB_FIELDS.mmsReceiptDt,
    title: 'MMS Receipt Date',
  },
  {
    fieldName: WB_FIELDS.aplPhase,
    title: 'Appeal Phase',
  },
  {
    fieldName: WB_FIELDS.reasonForInvalidity,
    title: 'Reason For Invalidity',
  },
  {
    fieldName: WB_FIELDS.invalidRevNextAction,
    title: 'Invalid Review Next Action',
  },
  {
    fieldName: WB_FIELDS.invalidRevNextActionDt,
    title: 'Invalid Review Next Action Date',
  },
  {
    fieldName: WB_FIELDS.reopenPhase,
    title: 'Reopen Phase',
  },
  {
    fieldName: WB_FIELDS.requestType,
    title: 'Request Type',
  },
  {
    fieldName: WB_FIELDS.requestReceivedDt,
    title: 'Request Received Date',
  },
  {
    fieldName: WB_FIELDS.pendedReason,
    title: 'Pended Reason',
  },
  {
    fieldName: WB_FIELDS.pendedEndDt,
    title: 'Pended End Date',
  },
];

export const COLUMNS = [
  {
    field: 'appealID',
    sortable: true,
    filter: true,
    resizable: true,
    pinned: 'left',
  },
  {
    field: 'receiptDt',
    sortable: true,
    filter: true,
    resizable: true,
  },
  {
    field: 'expedite',
    sortable: true,
    filter: true,
    resizable: true,
  },
  {
    field: 'languageAssistance',
    sortable: true,
    filter: true,
    resizable: true,
  },
  {
    field: 'accommodations',
    sortable: true,
    filter: true,
    editable: false,
    resizable: true,
  },
  {
    field: 'kpiDay',
    sortable: true,
    filter: true,
    resizable: true,
  },
  {
    field: 'mmsReceiptDt',
    sortable: true,
    filter: true,
    resizable: true,
  },
  {
    field: 'aplPhase',
    sortable: true,
    filter: true,
    resizable: true,
    suppressSizeToFit: true,
  },
  {
    field: 'reasonForInvalidity',
    sortable: true,
    filter: true,
    resizable: true,
  },
  {
    field: 'invalidRevNextAction',
    sortable: true,
    filter: true,
    resizable: true,
  },
  {
    field: 'invalidRevNextActionDt',
    sortable: true,
    filter: true,
    editable: false,
    resizable: true,
  },
  {
    field: 'reopenPhase',
    sortable: true,
    filter: true,
    resizable: true,
    suppressSizeToFit: true,
  },
  {
    field: 'requestType',
    sortable: true,
    filter: true,
    resizable: true,
  },
  {
    field: 'requestReceivedDt',
    sortable: true,
    filter: true,
    resizable: true,
  },
  {
    field: 'pendedReason',
    sortable: true,
    filter: true,
    resizable: true,
  },
  {
    field: 'pendedEndDt',
    sortable: true,
    filter: true,
    resizable: true,
  },
];

export interface FormError {
  key: string;
  keyError: string;
  value: any;
}

// export const FIELD_DISPLAY_NAMES = {
//   accommodation: 'Accommodation',
//   addressType: 'Address Type',
//   benefitYear: 'Benefit Year',
//   city: 'City',
//   contestedEDN: 'Contested EDN',
//   decision: 'Decision',
//   Dob: 'Date of Birth',
//   eligibilityNotice: 'Eligibility Notice',
//   email: 'Email',
//   emailType: 'Email Type',
//   expFor: 'Expedite For',
//   expReqGranted: 'Expedite Request Granted',
//   firstName: 'First Name',
//   grantOrDenyDate: 'Grant or Deny Date',
//   intakeType: 'Intake Type',
//   lastName: 'Last Name',
//   marketplaceApplicationID: 'Marketplace Application ID',
//   mostRecentEDN: 'Most Recent EDN',
//   ndEndDate: 'National Disaster End Date',
//   ndName: 'National Disaster Name',
//   ndStartDate: 'National Disaster Start Date',
//   pendedReqEndDate: 'Pended Request End Date',
//   pendedReqStartDate: 'Pended Request Start Date',
//   personType: 'Person Type',
//   phoneType: 'Phone Type',
//   planYear: 'Benefit Year',
//   prsnType: 'Person Type',
//   receiptDate: 'Receipt Date',
//   requestDate: 'Request Date',
//   spokenLang: 'Spoken Language',
//   spokenLanguage: 'Spoken Language',
//   stAddressType1: 'Street Address Type 1',
//   state: 'State',
//   telePhoneNumber: 'Phone Number',
//   writtenLang: 'Written Language',
//   writtenLanguage: 'Written Language',
//   zip: 'Zip Code',
//   startDate: 'Start Date',
//   endDate: 'End Date',
//   verificationType: 'Verification Type',
//   repAuthorized: 'Authorized',
//   langAssist: 'Language Assistance',
// } as FormError<any>;
//
// export const ERROR_DISPLAY_MESSAGES = {
//   dateLessThanNewDate: 'must be a previous date',
//   oneRequired: 'at least one required',
//   pattern: 'is not in the correct format',
//   required: 'is a required field',
//   textPreferenceNotMobile: 'must be mobile',
// } as Dictionary<string>;
