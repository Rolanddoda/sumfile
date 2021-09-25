# sumfile ➕📡


### Introduction

A simple tool to output the sum of numbers located in a file line by line


### Installation

```shell
npm install -g sumfile
```

### Usage with example

Say you have 3 files:

A.txt:
```text
3
19
B.txt
50
```


B.txt:
```text
C.txt
27
```


C.txt:
```text
10
2
```

**Then in your terminal you run `sumfile A.txt`**

The output of the command above will be:

```text
A.txt - 111
B.txt - 39
C.txt - 12
```