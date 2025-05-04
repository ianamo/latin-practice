export interface DeclensionEndings {
  [key: string]: {
    singular: string;
    plural: string;
  };
}

export const declensionEndings: { [key: number]: DeclensionEndings } = {
  1: {
    Nominative: { singular: 'a', plural: 'ae' },
    Genitive: { singular: 'ae', plural: 'ārum' },
    Dative: { singular: 'ae', plural: 'īs' },
    Accusative: { singular: 'am', plural: 'ās' },
    Ablative: { singular: 'ā', plural: 'īs' },
    Vocative: { singular: 'a', plural: 'ae' },
  },
  2: {
    Nominative: { singular: 'us', plural: 'ī' },
    Genitive: { singular: 'ī', plural: 'ōrum' },
    Dative: { singular: 'ō', plural: 'īs' },
    Accusative: { singular: 'um', plural: 'ōs' },
    Ablative: { singular: 'ō', plural: 'īs' },
    Vocative: { singular: 'e', plural: 'ī' },
  },
  3: {
    Nominative: { singular: '—', plural: 'ēs' },
    Genitive: { singular: 'is', plural: 'um' },
    Dative: { singular: 'ī', plural: 'ibus' },
    Accusative: { singular: 'em', plural: 'ēs' },
    Ablative: { singular: 'e', plural: 'ibus' },
    Vocative: { singular: '—', plural: 'ēs' },
  },
  4: {
    Nominative: { singular: 'us', plural: 'ūs' },
    Genitive: { singular: 'ūs', plural: 'uum' },
    Dative: { singular: 'uī', plural: 'ibus' },
    Accusative: { singular: 'um', plural: 'ūs' },
    Ablative: { singular: 'ū', plural: 'ibus' },
    Vocative: { singular: 'us', plural: 'ūs' },
  },
  5: {
    Nominative: { singular: 'ēs', plural: 'ēs' },
    Genitive: { singular: 'eī', plural: 'ērum' },
    Dative: { singular: 'eī', plural: 'ēbus' },
    Accusative: { singular: 'em', plural: 'ēs' },
    Ablative: { singular: 'ē', plural: 'ēbus' },
    Vocative: { singular: 'ēs', plural: 'ēs' },
  },
}; 