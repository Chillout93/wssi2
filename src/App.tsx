import * as React from 'react';
import "./App.css";
import { Filter } from './Filter';
import { Grid, IWeek } from './Grid';
import { GetWeeks } from './DataSource';
import * as _ from "lodash";
import { PieChart2 } from './PieChart';
import { Chart } from './Chart';

export default class App extends React.Component {
  public state = {
    categories: ["Kids", "Mens", "Womens"],
    regions: ["UK/Europe", "NorthAmerica", "Poland", "NewZealand"],
    departments: ["Jackets", "Trousers", "Beachwear", "Fleeces"],
    seasons: ["SS", "AW", "CON", "OLD"],
    currentCategory: "",
    currentRegion: "",
    currentDepartment: "",
    currentSeason: "",
    weeks: [] as IWeek[],
  }

  componentDidMount() {
    const rows = GetWeeks();
    this.setState({ weeks: rows });
  }

  public render() {
    const newWeeks = [...this.state.weeks] as IWeek[];
    const filteredWeeks = newWeeks.filter(x => (!this.state.currentCategory || x.category === this.state.currentCategory) && (!this.state.currentRegion || x.region === this.state.currentRegion) && (!this.state.currentDepartment || x.department === this.state.currentDepartment) && (!this.state.currentSeason || x.season === this.state.currentSeason));

    const groupedWeeks = _.map(_.groupBy(filteredWeeks,
      x => `${x.year}-${x.week}-${this.state.currentSeason && x.season}--${this.state.currentCategory && x.category}-${this.state.currentRegion && x.region}-${this.state.currentDepartment && x.department}`
    ), (objs, key) => ({
      'groupKey': key,
      'year': objs[0].year,
      'week': objs[0].week,
      'beginning': objs[0].beginning,
      'forecastSales': _.sumBy(objs, 'forecastSales'),
      'forwardCover': _.meanBy(objs, 'forwardCover'),
      'onOrder': _.sumBy(objs, 'onOrder'),
      'shrinkage': _.sumBy(objs, 'shrinkage')
    }));

    const calculatedWeeks = this.handleGridRowsUpdated(groupedWeeks);

    return (
      <main className="p-3">
        <div className="row mb-3 pt-3 ml-0 mr-0" style={{ boxShadow: "1px 1px 5px grey", backgroundColor: "white" }} >
          <div className="col-sm-6">
            <Chart />
          </div>
          <div className="col-sm-6">
            <div className="row">
              <div className="col-sm-3">
                <h4 className="text-center">Season</h4>
                <PieChart2 data={_.map(_.groupBy(filteredWeeks, x => x.season), (objs, key) => ({ 'name': key, 'value': _.sumBy(objs, 'forecastSales') }))} />
              </div>
              <div className="col-sm-3">
                <h4 className="text-center">Department</h4>
                <PieChart2 data={_.map(_.groupBy(filteredWeeks, x => x.department), (objs, key) => ({ 'name': key, 'value': _.sumBy(objs, 'forecastSales') }))} />
              </div>
              <div className="col-sm-3">
                <h4 className="text-center">Region</h4>
                <PieChart2 data={_.map(_.groupBy(filteredWeeks, x => x.region), (objs, key) => ({ 'name': key, 'value': _.sumBy(objs, 'forecastSales') }))} />
              </div>
              <div className="col-sm-3">
                <h4 className="text-center">Category</h4>
                <PieChart2 data={_.map(_.groupBy(filteredWeeks, x => x.category), (objs, key) => ({ 'name': key, 'value': _.sumBy(objs, 'forecastSales') }))} />
              </div>
            </div>
          </div>
        </div>
        <div className="row pt-3 ml-0 mr-0" style={{ boxShadow: "1px 1px 5px grey", backgroundColor: "white" }} >
          <div className="col-sm-3">
            <Filter target="currentCategory" name="Category" filters={this.state.categories} onFilterClicked={this.handleFilterClicked} />
          </div>
          <div className="col-sm-3">
            <Filter target="currentRegion" name="Region" filters={this.state.regions} onFilterClicked={this.handleFilterClicked} />
          </div>
          <div className="col-sm-3">
            <Filter target="currentDepartment" name="Department" filters={this.state.departments} onFilterClicked={this.handleFilterClicked} />
          </div>
          <div className="col-sm-3">
            <Filter target="currentSeason" name="Season" filters={this.state.seasons} onFilterClicked={this.handleFilterClicked} />
          </div>
        </div>
        <div className="row p-3 ml-0 mr-0 mt-3" style={{ boxShadow: "1px 1px 5px grey", backgroundColor: "white" }} >
          <div className="col">
            <Grid weeks={calculatedWeeks} onRowUpdated={this.updateCell} tableEditable={this.state.currentCategory && this.state.currentSeason && this.state.currentDepartment && this.state.currentRegion} />
          </div>
        </div>
      </main>
    );
  }

  private handleFilterClicked = (target: keyof IWeek, value: string) => {
    this.setState({ [target]: value });
  }

  private updateCell = (year: number, week: number, column: string, value: any) => {
    const data = [...this.state.weeks];
    const row = data.find(x => x.year === year && x.week === week && x.season === this.state.currentSeason && x.category === this.state.currentCategory && x.region === this.state.currentRegion && x.department === this.state.currentDepartment);
    if (row) row[column] = parseFloat(value.replace(",", "").replace("£", ""));
    const updatedData = data.map(a => { return a });
    this.setState({ weeks: updatedData });
  }

  private handleGridRowsUpdated = (weeks: any) => {
    const rows = [...weeks];

    for (let i = 0; i < rows.length; i++) {
      rows[i].openingStock = (i === 0) ? 200 : Number(rows[i - 1].closingStock);
      rows[i].purchasesRequired = (Number(rows[i].forecastSales) * Number(rows[i].forwardCover)) - (Number(rows[i].openingStock)) + Number(rows[i].forecastSales);
      rows[i].openToBuy = Number(rows[i].purchasesRequired) - Number(rows[i].onOrder);
      rows[i].closingStock = Number(rows[i].openingStock) - Number(rows[i].forecastSales) + Number(rows[i].onOrder) + Number(rows[i].openToBuy)
    }

    return rows;
  };
}


