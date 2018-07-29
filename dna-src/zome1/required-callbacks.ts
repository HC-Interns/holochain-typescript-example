import { sharedHelper } from "../common/lib"


export function genesis(): boolean {

  let anInteger: string;
  anInteger = property("language");

  let aString: string;
  aString = sharedHelper();


  return true;
}


export function validateCommit(entryType: string, entry: object, header: object, pkg: object, sources: Hash[]): boolean {
  return true;
}
export function validatePut(entryType: string, entry: object, header: object, pkg: object, sources: Hash[]): boolean {
  return true;
}
export function validateLink(entryType: string, hash: Hash, links: object[], pkg: object, sources: Hash[]): boolean {
  return true;
}
export function validateMod(entryType: string, entry: object, header: object, replaces: Hash, pkg: object, sources: Hash[]): boolean {
  return true;
}
export function validateDel(entryType: string, hash: Hash, pkg: object, sources: Hash[]): boolean {
  return true;
}

export function validatePutPkg(entryType: string): PackageRequest | null {
  return null;
}
export function validateModPkg(entryType: string): PackageRequest | null {
  return null;
}
export function validateDelPkg(entryType: string): PackageRequest | null {
  return null;
}
export function validateLinkPkg(ebtryType: string): PackageRequest | null {
  return null;
}