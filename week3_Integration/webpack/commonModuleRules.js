const jsRules = (useEslint = false) => {
  let use = ['babel-loader'];
  if (useEslint) {
    use = [...use, 'eslint-loader'];
  }

  return {
    use,
    test: /\.js$/,
    exclude: /node_modules/,
  };
};

const cssRules = {
  test: /\.css$/,
  use: [
    {
      loader: 'style-loader',
    },
    {
      loader: 'css-loader',
      options: {
        importLoaders: 1,
      },
    },
  ],
};

const scssRules = {
  test: /\.scss$/,
  use: [
    {
      loader: 'style-loader',
      options: {
        sourceMap: true,
      },
    },
    {
      loader: 'css-loader',
      options: {
        // modules: true,
        importLoaders: 1,
        sourceMap: true,
      },
    },
    {
      loader: 'resolve-url-loader',
    },
    {
      loader: 'sass-loader',
      options: {
        sourceMap: true,
      },
    },
  ],
};

const imageRules = {
  test: /\.(.jpe?g|png|gif|svg)$/,
  use: [
    {
      loader: 'url-loader',
      options: {
        limit: 40000,
        name: 'img/[hash].[ext]',
      },
    },
  ],
};

const svgIconRules = {
  test: /\.(svg)$/,
  use: [
    {
      loader: 'svg-inline-loader',
    },
  ],
};

const htmlRules = {
  test: /\.html$/,
  use: [
    {
      loader: 'raw-loader',
    },
  ],
};

module.exports = {
  jsRules, cssRules, scssRules, imageRules, svgIconRules, htmlRules,
};
