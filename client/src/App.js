import React from 'react';


const issuePreview = (issue) => (
  <li>{issue.id} - {issue.description}</li>
)

const testIssue = {description: "a test issue"}

const App = () => (
<div>
  {issuePreview()}
</div>
)

export default App;
