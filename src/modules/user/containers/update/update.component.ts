import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
    selector: 'sb-update',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './update.component.html',
    styleUrls: ['update.component.scss'],
})
export class UpdateComponent implements OnInit {
    constructor() {}
    ngOnInit() {}
}
