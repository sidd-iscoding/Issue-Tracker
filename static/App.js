const issues = [{
  id: 1, status: 'Open', owner: 'Ravan',
  created: new Date('2016-08-15'), effort: 5, completionDate: undefined,
  title: 'Error in console when clicking Add'
}, {
  id: 2, status: 'Assigned', owner: 'Eddie',
  created: new Date('2016-08-16'), effort: 14,
  completionDate: new Date('2016-08-30'),
  title: 'Missing bottom border on panel'
}];

const contentNode = document.getElementById('contents');

class IssueFilter extends React.Component {
  render() {
    return React.createElement(
      'div',
      null,
      'Placeholder for issue filter'
    );
  }
}
class IssueRow extends React.Component {
  render() {

    const issue = this.props.issue1;
    return React.createElement(
      'tr',
      null,
      React.createElement(
        'td',
        null,
        issue.id
      ),
      React.createElement(
        'td',
        null,
        issue.status
      ),
      React.createElement(
        'td',
        null,
        issue.owner
      ),
      React.createElement(
        'td',
        null,
        issue.created.toDateString()
      ),
      React.createElement(
        'td',
        null,
        issue.effort
      ),
      React.createElement(
        'td',
        null,
        issue.completionDate ? issue.completionDate.toDateString() : ''
      ),
      React.createElement(
        'td',
        null,
        issue.title
      )
    );
  }
}
class IssueTable extends React.Component {
  render() {

    const issueRows = this.props.issues.map(issue => React.createElement(IssueRow, { key: issue.id, issue1: issue }));
    return React.createElement(
      'table',
      { className: 'bordered-table' },
      React.createElement(
        'thead',
        null,
        React.createElement(
          'tr',
          null,
          React.createElement(
            'th',
            null,
            'Id'
          ),
          React.createElement(
            'th',
            null,
            'Status'
          ),
          React.createElement(
            'th',
            null,
            'Owner'
          ),
          React.createElement(
            'th',
            null,
            'Created'
          ),
          React.createElement(
            'th',
            null,
            'Effort'
          ),
          React.createElement(
            'th',
            null,
            'Completion Date'
          ),
          React.createElement(
            'th',
            null,
            'Title'
          )
        )
      ),
      React.createElement(
        'tbody',
        null,
        issueRows
      )
    );
  }
}
class IssueAdd extends React.Component {
  render() {
    return React.createElement(
      'div',
      null,
      'Placeholder for issue Addition'
    );
  }
}

class IssueList extends React.Component {
  constructor() {
    super();
    this.state = { issues: issues };
    setTimeout(this.createTestIssue.bind(this), 2000);
  }
  createTestIssue() {
    this.createIssue({
      status: 'New', owner: 'Pieta', created: new Date(), title: 'Completion date should optional'
    });
  }
  render() {
    return React.createElement(
      'div',
      null,
      React.createElement(
        'h1',
        null,
        'Issue Tracker'
      ),
      React.createElement(IssueFilter, null),
      React.createElement('hr', null),
      React.createElement(IssueTable, { issues: issues }),
      '   //inside ',
      ' any js obj. or expression can be passed for strin we can use " "',
      React.createElement('hr', null),
      React.createElement(IssueAdd, null),
      'v',
      React.createElement('hr', null)
    );
  }
}

ReactDOM.render(React.createElement(IssueList, null), contentNode);