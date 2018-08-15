import {Menu} from '../models/menus';
import {SubMenus} from '../models/submenus';
export const MENUS = [
      new Menu('dashboard','Dashboard','dashboard','link'),
      new Menu('users','Users','users','link'),
      new Menu('devices',"Devices",'devices','parent',[new SubMenus('device-list','Device List','link'),new SubMenus('device_firmware','Manage Firmware','link')]),
      new Menu('firmware','Firmware','test','parent',[new SubMenus('saral-firmware','Saral Info','link'),new SubMenus('newpos-firmware','NewPos 9220','link')]),
      new Menu('clients','Clients','client','parent',[new SubMenus('wfp','WFP','link'),new SubMenus('pbu','Postbank UG','link'),new SubMenus('tbc','TBC','link')])

]
