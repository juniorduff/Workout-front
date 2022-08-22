import {ComponentFixture, TestBed} from '@angular/core/testing';

import {ListAllExerciseComponent} from './list-all-exercise.component';

describe('ListAllExerciseComponent', () => {
    let component: ListAllExerciseComponent;
    let fixture: ComponentFixture<ListAllExerciseComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [ListAllExerciseComponent]
        })
            .compileComponents();

        fixture = TestBed.createComponent(ListAllExerciseComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
