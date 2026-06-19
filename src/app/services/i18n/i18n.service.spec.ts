import { TestBed } from '@angular/core/testing';
import { I18nService } from './i18n.service';
import { TranslateService } from '@ngx-translate/core';

describe('I18nService', () => {
  let service: I18nService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        {
          provide: TranslateService,
          useValue: {
            addLangs: () => {},
            setDefaultLang: () => {},
            getBrowserLang: () => 'es',
            use: () => {},
          }
        }
      ]
    });
    service = TestBed.inject(I18nService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
