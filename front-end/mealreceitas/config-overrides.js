import { override, addBabelPlugins } from 'customize-cra'

module.exports = override(
    ...addBabelPlugins(
        [
            'babel-plugin-root-imports',
            {
                'rootPathPrefix': '~',
                'rootPathSuffix': 'src'
            }
        ]
    )
)