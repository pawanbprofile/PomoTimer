module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-enum': [
      2,
      'always',
      [
        'fix',
        'feature',
        'chore',
        'docs',
        'style',
        'refactor',
        'test',
        'build',
        'ci',
        'perf',
        'revert',
      ],
    ],
  },
};
