import { CommonModule, NgClass, NgStyle } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
    // selector: 'app-root', // as a tag
    selector: '.app-root', // as a class
    // selector: '[app-root]', // as a attribure
    standalone: true,
    imports: [RouterOutlet, NgClass, NgStyle, FormsModule, CommonModule],
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

    public divClass = 'cb';
    public hasError = true;
    public classList = {
        headingError: !this.hasError,
        headingSuccess: true,
        HeadingFull: true,
    };

    public myStyle = {
        color: 'blue',
        fontStyle: 'italic',
    };
    public isDanger = true;

    public fieldUpdate() {
        console.log('hiiii');
    }
    public fieldUpdate2(event: KeyboardEvent) {
        // console.log(event);
        alert('You press : ' + event.code);
    }
    public fieldUpdate3() {
        alert('you press #');
    }
    public box = {
        backgroundColor: 'skyblue',
        height: '200px',
        width: '200px',
        marginBottom: '10px',
    };
    public wranning() {
        alert('to aap aa hi gaye is area me');
    }
    public colorArr = ['red', 'yellow', 'green', 'gray', 'pink'];
    public colorCounter = 0;
    public tragedy() {
        if (this.colorCounter == 4) {
            this.colorCounter = 0;
        }
        this.colorCounter++;
    }

    public getInputValue(myInputString: string, myButton: HTMLElement) {
        console.log(myButton);
        alert(myInputString);
    }

    public inputText: string = '';

    public displayElement = true;
    public choice = 'study';
    public colorForHeading = ['red', 'orange', 'darkgreen', 'blue'];

    public border = '1px solid black';
}
