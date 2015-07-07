fuzzySearch
===========

Filters an array of strings based partial input pattern. 
FuzzySearch matching strategy for the input "abc" is similar to the regular expression `/a.*?b.*?c/i`

### Example

	fuzzySearch('fs', ['fileSearch','search filter', 'File System', 'FSEvent'])
	Result: [ "FSEvent", "fileSearch", "File System" ]

