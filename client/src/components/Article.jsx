import { useEffect, useState } from 'react'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

export default function Article({fileName}) {
    const [markdown, setMarkdown] = useState('')

    useEffect(() => {
        fetch(`/interests/${fileName}.md?raw`)
            .then(res => res.text())
            .then(text => setMarkdown(text))
            .catch((error) => {
                console.error('Error loading markdown file:', error)
            })
    }, [fileName])

    return(
        <div className="text-justify">
            <ReactMarkdown
                remarkPlugins={[remarkGfm]}
                components={{
                    h1: ({node, ...props}) => <h1 className="text-3xl font-bold mt-5" {...props} />,
                    h2: ({node, ...props}) => <h2 className="text-2xl font-bold mt-5" {...props} />,
                    h3: ({node, ...props}) => <h3 className="text-xl font-bold mt-5" {...props} />,
                    p: ({node, ...props}) => <p className="text-lg mb-3" {...props} />,
                }}
            >
                {markdown}
            </ReactMarkdown>
        </div>
    )
}