import React from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { solarizedDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';

interface CodeBlockProps {
    codeString: string;
    language?: string;
}

const CodeBlock: React.FC<CodeBlockProps> = ({ codeString, language }) => {
    return (
        <div style={{ position: 'relative' }}>
            <CopyToClipboard text={codeString}>
                <button style={{
                       position: 'absolute',
                       right: 10,
                       top: 10,
                       zIndex: 1,
                       backgroundColor: '#4CAF50',
                       color: 'white',
                       border: 'none',
                       borderRadius: 5,
                       cursor: 'pointer',
                       padding: '5px 10px',
                }}>
                    Copy
                </button>
            </CopyToClipboard>
            <SyntaxHighlighter language={language} style={solarizedDark}>
                {codeString}
            </SyntaxHighlighter>
        </div>
    );
};

export default CodeBlock;