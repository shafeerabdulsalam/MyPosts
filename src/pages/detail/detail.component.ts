import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/provider/api.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {
post:{title:string,body:string} = {title:"",body:""};
comments:any =[]
  constructor(private apiService:ApiService, private route: ActivatedRoute) {

   }

  ngOnInit(): void {
    let post_id = this.route.snapshot.paramMap.get('post_id');
    this.apiService.getPostDetail(post_id).subscribe((res)=>{
      this.post = res;
    })
    this.apiService.getPostComments(post_id).subscribe((data)=>{
      this.comments = data;
    })
  }

}
