import React from 'react';

const defaultValue = {
    firstname: "",
    lastname:"",
    email:"",
    adresse:"",
    postalcode:"",
    city:""
}

export const contextUser = React.createContext(defaultValue);