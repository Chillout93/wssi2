import * as React from 'react';
import { CartesianGrid, XAxis, YAxis, Tooltip, LineChart, Line } from 'recharts';

export const Chart: React.SFC = (props) => {
    const data = [
        { name: '2018-01', forecastSales: '200', actualSales: '200', actualLastYear: '100', financePlan: '200', reforecastSales: '200' },
        { name: '2018-02', forecastSales: '200', actualSales: '200', actualLastYear: '100', financePlan: '200', reforecastSales: '200' },
        { name: '2018-03', forecastSales: '300', actualSales: '400', actualLastYear: '300', financePlan: '200', reforecastSales: '300' },
        { name: '2018-04', forecastSales: '300', actualSales: '400', actualLastYear: '300', financePlan: '200', reforecastSales: '300' },
        { name: '2018-05', forecastSales: '400', actualSales: '400', actualLastYear: '300', financePlan: '200', reforecastSales: '400' },
        { name: '2018-06', forecastSales: '400', actualSales: '400', actualLastYear: '300', financePlan: '200', reforecastSales: '400' },
        { name: '2018-07', forecastSales: '500', actualSales: '500', actualLastYear: '400', financePlan: '200', reforecastSales: '500' },
        { name: '2018-08', forecastSales: '500', actualSales: '600', actualLastYear: '500', financePlan: '500', reforecastSales: '500' },
        { name: '2018-09', forecastSales: '400', actualSales: '400', actualLastYear: '300', financePlan: '500', reforecastSales: '400' },
        { name: '2018-10', forecastSales: '400', actualSales: '400', actualLastYear: '300', financePlan: '500', reforecastSales: '400' },
        { name: '2018-11', forecastSales: '500', actualSales: '500', actualLastYear: '400', financePlan: '500', reforecastSales: '500' },
        { name: '2018-12', forecastSales: '500', actualSales: '500', actualLastYear: '400', financePlan: '500', reforecastSales: '500' },
        { name: '2018-13', forecastSales: '400', actualSales: '300', actualLastYear: '200', financePlan: '600', reforecastSales: '400' },
        { name: '2018-14', forecastSales: '400', actualSales: '400', actualLastYear: '300', financePlan: '600', reforecastSales: '400' },
        { name: '2018-15', forecastSales: '500', actualSales: '500', actualLastYear: '400', financePlan: '600', reforecastSales: '500' },
        { name: '2018-16', forecastSales: '500', actualSales: '500', actualLastYear: '400', financePlan: '500', reforecastSales: '500' },
        { name: '2018-17', forecastSales: '600', actualSales: '600', actualLastYear: '400', financePlan: '500', reforecastSales: '600' },
        { name: '2018-18', forecastSales: '600', actualSales: '200', actualLastYear: '300', financePlan: '500', reforecastSales: '600' },
        { name: '2018-19', forecastSales: '300', actualSales: '200', actualLastYear: '300', financePlan: '300', reforecastSales: '300' },
        { name: '2018-20', forecastSales: '300', actualSales: '200', actualLastYear: '300', financePlan: '300', reforecastSales: '300' },
        { name: '2018-21', forecastSales: '300', actualSales: '300', actualLastYear: '100', financePlan: '300', reforecastSales: '300' },
        { name: '2018-22', forecastSales: '300', actualSales: '400', actualLastYear: '300', financePlan: '300', reforecastSales: '300' },
        { name: '2018-23', forecastSales: '200', actualSales: '400', actualLastYear: '300', financePlan: '200', reforecastSales: '200' },
        { name: '2018-24', forecastSales: '200', actualSales: '200', actualLastYear: '150', financePlan: '200', reforecastSales: '200' },
        { name: '2018-25', forecastSales: '200', actualSales: '200', actualLastYear: '150', financePlan: '200', reforecastSales: '200' },
        { name: '2018-26', forecastSales: '300', actualSales: '300', actualLastYear: '300', financePlan: '300', reforecastSales: '300' },
        { name: '2018-27', forecastSales: '300', actualSales: '', actualLastYear: '300', financePlan: '300', reforecastSales: '300' },
        { name: '2018-28', forecastSales: '500', actualSales: '', actualLastYear: '300', financePlan: '500', reforecastSales: '500' },
        { name: '2018-29', forecastSales: '500', actualSales: '', actualLastYear: '300', financePlan: '500', reforecastSales: '500' },
        { name: '2018-30', forecastSales: '400', actualSales: '', actualLastYear: '300', financePlan: '400', reforecastSales: '400' },
        { name: '2018-31', forecastSales: '400', actualSales: '', actualLastYear: '300', financePlan: '400', reforecastSales: '400' },
        { name: '2018-32', forecastSales: '400', actualSales: '', actualLastYear: '300', financePlan: '400', reforecastSales: '400' },
        { name: '2018-33', forecastSales: '300', actualSales: '', actualLastYear: '300', financePlan: '300', reforecastSales: '300' },
        { name: '2018-34', forecastSales: '300', actualSales: '', actualLastYear: '300', financePlan: '300', reforecastSales: '300' },
        { name: '2018-35', forecastSales: '300', actualSales: '', actualLastYear: '300', financePlan: '300', reforecastSales: '300' },
        { name: '2018-36', forecastSales: '200', actualSales: '', actualLastYear: '300', financePlan: '200', reforecastSales: '200' },
        { name: '2018-37', forecastSales: '200', actualSales: '', actualLastYear: '300', financePlan: '200', reforecastSales: '200' },
        { name: '2018-38', forecastSales: '200', actualSales: '', actualLastYear: '300', financePlan: '200', reforecastSales: '200' },
        { name: '2018-39', forecastSales: '200', actualSales: '', actualLastYear: '300', financePlan: '200', reforecastSales: '200' },
        { name: '2018-40', forecastSales: '200', actualSales: '', actualLastYear: '300', financePlan: '200', reforecastSales: '200' },
        { name: '2018-41', forecastSales: '200', actualSales: '', actualLastYear: '300', financePlan: '200', reforecastSales: '200' },
        { name: '2018-42', forecastSales: '200', actualSales: '', actualLastYear: '300', financePlan: '200', reforecastSales: '200' },
        { name: '2018-43', forecastSales: '200', actualSales: '', actualLastYear: '300', financePlan: '200', reforecastSales: '200' },
        { name: '2018-44', forecastSales: '200', actualSales: '', actualLastYear: '300', financePlan: '200', reforecastSales: '200' },
        { name: '2018-45', forecastSales: '300', actualSales: '', actualLastYear: '300', financePlan: '300', reforecastSales: '300' },
        { name: '2018-46', forecastSales: '400', actualSales: '', actualLastYear: '300', financePlan: '400', reforecastSales: '400' },
        { name: '2018-47', forecastSales: '500', actualSales: '', actualLastYear: '300', financePlan: '500', reforecastSales: '500' },
        { name: '2018-48', forecastSales: '1000', actualSales: '', actualLastYear: '800', financePlan: '2000', reforecastSales: '1200' },
        { name: '2018-49', forecastSales: '1000', actualSales: '', actualLastYear: '800', financePlan: '3000', reforecastSales: '1200' },
        { name: '2018-50', forecastSales: '2000', actualSales: '', actualLastYear: '1500', financePlan: '2000', reforecastSales: '2500' },
        { name: '2018-51', forecastSales: '500', actualSales: '', actualLastYear: '300', financePlan: '500', reforecastSales: '200' },
        { name: '2018-52', forecastSales: '200', actualSales: '', actualLastYear: '300', financePlan: '500', reforecastSales: '200' },
    ]
    return (
        <LineChart width={800} height={200} data={data}>
            {/* <Line type="monotone" dataKey="forecastSales" stroke="#3f77c4" /> */}
            <Line type="monotone" dataKey="actualSales" stroke="#f69537" />
            <Line type="monotone" dataKey="actualLastYear" stroke="#7328b6" />
            <Line type="monotone" dataKey="financePlan" stroke="#53c025" />
            <Line type="monotone" dataKey="reforecastSales" stroke="#3f77c4" strokeDasharray="5 5" />

            <CartesianGrid stroke="#ccc" strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
        </LineChart>
    );
}

