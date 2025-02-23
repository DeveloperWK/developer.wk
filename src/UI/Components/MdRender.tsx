import ReactMarkdown, { Components } from "react-markdown";
import CodeBlockWithCopy from "./CodeBlockWithCopy";

interface MdRenderProps {
  children: string; // Markdown content as a string
}

const MdRender: React.FC<MdRenderProps> = ({ children }) => {
  const components: Components = {
    // Custom rendering for code blocks
    code({
      inline,
      className,
      children,
      ...props
    }: React.HTMLAttributes<HTMLElement> & { inline?: boolean }) {
      const match = /language-(\w+)/.exec(className || "");
      const language = match?.[1] || ""; // Extract language from className
      if (!inline && language) {
        return (
          <CodeBlockWithCopy
            language={language}
            code={String(children).replace(/\n$/, "")} // Remove trailing newline
          />
        );
      }
      return (
        <code className={className} {...props}>
          {children}
        </code>
      );
    },

    // Render unordered lists with disc bullets
    ul({ children, ...props }) {
      return (
        <ul
          style={{
            listStyleType: "disc", // Bullet points
            paddingLeft: "20px", // Indentation for nested lists
            margin: "10px 0", // Add spacing around the list
          }}
          {...props}
        >
          {children}
        </ul>
      );
    },

    // Render ordered lists with decimal numbers
    ol({ children, ...props }) {
      return (
        <ol
          style={{
            listStyleType: "decimal", // Numbers (1, 2, 3)
            paddingLeft: "20px", // Indentation for nested lists
            margin: "10px 0", // Add spacing around the list
          }}
          {...props}
        >
          {children}
        </ol>
      );
    },

    // Render list items
    li({ children, ...props }) {
      return (
        <li
          style={{
            margin: "5px 0", // Add spacing between list items
          }}
          {...props}
        >
          {children}
        </li>
      );
    },

    // Render paragraphs
    p({ children, ...props }) {
      return (
        <p
          style={{
            margin: "10px 0", // Add spacing between paragraphs
          }}
          {...props}
        >
          {children}
        </p>
      );
    },

    // Render headings
    h1({ children, ...props }) {
      return (
        <h1 style={{ fontSize: "2rem", margin: "20px 0" }} {...props}>
          {children}
        </h1>
      );
    },
    h2({ children, ...props }) {
      return (
        <h2 style={{ fontSize: "1.75rem", margin: "18px 0" }} {...props}>
          {children}
        </h2>
      );
    },
    h3({ children, ...props }) {
      return (
        <h3 style={{ fontSize: "1.5rem", margin: "16px 0" }} {...props}>
          {children}
        </h3>
      );
    },
    h4({ children, ...props }) {
      return (
        <h4 style={{ fontSize: "1.25rem", margin: "14px 0" }} {...props}>
          {children}
        </h4>
      );
    },
    h5({ children, ...props }) {
      return (
        <h5 style={{ fontSize: "1rem", margin: "12px 0" }} {...props}>
          {children}
        </h5>
      );
    },
    h6({ children, ...props }) {
      return (
        <h6 style={{ fontSize: "0.875rem", margin: "10px 0" }} {...props}>
          {children}
        </h6>
      );
    },
  };

  return <ReactMarkdown components={components}>{children}</ReactMarkdown>;
};

export default MdRender;
