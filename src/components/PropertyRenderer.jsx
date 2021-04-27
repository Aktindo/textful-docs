import React from "react";
import Head from "@docusaurus/Head";
import formatterData from "@site/static/classes/formatter.js";
import SyntaxHighlighter from "react-syntax-highlighter";
import { vs2015 } from "react-syntax-highlighter/dist/esm/styles/hljs";

export const PropertyRenderer = (props) => {
  if (props.renderClassName === "formatter") {
    return (
      <div className="property-info">
        <Head>
          <link
            rel="stylesheet"
            href="//cdnjs.cloudflare.com/ajax/libs/highlight.js/10.7.2/styles/default.min.css"
          />
        </Head>
        {props.renderMethods &&
          formatterData.map(
            (method) =>
              method.isMethod && (
                <div className="property-info__table" id={method.key}>
                  <h3>
                    <a
                      href={"#" + method.key}
                      className="property-info__property-name"
                    >
                      <code>
                        .{method.name}(
                        {method.parameters
                          .map((param) => param.name)
                          .join(", ")}
                        )
                      </code>
                    </a>
                  </h3>
                  <blockquote className="property-blockquote">
                    <p>{method.description}</p>
                    {method.parameters && method.parameters.length && (
                      <table>
                        <tr>
                          <th>Parameter</th>
                          <th>Type</th>
                          <th>Optional</th>
                          <th>Default</th>
                          <th>Description</th>
                        </tr>
                        {method.parameters.map((parameter) => (
                          <tr>
                            <td>{parameter.name}</td>
                            <td>
                              <strong>{renderTypeLink(parameter.type)}</strong>
                            </td>
                            <td>
                              {parameter.optional ? (
                                <i className="fas fa-check"></i>
                              ) : (
                                <i className="fas fa-times"></i>
                              )}
                            </td>
                            <td>
                              {parameter.default ? (
                                <code>{parameter.default}</code>
                              ) : (
                                <em>None</em>
                              )}
                            </td>
                            <td>{parameter.description}</td>
                          </tr>
                        ))}
                      </table>
                    )}
                    <strong>Returns: </strong>
                    <strong>{renderTypeLink(method.returns)}</strong>
                    {method.examples &&
                      method.examples.length &&
                      method.examples.map((example) => (
                        <SyntaxHighlighter language="javascript" style={vs2015}>
                          {example}
                        </SyntaxHighlighter>
                      ))}
                  </blockquote>
                </div>
              )
          )}
        {!props.renderMethods &&
          formatterData.map(
            (property) =>
              !property.isMethod && (
                <div className="property-info__table" id={property.key}>
                  <h3>
                    <a
                      href={"#" + property.key}
                      className="property-info__property-name"
                    >
                      <code>.{property.name}</code>
                    </a>
                  </h3>
                  <blockquote className="property-blockquote">
                    <p>{property.description}</p>
                    <strong>Returns: </strong>
                    <strong>{renderTypeLink(property.returns)}</strong>
                  </blockquote>
                </div>
              )
          )}
      </div>
    );
  }
};

export function renderTypeLink(str) {
  switch (str) {
    case "string":
      return (
        <a
          target="_blank"
          href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String"
        >
          string
        </a>
      );
    case "number":
      return (
        <a
          target="_blank"
          href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number"
        >
          number
        </a>
      );
    case "object":
      return (
        <a
          target="_blank"
          href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object"
        >
          number
        </a>
      );
    default:
      return "Unknown";
  }
}
