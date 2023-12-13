import React from "react";
import {AnnualDataProps} from "./AppContainer";

export interface ResultsContainerProps {
    data: Array<AnnualDataProps>;
}


export const ResultsContainer = ({data}: ResultsContainerProps) => {
    console.log(data);
    return (
        <>
            <table id="result">
                <thead>
                <tr>
                    <th>Year</th>
                    <th>Investment Value</th>
                    <th>Interest (Year)</th>
                    <th>Total Interest</th>
                    <th>Invested Capital</th>
                </tr>
                </thead>
                <tbody>
                {data.map((row: AnnualDataProps, index: number) =>
                    <tr>
                        <td>{row.year}</td>
                        <td>{row.valueEndOfYear}</td>
                        <td>{row.interestYearly}</td>
                        <td>{row.totalInterest}</td>
                        <td>{row.investedCapital}</td>
                    </tr>
                )}
                </tbody>
            </table>
        </>
    );
};