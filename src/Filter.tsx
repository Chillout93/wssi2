import * as React from 'react';

export const Filter: React.SFC<any> = props => {
    const { name, filters, target, onFilterClicked } = props;

    return (
        <div className="input-group mb-3">
            <div className="input-group-prepend">
                <label className="input-group-text">{name}</label>
            </div>
            <select className="custom-select" id="inputGroupSelect01" onChange={(e) => onFilterClicked(target, e.target.value)}>
                <option value="">All</option>
                {filters.map((x: any) => {
                    return <option key={x} value={x} className="dropdown-item">{x}</option>
                })}
            </select>
        </div>
    )
}