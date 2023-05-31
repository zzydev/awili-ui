import {
  defineConfig,
  presetAttributify,
  presetTypography,
  presetIcons,
  presetUno
} from 'unocss';

const STATUS_COLORS = {
  primary: '#0284c7',
  secondary: '#059669',
  success: '#059669',
  warning: '#ea580c',
  danger: '#f43f5e',
  info: '#0ea5e9'
};

const COLORS = [
  'white',
  'black',
  'gray',
  'red',
  'orange',
  'yellow',
  'teal',
  'green',
  'cyan',
  'blue',
  'indigo',
  'purple',
  'pink'
];

const safelist = [
  ...COLORS.map((v) => `bg-${v}-500`),
  ...COLORS.map((v) => `hover:bg-${v}-700`),
  ...[
    'search',
    'edit',
    'check',
    'message',
    'star',
    'delete',
    'add',
    'share'
  ].map((v) => `i-ic-baseline-${v}`)
];

export default defineConfig({
  safelist,
  theme: {
    colors: {
      ...STATUS_COLORS
    }
  },
  shortcuts: {
    // 这里可以放全局公共样式
  },
  presets: [
    presetUno(),
    presetAttributify(),
    presetIcons({
      extraProperties: {
        display: 'inline-block',
        'vertical-align': 'middle'
      }
    }),
    presetTypography()
  ]
});
