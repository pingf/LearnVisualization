var React = require('react');
var ReactDOM = require('react-dom');
var words = ['world', 'js', 'react', 'webpack'];

ReactDOM.render(
    <div>
        {
            words.map(function (word) {
                return <div>Hello, {word}!</div>
            })
        }
    </div>,
    document.getElementById('demo')
);