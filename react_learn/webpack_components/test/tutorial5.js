// tutorial5.js
var React = require('react');
var ReactDOM = require('react-dom');
var Comment = require('./tutorial4');
var CommentList = React.createClass({
    render: function() {
        return (
            <div className="commentList">
                <Comment author="Pete Hunt">This is one comment</Comment>
                <Comment author="Jordan Walke">This is *another* comment</Comment>
            </div>
        );
    }
});
module.exports = CommentList;
