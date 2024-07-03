import {IClone} from '@jscpd/core';
import {jscpd} from '../../apps/jscpd';

(async () => {
  const clones: IClone[] = await jscpd(['', '', __dirname + '/../fixtures', '-m', 'weak', '--silent']);
  console.log(clones);
})();
