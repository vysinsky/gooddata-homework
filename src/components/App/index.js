import React, { Component } from 'react';
import '@gooddata/react-components/styles/css/main.css';
import { AfmComponents } from '@gooddata/react-components';
import catalogJson from '../../data/catalog.json';
import Dropdown from '../Dropdown';

const { ColumnChart } = AfmComponents;

const OPTIONS = [
    {
        value: '2018'
    },
    {
        value: '2017'
    },
    {
        value: '2016'
    },
    {
        value: '2015'
    }
];

class App extends Component {

    constructor(props) {
      super(props);

      this.currentYear = (new Date()).getFullYear();

      this.state = {
          filterYear: this.currentYear.toString(),
          yearDiff: 0
      };

      this.handleFilterChange = this.handleFilterChange.bind(this);
    }

    handleFilterChange(e) {
        const selectedYear = e.target.value;

        this.setState({
          filterYear: selectedYear,
          yearDiff:  selectedYear - this.currentYear
        });
    }


    getAfmMeasures() {
        return {
            measures: [{
                id: '# of Activities',
                definition: {
                    baseObject: {
                        id: catalogJson.metrics['# of Activities'].identifier
                    }
                }
            }]
        }
    }

    getAfm() {
        const { state } = this;

        return {
            ...this.getAfmMeasures(),
            filters: [{
                between: [state.yearDiff, state.yearDiff],
                granularity: 'year',
                id: catalogJson.dateDataSets['Date (Activity)'].identifier,
                intervalType: 'relative',
                type: 'date'
            }]
        };
    }

    getAfmForAllYears() {
        return {
            ...this.getAfmMeasures(),
            attributes: [{
                id: catalogJson.dateDataSets['Date (Activity)'].attributes['Year (Activity)'].defaultDisplayForm.identifier,
                type: 'attribute'
            }]
        }
    }

    renderDropdown() {
        const { state } = this;

        return (
          <Dropdown
            defaultValue={state.filterYear}
            onChange={this.handleFilterChange}
            options={OPTIONS}
          />
        );
    }

    render() {
        const projectId = 'la84vcyhrq8jwbu4wpipw66q2sqeb923';
        const afm = this.getAfm();
        const afmAllYears = this.getAfmForAllYears();

        return (
            <div className="App">
                <h1># of Activities: Year {this.renderDropdown()}</h1>
                <div>
                    <ColumnChart
                        afm={afm}
                        projectId={projectId}
                    />
                </div>
                <h1># of Activities: Overview (Year by Year)</h1>
                <div>
                    <ColumnChart
                        afm={afmAllYears}
                        projectId={projectId}
                    />
                </div>
         </div>
      );
   }
}

export default App;
