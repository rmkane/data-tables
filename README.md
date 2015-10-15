# Bootstrap Data Tables + Export

This was inspired by [*'Stack Overflow: Export HTML table to pdf using jspdf'*][1] and this [*'GitHub: DataTables with Bootstrap Integeration issue'*][2].

## Building Distributions

### Download dependencies

    bower install
    
### Compile Bootstrap
    
    cd public/components/bootstrap
    grunt dist
    
#### Troubleshooting

See [Bootstrap | Getting Started - Troubleshooting](http://getbootstrap.com/getting-started/#grunt-troubleshooting)

    npm install
    
Build Template

    grunt

## Libraries and Tools

SEE -> https://github.com/ilyabo/aiddata/blob/master/data/static/data/countries-iso2-iso3.csv

CSV to JSON Library -> https://github.com/knrz/CSV.js/
JSON to CSV Tool -> http://konklone.io/json/

CSV to JSON -> http://jsfiddle.net/AZFvQ/644/
JSON to CSV -> http://jsfiddle.net/vUnF9/2524/

  [1]: http://stackoverflow.com/questions/23035858/export-html-table-to-pdf-using-jspdf
  [2]: https://github.com/DataTables/FixedHeader/issues/32
