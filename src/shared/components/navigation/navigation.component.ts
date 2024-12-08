import {Component, inject, signal} from '@angular/core';
import {BreakpointObserver} from '@angular/cdk/layout';

@Component({
    selector: 'app-navigation',
    templateUrl: './navigation.component.html',
    standalone: false,
    styleUrl: './navigation.component.css'
})
export class NavigationComponent {

    sideNavMode: 'over' | 'push' | 'side' = 'side';

    private breakpointObserver = inject(BreakpointObserver);

    public isSidenavOpen = signal(false);

    toggleSideNav(open: boolean) {
        this.isSidenavOpen.update(b => open);
    }
}
