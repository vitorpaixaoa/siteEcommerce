import React, { Component } from 'react';
import {Input, Form} from './styles'

export default class FormSimples extends Component {
    render(){
        const { value, name, placeholder, type, label, onChange, erro, borderRadius } = this.props;
        console.log(borderRadius)
        return (
            <Form>
                { label && <label>{label}</label> }
                <Input borderRadius={borderRadius} type={type} value={value} name={name} placeholder={placeholder} onChange={onChange} />
                {
                    erro && (
                        <small className="erro">{erro}</small>
                    )
                }
            </Form>
        )
    }
}