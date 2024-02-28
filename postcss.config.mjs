import postcssImport from 'postcss-import';
import postcssMixins from 'postcss-mixins';
import postcssPresetMantine from 'postcss-preset-mantine';
import postcssSimpleVars from 'postcss-simple-vars';

export default {
  plugins: [
    postcssImport,
    postcssMixins,
    postcssPresetMantine({}),
    postcssSimpleVars({
      variables: {
        'mantine-breakpoint-xs': '36em',
        'mantine-breakpoint-sm': '48em',
        'mantine-breakpoint-md': '62em',
        'mantine-breakpoint-lg': '75em',
        'mantine-breakpoint-xl': '88em',
      },
    }),
  ],
};