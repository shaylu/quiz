import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Subject } from 'rxjs/Subject';

@Injectable()

export class ApiService {
    
    private selectedQuestion = new Subject<any>();
    questionSelected = this.selectedQuestion.asObservable();

    constructor(private http: HttpClient) { }

    postQuestion(question) {
        this.http.post('http://localhost:30297/api/Questions', question).subscribe(res => {
            console.log(res);
        });
    }

    getQuestions() {
        return this.http.get('http://localhost:30297/api/Questions');
    }
}