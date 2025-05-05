// Utility to remove macrons and normalize vowels
export function stripMacrons(str: string): string {
  return str
    .replace(/[āáâäãåā]/g, 'a')
    .replace(/[ēéêëẽē]/g, 'e')
    .replace(/[īíîïĩī]/g, 'i')
    .replace(/[ōóôöõō]/g, 'o')
    .replace(/[ūúûüũū]/g, 'u')
    .replace(/[ȳýŷÿȳ]/g, 'y')
    .replace(/[^a-zA-Z]/g, '') // remove any other diacritics or non-letters
    .toLowerCase();
} 