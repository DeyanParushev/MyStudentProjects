function jsonToHtmlTable(input) {

    let parsedInput = JSON.parse(input, escapeHtml(input));

    let createTable = content => `<table>\n${content}</table>`;
    let tableHeaderRow = createTableHeader(parsedInput[0]);
    let tableContent = fillInTableContent(parsedInput);
    let content = tableHeaderRow + tableContent;

    let outputTable = createTable(content);

    function fillInTableContent(arr) {
        let bodyContent = '';
        arr.forEach(obj => {
            bodyContent += '    <tr>';
            for (const key in obj) {
                if (obj.hasOwnProperty(key)) {
                    bodyContent += `<td>${obj[key]}</td>`;
                };
            };
            bodyContent += '</tr>\n';
        });

        return bodyContent;
    };

    function createTableHeader(object) {
        let header = '    <tr>';

        for (const property in object) {
            if (object.hasOwnProperty(property)) {
                header += `<th>${property}</th>`;
            };
        };
        header += '</tr>\n';

        return header;
    };

    function escapeHtml(unsafe) {
        return unsafe
            .replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;")
            .replace(/"/g, "&quot;")
            .replace(/'/g, "&#39;");
    };

    console.log(outputTable);
};

jsonToHtmlTable('[{"name":"Pesho","score":479},{"name":"Gosho","score":205}]');

// <table>
//     <tr><th>name</th><th>score</th></tr>
//     <tr><td>Pesho</td><td>479</td></tr>
//     <tr><td>Gosho</td><td>205</td></tr>
// </table>
