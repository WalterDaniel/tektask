import React from "react";
import {Alert} from "react-bootstrap";

export default ({extra}) => {
    const link = extra;
    return (
        <Alert variant={"primary"}>
            Este es el contenido "{link.slug}" y "{link.value}"
        </Alert>
    );
};
