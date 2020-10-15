import React from 'react';
import ButtonComponent from '../../../components/button/button.component';
import InputComponent from '../../../components/input/input.component';
import { classificationData } from './instrument-history-new.service';

import './instrument-history-new.styles.scss';

class InstrumentHistoryNewPage extends React.Component {
    constructor() {
        super();
        this.state = {
            classification: { searchVal: '', value: '', error: false },
            testReportNo: { value: '', error: false },
            dateOfTesting: { value: `${new Date().getFullYear()}-${new Date().getMonth() < 9 ? '0' + (new Date().getMonth() + 1) : (new Date().getMonth() + 1)}-${new Date().getDate()}`, error: false },
            fileNo: { value: '', error: false },
            dateOfReceipt: { value: '', error: false },
            cost: { value: '', error: false },
            shortTechnicalDescription: { value: '', error: false },
            modelOrType: { value: '', error: false },
            serialNo: { value: '', error: false },
            manufacturer: { value: '', error: false },
            agents: { value: '', error: false },
            indentors: { searchVal: '', value: '', error: false },
            orderNo: { value: '', error: false },
            orderDate: { value: '', error: false },
            invoiceNo: { value: '', error: false },
            invoiceDate: { value: '', error: false },
        }
    }

    onSubmit = (event) => {
        event.preventDefault();
        const {
            classification,
            testReportNo,
            dateOfTesting,
            fileNo
        } = this.state;

        const classificationError = classification.value === '';
        if(classificationError) this.setState({classification : { searchVal: '', value: '', error: true }});

        const testReportNoError = testReportNo.value === '';
        if(testReportNoError) this.setState({testReportNo : { value: '', error: true }});

        const dateOfTestingError = dateOfTesting.value === '';
        if(dateOfTestingError) this.setState({dateOfTesting : { value: '', error: true }});

        const fileNoError = fileNo.value === '';
        if(fileNoError) this.setState({fileNo : { value: '', error: true }});
        
        const formHasError = classificationError && testReportNoError && dateOfTestingError && fileNoError;
        if(!formHasError)
            console.log(this.state);
    }
    
    onSelectSearch = (event) => {
        const { name, value } = event.target;
        this.setState({ [name]: { searchVal: value, value: this.state[name].value, error: false } })
    }

    onSelect = (name, value) => {
        console.log(name, value)
        console.log(this.state);
        this.setState({ [name]: { searchVal: value, value: value, error: false } }, () => console.log(this.state));
    }

    onFormValueChange = (event) => {
        const { name, value } = event.target;
        this.setState({ [name]: { value: value, error: false } });
        console.log(value);
    }

    render() {
        const {
            classification,
            testReportNo,
            dateOfTesting,
            fileNo,
            dateOfReceipt,
            cost,
            shortTechnicalDescription,
            modelOrType,
            serialNo,
            manufacturer,
            agents,
            indentors,
            orderNo,
            orderDate,
            invoiceNo,
            invoiceDate,
        } = this.state;

        return(
            <div className="instrument-history-new">
                <form onSubmit={this.onSubmit}>
                    <div className="form-fields">
                        <InputComponent
                            type="select"
                            selectData={classificationData}
                            name="classification"
                            value={classification.value}
                            searchVal={classification.searchVal}
                            label="Classification"
                            labelPos="side"
                            onChange={this.onFormValueChange}
                            onSelectSearch={this.onSelectSearch}
                            onSelect={this.onSelect}
                            error={classification.error}
                        />
                        <InputComponent
                            type="number"
                            name="testReportNo"
                            value={testReportNo.value}
                            label="Test Report No."
                            labelPos="side"
                            onChange={this.onFormValueChange}
                            error={testReportNo.error}
                        />
                        <InputComponent
                            type="date"
                            name="dateOfTesting"
                            value={dateOfTesting.value}
                            label="Date of Testing"
                            labelPos="side"
                            onChange={this.onFormValueChange}
                            error={dateOfTesting.error}
                        />
                        <InputComponent
                            type="text"
                            name="fileNo"
                            value={fileNo.value}
                            label="File No"
                            labelPos="side"
                            onChange={this.onFormValueChange}
                            error={fileNo.error}
                        />
                        <InputComponent
                            type="date"
                            name="dateOfReceipt"
                            value={dateOfReceipt.value}
                            label="Date of Receipt"
                            labelPos="side"
                            onChange={this.onFormValueChange}
                            error={dateOfReceipt.error}
                        />
                        <InputComponent
                            type="text"
                            name="cost"
                            value={cost.value}
                            label="Cost"
                            labelPos="side"
                            onChange={this.onFormValueChange}
                            error={cost.error}
                        />
                        <InputComponent
                            type="textbox"
                            name="shortTechnicalDescription"
                            value={shortTechnicalDescription.value}
                            label="Short Technical Description"
                            labelPos="side"
                            onChange={this.onFormValueChange}
                            error={shortTechnicalDescription.error}
                        />
                        <InputComponent
                            type="text"
                            name="modelOrType"
                            value={modelOrType.value}
                            label="Model/Type"
                            labelPos="side"
                            onChange={this.onFormValueChange}
                            error={modelOrType.error}
                        />
                        <InputComponent
                            type="text"
                            name="serialNo"
                            value={serialNo.value}
                            label="Serial No."
                            labelPos="side"
                            onChange={this.onFormValueChange}
                            error={serialNo.error}
                        />
                        <InputComponent
                            type="text"
                            name="manufacturer"
                            value={manufacturer.value}
                            label="Manufacturer."
                            labelPos="side"
                            onChange={this.onFormValueChange}
                            error={manufacturer.error}
                        />
                        <ButtonComponent submit={true} onClick={this.onSubmit}>Address</ButtonComponent>
                        <InputComponent
                            type="text"
                            name="agents"
                            value={agents.value}
                            label="Agents."
                            labelPos="side"
                            onChange={this.onFormValueChange}
                            error={agents.error}
                        />
                        <InputComponent
                            type="select"
                            selectData={classificationData}
                            name="indentors"
                            value={indentors.value}
                            searchVal={indentors.searchVal}
                            label="Indentors"
                            labelPos="side"
                            onChange={this.onFormValueChange}
                            onSelectSearch={this.onSelectSearch}
                            onSelect={this.onSelect}
                            error={indentors.error}
                        />
                        <InputComponent
                            type="text"
                            name="orderNo"
                            value={orderNo.value}
                            label="Order No."
                            labelPos="side"
                            onChange={this.onFormValueChange}
                            error={orderNo.error}
                        />
                        <InputComponent
                            type="date"
                            name="orderDate"
                            value={orderDate.value}
                            label="Order Date."
                            labelPos="side"
                            onChange={this.onFormValueChange}
                            error={orderDate.error}
                        />
                        <InputComponent
                            type="text"
                            name="invoiceNo"
                            value={invoiceNo.value}
                            label="Invoice No."
                            labelPos="side"
                            onChange={this.onFormValueChange}
                            error={invoiceNo.error}
                        />
                        <InputComponent
                            type="date"
                            name="invoiceDate"
                            value={invoiceDate.value}
                            label="Invoice Date."
                            labelPos="side"
                            onChange={this.onFormValueChange}
                            error={invoiceDate.error}
                        />
                    </div>
                </form>
            </div>
        )
    }
}

export default InstrumentHistoryNewPage;
