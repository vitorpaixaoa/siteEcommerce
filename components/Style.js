import React from 'react';

export default() => (
    <style jsx global>{`

    body {
        margin: 0;
        padding: 0; }
    body, * {
        font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
    }

    .container,
    .container-big {
        width: calc(100% - 20px);
        padding: 0 10px;
        max-width: 1200px;
        margin: 0 auto;
    }
    .container-big{
        max-width: 1440px;
    }

    .wrap { flex-wrap: wrap;}

    .wrap-1 { 
        flex-basis: 100%;
        max-width: 100%
    }
    .wrap-2 { 
        flex-basis: calc(50% - 20px);
        max-width:  calc(50% - 20px);
    }
    .wrap-3 { 
        flex-basis: calc(32% -20px);
        max-width: calc(32% -20px);
    }
    .wrap-4 { 
        flex-basis: calc(25% -20px);
        max-width:  calc(25% -20px);
    }
    .wrap-5 { 
        flex-basis: calc(20% - 20px);
        max-width: calc(20% - 20px);
    }

    .flex { display: flex }
    .flex-1 { flex: 1; }
    .flex-2 { flex: 2; }
    .flex-3 { flex: 3; }

    .vertical {
        flex-direction: column;
    }

    .flex-center {
        justify-content: center;
        align-items: center;}
    .flex-start {
        justify-content: flex-start;
        align-items: center;
    }

    .text-center {
        text-align: center
    }

    @media screen and (max-width: 720px){
        .wrap-mb { flex-wrap: wrap; }
        .wrap-2-mb {
            flex-basis: calc(50% - 20px);
            max-width: calc(50% - 20px);
        }
        .produto.wrap-2-mb {
            flex-basis: calc(50% - 50px);
            max-width: calc(50% - 50px);
        }
        .horizontal-mb { flex-direction: row; }
        
    }
    

    `}</style>
)