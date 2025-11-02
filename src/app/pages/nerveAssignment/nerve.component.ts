import { Component } from '@angular/core';

@Component({
  selector: 'app-nerve',
  templateUrl: './nerve.component.html',
  styleUrl: './nerve.component.scss'
})

export class NerveComponent {
  
  title = 'nerve-assignment';
  view:string="";
  i:number=0;
  dateArray = ['24-Apr-2024', '02-May-2024', '09-May-2024', '31-May-2024', '21-Jun-2024'];
  selectedDate = this.dateArray[0];
  selectedButtonIndex: number | null = null;
  strategyArray = [
    {
    'View': 'Bullish',
    'Value': {
    '24-Apr-2024': ['Bull Call Spread','Bull Put Spread','Bull Put Spread','Long Call','Bull Put Spread','Bull Call Spread','Strategy1','Bull Call Spread','Strategy1','Strategy1','Spread-Strategy','Bull Call Spread'],
    '02-May-2024': ['Bull Call Spread','Bull Call Spread','Bull Put Spread','Long Call','Long Call','Long Call','Bull Put Spread','Bull Call Spread','Strategy1','Bull Call Spread','Strategy2','Strategy1','Strategy2','Bull Call Spread'],
    '09-May-2024': ['Strategy Put','Strategy Call','Strategy Call','Strategy Call','Strategy Put'],
    }
    },
    {
      'View': 'Bearish',
      'Value': {
        '24-Apr-2024': ['Bear Call Spread', 'Bear Call Spread', 'Bear Call Spread', 'Long Put', 'Long Put', 'Long Put', 'Bear Call Spread', 'Long Put', 'Long Put', 'Long Put', 'Long Put', 'Long Put'],
        '02-May-2024': ['Bear Call Spread', 'Bear Call Spread', 'Bear Call Spread', 'Long Put', 'Long Put', 'Long Put', 'Bear Call Spread', 'Long Put', 'Long Put', 'Long Put', 'Long Put', 'Long Put'],
        '09-May-2024': ['Bear Call Spread', 'Bear Call Spread', 'Bear Call Spread', 'Long Put', 'Long Put', 'Long Put', 'Bear Call Spread', 'Long Put', 'Long Put', 'Long Put', 'Long Put', 'Long Put'],
        '31-May-2024': ['Long Put', 'Long Put', 'Long Put', 'Long Put', 'Long Put'],
        '21-Jun-2024': ['Strategy3','Strategy3', 'Bear Put Spread','Strategy3','Long Put', 'Long Put'],
      }
    },{
      'View': 'RangeBound',
      'Value': {
      '24-Apr-2024': ['Short Straddle','Short Strangle','Short Strangle','Iron Butterfly','Short Strangle','Short Straddle','Strategy1','Short Straddle','Strategy1','Strategy1','Spread-Strategy','Short Straddle'],
      '02-May-2024': ['Short Straddle','Short Straddle','Short Strangle','Iron Butterfly','Iron Butterfly','Iron Butterfly','Short Strangle','Short Straddle','Strategy1','Short Straddle','Strategy2','Strategy1','Strategy2','Short Straddle'],
      '21-Jun-2024': ['Iron Condor','Iron Butterfly','Iron Butterfly','Iron Butterfly','Iron Condor'],
      }
      },
      {
      'View': 'Volatile',
      'Value': {
      '02-May-2024': ['Long Straddle','Long Strangle','Long Strangle','Long Strangle','Long Straddle','Strategy1','Long Straddle','Strategy1','Strategy1','Spread-Strategy','Long Straddle'],
      '09-May-2024': ['Long Straddle','Long Straddle','Long Strangle','Long Strangle','Long Straddle','Strategy1','Long Straddle','Strategy2','Strategy1','Strategy2','Long Straddle'],
      '31-May-2024': ['Long Straddle','Long Strangle','Long Strangle','Long Strangle','Long Straddle'],
      }
      }
     
  ];
  filteredDataByView: any;
  uniqueStrategyCounts: any;
  filteredStrategies: any;

  constructor(){}

  ngOnInit(): void {
    this.view="Bullish";
    this.i=0;
    this.selectedView(this.view,this.i);
  }
  public selectedView(view: string,i:number){
    this.selectedButtonIndex = i;
    this.filteredDataByView=this.strategyArray.filter(item => item.View ===view );
    const customEvent = { target: { value: this.selectedDate } };
    this.updateStrategies(customEvent);
  }
  
  public updateStrategies(ev: any){
    this.selectedDate = ev.target.value;
     this.filteredStrategies = (this.filteredDataByView[0] as any).Value[this.selectedDate];
     this.uniqueStrategyCounts = this.countUniqueStrategies(this.filteredStrategies);
  }

  public countUniqueStrategies(strategies: string[]): { [key: string]: number } {
    const strategyCounts: { [key: string]: number } = {};
    if(strategies && strategies.length){
      strategies.forEach(strategy => {
        if (strategyCounts[strategy]) {
          strategyCounts[strategy]++;
        } else {
          strategyCounts[strategy] = 1;
        }
      });
    }
    return strategyCounts;
  }
}
