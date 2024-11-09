import React from 'react';

function TableHeader({ children }) {
    return <thead className='p-3 text-left'>{children}</thead>;
}

function TableBody({ children }) {
    return <tbody>{children}</tbody>;
}

function TableRow({ children }) {
    return <tr className='border-bottom'>{children}</tr>;
}

function TableData({ children, header }) {
    if (header) return <th className='text-left p-3'>{children}</th>;
    return <td className='text-left p-3'>{children}</td>;
}

Table.Header = TableHeader;
Table.Body = TableBody;
Table.Row = TableRow;
Table.Data = TableData;

export default function Table({ children }) {
    return (
        <table className="table border-collapse rounded w100">
            {children}
        </table>
    );
}


