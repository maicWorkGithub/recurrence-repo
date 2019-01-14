import React, { Component, Fragment } from 'react';
import { Responsive, Title } from 'react-admin';

import Welcome from './Welcome';
import MonthlyRevenue from './MonthlyRevenue';
import NbNewOrders from './NbNewOrders';
import PendingOrders from './PendingOrders';
import PendingReviews from './PendingReviews';
import NewCustomers from './NewCustomers';

const styles = {
    flex: { display: 'flex' },
    flexColumn: { display: 'flex', flexDirection: 'column' },
    leftCol: { flex: 1, marginRight: '1em' },
    rightCol: { flex: 1, marginLeft: '1em' },
    singleCol: { marginTop: '2em', marginBottom: '2em' },
};

class Index extends Component {
    state = {};
    render() {
        const {
            nbNewCustomers,
            nbNewOrders,
            nbPendingReviews,
            newCustomers,
            pendingOrders,
            pendingOrdersCustomers,
            pendingReviews,
            pendingReviewsCustomers,
            revenue,
        } = this.state;
        return (
            <Fragment>
                <Title title="Posters Galore Admin" />
                <Responsive
                    xsmall={
                        <div>
                            <div style={styles.flexColumn}>
                                <div style={{ marginBottom: '2em' }}>
                                    <Welcome />
                                </div>
                                <div style={styles.flex}>
                                    <MonthlyRevenue value={revenue} />
                                    <NbNewOrders value={nbNewOrders} />
                                </div>
                                <div style={styles.singleCol}>
                                    <PendingOrders
                                        orders={pendingOrders}
                                        customers={pendingOrdersCustomers}
                                    />
                                </div>
                            </div>
                        </div>
                    }
                    small={
                        <div style={styles.flexColumn}>
                            <div style={styles.singleCol}>
                                <Welcome />
                            </div>
                            <div style={styles.flex}>
                                <MonthlyRevenue value={revenue} />
                                <NbNewOrders value={nbNewOrders} />
                            </div>
                            <div style={styles.singleCol}>
                                <PendingOrders
                                    orders={pendingOrders}
                                    customers={pendingOrdersCustomers}
                                />
                            </div>
                        </div>
                    }
                    medium={
                        <div style={styles.flex}>
                            <div style={styles.leftCol}>
                                <div style={styles.flex}>
                                    <MonthlyRevenue value={revenue} />
                                    <NbNewOrders value={nbNewOrders} />
                                </div>
                                <div style={styles.singleCol}>
                                    <Welcome />
                                </div>
                                <div style={styles.singleCol}>
                                    <PendingOrders
                                        orders={pendingOrders}
                                        customers={pendingOrdersCustomers}
                                    />
                                </div>
                            </div>
                            <div style={styles.rightCol}>
                                <div style={styles.flex}>
                                    <PendingReviews
                                        nb={nbPendingReviews}
                                        reviews={pendingReviews}
                                        customers={pendingReviewsCustomers}
                                    />
                                    <NewCustomers
                                        nb={nbNewCustomers}
                                        visitors={newCustomers}
                                    />
                                </div>
                            </div>
                        </div>
                    }
                />
            </Fragment>
        );
    }
}

export default Index;
