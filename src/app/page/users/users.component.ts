import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users = [
    {userId: 1, badgeId: 'U001', name: 'Ita', fullName: 'Nurita Cahyadi'  },
    {userId: 2, badgeId: 'U002', name: 'Bani', fullName: 'Bagus Hambuni'  },
    {userId: 3, badgeId: 'U003', name: 'Parman', fullName: 'Suparman'  },
    {userId: 4, badgeId: 'U004', name: 'Udin', fullName: 'Syafudin'  },
    {userId: 5, badgeId: 'U005', name: 'Rudi', fullName: 'Nasrudin'  },
        
  ]
  constructor() { }

  ngOnInit() {
  }

}
