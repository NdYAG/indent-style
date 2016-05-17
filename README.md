# indent-style

Detect indent style for your git repo. Useful when you want to write an .editorconfig for old repos.

```
➜  bragi git:(style) indent-style
{ json: { space: { '2': 3 } },
  md: { space: { '2': 2 } },
  yaml: { space: { '2': 1 } },
  svg: { space: { '4': 1 } },
  js: { tab: { '1': 4 }, space: { '1': 1, '2': 45 } },
  html: { space: { '2': 4 } },
  example: { space: { '4': 1 } },
  scss: { space: { '2': 60, '4': 2 }, tab: { '1': 1 } },
  jsx: { space: { '2': 48 } },
  cjsx: { space: { '2': 6 } },
  coffee: { space: { '2': 9 } } }
```

Based on [detect-indent](https://github.com/sindresorhus/detect-indent) and [git-utils](https://github.com/atom/git-utils).
