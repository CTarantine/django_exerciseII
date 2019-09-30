import React from 'react';
import './App.css'

// each function is a component
//if only returning jsx code use (), if "work being done" is {}
//ex const a = () => () vs const a = () => { variables declared and functions called }

// takes in the issue and displays its id and description
const issuePreview = (issue) => (
  <li>{issue.id} - {issue.description}</li>
)

// .map creates an array of the issue previews
const issueList = (issues) => (
  <ul>
    {issues.map(issuePreview)}
  </ul>
)

const userIssueList = (user) => (
  <div>
    {user.email}
    {issueList(user.issues)}
  </div>
)

const orderByCreatedOn = (issue1, issue2) => {
  let date1 = new Date(issue1.createdOn)
  let date2 = new Date(issue2.createdOn)

  return Math.sign((date2.getTime()) - (date1.getTime()))
}



//show 5 most recent issues in order of creation
const recentIssues = (allIssues) => (
  issueList(allIssues.sort(orderByCreatedOn).slice(0, 5))
)

const issueDetails = (issue) => (
  <div>
    {issue.id} - {issue.description}
    <button>{issue.status ? "close" : "open"}</button>
  </div>
)


const userPreview = (user) => (
  <option value={user.id}>{user.username}</option>
)

const userList = (users) => (
  <select>
    {users.map(userPreview)}
  </select>
)

const newUserForm = () => (
  <form>
    <input type="text" value = "" placeholder= "User Name"/>
    <input type ="text" value= "" placeholder="Email"/>
    <input type="submit" value="New User"/>
  </form>
)

// convert new issue form to class component
// (changed from const newIssueForm = ....)
// 1
class newIssueForm extends React.Component{
// 3
  state = {
  description:""
}
// 5
handleInput = (event) => {
this.setState({description:event.target.value})
}

// 6
handleSubmit = (event) => {
  event.preventDefault()
}

// 2
  render = () => (
    // 6
  <form onSubmit={this.handleSubmit}>
                                          {/* 4 */}
  <input type ="text" name="description" onChange={this.value.input} value={this.state.description} placeholder="Description"/>
  <input type="submit" value="New Issue"/>
  </form>
)
}

//used to check if each component works after it's added
//hard coded sample data
const testUser =
[
  { id: 1,
   email: "I@me.com",
   username:"Me",
   issues:
   [
    { description: "a test issue", id: 1, createdOn: "2019-09-27T15:05:18.180058Z" },
    { description: "a test issue 2", id: 2, createdOn: "2019-09-28T15:05:18.180058Z" }]
}]

const App = () => (
  <div className="container">

    <aside className="sidebar">
      {newUserForm()}
      {newIssueForm()}
      {recentIssues(testUser[0].issues)}
    </aside>

    <article className="mainContent">
      {userList(testUser)}
      {issueDetails(testUser)}
      {userIssueList(testUser[0])}
    </article>
  </div>
)

export default App;
