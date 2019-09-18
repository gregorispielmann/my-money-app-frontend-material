import React from 'react';
import CardDash from '../CardDash';
import Content from '../../Content'

export default ({credit, debit}) => (
    
    <React.Fragment>
        <Content>
            <CardDash icon="account_balance" coloricon="warning" title={credit - debit} unity="R$ " category="Total Consolidado"></CardDash>
            <CardDash icon="attach_money" coloricon="primary" title={credit} unity="R$ " category="Créditos"></CardDash>
            <CardDash icon="credit_card" coloricon="danger" title={debit} unity="- R$ " category="Débitos"></CardDash>
        </Content>
    </React.Fragment>

)