import { Component, OnInit } from '@angular/core';
import { PaiService } from '../paisa.service';
import {HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Comments,Follower,Visited,Like } from '../paisa';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  advertisements: any[] = [];
  comments: any[] = [];
  followersuseridlist: any[]=[];
  followerslist: any[] = [];
  commentobj= new Comments();
  followerobj= new Follower();
  visitobj=new Visited();
  message=''
  showComments=''
  currentOpenId: any;
  following:any;
  constructor(private _service: PaiService,private http: HttpClient,private _router: Router) {}
  userId=' ';
  ngOnInit(){
    this.fetchadvertisement()
    this.userId=this._service.userId;
    this._service.getAllFollowersList(+this.userId).subscribe(
      data =>{
        console.log("console.log(this._service.userId)",this.userId)
        this.followerslist=data;
        console.log("fromfollower--->",data,"------->",this.followerslist);
        this.followerslist.forEach((follower: any) => {
          console.log("Follower username:", follower.username);
          // Perform operations with follower.username or other properties here
        });
      },
      error=>{
        console.log("error occured in followerslist")
      }
    );
  }
  fetchfollowers(){
    this._service.getAllFollowersList(+this.userId).subscribe(
      data =>{
        console.log("console.log(this._service.userId)",this.userId)
        this.followerslist=data;
        console.log("fromfollower--->",data,"------->",this.followerslist);
        this.followerslist.forEach((follower: any) => {
          console.log("Follower username:", follower.username);
          // Perform operations with follower.username or other properties here
        });
      },
      error=>{
        console.log("error occured in followerslist")
      }
    );
  }
  fetchadvertisement(){
    this._service.getAllAdvertisements().subscribe(
      data => {
      this.userId=this._service.userId;
      console.log("all advertisment list:",data)
      this.advertisements = data;
      console.log("all advertisment list:",this.advertisements)
    },
      error=>{console.log("error occure while retrieving the data!")
    });
  }
  likeobj=new Like();
  like(advertisementid:Number){
    this.likeobj.advertisementid=advertisementid;
    this.likeobj.userid=this.userId;
    this._service.LikeFromRemote(this.likeobj,+this.userId,advertisementid).subscribe(
      data=>{
        console.log("Like recieved")
        this.fetchadvertisement()
        this._router.navigate(['homepage'])
      },
      error=>{
        console.log("like error occured")
      }
    )
  }
  visited(advertisementid:Number,advertisementurl:String){
    this.visitobj.userid=this.userId;
    this.visitobj.advertisementid=advertisementid;
    this.visitobj.visited=true;
    this._service.VisitedFromRemote(this.visitobj,+this.userId,advertisementid).subscribe(
      data=>{
        console.log("visited received")
        this.fetchadvertisement()
        this._router.navigate(['homepage'])
      },
      error=>{
        console.log("visited error occured")
      }
    )
  }
  follower(advertiserid: number){
    this.followerobj.userid=this.userId;
    this.followerobj.advertiserid=advertiserid;
    this.followerobj.following=true;
    this._service.FollowerFromRemote(this.followerobj,advertiserid,+this.userId).subscribe(
      data=>{
        console.log("follower updated");
        this.fetchfollowers()
        this._router.navigate(['homepage'])
      },
      error=>{
        console.log("error occured for following");
      }
    )
  }
  comment(val:Number){
    this.commentobj.userid=this.userId;
    this.commentobj.advertisementid=val;
    this.commentobj.adid=val;
    console.log("----",this.commentobj);
    this._service.CommentsFromRemote(this.commentobj,val,+this.userId).subscribe(
      data=>{
      console.log("Response received");
      this.fetchadvertisement()
      this._router.navigate(['homepage'])
    },
      error=>{console.log("Error occured");
    }
    )
  }
  commentlist(advertisementid:Number){
    if (this.currentOpenId === advertisementid) {
    this.currentOpenId = null;
  } else {
    this.currentOpenId = advertisementid;
  }
    this.comments = [];
    this._service.CommentsListFromRemote(advertisementid).subscribe(
      data=>{
        this.comments=data;
        console.log("Response received------------>",this.comments);
      this._router.navigate(['homepage'])
    },
      error=>{console.log("Error occured");
    }
    )
  }
  facebook(advertisementid:Number){
    const title = 'Shared Title';
    const text = 'Check this out!';
    const url = 'https://your-website-url.com';

    this.share(title, text, url);
  }
  async share(title: string, text: string, url: string) {
    try {
      if (navigator.share) {
        await navigator.share({ title, text, url });
        console.log('Shared successfully');
      } else {
        console.log('Web Share API not supported');
      }
    } catch (error) {
      console.error('Error sharing:', error);
    }
  }
  twitter(advertisementid:Number){

  }
  whatsApp(advertisementid:string){
    const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(advertisementid)}`;
    window.open(whatsappUrl, '_blank');
  }
  instagram(advertisementid: string){
    const instagramUrl = `https://www.instagram.com/bobbiliblo.gger/?utm_source=your_app&utm_medium=share_button&url=${encodeURIComponent(advertisementid)}`;
    window.open(instagramUrl, '_blank');
  }
  pinterest(advertisementid:Number){

  }
  linkedin(advertisementid:Number){

  }
  
}
