import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
    selector: 'sb-show',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './Show.component.html',
    styleUrls: ['Show.component.scss'],
})
export class ShowComponent implements OnInit {
    constructor() {}
    ngOnInit() {}
}
