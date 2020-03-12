function JSON_TO_HTML_TABLE(inputArr) {
    let parsedInput = inputArr.map((x) => JSON.parse(x, escapeHtml(x)));

    let createTable = content => `<table>${content}\n</table>`;
    let createRow = content => `\n\t<tr>${content}\n\t</tr>`;
    let createTableData = content => `\n\t\t<td>${content}</td>`;

    let result = parsedInput.reduce((accRow, row) => {

        let tdForPerson = Object.values(row).reduce((tdAcc, td) => {
            return tdAcc + createTableData(td);
        }, '')

        return accRow + createRow(tdForPerson);
    }, '');

    console.log(createTable(result));

    function escapeHtml(unsafe) {
        return unsafe
            .replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;")
            .replace(/"/g, "&quot;")
            .replace(/'/g, "&#039;")
    }
}

JSON_TO_HTML_TABLE(['{"name":"Pesho","position":"Promenliva","salary":100000}',
    '{"name":"Teo","position":"Lecturer","salary":1000}',
    '{"name":"Georgi","position":"Lecturer","salary":1000}']);

/* <table>
    <tr>
        <td>Pesho</td>
        <td>Promenliva</td>
        <td>100000</td>
    </tr>
    <tr>
        <td>Teo</td>
        <td>Lecturer</td>
        <td>1000</td>
    </tr>
    <tr>
        <td>Georgi</td>
        <td>Lecturer</td>
        <td>1000</td>
    </tr>
</table> */
