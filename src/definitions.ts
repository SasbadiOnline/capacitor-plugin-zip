export interface ZipOptions{
  source: string;
  destination: string;
  keepParent: boolean;
  password: string;
}
export interface UnZipOptions {
  source: string;
  destination: string;
  overwrite: boolean;
  password: string;
}
export interface ZipPlugin {
  // echo(options: { value: string }): Promise<{ value: string }>;
  zip(options: ZipOptions): Promise<void>;
  unZip(options: UnZipOptions): Promise<void>;
}