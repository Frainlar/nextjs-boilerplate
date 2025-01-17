module.exports = {
  branches: ['main'],
  repositoryUrl: 'https://github.com/your-username/your-repo',
  plugins: [
    '@semantic-release/commit-analyzer',
    '@semantic-release/release-notes-generator',
    '@semantic-release/changelog',
    '@semantic-release/npm',
    '@semantic-release/github',
    '@semantic-release/git'
  ]
};
