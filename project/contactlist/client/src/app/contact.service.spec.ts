import { TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { ContactService } from './contact.service';
import { NgModule } from '@angular/core';

describe('ContactService', () => {
  let service: ContactService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ContactService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
