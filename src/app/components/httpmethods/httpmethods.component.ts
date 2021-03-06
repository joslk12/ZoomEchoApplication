import { Component, OnInit } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import axios from 'axios';

@Component({
  selector: 'app-httpmethods',
  templateUrl: './httpmethods.component.html',
  styleUrls: ['./httpmethods.component.css']
})
export class HttpmethodsComponent implements OnInit {
  methods = ['GET', 'POST', 'PATCH', 'PUT', 'DELETE'];
  params = [{param: ""}];
  selectedMethod = '';
  showParams = false;
  disableRemove = true;
  sendDisabled = true;
  resp = {};
  time = 0;
  startTime = 0;
  endTime = 0;

  constructor(private http:HttpClient) {
  }

  ngOnInit(){}

  add(){
    this.params.push({param: ""})
    this.checkRemove();
  }
  remove(){
    if (this.params.length > 1) {
      this.params.pop();
    }
    this.checkRemove();
  }
  checkRemove(){
    if (this.params.length > 1) {
      this.disableRemove = false;
    }
    else{
      this.disableRemove = true;
    }
  }
  send(){
    let ref = this;
    axios.interceptors.request.use(function (config) {
      ref.startTime = new Date().getTime();
      return config;
    }, function (error) {
      return Promise.reject(error);
    });

    axios.interceptors.response.use(function (response) {
      ref.endTime = new Date().getTime();
      ref.time = ref.endTime - ref.startTime;
      return response;
    }, function (error) {
      return Promise.reject(error);
    });

    switch(this.selectedMethod){
      case 'GET':
        axios.get(environment.apiUrl + '/data')
        .then(res => {
          this.resp = res.data;
        });
        break;
      case 'POST':
        axios.post(environment.apiUrl + '/data', this.params)
        .then(res => {
          this.resp = res.data;
        });
        break;
      case 'PUT':
        axios.put(environment.apiUrl + '/data', this.params)
        .then(res => {
          this.resp = res.data;
        });
        break;
      case 'PATCH':
        axios.patch(environment.apiUrl + '/data', this.params)
        .then(res => {
          this.resp = res.data;
        });
        break;
      case 'DELETE':
        axios.get(environment.apiUrl + '/data')
        .then(res => {
          this.resp = res.data;
        });
        break;        
    }
  }
  selectMethod(method){
    this.selectedMethod = method;
    this.sendDisabled = false;
    if (method == 'GET' || method == 'DELETE') {
      this.showParams = false;
    } 
    else {
      this.showParams = true;
    }
  }


}
