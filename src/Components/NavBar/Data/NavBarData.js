import React from "react"

export const navLinks = [
    {
        name: 'inicio',
        dropdown: false,
        button: false,
        ancora: '#home'
    },
    {
        name: 'sobre',
        dropdown: false,
        button: false,
        ancora: '#about'
    },
    {
        name: 'avaliação',
        dropdown: false,
        button: false,
        ancora: '#report'
    },
    {
        name: 'paineis',
        dropdown: true,
        button: false, 
        linkList: [
            {
                name: 'representante',
                link: '#'
            },
            {
                name: 'contador',
                link: '#'
            },
        ]
    },
    {
        name: 'fazer parte!',
        ancora: '#takepart',
        button: true,   
    },
]