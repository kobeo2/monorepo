// more info see: http://marionebl.github.io/commitlint/#/
module.exports = {
  rules: {
    'body-leading-blank': [1, 'always'],
    'footer-leading-blank': [1, 'always'],
    'header-max-length': [2, 'always', 72],
    'scope-case': [2, 'always', 'lowerCase'],
    'subject-empty': [2, 'never'],
    'subject-full-stop': [2, 'never', '.'],
    'type-case': [2, 'always', 'lowerCase'],
    'type-empty': [2, 'never'],
    'type-enum': [2, 'always', ['chore', 'docs', 'feat', 'fix', 'perf', 'refactor', 'test', 'wip']],
    'scope-enum': [2, 'never'],
  },
};
