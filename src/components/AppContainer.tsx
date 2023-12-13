import React, {useState} from "react";
import {InputsContainer} from "./InputsContainer";
import {ResultsContainer} from "./ResultsContainer";
import {calculateInvestmentResults, formatter, InvestmentResultsProps} from "../util/investment";

export interface InputsProps {
    initialInvestment: number,
    annualInvestment: number,
    expectedReturn: number,
    duration: number,
}

export interface AnnualDataProps {
    year: number,
    valueEndOfYear: number | string,
    interestYearly: number | string,
    totalInterest: number | string
    investedCapital: number | string
}

const deriveInvestmentResults = (inputs: InputsProps): AnnualDataProps[] => {
    const investmentResults: InvestmentResultsProps[] = calculateInvestmentResults(inputs);
    return investmentResults.map((data: InvestmentResultsProps, index: number): AnnualDataProps => {
        return {
            year: data.year,
            valueEndOfYear: formatter.format(Math.round(data.valueEndOfYear)),
            interestYearly: formatter.format(Math.round(data.interest)),
            totalInterest: formatter.format(Math.round(investmentResults
                .filter((i: InvestmentResultsProps): boolean => i.year <= data.year)
                .map((i: InvestmentResultsProps): number => i.interest)
                .reduce((a: number, b: number) => a + b))),
            investedCapital: formatter.format(Math.round(inputs.initialInvestment + (inputs.annualInvestment * data.year)))
        };
    });
};


export const AppContainer = () => {

    const [inputs, setInputs]
        : [InputsProps, React.Dispatch<React.SetStateAction<InputsProps>>]
        = useState<InputsProps>({
        initialInvestment: "" as unknown as number,
        annualInvestment: "" as unknown as number,
        expectedReturn: "" as unknown as number,
        duration: "" as unknown as number,
        });

    const annualData: Array<AnnualDataProps> = deriveInvestmentResults(inputs);
    const handleInputChange = (e: any): void => {
        console.log(inputs);
        setInputs((prevInputs: InputsProps): InputsProps => {
            return {
                ...prevInputs,
                [e.target.name]: Number(e.target.value),
            };
        });

    };
    return (
        <>
            <InputsContainer inputs={inputs} onChange={handleInputChange}/>
            {annualData.length ? <ResultsContainer data={annualData}/> : <p className="center">
                Please enter a duration greater than zero.
            </p>}
        </>
    );
};