import { Video } from './../video';
import { Component, OnInit } from '@angular/core';
import { VideoService} from './../video.service';

@Component({
	selector: 'app-videocenter',
	templateUrl: './videocenter.component.html',
	styleUrls: ['./videocenter.component.css'],
	providers:[VideoService]
})
export class VideocenterComponent implements OnInit {

	videos : Array<Video>;

	selectedVideo:Video
	private hidenewVideo:boolean = true;

	constructor(private _videoService:VideoService) { }

	ngOnInit() {
		this._videoService.getVideos()
		.subscribe(resVideoData =>this.videos = resVideoData);
	}

	onSelectVideo(video:any){
		this.selectedVideo = video;
		this.hidenewVideo = true;
		console.log(this.selectedVideo);
	}

	onSubmitAddVideo(video:Video){
		this._videoService.addVideo(video)
		.subscribe(resNewVideo => {
			this.videos.push(resNewVideo);
			this.hidenewVideo = true;
			this.selectedVideo = resNewVideo;
		})
	}
	onUpdateVideoEvent(video:any){
		this._videoService.updateVideo(video)
		.subscribe(resUpdateData => video = resUpdateData);
		this.selectedVideo = null;
	}

	onDeleteVideoEvent(video:any){
		let videoArray =this.videos;
		this._videoService.deleteVideo(video)
		.subscribe(resDeletedData => {
			for(let i=0; i< videoArray.length; i++)
			{
				if(videoArray[i]._id === video._id)
				{
					videoArray.splice(i,1);
				}
			} 

		});
		this.selectedVideo = null;
	}
	newVideo(){
		this.hidenewVideo = false;
	}

}
