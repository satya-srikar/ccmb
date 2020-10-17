import React from "react";
import ButtonComponent from "../../../components/button/button.component";
import InputComponent from "../../../components/input/input.component";
import { classificationData } from "./instrument-history-new.service";

import "./instrument-history-new.styles.scss";

class InstrumentHistoryNewPage extends React.Component {
  constructor() {
    super();
    this.state = {
      classification: { searchVal: "", value: "", error: false },
      testReportNo: { value: "", error: false },
      dateOfTesting: {
        value: `${new Date().getFullYear()}-${
          new Date().getMonth() < 9
            ? "0" + (new Date().getMonth() + 1)
            : new Date().getMonth() + 1
        }-${new Date().getDate()}`,
        error: false,
      },
      fileNo: { value: "", error: false },
      dateOfReceipt: { value: "", error: false },
      cost: { value: "", error: false },
      shortTechnicalDescription: { value: "", error: false },
      modelOrType: { value: "", error: false },
      serialNo: { value: "", error: false },
      manufacturer: { value: "", error: false },
      agents: { value: "", error: false },
      indentors: { searchVal: "", value: "", error: false },
      orderNo: { value: "", error: false },
      orderDate: { value: "", error: false },
      invoiceNo: { value: "", error: false },
      invoiceDate: { value: "", error: false },
      listOfItems: [
        {
          id: 1,
          sNo: "",
          partNo: "",
          description: "",
          qty: "",
          unitPrice: "",
          cost: "",
        },
      ],
      currency: { searchVal: "", value: "", error: false },
      exchangeRate: { value: "", error: false },
      totalCost: { value: "", error: false },
    };
  }

  onSubmit = (event) => {
    event.preventDefault();
    const { classification, testReportNo, dateOfTesting, fileNo } = this.state;

    const classificationError = classification.value === "";
    if (classificationError)
      this.setState({
        classification: { searchVal: "", value: "", error: true },
      });

    const testReportNoError = testReportNo.value === "";
    if (testReportNoError)
      this.setState({ testReportNo: { value: "", error: true } });

    const dateOfTestingError = dateOfTesting.value === "";
    if (dateOfTestingError)
      this.setState({ dateOfTesting: { value: "", error: true } });

    const fileNoError = fileNo.value === "";
    if (fileNoError) this.setState({ fileNo: { value: "", error: true } });

    const formHasError =
      classificationError &&
      testReportNoError &&
      dateOfTestingError &&
      fileNoError;
    if (!formHasError) console.log(this.state);
  };

