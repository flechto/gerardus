const SELECTORS = [
    'by-label',
    'by-text',
    'by-role',
    'by-testid'
] as const;

export type Selector = typeof SELECTORS[number]
