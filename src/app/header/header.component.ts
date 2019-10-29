import { Component, EventEmitter, Output } from '@angular/core';


@Component({
    selector: 'app-header',
    templateUrl: './header.component.html'
})
export class HeaderComponent {
    collapsed = true;
    @Output() choicePicked = new EventEmitter<string>();

    onChoice(choice: string) {
        this.choicePicked.emit(choice);

    }
}