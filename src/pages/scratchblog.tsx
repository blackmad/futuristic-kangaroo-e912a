import { graphql, PageProps } from "gatsby";
import * as React from "react";
import Layout from "../components/layout";

// Please note that you can use https://github.com/dotansimha/graphql-code-generator
// to generate all types from graphQL schema
interface IndexPageProps extends PageProps {
  data: {
    allTumblrPost: {
      edges: {
        node: {
          id: string;
          type: string;
          body?: any;
          photos?: any;
        };
      }[];
    };
  };
}

export const pageQuery = graphql`
  query IndexQuery {
    allTumblrPost {
      edges {
        node {
          id
          type
          date
          body
        }
      }
    }
  }
`;

export default class IndexPage extends React.Component<IndexPageProps> {
  readonly hello = `Hello`;
  public render() {
    const { edges } = this.props.data.allTumblrPost;
    console.log(edges);
    return (
      <Layout>
        <h1>{this.hello} TypeScript world!</h1>
        {edges.map((edge) => {
          return <div dangerouslySetInnerHTML={{ __html: edge.node.body }} />;
        })}
      </Layout>
    );
  }
}
