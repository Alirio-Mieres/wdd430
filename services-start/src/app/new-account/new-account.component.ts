import { Component } from '@angular/core';
import { AccountService } from '../account.service';
import { LoggingService } from '../logging.service';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css'],
  providers: [LoggingService]
})
export class NewAccountComponent {
  // @Output() accountAdded = new EventEmitter<{name: string, status: string}>();

  constructor(private loggingService: LoggingService,
              private accountsService: AccountService){

            this.accountsService.statusUpdate.subcribe(
              (status: string) => alert('New Status: ' + status)
            )
  }


  onCreateAccount(accountName: string, accountStatus: string) {
    // this.accountAdded.emit({
    //   name: accountName,
    //   status: accountStatus
    //});
    // const service = new LoggingService(accountStatus);
    this.accountsService.addAccount(accountName, accountStatus);
    // this.loggingService.logStatusChanges[accountStatus];
  }
}
