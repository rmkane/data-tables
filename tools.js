function JsonEditor(url, editorConfig, primaryKey) {
	var editorSelector = editorConfig.selector;
	var editorWidth = editorConfig.width || '100%';
	var editorHeight = editorConfig.height;
	var editorTheme = editorConfig.theme || 'default';
	var editorSpacing = editorConfig.spacing;
	var lineNumbers = editorConfig.lineNumbers;
	var indexBy = editorConfig.indexBy;
	var dataType = editorConfig.dataType; // json or text (csv)
	var castTypes = editorConfig.types;
	
	$.ajax({
		url: url,
		type: 'GET',
		dataType: dataType,
		success: function(data) {
			if (dataType === 'text') {
				data = new CSV(data, {
					header: true,
					cast: castTypes
				}).parse();
			}

			var $target = $(editorSelector);
			var jsonData = indexBy != null ? _.indexBy(data, indexBy) : data;
			var jsonString = JSON.stringify(jsonData, null, editorSpacing);
			$target.val(jsonString);
			var codeMirror = CodeMirror.fromTextArea($target.get(0), {
				mode: 'javascript',
				theme: editorTheme,
				lineNumbers: lineNumbers
			});
			
			codeMirror.setSize(editorWidth, editorHeight);
		},
	});
}
