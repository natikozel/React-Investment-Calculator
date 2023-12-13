import React, {ChangeEventHandler} from "react";
import {InputsProps} from "./AppContainer";

export interface InputsContainerProps {
    inputs: InputsProps,
    onChange: ChangeEventHandler<HTMLInputElement>
}

export const InputsContainer = ({inputs, onChange}: InputsContainerProps): React.JSX.Element => {


    return (
        <section id="user-input">
            <div className="input-group">
                <p>
                    <label htmlFor="initial-investment">Initial Investment</label>
                    <input value={inputs.initialInvestment}
                           onChange={onChange}
                           required
                           min="0"
                           type="number"
                           id="initial-investment"
                           name="initialInvestment">

                    </input>
                </p>
                <p>
                    <label htmlFor="annual-investment">Annual Investment</label>
                    <input required
                           min="0"
                           value={inputs.annualInvestment}
                           onChange={onChange}
                           type="number"
                           id="annual-investment"
                           name="annualInvestment">
                    </input>
                </p>
            </div>
            <div className="input-group">
                <p>
                    <label htmlFor="expected-return">Expected Return</label>
                    <input required
                           min="0"
                           value={inputs.expectedReturn}
                           onChange={onChange}
                           type="number"
                           id="expected-return"
                           name="expectedReturn">
                    </input>
                </p>

                <p>
                    <label htmlFor="duration">Duration</label>
                    <input required
                           min="0"
                           value={inputs.duration}
                           onChange={onChange}
                           type="number"
                           id="duration"
                           name="duration">

                    </input>
                </p>
            </div>
        </section>
    );
};