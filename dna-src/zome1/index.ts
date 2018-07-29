const CONSTANT = 10;

function genesis(): boolean {
  let anInteger: string;
  anInteger = property("language");
  return true;
}
function validateCommit(entryType: string, entry: object, header: object, pkg: object, sources: Hash[]): boolean {
  return true;
}
function validatePut(entryType: string, entry: object, header: object, pkg: object, sources: Hash[]): boolean {
  return true;
}
function validateLink(entryType: string, hash: Hash, links: object[], pkg: object, sources: Hash[]): boolean {
  return true;
}
function validateMod(entryType: string, entry: object, header: object, replaces: Hash, pkg: object, sources: Hash[]): boolean {
  return true;
}
function validateDel(entryType: string, hash: Hash, pkg: object, sources: Hash[]): boolean {
  return true;
}

function validatePutPkg(entryType: string): PackageRequest | null {
  return null;
}
function validateModPkg(entryType: string): PackageRequest | null {
  return null;
}
function validateDelPkg(entryType: string): PackageRequest | null {
  return null;
}
function validateLinkPkg(ebtryType: string): PackageRequest | null {
  return null;
}



function bridgeGenesis(side: number, dna: Hash, appData: string): boolean {
  return true;
}
function receive(from: Hash, message: string): any {
  return {};
}
function bundleCanceled(reason: any, userParam: any): any {
  return {};
}