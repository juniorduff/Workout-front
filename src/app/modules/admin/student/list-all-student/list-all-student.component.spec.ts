import {ComponentFixture, TestBed} from '@angular/core/testing';

import {ListAllStudentComponent} from './list-all-student.component';

describe('ListAllStudentComponent', () => {
    let component: ListAllStudentComponent;
    let fixture: ComponentFixture<ListAllStudentComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [ListAllStudentComponent]
        })
            .compileComponents();

        fixture = TestBed.createComponent(ListAllStudentComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
