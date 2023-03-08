import {Injectable} from '@angular/core';
import {APP_DROPDOWNS_OBJ} from "../../assets/mock-data/dropdown-values-data";
import * as _ from 'lodash';
import {
    AplSources,
    AppealTypes,
    FormTypes,
    IntakeTypes,
    ReceiptTypes,
    XrefTypes
} from "../shared/data/dropdowns/intake-stage";

@Injectable({
    providedIn: 'root'
})
export class DropdownsService {
    data = APP_DROPDOWNS_OBJ;
    appealTypes = AppealTypes;
    intakeTypes = IntakeTypes;
    submittedByArr = AplSources;
    receiptTypes = ReceiptTypes;
    formTypesArr = FormTypes;
    xrefTypesArr = XrefTypes;
    dataArr = [...this.data.result];

    constructor() {
    }

    getAll() {
        return [...this.dataArr];
    }

    getIntakeType() {
        return [...this.intakeTypes];
    }
    getFormType() {
        return [...this.formTypesArr];
    }

    getXrefType() {
        return [...this.xrefTypesArr];
    }

    getSourceType() {
        return [...this.submittedByArr];
    }

    getReceiptType() {
        return [...this.receiptTypes];
    }

    getAppealType() {
        return [...this.appealTypes];
    }

    getAplTypes() {
        return _.filter(this.dataArr, {context: 'Intake', type: 'APL_TYPE'});
    }

    getIntakeIssues() {
        return _.filter(this.dataArr, {context: 'Intake', type: 'APL_ISSUE'});
    }

    getHearingContext() {
        return _.filter(this.dataArr, {context: 'hearing'});
    }

    getTypes() {
        return _.groupBy(this.dataArr, 'context');
        // return [...this.dataArr].map(item => {
        //   return {
        //     type: item.type,
        //     item
        //   }
        // }).filter(el => el.type === 'APL_TYPE');
    }

    getSubTypes() {
        return _.filter(this.dataArr, {context: 'Intake', type: 'APL_ISSUE'});
    }
}
