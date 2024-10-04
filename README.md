# capacitor-plugin-zip

Zip or Unzip (Android & iOS)

## Install

```bash
npm install @iqtech84/capacitor-plugin-zip
```

## Usage

```typescript
import { Zip } from '@iqtech84/capacitor-plugin-zip';

Zip.zip({
    source : source,
    destination: destination,
    password: 'password', // Optional
});

Zip.unZip({
    source : source,
    destination: destination,
    overwrite: true, // Optional default true
    password: 'password', // Optional
});

Zip.addListener('progress', (r) => {
    var progress = r.progress;
    var completed = r.completed; // true or false  
})

```

### Interfaces

#### ZipOptions

| Prop              | Type                 |
| ----------------- | -------------------- |
| **`source`**      | <code>string</code>  |
| **`destination`** | <code>string</code>  |
| **`password`**    | <code>string</code>  |


#### UnZipOptions

| Prop              | Type                 |
| ----------------- | -------------------- |
| **`source`**      | <code>string</code>  |
| **`destination`** | <code>string</code>  |
| **`overwrite`**   | <code>boolean</code> |
| **`password`**    | <code>string</code>  |
