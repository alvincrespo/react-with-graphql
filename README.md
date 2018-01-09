## React w/ GraphQL Example

This is an adventure in create a react application with graphql. Feel free
to watch me stumble.

![](https://media.giphy.com/media/LtMrVu2foA7N6/giphy.gif)

### Installation

#### Clone the Repo

```
git clone git@github.com:alvincrespo/react-with-graphql.git && cd react-with-graphql
```

#### Tech Requirements

##### [NVM](https://github.com/creationix/nvm)

```
curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.8/install.sh | bash
```

Add to your profile:

```
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && . "$NVM_DIR/nvm.sh" # This loads nvm
```

Verify:

```
command -v nvm
nvm
```

If you don't see `nvm` as the output, refer to installation [instructions](https://github.com/creationix/nvm#installation).

##### [Node](https://nodejs.org/)

Install the node version specified in the repo:

```
nvm install $(cat .nvmrc)
```

##### [Homebrew](https://brew.sh/)

```
/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
```

##### [Yarn](https://yarnpkg.com/)

```
brew install yarn
```

#### Project dependencies

```
yarn
```

### Running the Application

```
yarn start
```
