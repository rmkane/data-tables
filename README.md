# Bootstrap Data Tables

This project was developed as a tool for learning [Node.js][1] alongside [Bower][2] and [Grunt][3].

This was inspired by [*Stack Overflow: Export HTML table to pdf using jspdf*][4] and this [*GitHub: DataTables with Bootstrap Integeration issue*][5].

## Download dependencies

    bower install

## Building Distributions

Some dependencies may require you to build a distribution.

### Compile Bootstrap

Refer to [troublshooting](#grunt) for help.

    cd public/components/bootstrap
    grunt dist

Build everything    

    npm install
	
## Troubleshooting

### Bower

If you get firewall issues when installing dependencies from GitHub, refer to [*How to fix bower ECMDERR*][6].

Without changing the firewall:

    git config --global url."https://".insteadOf git://

### Grunt

See [Bootstrap | Getting Started - Troubleshooting][7]

## Libraries and Tools

- [Online JSON to CSV Tool][8]
- JSfiddle - [CSV to JSON][9]
- JSfiddle - [JSON to CSV][10]

## Resources

Countries ISO 2 and 3 [GitHub/aiddata -- countries-iso2-iso3.csv][11]

[comment]: References

  [1]: https://nodejs.org/en/
  [2]: http://bower.io/
  [3]: http://gruntjs.com/
  [4]: http://stackoverflow.com/questions/23035858/export-html-table-to-pdf-using-jspdf
  [5]: https://github.com/DataTables/FixedHeader/issues/32
  [6]: http://stackoverflow.com/a/21790275
  [7]: http://getbootstrap.com/getting-started/#grunt-troubleshooting
  [8]: http://konklone.io/json/
  [9]: http://jsfiddle.net/AZFvQ/644/
  [10]: http://jsfiddle.net/vUnF9/2524/
  [11]: https://github.com/ilyabo/aiddata/blob/master/data/static/data/countries-iso2-iso3.csv