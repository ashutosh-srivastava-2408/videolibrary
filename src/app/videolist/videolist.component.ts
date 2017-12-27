import { Video } from './../video';
import { Component, OnInit, EventEmitter } from '@angular/core';

@Component({
	selector: 'videolist',
	templateUrl: './videolist.component.html',
	styleUrls: ['./videolist.component.css'],
	inputs:['videos'],
	outputs:['SelectVideo']
})
export class VideolistComponent implements OnInit {

	public SelectVideo = new EventEmitter();
	constructor() { }

	ngOnInit() {
	}

	onSelect(vid: Video){
		this.SelectVideo.emit(vid);
	}
}
