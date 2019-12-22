import { Component, OnInit } from '@angular/core';
import { Topic } from '../classes/topic';
import { TopicService } from '../services/topic.service';
@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
topic: Topic;
  constructor(private topicService: TopicService) { }

  ngOnInit() {
    this.topic = new Topic();
  }
  CreateRecord() {
    const record = {};
    record['titre'] = this.topic.titre;
    record['description'] = this.topic.description;
    record['cle'] = this.topic.cle;

    this.topicService.create_NewTopic(record).then(resp => {
    console.log(resp);
    alert('ajouté avec succés!');
    window.location.replace('topic');

       })
         .catch(error => {
           console.log(error);
         });
       }

}
