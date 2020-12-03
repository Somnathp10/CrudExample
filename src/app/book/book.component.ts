import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { TaskDataServices } from '../services/task-data.service';
import { Table } from 'primeng/table/table';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';
@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css'],
  providers: [MessageService],
  encapsulation: ViewEncapsulation.None
})
export class BookComponent implements OnInit {
  updateBook:FormGroup;
  addBook:FormGroup;
 constructor(private TaskService: TaskDataServices,
  private messageService: MessageService) {
  
  this.updateBook = new FormGroup({
    //name: new FormControl(''),
    firstName: new FormControl('', [Validators.required]),
   // layoutBody: new FormControl(''),
   lastName: new FormControl('',[Validators.required]),
    primaryEmail: new FormControl('', Validators.required)
   
  });

  this.addBook = new FormGroup({
    //name: new FormControl(''),
    firstName: new FormControl('', [Validators.required]),
   // layoutBody: new FormControl(''),
   lastName: new FormControl('',[Validators.required]),
    primaryEmail: new FormControl('', Validators.required)
   
  });
  }
  product:any;
  BookData:any;
  ID:any;
  displayEditModel:boolean = false;
  displayAddModel:boolean = false;
  ngOnInit(): void {
    this.getData();
    
  }


  getData() {
   this.TaskService.getAllData().subscribe(data => {
      this.product = data;
      
    });
  }

  getDataById(id) {
    this.displayEditModel=true;
    this.TaskService.getDataById(id).subscribe(data => {
       this.BookData = data;
       console.log(this.BookData);
       this.ID=this.BookData.id;
       this.updateBook.patchValue({
        firstName: this.BookData.first_name,
        lastName: this.BookData.last_name,
        primaryEmail: this.BookData.primary_Email,
      
      })
     });
   }

  DeleteId(id) {
    this.TaskService.DeleteId(id).subscribe(data => {
      console.log(data);
      this.getData();
       
     });
   }
   close(){
     this.displayEditModel=false;
   }

   closeadd(){
    this.displayAddModel=false;
  }

   
   submitBook(value) {
  
    let req = {
      "id": this.ID,
      "first_name": this.updateBook.get("firstName").value,
     // "layoutType": this.AddCategory.get("layoutType").value,
      "last_name": this.updateBook.get("lastName").value,
      "primary_Email":  this.updateBook.get("primaryEmail").value
     
    }

    this.TaskService.updateData(req).subscribe(
      (response) => {
        
          this.displayEditModel = false;
        
          this.messageService.add({ severity: 'success', summary: 'update successfully'});
          this.getData();
         
      })
 }

 openAddModel(){
  this.displayAddModel = true;
  alert("hii");
 }

 submitAdd(value) {
  
  let req = {
   
    "first_name": this.addBook.get("firstName").value,
   // "layoutType": this.AddCategory.get("layoutType").value,
    "last_name": this.addBook.get("lastName").value,
    "primary_Email":  this.addBook.get("primaryEmail").value
   
  }

  this.TaskService.updateData(req).subscribe(
    (response) => {
      
        this.displayAddModel = false;
      
        this.messageService.add({ severity: 'success', summary: 'Add Succefully successfully'});
        this.getData();
       
    })
}


}
