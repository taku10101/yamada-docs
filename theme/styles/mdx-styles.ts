import { CSSUIObject } from '@yamada-ui/react'
import { colorScheme } from 'configs/site.json'

export const mdx: Record<string, CSSUIObject> = {
  h1: {
    mt: '6',
    mb: '4',
    fontSize: { base: '4xl' },
  },
  h2: {
    mt: '6',
    mb: '4',
    fontSize: { base: '2xl' },
  },
  h3: {
    mt: '6',
    mb: '4',
    fontSize: { base: 'xl' },
  },
  h4: {
    mt: '6',
    mb: '4',
    fontSize: { base: 'md' },
  },
  h5: {
    mt: '6',
    mb: '4',
    fontSize: { base: 'sm' },
  },
  h6: {
    mt: '6',
    mb: '4',
    fontSize: { base: 'xs' },
  },
  p: {
    my: '4',
    'blockquote &': {
      mt: '0',
    },
  },
  strong: {
    fontWeight: 'semibold',
  },
  code: {
    fontFamily: 'body',
    color: [`${colorScheme}.500`, `${colorScheme}.400`],
  },
  a: {
    color: 'link',
    textDecoration: 'underline',
  },
  hr: {
    my: '6',
  },
  ul: {
    my: '6',
    gap: '3',
  },
  ol: {
    my: '6',
    gap: '3',
  },
  li: {
    '& > p': { my: '0' },
  },
}