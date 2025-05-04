export const verbEndings = {
  active: {
    present: {
      '1s': 'o', '2s': 's', '3s': 't', '1p': 'mus', '2p': 'tis', '3p': 'nt',
    },
    imperfect: {
      '1s': 'bam', '2s': 'bas', '3s': 'bat', '1p': 'bamus', '2p': 'batis', '3p': 'bant',
    },
    future: {
      '1s': 'bo', '2s': 'bis', '3s': 'bit', '1p': 'bimus', '2p': 'bitis', '3p': 'bunt',
    },
    perfect: {
      '1s': 'i', '2s': 'isti', '3s': 'it', '1p': 'imus', '2p': 'istis', '3p': 'erunt',
    },
    pluperfect: {
      '1s': 'eram', '2s': 'eras', '3s': 'erat', '1p': 'eramus', '2p': 'eratis', '3p': 'erant',
    },
    futurePerfect: {
      '1s': 'ero', '2s': 'eris', '3s': 'erit', '1p': 'erimus', '2p': 'eritis', '3p': 'erint',
    },
  },
  passive: {
    present: {
      '1s': 'or', '2s': 'ris', '3s': 'tur', '1p': 'mur', '2p': 'mini', '3p': 'ntur',
    },
    imperfect: {
      '1s': 'bar', '2s': 'baris', '3s': 'batur', '1p': 'bamur', '2p': 'bamini', '3p': 'bantur',
    },
    future: {
      '1s': 'bor', '2s': 'beris', '3s': 'bitur', '1p': 'bimur', '2p': 'bimini', '3p': 'buntur',
    },
    perfect: {
      '1s': 'sum', '2s': 'es', '3s': 'est', '1p': 'sumus', '2p': 'estis', '3p': 'sunt',
    },
    pluperfect: {
      '1s': 'eram', '2s': 'eras', '3s': 'erat', '1p': 'eramus', '2p': 'eratis', '3p': 'erant',
    },
    futurePerfect: {
      '1s': 'ero', '2s': 'eris', '3s': 'erit', '1p': 'erimus', '2p': 'eritis', '3p': 'erunt',
    },
  },
} as const; 