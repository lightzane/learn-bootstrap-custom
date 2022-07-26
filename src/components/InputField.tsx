import React from "react";

interface Props {
    label: string;
    type?: string;
}

const InputField: React.FC<Props> = ({ label, type }) => {

    let field: JSX.Element;

    switch (type) {
        case 'textarea':
            field = <textarea className="form-control" id={label.toLowerCase()} rows={3} />;
            break;
        default:
            field = <input type="text" className="form-control" id={label.toLowerCase()} />;
    }

    return (
        <div className="mb-3">
            <label htmlFor={label.toLowerCase()} className="form-label">{label}</label>
            {field}
        </div>
    );
};

export default InputField;