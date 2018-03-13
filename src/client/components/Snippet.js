import SyntaxHighlighter from 'react-syntax-highlighter/prism';
import { xonokai} from 'react-syntax-highlighter/styles/prism';
import React from 'react'
const Snippet = (props) => {
return (
    <SyntaxHighlighter className = "codey" showLineNumbers={true} wrapLines={true} language={props.language} style={xonokai
    }>{props.codeString}
  </SyntaxHighlighter>)


}

export default Snippet


      // <SyntaxHighlighter
      //         style={this.state.style}
      //         showLineNumbers={this.state.showLineNumbers}
      //         wrapLines={true}
      //         lineProps={(lineNumber) => ({
      //           style: { display: "block", cursor: "pointer" },
      //           onClick() {
      //             alert(`Line Number Clicked: ${lineNumber}`);
      //           }
      //         })}
      //       >
      //         {this.state.code}
      //       </SyntaxHighlighter>
