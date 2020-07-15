import { Component, OnInit } from '@angular/core';
import { RestoService } from '../resto.service';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-list-resto',
  templateUrl: './list-resto.component.html',
  styleUrls: ['./list-resto.component.css']
})
export class ListRestoComponent implements OnInit {
  title="List Restaurant";
  constructor( private resto:RestoService, private titleservices:Title,
    private metaservices:Meta ) { }
    collection: any = []
    
  ngOnInit(): void {
    this.resto.getList().subscribe((result)=>{
      this.collection = result;
    }),

    this.titleservices.setTitle(this.title),
    this.metaservices.updateTag(
      { name: 'description', Content: 'This list all the restaurant' }
    )
  }
  deleteResto(item){
    if(confirm("Do you realy want to delete?"))
    {
      this.collection.splice(item-1, 1);
      this.resto.deleteResto(item).subscribe((result)=>{
        console.warn("Result", result);
        
      })
    }
  }
}
