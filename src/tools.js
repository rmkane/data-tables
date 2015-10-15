var JsonEditor = function(editorConfig, options) {
	var self = this;

	editorConfig = editorConfig || {};
	options = options || {};

	self.editor = {
		selector : editorConfig.selector,
		width : editorConfig.width || '100%',
		height : editorConfig.height,
		theme : editorConfig.theme || 'default',
		spacing : editorConfig.spacing
	};
	
	var $editor = $(self.editor.selector);
	
	if (this.codeMirror == null) {
		this.codeMirror = CodeMirror.fromTextArea($editor.get(0), {
			mode: 'javascript',
			theme: self.editor.theme,
			lineNumbers: self.lineNumbers
		});
	}
		
	self.url = options.url || '';
	self.lineNumbers = options.lineNumbers;
	self.indexBy = options.indexBy;	
	self.castTypes = options.types;
	
	if (self.url.length > 0) {
		self.load();
	}
}

JsonEditor.dataTypes = {
	json : 'json',
	csv  : 'text'
};

JsonEditor.prototype.load = function(url) {
	var self = this;
	
	self.dataType = JsonEditor.getDataType(self.url);
	
	$.ajax({
		url: url || self.url,
		type: 'GET',
		dataType: self.dataType,
		success: function(data) {
			self.onLoad.apply(self, arguments);
		}
	});
}

JsonEditor.prototype.onLoad = function(data) {	
	var self = this;
		
	data = self.processData(data);

	var jsonData = self.indexData(data);
	var jsonString = JSON.stringify(jsonData, null, self.editor.spacing);
	
	self.codeMirror.getDoc().setValue(jsonString);
	self.resize();
}

JsonEditor.prototype.processData = function(data) {
	var self = this;
	
	if (self.dataType === 'text') {
		return new CSV(data, {
			header: true,
			cast: self.castTypes
		}).parse();
	}
	
	return data;
}

JsonEditor.prototype.indexData = function(data) {
	return this.indexBy != null ? _.indexBy(data, this.indexBy) : data;
}

JsonEditor.prototype.resize = function() {
	this.codeMirror.setSize(this.editor.width, this.editor.height);
}

JsonEditor.getDataType = function(filename, ext) {
	return ext || JsonEditor.dataTypes[JsonEditor.getFileExt(filename)] || 'text';
}

JsonEditor.getFileExt = function(filename) {
	// See: http://stackoverflow.com/a/12900504
	return filename.slice((filename.lastIndexOf(".") - 1 >>> 0) + 2);
}
