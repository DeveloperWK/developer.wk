import ReactMarkdown, { Components } from "react-markdown";
import CodeBlockWithCopy from './CodeBlockWithCopy';


interface MdRenderProps {
  children: string; // Markdown content as a string
}

const MdRender: React.FC<MdRenderProps> = ({ children }) => {
  const components: Components = {
    // Custom rendering for code blocks
    code({ inline, className, children, ...props }: React.HTMLAttributes<HTMLElement> & { inline?: boolean }) {
      const match = /language-(\w+)/.exec(className || "");
      const language = match?.[1] || ""; // Extract language from className

      if (!inline && language) {
        // Render the client-side CodeBlockWithCopy component
        return (
          <CodeBlockWithCopy
            language={language}
            code={String(children).replace(/\n$/, "")} // Remove trailing newline
          />
        );
      }

      // Fallback for inline code or non-language code blocks
      return (
        <code className={className} {...props}>
          {children}
        </code>
      );
    },
  };

  return <ReactMarkdown components={components}>{children}</ReactMarkdown>;
};

export default MdRender;
