declare module "skulpt" {
  export function configure(options: any): void;
  export const builtinFiles: any;

  export const misceval: {
    asyncToPromise: (fn: () => Promise<any>) => Promise<any>;
  };

  export function importMainWithBody(
    name: string,
    dump: boolean,
    code: string,
    interactive: boolean
  ): Promise<any>;
}
