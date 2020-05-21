function solve() {
    let reportStorage = [];
    let reportId = 0;
    let htmlStorageSelector = '';

    function bugReportConstructor(author, description, reproducible, severity) {
        return {
            ID: reportId,
            author,
            description,
            reproducible,
            severity,
            status: 'Open'
        }
    };

    function report(author, description, reproducible, severity) {
        let reports = document.querySelector(htmlStorageSelector);
        let newReport = bugReportConstructor(author, description, reproducible, severity);
        reports.innerHTML += createHTMLElement(newReport);
        reportId++;
        reportStorage.push(newReport);
    };

    function setStatus(id, newStatus) {
        let reports = document.querySelector(htmlStorageSelector);
        let report = reports.querySelector(`#report_${id}`);

        let requestedReport = reportStorage.find((x) => x.ID === id);
        requestedReport.status = newStatus;
        report.innerHTML = createHTMLElement(requestedReport);
    };

    function remove(id) {
        let reports = document.querySelector(htmlStorageSelector);
        let report = reports.querySelector(`#report_${id}`);

        let requestedReportIndex = reportStorage.findIndex((x) => x.ID === id);
        reportStorage.splice(requestedReportIndex, 1);
        report.outerHTML = '';
    };

    function sortByAuthor(a, b) {
        return a.author.localeCompare(b.author);
    }

    function sortBySeverity(a, b) {
        return a.severity - b.severity;
    }

    function sortById(a, b) {
        return a.ID - b.ID;
    }

    function sort(filter) {
        let reports = document.querySelector(htmlStorageSelector);
        reports.innerHTML = '';

        if (filter === 'author') {
            reportStorage.sort(sortByAuthor)
        } else if (filter === 'severity') {
            reportStorage.sort(sortBySeverity);
        } else {
            reportStorage.sort(sortById);
        };

        reportStorage.forEach(e => {
            reports.innerHTML += createHTMLElement(e);
        })
    };

    function output(selector) {
        htmlStorageSelector = selector;
    };

    function createHTMLElement(object) {
        const generatedHTML = `<div id="report_${object.ID}" class="report">
        <div class="body">
          <p>${object.description}</p>
        </div>
        <div class="title">
          <span class="author">Submitted by: ${object.author}</span>
          <span class="status">${object.status} | ${object.severity}</span>
        </div>
      </div>`;

        return generatedHTML;
    }

    return { report, remove, sort, output, setStatus }
};

let tracker = solve();

tracker.output('#content');
tracker.report('guy', 'report content', true, 5);
tracker.report('second guy', 'report content 2', true, 3);
tracker.report('abv', 'report content three', true, 4);

tracker.remove(1);
