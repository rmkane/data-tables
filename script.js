function dataToTable(data, selector) {
    var $table = $(selector);

    $table.append($('<colgroup>').append(createColumnGroups(data.columns)));
    $table.append($('<thead>').append(createHeaders(data.columns)));
    $table.append($('<tbody>').append(createRows(data)));

    function createColumnGroups(headers) {
        var width = (100 / headers.length) + '%';
        return data.columns.map(function() {
            return $('<col>').attr('width', width);
        });
    }

    function createHeaders(columns) {
        return $('<tr>').append(columns.map(function(column) {
            return $('<th>').text(column.text);
        }));
    }

    function createRows(data) {
        return data.records.map(function(record) {
            return $('<tr>').append(createRow(record, data.columns));
        });
    }

    function createRow(record, columns) {
        return columns.map(function(column) {
            return createCell(record, column);
        });
    }

    function createCell(record, column) {
        var rawVal = record[column.dataIndex];
        var val = column['format'] ? column.format(rawVal) : rawVal;
        var cell = $('<td>').text(val);

        if (typeof rawVal === 'number' || column['align'] === 'right') {
            cell.addClass('dt-right');
        }

        return cell;
    }
}

function toDataTable(selector) {
    var $table = $(selector).DataTable();
    // https://www.datatables.net/extensions/fixedheader/#Download
    new $.fn.dataTable.FixedHeader($table, {
        alwaysCloneTop: true
    });
}

function exportToPDF(targetId) {
    var pdf = new jsPDF('p', 'pt', 'letter');
    // source can be HTML-formatted string, or a reference
    // to an actual DOM element from which the text will be scraped.
    var source = $(targetId)[0];

    // we support special element handlers. Register them with jQuery-style 
    // ID selector for either ID or node name. ("#iAmID", "div", "span" etc.)
    // There is no support for any other type of selectors 
    // (class, of compound) at this time.
    specialElementHandlers = {
        // element with id of "bypass" - jQuery style selector
        '#bypassme': function(element, renderer) {
            // true = "handled elsewhere, bypass text extraction"
            return true
        }
    };
    margins = {
        top: 80,
        bottom: 60,
        left: 40,
        width: 522
    };
    // All coords and widths are in jsPDF instance's declared units
    // 'inches' in this case
    pdf.fromHTML(
        source, // HTML string or DOM elem ref.
        margins.left, // x-coordinate
        margins.top, // y-coordinate
        {
            'width': margins.width, // max width of content on PDF
            'elementHandlers': specialElementHandlers
        },

        function(dispose) {
            // dispose: Object with X, Y of the last line add to the PDF 
            //          this allow the insertion of new lines after html
            pdf.save('Test.pdf');
        }, margins);
}
