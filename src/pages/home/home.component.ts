import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/provider/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  posts:any = []
  constructor(private apiService:ApiService,private router: Router) { }

  ngOnInit(): void {
    this.apiService.getPosts().subscribe((res)=>{
      console.log(res)
      this.posts = res
    })
  }
  Details(post_id){
    this.router.navigate(['/detail', { post_id: post_id }]);
  }

}
