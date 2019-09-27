import React from "react";

export default props => {

  if (props.credits) {
    return (
      <div className={`col-md-${props.size}`}>
        <div className="form-group">
          <label>{props.label}</label>
          <select
            {...props.input}
            className="form-control selectpicker"
            data-style="btn btn-link"
          >
            <option value="RECEBIDO">RECEBIDO</option>
            <option value="PENDENTE">PENDENTE</option>
            <option value="AGENDADO">AGENDADO</option>
          </select>
        </div>
      </div>
    );
  } else {
    return (
      <div className={`col-md-${props.size}`}>
      <div className="form-group">
        <label>{props.label}</label>
        <select
          {...props.input}
          className="form-control selectpicker"
          data-style="btn btn-link"
        >
        <option value="PAGO">PAGO</option>
        <option value="PENDENTE">PENDENTE</option>
        <option value="AGENDADO">AGENDADO</option>
        </select>
      </div>
    </div>
    );
  }
};
