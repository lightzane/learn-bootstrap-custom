import React from "react";

interface Props {
    label: string;
    options?: string[];
}

export const DropdownField: React.FC<Props> = ({ label, options }) => {
    return (
        <>
            <label htmlFor={label.toLowerCase()} className="form-label">{label}</label>
            <select id={label.toLowerCase()} className="form-select" defaultValue='Select...'>
                <option>Select...</option>
                {
                    options?.map((o, i) => (
                        <option key={i}>{o}</option>
                    ))
                }
            </select>
        </>
    );
};