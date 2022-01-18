import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { DashboardService } from '../../services';

@Component({
    selector: 'sb-dashboard',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './dashboard.component.html',
    styleUrls: ['dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
    constructor(private dashboardService: DashboardService) {}

    ngOnInit() {
    //     this.dashboardService.getTest().subscribe((res: any) => {
    //      console.log(res);
    //   });
    }
}
