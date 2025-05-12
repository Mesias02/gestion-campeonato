import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UserFormComponent } from './user-form.component';
import { ReactiveFormsModule } from '@angular/forms';

describe('UserFormComponent', () => {
  let component: UserFormComponent;
  let fixture: ComponentFixture<UserFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UserFormComponent],
      imports: [ReactiveFormsModule]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should validate form inputs', () => {
    component.userForm.controls['name'].setValue('Fausto');
    component.userForm.controls['email'].setValue('fausto@example.com');
    component.userForm.controls['password'].setValue('123456');
    component.userForm.controls['role'].setValue('admin');

    expect(component.userForm.valid).toBeTrue();
  });
});
