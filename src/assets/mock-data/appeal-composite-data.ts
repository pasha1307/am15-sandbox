const INTAKE_OBJ_ARR = [
    {
    id: '222',
    notes: 'Notes Prop',
    rfiDate: 'RTF Date',
    nextActionDate: '11/23/22',
    expedited: "Expidite",
    highProfile: 'High Profile Type One',
    aplStatus: 'new',
    aplStage: 'Intake',
    aplLink: 'intake',
    aplId: "APL-51",
    aplType: "Large Employer",
    aplSubType: "CHIP",
    aplIssue: "Individual Exemption",
    status: "New",
    location: "Appeal Intake WB",
    phase: "NO DATA",
    phaseChangedDate: "",
    reopenPhase: "",
    langAssitFlag: false,
    accommFlag: false,
    mdcd: true,
    smah: false,
    appCallReleaseHold: false,
    stateModel: "SBM",
    state: "",
    intakeType: "Return Mail",
    formType: "Assessment State",
    receiptType: "On-line",
    aplSubmittedBy: "Appellant",
    pendedReason: "Disaster Extension ",
    pendedReqStartDate: "2022-04-12T12:59:11.332",
    pendedReqEndDate: "2022-04-30T12:59:11.332",
    xReference: "Some Value",
    xReferenceType: "Appellant on another appeal",
    recieptDate: "2022-04-30T12:59:11.33",
    hearingDate: "2022-04-30T12:59:11.33",
    planYear: "2022",
    eacmsRecievedDate: "2022-04-30T12:59:11.33",
    openStatusDate: "2022-04-30T12:59:11.33",
    adjudDeadline: "No Data",
    ndFlag: true,
    ndStartDate: "2022-04-30T12:59:11.33",
    ndEndDate: "2022-04-30T12:59:11.33",
    ndName: "My Testing",
    expFlag: true,
    expFor: "Expidite",
    expReqGranted: true,
    expComments: "My TestingComments",
    langAssitComments: "",
    eligDecision: "",
    decisionDate: "",
    mktplcDecision: "",
    appReasonForAppeal: "",
    ackNotice: "",
    ackNoticeDate: "",
    ackNoticeGranted: "",
    hearingId: "",
    createdOn: "2022-04-12T12:59:11.332",
    updatedOn: "2022-04-12T12:59:11.332",
    contacts: [
        {
            sfx: "",
            firstName: "Jane",
            middleName: "T",
            lastName: "Fernandes",
            createDateTime: "",
            updateDateTime: "",
            type: "type???",
            prsnType: "person type??",
            primaryContact: "true",
            dob: "01/01/1991",
            emplrName: "",
            dtSgnd: "",
            sgntrInd: "",
            adrSameAsApllant: "",
            authrztn: "",
            ubleToContact: "",
            langAstnc: "",
            spkLang: "",
            wrtnLang: "",
            vrfctnType: "",
            ackAdr: "",
            efctvStrtDt: "",
            efctvEndDt: "",
            authrzgAplntSgtr: "",
            aplntSgndDt: "",
            authrzdRprsntvSgntr: "",
            aprsntvSgndDt: "",
            contactAddress: [
                {
                    createDtTime: "",
                    updateDateTime: "",
                    type: "Mailing",
                    street_line: "111 Main St",
                    secondary: "apt. 101",
                    city: "Madison",
                    state: "WI",
                    zipcode: "01899",
                    county: "",
                    country: "USA"
                }
            ],
            contactEmail: [
                {
                    createDtTime: "",
                    updateDateTime: "",
                    emailPrefn: "",
                    emailType: "home",
                    email: "my@email.com"
                }
            ],
            contactTellInfo: [
                {
                    createDtTime: "",
                    updateDateTime: "",
                    txtPrefnc: "",
                    phone: "12312211232",
                    phoneType: "home",
                    extNo: ""
                }
            ]
        }
    ],
    accommReq: [
        {
            createDataTime: "2022-04-12T12:59:11.332",
            updateDateTime: "2022-04-12T12:59:11.332",
            personType: "TESTApp",
            largPrint: false,
            audio: false,
            braille: false,
            vrs: false,
            tty: false,
            other: false,
            reportable: false,
            comments: "Comments"
        }
    ],
    languageAssistReq: [
        {
            createDataTime: "2022-04-12T12:59:11.332",
            updateDateTime: "2022-04-12T12:59:11.332",
            personType: "Appellant",
            spokenLanguage: "Span",
            writtenLanguage: "Span",
            requestDate: "2022-04-13T12:59:11.332"
        }
    ]
}
]

// function sortObj(obj) {
//     return Object.keys(obj).sort().reduce(function (result, key) {
//         result[key] = obj[key];
//         return result;
//     }, {});
// }

let maxSpeed = {
    car: 300,
    bike: 60,
    motorbike: 200,
    airplane: 1000,
    helicopter: 400,
    rocket: 8 * 60 * 60
};
let sortable = [];
// for (var vehicle in maxSpeed) {
//     sortable.push([vehicle, maxSpeed[vehicle]]);
// }
//
// sortable.sort(function(a, b) {
//     return a[1] - b[1];
// }