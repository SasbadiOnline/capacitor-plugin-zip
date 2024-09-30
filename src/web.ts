import { WebPlugin } from '@capacitor/core';

import type { ZipPlugin, ZipOptions, UnZipOptions } from './definitions';

export class ZipWeb extends WebPlugin implements ZipPlugin {

  async zip(options: ZipOptions): Promise<void> {
    console.log('zip', options)
  };

  async unZip(options: UnZipOptions): Promise<void> {
    console.log('unzip', options);
  }
  
  /*
  async echo(options: { value: string }): Promise<{ value: string }> {
    console.log('ECHO', options);
    return options;
  }*/
}
