import React from 'react'

export default props => (

    <React.Fragment>
    <div className="card-body">
        <div className="table-responsive">
            <table className="table">
                <thead className="text-primary">
                    <tr>
                        <th>
                            Descrição
                        </th>
                        <th>
                            Mês
                        </th>
                        <th>
                            Ano
                        </th>
                        <th>
                            Ações
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {props.children}
                </tbody>
            </table>
        <div className="clearfix"></div>
        </div>
    </div>
    </React.Fragment>

)