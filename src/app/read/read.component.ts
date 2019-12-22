import { Component, OnInit } from '@angular/core';
import { Topic } from '../classes/topic';
import { TopicService } from '../services/topic.service';
@Component({
  selector: 'app-read',
  templateUrl: './read.component.html',
  styleUrls: ['./read.component.css']
})
export class ReadComponent implements OnInit {
  topic: Topic;
  topics: any;

  constructor(private topicService: TopicService) { }

  ngOnInit() {
    // subscribe permet de remplir le résultat
    this.topicService.read_Topics().subscribe(data => {

      this.topics = data.map(e => {
        return {
         id: e.payload.doc.id,

         titre: e.payload.doc.data().titre,
         description: e.payload.doc.data().description,
         cle: e.payload.doc.data().cle,



        };
      });
      console.log(this.topics);

    });
  }
access(key: string) {
  localStorage.setItem('room', key);
  window.location.replace('chattopic');
}
}
