import { Component, OnInit } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { Subscription } from 'rxjs/Subscription';
import gql from 'graphql-tag';
import 'rxjs/add/operator/toPromise';

const AllMPsQuery = gql`
    query AllMPsQuery($party: String, $ethnicity: String) {
        allMPs(filter: {
            party: $party,
            ethnicity: $ethnicity
        }) {
            id
            name
            twitterUsername
            ethnicity
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
        {name: "Conservative"},
        {name: "Scottish National Party"}
    ];
  ethnicitySelected: string = "Ethnic minority";
  ethnicity = [
        {name: "Ethnic minority"},
        {name: "White"}
    ];

  constructor(
      private apollo: Apollo
  ) {

  }

  ngOnInit() {
    this.allMPsSub = this.apollo.watchQuery({
      query: AllMPsQuery,
      variables: {
        party: this.partySelected,
        ethnicity: this.ethnicitySelected
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
                party: this.partySelected,
                ethnicity: this.ethnicitySelected
            }
        }).subscribe(({data, loading}: any) => {
            this.allMPs = data.allMPs;
            this.loading = loading;
        });
    }

    onChangeEth(deviceValue) {
        this.ethnicitySelected = deviceValue;

        this.allMPsSub = this.apollo.watchQuery({
            query: AllMPsQuery,
            variables: {
                party: this.partySelected,
                ethnicity: this.ethnicitySelected
            }
        }).subscribe(({data, loading}: any) => {
            this.allMPs = data.allMPs;
            this.loading = loading;
        });
    }
}
