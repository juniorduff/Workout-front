import {ComponentFixture, TestBed} from '@angular/core/testing';

import {ListWorkoutByStudentComponent} from './list-workout-by-student.component';

describe('ListWorkoutByStudentComponent', () => {
    let component: ListWorkoutByStudentComponent;
    let fixture: ComponentFixture<ListWorkoutByStudentComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [ListWorkoutByStudentComponent]
        })
            .compileComponents();

        fixture = TestBed.createComponent(ListWorkoutByStudentComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
