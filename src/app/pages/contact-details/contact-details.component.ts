import { Contact } from 'src/app/models/contact.model';
import { ContactService } from 'src/app/services/contact.service';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';


@Component({
  selector: 'contact-details',
  templateUrl: './contact-details.component.html',
  styleUrls: ['./contact-details.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush

})

export class ContactDetailsComponent implements OnInit {

  constructor(
    private contactService: ContactService,
    private route: ActivatedRoute,
    private router: Router,
    private cd: ChangeDetectorRef
) { }

  contact: Contact
  txt = ''
  msg: string
  msg$: Observable<string>

  ngOnInit(): void {

      this.route.data.subscribe(async ({ contact }) => {
        this.contact = contact._id ? contact : this.contactService.getById(contact._id)
    })

    setTimeout(() => {
      this.cd.markForCheck()
      this.txt = 'Hello!'
      // this.cd.detectChanges()
      // this.cd.checkNoChanges()
  }, 1000)

}

  onBack() {
    this.router.navigateByUrl('')
    // this.router.navigate([''])
  }

  onTransferBitcoin() {
    this.contactService.shouldTransferBitcoin().subscribe(msg => {
      this.cd.markForCheck()
      this.msg = msg
      console.log(msg);
      
      setTimeout(() => {
        this.cd.markForCheck()
        this.msg = ''
      }, 3000)
    })
  }

}
