import React from "react";
import formatterData from "@site/static/classes/formatter";

export const PropertyAnchorRenderer = (props) => {
  if (props.renderClassName === "formatter") {
    return (
      <div className="col col--6">
        <h4>{props.renderMethods ? "Methods" : "Properties"}</h4>
        <blockquote className="property-blockquote">
          {props.renderMethods &&
            formatterData.map(
              (method) =>
                method.isMethod && (
                  <li>
                    <a href={"#" + method.key}>{method.name}</a>
                  </li>
                )
            )}
          {!props.renderMethods &&
            formatterData.map(
              (property) =>
                !property.isMethod && (
                  <li>
                    <a href={"#" + property.key}>{property.name}</a>
                  </li>
                )
            )}
        </blockquote>
      </div>
    );
  }
};