  onSelectSearch = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: { searchVal: value, value: this.state[name].value, error: false },
    });
  };

  onSelect = (name, value) => {
    this.setState({ [name]: { searchVal: value, value: value, error: false } });
  };

  onFormValueChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: { value: value, error: false } });
  };

  onAddColumns = (tableName) => {
    if (tableName === "listOfItems") {
      let { listOfItems } = this.state;
      const id = listOfItems[listOfItems.length - 1].id;
      listOfItems.push({
        id: id + 1,
        sNo: "",
        partNo: "",
        description: "",
        qty: "",
        unitPrice: "",
        cost: "",
      });
      this.setState({ listOfItems });
    }
  };

  onTableChange = (tableName, id, event) => {
    const { name, value } = event.target;
    // console.log(tableName, id, name, value);
    let tableData = this.state[tableName];
    if (tableData) {
      tableData = tableData.map((item) => {
        if (item.id === id) {
          item[name] = value;
        }
        return item;
      });
    }
    this.setState({ [tableName]: tableData });
  };

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
      listOfItems,
      currency,
      exchangeRate,
      totalCost,
    } = this.state;

    return (
      <div className="instrument-history-new">
        <form onSubmit={this.onSubmit}>
          <div className="container">
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
            <ButtonComponent submit={true} onClick={this.onSubmit}>
              Address
            </ButtonComponent>
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
          <div className="container">
            <div className="table-container">
              <div className={`label`}>
                <label>
                  List of Items Ordered (Exactly as per our Order) :
                </label>
              </div>
              <table className="table">
                <thead>
                  <tr>
                    <th>S.No.</th>
                    <th>Part No.</th>
                    <th>Description</th>
                    <th>Qty</th>
                    <th>Unit Price</th>
                    <th>Cost</th>
                  </tr>
                </thead>
                <tbody>
                  {listOfItems.map((item, index) => {
                    return (
                      <tr key={item.id}>
                        <td>
                          <input
                            value={item.sNo}
                            name="sNo"
                            onChange={(event) =>
                              this.onTableChange("listOfItems", item.id, event)
                            }
                            style={{ width: "5rem", textAlign: "center" }}
                          />
                        </td>
                        <td>
                          <input
                            value={item.partNo}
                            name="partNo"
                            onChange={(event) =>
                              this.onTableChange("listOfItems", item.id, event)
                            }
                            style={{ width: "5rem", textAlign: "center" }}
                          />
                        </td>
                        <td>
                          <input
                            value={item.description}
                            name="description"
                            onChange={(event) =>
                              this.onTableChange("listOfItems", item.id, event)
                            }
                            style={{ width: "60rem", padding: "0 2rem" }}
                          />
                        </td>
                        <td>
                          <input
                            value={item.qty}
                            name="qty"
                            onChange={(event) =>
                              this.onTableChange("listOfItems", item.id, event)
                            }
                            style={{ width: "5rem", textAlign: "center" }}
                          />
                        </td>
                        <td>
                          <input
                            value={item.unitPrice}
                            name="unitPrice"
                            onChange={(event) =>
                              this.onTableChange("listOfItems", item.id, event)
                            }
                            style={{ width: "5rem", textAlign: "center" }}
                          />
                        </td>
                        <td>
                          <input
                            value={item.cost}
                            name="cost"
                            onChange={(event) =>
                              this.onTableChange("listOfItems", item.id, event)
                            }
                            style={{ width: "5rem", textAlign: "center" }}
                          />
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
              <ButtonComponent onClick={() => this.onAddColumns("listOfItems")}>
                Add row
              </ButtonComponent>
            </div>
          </div>
          <div className="container">
            <InputComponent
              type="select"
              selectData={classificationData}
              name="currency"
              value={currency.value}
              searchVal={currency.searchVal}
              label="Currency"
              labelPos="side"
              onChange={this.onFormValueChange}
              onSelectSearch={this.onSelectSearch}
              onSelect={this.onSelect}
              error={currency.error}
            />
            <InputComponent
              type="text"
              name="exchangeRate"
              value={exchangeRate.value}
              label="Exchange Rate"
              labelPos="side"
              onChange={this.onFormValueChange}
              error={exchangeRate.error}
            />
            <InputComponent
              type="text"
              name="totalCost"
              value={totalCost.value}
              label="Total Cost"
              labelPos="side"
              onChange={this.onFormValueChange}
              error={totalCost.error}
            />
          </div>
          <div className="container">
            <div className="table-container">
              <div className={`label`}>
                <label>
                  List of Items Ordered (Exactly as per our Order) :
                </label>
              </div>
              <table className="table">
                <thead>
                  <tr>
                    <th>S.No.</th>
                    <th>Part No.</th>
                    <th>Description</th>
                    <th>Qty</th>
                    <th>Unit Price</th>
                    <th>Cost</th>
                  </tr>
                </thead>
                <tbody>
                  {listOfItems.map((item, index) => {
                    return (
                      <tr key={item.id}>
                        <td>
                          <input
                            value={item.sNo}
                            name="sNo"
                            onChange={(event) =>
                              this.onTableChange("listOfItems", item.id, event)
                            }
                            style={{ width: "5rem", textAlign: "center" }}
                          />
                        </td>
                        <td>
                          <input
                            value={item.partNo}
                            name="partNo"
                            onChange={(event) =>
                              this.onTableChange("listOfItems", item.id, event)
                            }
                            style={{ width: "5rem", textAlign: "center" }}
                          />
                        </td>
                        <td>
                          <input
                            value={item.description}
                            name="description"
                            onChange={(event) =>
                              this.onTableChange("listOfItems", item.id, event)
                            }
                            style={{ width: "60rem", padding: "0 2rem" }}
                          />
                        </td>
                        <td>
                          <input
                            value={item.qty}
                            name="qty"
                            onChange={(event) =>
                              this.onTableChange("listOfItems", item.id, event)
                            }
                            style={{ width: "5rem", textAlign: "center" }}
                          />
                        </td>
                        <td>
                          <input
                            value={item.unitPrice}
                            name="unitPrice"
                            onChange={(event) =>
                              this.onTableChange("listOfItems", item.id, event)
                            }
                            style={{ width: "5rem", textAlign: "center" }}
                          />
                        </td>
                        <td>
                          <input
                            value={item.cost}
                            name="cost"
                            onChange={(event) =>
                              this.onTableChange("listOfItems", item.id, event)
                            }
                            style={{ width: "5rem", textAlign: "center" }}
                          />
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
              <ButtonComponent onClick={() => this.onAddColumns("listOfItems")}>
                Add row
              </ButtonComponent>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default InstrumentHistoryNewPage;
