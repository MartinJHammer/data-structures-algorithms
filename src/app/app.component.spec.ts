import { AppComponent } from './app.component';
import {
    async,
    ComponentFixture,
    TestBed
} from '@angular/core/testing';

describe('App Component', () => {
    let component: AppComponent;
    let fixture: ComponentFixture<AppComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [AppComponent]
        });
        fixture = TestBed.createComponent(AppComponent);
        component = fixture.componentInstance;
    }));

    test('should exist', () => {
        expect(component).toBeDefined();
    });
});