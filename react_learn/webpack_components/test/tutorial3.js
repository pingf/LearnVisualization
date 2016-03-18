var React = require('react');
var ReactDOM = require('react-dom');
// tutorial3.js
var tut2 = require('./tutorial2');
//var CommentList = tut2.CommentList
var CommentForm = tut2.CommentForm;
var CommentList = require('./tutorial5');

var CommentBox = React.createClass({
    render: function() {
        return (
            <div className="commentBox">
                <h1>Comments</h1>
                <CommentList />
                <CommentForm />
            </div>
        );
    }
});

ReactDOM.render(
    <CommentBox />,
    document.getElementById('content')
);
