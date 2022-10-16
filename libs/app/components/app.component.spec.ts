import { AppComponent } from './app.component';
import {
    ComponentFixture,
    TestBed
} from '@angular/core/testing';
import { material } from '../app.module';

describe('App Component', () => {
    let component: AppComponent;
    let fixture: ComponentFixture<AppComponent>;

    beforeEach((() => {
        TestBed.configureTestingModule({
            imports: [
                ...material
            ],
            declarations: [AppComponent]
        });
        fixture = TestBed.createComponent(AppComponent);
        component = fixture.componentInstance;
    }));

    it('should exist', () => {
        expect(component).toBeDefined();
    });
});