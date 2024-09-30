import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
    // selector: 'app-root', // as a tag
    selector: '.app-root', // as a class
    // selector: '[app-root]', // as a attribure
    standalone: true,
    imports: [RouterOutlet],
    templateUrl: './app.component.html',
    // template: `<h1 class="heading">Hello From Inline Template</h1>`,
    styleUrl: './app.component.css',
})
export class AppComponent {
    public title: string = 'hello-world';
    public userName: string = 'Shivam';
    public wantVisible: boolean = true;
    public imageUrl: string =
        'https://www.aceinfoway.com/blog/wp-content/uploads/2023/03/javascript-vs-typescript_-what-differs-javascript-and-typescript_.jpg';
    public greetings(): string {
        return 'Hello sir, Welcome ' + this.userName;
    }
}
