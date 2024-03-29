# generator-jhipster-react-antd
[![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url]
> JHipster blueprint, Jhipster stack use react and antd

# This blueprint still has many bugs, and I don't have time to test all the functions, so feel free to create the issue. I will check it out. Pull requests are welcome!

# Introduction

This is a [JHipster](https://www.jhipster.tech/) blueprint, that is meant to be used in a JHipster application.

# Prerequisites

As this is a [JHipster](https://www.jhipster.tech/) blueprint, we expect you have JHipster and its related tools already installed:

- [Installing JHipster](https://www.jhipster.tech/installation/)

# Installation

## With NPM

To install this blueprint:

```bash
npm install -g generator-jhipster-react-antd
```

To update this blueprint:

```bash
npm update -g generator-jhipster-react-antd
```

## With Yarn

To install this blueprint:

```bash
yarn global add generator-jhipster-react-antd
```

To update this blueprint:

```bash
yarn global upgrade generator-jhipster-react-antd
```

# Usage

To use this blueprint, run the below command

```bash
jhipster --blueprints generator-jhipster-react-antd
```


## Running local Blueprint version for development

During development of blueprint, please note the below steps. They are very important.

1. Link your blueprint globally 

Note: If you do not want to link the blueprint(step 3) to each project being created, use NPM instead of Yarn as yeoman doesn't seem to fetch globally linked Yarn modules. On the other hand, this means you have to use NPM in all the below steps as well.

```bash
cd react-antd
npm link
```

2. Link a development version of JHipster to your blueprint (optional: required only if you want to use a non-released JHipster version, like the main branch or your own custom fork)

You could also use Yarn for this if you prefer

```bash
cd generator-jhipster
npm link

cd react-antd
npm link generator-jhipster
```

3. Create a new folder for the app to be generated and link JHipster and your blueprint there

```bash
mkdir my-app && cd my-app

npm link generator-jhipster-react-antd
npm link generator-jhipster (Optional: Needed only if you are using a non-released JHipster version)

jhipster -d --blueprints react-antd

```

# License

MIT © [Dung Nguyen](https://dungnq.net)


[npm-image]: https://img.shields.io/npm/v/generator-jhipster-react-antd.svg
[npm-url]: https://www.npmjs.com/package/generator-jhipster-react-antd
[travis-image]: https://travis-ci.org/dungreact/generator-jhipster-react-antd.svg?branch=main
[travis-url]: https://travis-ci.org/dungreact/generator-jhipster-react-antd
