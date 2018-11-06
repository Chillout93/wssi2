import * as React from 'react';
import ReactTable from "react-table";
import "react-table/react-table.css";

export interface IWeek {
    year: number,
    week: number,
    beginning: string,
    forecastSales: number,
    forwardCover: number,
    onOrder: number,
    shrinkage: number,

    openingStock: number,
    purchasesRequired: number,
    openToBuy: number,
    closingStock: number

    season?: string,
    department?: string,
    category?: string,
    region?: string
}

export class Grid extends React.Component<any, any> {
    private renderEditable = (cellInfo: any, contentEditable: boolean, tableEditable: boolean) => {
        return (
            <div style={{ width: 100, color: cellInfo.value > 0 ? "green" : "red" }}
                contentEditable={contentEditable}
                suppressContentEditableWarning={true}
                onKeyPress={(e) => { if (e.which === 13) { e.preventDefault(); } }}
                onBlur={(e) => { console.log(cellInfo); this.props.onRowUpdated(cellInfo.row.year, cellInfo.row.week, cellInfo.column.id, e.target.innerHTML); }}>{cellInfo.column.dataType === "number" ? "£" + this.toCurrency(cellInfo.value) : cellInfo.value}</div>
        )
    }
    private toCurrency(numberString: string) {
        let number = parseFloat(numberString);
        return number.toLocaleString('GBP');
    }

    public state = {
        columns: [
            {
                accessor: "year",
                Header: "Year"

            },
            {
                accessor: "week",
                Header: "Week"
            },
            {
                accessor: "beginning",
                Header: "Beginning"
            },
            {
                accessor: "openingStock",
                Header: "Opening Stock",
                dataType: "number",
                Cell: (e: any) => this.renderEditable(e, false, this.props.tableEditable)
            },
            {
                accessor: "forecastSales",
                Header: "Forecast Sales",
                editable: true,
                dataType: "number",
                Cell: (e: any) => this.renderEditable(e, true, this.props.tableEditable)
            },
            {
                accessor: "forwardCover",
                Header: "Forward Cover",
                editable: true,
                dataType: "string",
                Cell: (e: any) => this.renderEditable(e, true, this.props.tableEditable)
            },
            {
                accessor: "purchasesRequired",
                Header: "Purchases Required",
                dataType: "number",
                Cell: (e: any) => this.renderEditable(e, false, this.props.tableEditable)
            },
            {
                accessor: "onOrder",
                Header: "Already On Order",
                editable: true,
                dataType: "number",
                Cell: (e: any) => this.renderEditable(e, true, this.props.tableEditable),
            },
            {
                accessor: "shrinkage",
                Header: "Shrinkage",
                editable: true,
                dataType: "number",
                Cell: (e: any) => this.renderEditable(e, true, this.props.tableEditable)
            },
            {
                accessor: "openToBuy",
                Header: "Open To Buy",
                dataType: "number",
                Cell: (e: any) => this.renderEditable(e, false, this.props.tableEditable)
            },
            {
                accessor: "closingStock",
                Header: "Closing Stock",
                dataType: "number",
                Cell: (e: any) => this.renderEditable(e, false, this.props.tableEditable)
            }
        ]
    }

    public render() {
        return (
            <ReactTable getTdProps={(state: any, rowInfo: any, column: any) => this.setTdStyle(state, rowInfo, column)} sortable={false} pageSize={this.props.weeks.length} showPaginationBottom={false} data={this.props.weeks} columns={this.state.columns} />
        )
    }

    private setTdStyle(state: any, rowInfo: any, column: any) {
        return {
            style: {
                background: column.editable && this.props.tableEditable ? "white" : "#eaeaea"
            }
        };
    }

}