import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GithubJobsComponent } from './github-jobs.component';

describe('GithubJobsComponent', () => {
  let component: GithubJobsComponent;
  let fixture: ComponentFixture<GithubJobsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GithubJobsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GithubJobsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
