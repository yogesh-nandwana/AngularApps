import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `<h1>Hello {{name}}</h1>
             <h1>Address:</h1>             
             <strong>door#</strong>{{address.doorNo}}
             <strong>aptName</strong>{{address.aptName}}
             <strong>street</strong>{{address.street}}
             <strong>city</strong>{{address.city}}
             <strong>pincode</strong>{{address.pincode}}
             <strong>country</strong>{{address.country}}
            `,
})
export class AppComponent { 
  name = 'JK'; 
  email = 'jk@yahoo.com';
  address = {
    'doorNo':102,
    'aptName':'Fantasy Lakshmi Anugrah Apartment',
    'Street':'10th Main,6th cross',
    'City':'Bangalore',
    'pincode':'560100',
    'country':'India'
  };
}
