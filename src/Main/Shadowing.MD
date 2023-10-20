Local variables can even be declared with the same name as a global variable. If this happens, there are actually two different variables with the same name: one local and one global. This helps ensure that an author writing a local variable doesn’t accidentally change the value of a global variable they aren’t even aware of.

SCSS SYNTAX
$variable: global value;

```
.content {
  $variable: local value;
  value: $variable;
}

.sidebar {
  value: $variable;
}
```