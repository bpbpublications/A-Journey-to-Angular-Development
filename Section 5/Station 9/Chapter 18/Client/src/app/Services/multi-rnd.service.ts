import { Injectable, InjectionToken } from '@angular/core';

export const RND_TOKEN = new InjectionToken<MultiRndService[]>('CollectionOfRNDService');


@Injectable()
export class MultiRndService{
    m1(){
      console.log('MultiService1');
    }
}

@Injectable()
export class MultiRndService2{
    m2(){
      console.log('MultiService2');
    }
}
