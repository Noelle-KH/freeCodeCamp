# Roman Numeral Converter

## Description
Convert the given number into a roman numeral.

Roman numerals	Arabic numerals
| Roman | Arabic |
| ----- | ------ |
| M     | 1000   |
| CM    | 900    |
| D     | 500    |
| CD    | 400    |
| C     | 100    |
| XC    | 90     |
| L     | 50     |
| XL    | 40     |
| X     | 10     |
| IX    | 9      |
| V     | 5      |
| IV    | 4      |
| I     | 1      |

All roman numerals answers should be provided in upper-case.

## Answer
1. Create an array ```romanArray``` stored each arabic and roman numeral.
2. Use for-of loop traverse ```romanArray```, if ```num``` greater or equal to arabic, return the corresponding roman numerals, then let ```num``` minus arabic and keep converting until ```num``` equal to 0.(recursion)