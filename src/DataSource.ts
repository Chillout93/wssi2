import * as _ from "lodash";
import { IWeek } from './Grid';

export function GetWeeks() {
    const weeksToSend: any[] = [];

    for (let category of Categories) {
        for (let region of Regions) {
            for (let department of Departments) {
                for (let season of Seasons) {
                    for (let week of Weeks) {
                        let newWeek = { ...week };
                        newWeek.category = category;
                        newWeek.region = region;
                        newWeek.department = department;
                        newWeek.season = season;

                        weeksToSend.push(newWeek);
                    }
                }
            }
        }
    }

    return weeksToSend;
}

const Categories = ["Kids", "Mens", "Womens"];
const Regions = ["UK/Europe", "NorthAmerica", "Poland", "NewZealand"];
const Departments = ["Jackets", "Trousers", "Beachwear", "Fleeces"];
const Seasons = ["SS", "AW", "CON", "OLD"];

const Weeks = [
    {
        year: 2018,
        week: 1,
        beginning: "05/02/2018",
        forecastSales: 200,
        forwardCover: 3,
        onOrder: 100,
        shrinkage: 0,
        openingStock: 0,
        purchasesRequired: 0,
        openToBuy: 0,
        closingStock: 0
    },
    {
        year: 2018,
        week: 2,
        beginning: "12/02/2018",
        forecastSales: 200,
        forwardCover: 3,
        onOrder: 100,
        shrinkage: 0,
        openingStock: 0,
        purchasesRequired: 0,
        openToBuy: 0,
        closingStock: 0
    },
    {
        year: 2018,
        week: 3,
        beginning: "19/02/2018",
        forecastSales: 200,
        forwardCover: 3,
        onOrder: 100,
        shrinkage: 0,
        openingStock: 0,
        purchasesRequired: 0,
        openToBuy: 0,
        closingStock: 0
    },
    {
        year: 2018,
        week: 4,
        beginning: "26/02/2018",
        forecastSales: 200,
        forwardCover: 3,
        onOrder: 100,
        shrinkage: 0,
        openingStock: 0,
        purchasesRequired: 0,
        openToBuy: 0,
        closingStock: 0
    },
    {
        year: 2018,
        week: 5,
        beginning: "05/03/2018",
        forecastSales: 200,
        forwardCover: 3,
        onOrder: 100,
        shrinkage: 0,
        openingStock: 0,
        purchasesRequired: 0,
        openToBuy: 0,
        closingStock: 0
    },
    {
        year: 2018,
        week: 6,
        beginning: "05/03/2018",
        forecastSales: 200,
        forwardCover: 3,
        onOrder: 100,
        shrinkage: 0,
        openingStock: 0,
        purchasesRequired: 0,
        openToBuy: 0,
        closingStock: 0
    },
    {
        year: 2018,
        week: 7,
        beginning: "05/03/2018",
        forecastSales: 200,
        forwardCover: 3,
        onOrder: 100,
        shrinkage: 0,
        openingStock: 0,
        purchasesRequired: 0,
        openToBuy: 0,
        closingStock: 0
    },
    {
        year: 2018,
        week: 8,
        beginning: "05/03/2018",
        forecastSales: 200,
        forwardCover: 3,
        onOrder: 100,
        shrinkage: 0,
        openingStock: 0,
        purchasesRequired: 0,
        openToBuy: 0,
        closingStock: 0
    },
    {
        year: 2018,
        week: 9,
        beginning: "05/03/2018",
        forecastSales: 200,
        forwardCover: 3,
        onOrder: 100,
        shrinkage: 0,
        openingStock: 0,
        purchasesRequired: 0,
        openToBuy: 0,
        closingStock: 0
    },
    {
        year: 2018,
        week: 10,
        beginning: "05/03/2018",
        forecastSales: 200,
        forwardCover: 3,
        onOrder: 100,
        shrinkage: 0,
        openingStock: 0,
        purchasesRequired: 0,
        openToBuy: 0,
        closingStock: 0
    },
    {
        year: 2018,
        week: 11,
        beginning: "05/03/2018",
        forecastSales: 200,
        forwardCover: 3,
        onOrder: 100,
        shrinkage: 0,
        openingStock: 0,
        purchasesRequired: 0,
        openToBuy: 0,
        closingStock: 0
    },
    {
        year: 2018,
        week: 12,
        beginning: "05/03/2018",
        forecastSales: 200,
        forwardCover: 3,
        onOrder: 100,
        shrinkage: 0,
        openingStock: 0,
        purchasesRequired: 0,
        openToBuy: 0,
        closingStock: 0
    }
] as IWeek[];

