import Markdown from 'react-markdown'
import { useState } from 'react'
import styles from '../styles/markdown.module.css'

const MarkdownEditor = () => {
    const [content, setContent] = useState('# Hi, *Pluto*!')

    return (
        <div className={styles['markdown-container']}>
            <div className={styles.editor}>
                <textarea 
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    className={styles['markdown-input']}
                    rows={10}
                />
            </div>
            <div className={`${styles.preview} ${styles['markdown-content']}`}>
                <Markdown>{content}</Markdown>
            </div>
        </div>
    )
}

export default MarkdownEditor;