import { Component, OnInit } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { Subscription } from 'rxjs/Subscription';
import gql from 'graphql-tag';
import 'rxjs/add/operator/toPromise';

const AllMPsQuery = gql`
    query AllMPsQuery($party: String) {
        allMPs(filter: {
            party: $party
        }) {
            id
            name
            twitterUsername
            ethicity
            image
            dob
            party
        }
    }
`;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
  loading = true;
  allMPs: any;
  allMPsSub: Subscription;
  partySelected: string = "Labour";
  parties = [
        {name: "Labour"},
        {name: "Conservative"}
    ];

  constructor(
      private apollo: Apollo
  ) {

  }

  ngOnInit() {
    this.allMPsSub = this.apollo.watchQuery({
      query: AllMPsQuery,
      variables: {
        party: this.partySelected
      }
    }).subscribe(({data, loading}: any) => {
      this.allMPs = data.allMPs;
      this.loading = loading;
    });
  }

    onChange(deviceValue) {
        this.partySelected = deviceValue;

        this.allMPsSub = this.apollo.watchQuery({
            query: AllMPsQuery,
            variables: {
                party: this.partySelected
            }
        }).subscribe(({data, loading}: any) => {
            this.allMPs = data.allMPs;
            this.loading = loading;
        });
    }
}
