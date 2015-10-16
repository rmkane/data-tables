(function($) {
	$.fn.tableBuilder = function(options) {
		var opts = $.extend({}, $.fn.tableBuilder.defaults, options);
		
		var columns = opts.columns;
		var records = opts.records;
		
		//this.append($('<colgroup>').append(_createColumnGroups(columns)));
		this.append($('<thead>').append(_createHeaders(columns)));
		this.append($('<tbody>').append(_createRows(records, columns)));
    };
    
    // Plugin defaults – added as a property on our plugin function.
	$.fn.tableBuilder.defaults = {
		columns: [],
		records: []
	};
	
	function _createColumnGroups(columns) {
        var width = (100 / columns.length) + '%';
        return columns.map(function() {
            return $('<col>').attr('width', width);
        });
    }

    function _createHeaders(columns) {
        return $('<tr>').append(columns.map(function(column) {
            return $('<th>').text(column.text);
        }));
    }

    function _createRows(records, columns) {
        return records.map(function(record) {
            return $('<tr>').append(_createRow(record, columns));
        });
    }

    function _createRow(record, columns) {
        return columns.map(function(column) {
            return _createCell(record, column);
        });
    }

    function _createCell(record, column) {
        var rawVal = record[column.dataIndex];
        var val = column['format'] ? column.format(rawVal, record) : rawVal;
        var cell = $('<td>');
        
        if (column.allowHTML === true) {
			cell.html(val);
		} else {
			cell.text(val);
		}

        if (typeof rawVal === 'number' || column['align'] === 'right') {
            cell.addClass('dt-body-right');
        }

        return cell;
    }
}(jQuery));
