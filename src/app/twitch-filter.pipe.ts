import { Pipe, PipeTransform } from '@angular/core';
import { TwitchUser } from './twitch-user';

@Pipe({
  name: 'twitchFilter'
})
export class TwitchFilterPipe implements PipeTransform {

  transform(items: TwitchUser[], args?: any): any {
    if (!items) return [];        
    let mode = args.mode;
    let filter = args.filter.toLowerCase();
    //alert(filter);
    items = items.filter(i=> this.contains(i.displayName, filter) || (i.status != null && this.contains(i.status, filter)));
    if(mode==0) return items.filter(i=>i.isOnline == true);
    if(mode==1) return items.filter(i=>i.isOnline != true);
    return items;
  }
  contains(string1:string, string2:string){
    if(string1.toLowerCase().indexOf(string2.toLowerCase()) > -1){
      return true;
    }
    return false;
  }
}