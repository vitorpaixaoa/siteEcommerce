import React, {Component} from "react";
import {Input, Form, ErrorMessage} from "./styles";

export default class FormSimples extends Component {
    render() {
        const {
            width,
            maxWidth,
            value,
            name,
            placeholder,
            type,
            label,
            onChange,
            erro,
            borderRadius,
        } = this.props;
        return (
            <Form width={width} maxWidth={maxWidth} >
                {label && <label>{label}</label>}
                <Input
                    borderRadius={borderRadius}
                    type={type}
                    value={value}
                    name={name}
                    placeholder={placeholder}
                    onChange={onChange}
                />
                {erro && <ErrorMessage>{erro}</ErrorMessage>}
            </Form>
        );
    }
}
