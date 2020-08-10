import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginSuccessFarmerComponent } from './login-success-farmer.component';

describe('LoginSuccessFarmerComponent', () => {
  let component: LoginSuccessFarmerComponent;
  let fixture: ComponentFixture<LoginSuccessFarmerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginSuccessFarmerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginSuccessFarmerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
