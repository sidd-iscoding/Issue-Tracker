const issues = [
{
id: 1, status: 'Open', owner: 'Ravan',
created: new Date('2016-08-15'), effort: 5, completionDate: undefined,
title: 'Error in console when clicking Add',
},
{
id: 2, status: 'Assigned', owner: 'Eddie',
created: new Date('2016-08-16'), effort: 14, 
completionDate: new Date('2016-08-30'),
title: 'Missing bottom border on panel',
},
];

const contentNode = document.getElementById('contents');


class IssueFilter extends React.Component {
  render() {
    return (
        <div>Placeholder for issue filter</div>
    );
  }
}
class IssueRow extends React.Component{
    render(){
        
        const issue=this.props.issue1;
    return(
        <tr>
            <td>{issue.id}</td>
            <td>{issue.status}</td>
            <td>{issue.owner}</td>
            <td>{issue.created.toDateString()}</td>
            <td>{issue.effort}</td>
            <td>{issue.completionDate ? issue.completionDate.toDateString() : ''}</td>
            <td>{issue.title}</td>
        </tr>
    );
   }
}
class IssueTable extends React.Component {
  render() {
        
   const issueRows = this.props.issues.map(issue => <IssueRow key={issue.id} issue1={issue} />)
    return (
      <table className="bordered-table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Status</th>
            <th>Owner</th>
            <th>Created</th>
            <th>Effort</th>
            <th>Completion Date</th>
            <th>Title</th>
          </tr>
        </thead>
        <tbody>{issueRows}</tbody>
      </table>
    );
  }
}
class IssueAdd extends React.Component {
  render() {
    return (
        <div>Placeholder for issue Addition</div>
    );
  }
}

class IssueList extends React.Component {
    constructor(){
        super();
        this.state={issue2:issues};     //Initialize the state with state object i.e issues arr
        setTimeout(this.createTestIssue.bind(this),2000);
    }
    createTestIssue(){
        this.createIssue({
            status: 'New', owner: 'Pieta',created: new Date(),  title: 'Completion date should optional',
        });
    }
    createIssue(newIssue){
        const newIssues=this.state.slice();
        newIssue.id=this.state.issues.length+1;
        newIssues.push(newIssue);
        this.setState({issue:newIssues});        //the way to inform react of a state change using setState()
    }
  render() {
    return (
        <div>
            <h1>Issue Tracker</h1>
            <IssueFilter/>
             <hr/>
            <IssueTable issues={this.state.issue2}/>   //pass data contained in state via property  
            <hr/>
            <IssueAdd/>v      
            <hr/>
        </div>
    );
  }
}

ReactDOM.render(<IssueList/>, contentNode);
